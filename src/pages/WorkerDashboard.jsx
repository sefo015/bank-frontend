import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logoImg from '../assets/logo.png';

const WorkerDashboard = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [users, setUsers] = useState([]);
    const [loans, setLoans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const workerName = localStorage.getItem('sefobank_worker') || 'Nazim Əliyev';

    const getAuthHeaders = () => {
        const token = localStorage.getItem('sefobank_token');
        return { headers: { Authorization: `Bearer ${token}` } };
    };

    const handleLogout = () => {
        localStorage.removeItem('sefobank_token');
        localStorage.removeItem('sefobank_worker');
        localStorage.removeItem('sefobank_user');
        navigate('/login');
    };

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('https://bank-backend-r1m9.onrender.com/api/worker/customers', getAuthHeaders());
            setUsers(res.data);
        } catch (error) {
            console.error("İstifadəçiləri çəkərkən xəta:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchLoans = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('https://bank-backend-r1m9.onrender.com/api/worker/loans', getAuthHeaders());
            setLoans(res.data);
        } catch (error) {
            console.error("Kreditləri çəkərkən xəta:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === 'users') fetchUsers();
        if (activeTab === 'loans') fetchLoans();
    }, [activeTab]);

    const handleLoanAction = async (loanId, status) => {
        try {
            await axios.post('https://bank-backend-r1m9.onrender.com/api/worker/loan-status', { loanId, status }, getAuthHeaders());
            fetchLoans();
        } catch (error) {
            alert("Status yenilənərkən xəta baş verdi");
        }
    };

    return (
        <div className="min-h-screen bg-bankPrimary flex font-sans">
            <aside className="w-64 bg-bankCard border-r border-bankAccent/20 flex flex-col">
                <div className="p-6 border-b border-bankAccent/10">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-bankAccent flex items-center justify-center p-1">
                            <img src={logoImg} alt="SefoBank" className="w-full h-full object-contain filter invert" />
                        </div>
                        <span className="text-bankLight font-bold tracking-widest text-sm">STAFF PORTAL</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2">
                    <button onClick={() => setActiveTab('users')} className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'users' ? 'bg-bankAccent text-bankPrimary' : 'text-bankLight/70 hover:bg-bankPrimary'}`}>
                        👥 Users Database
                    </button>
                    <button onClick={() => setActiveTab('cards')} className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'cards' ? 'bg-bankAccent text-bankPrimary' : 'text-bankLight/70 hover:bg-bankPrimary'}`}>
                        💳 Card Requests
                    </button>
                    <button onClick={() => setActiveTab('loans')} className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'loans' ? 'bg-bankAccent text-bankPrimary' : 'text-bankLight/70 hover:bg-bankPrimary'}`}>
                        🏦 Loan Applications
                    </button>
                </nav>

                <div className="p-4 border-t border-bankAccent/10">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="w-8 h-8 rounded-full bg-bankPrimary border border-bankAccent/50 flex items-center justify-center text-bankAccent text-xs font-bold">
                            NƏ
                        </div>
                        <div>
                            <p className="text-bankLight text-xs font-bold">{workerName}</p>
                            <p className="text-bankLight/50 text-[10px] uppercase">Senior Manager</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="w-full py-2 text-red-400 text-xs font-bold border border-red-400/20 rounded-lg hover:bg-red-400/10">
                        Secure Logout
                    </button>
                </div>
            </aside>

            <main className="flex-1 p-10 relative overflow-y-auto">
                <div className="absolute top-0 right-0 w-96 h-96 bg-bankAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

                <header className="mb-10 relative z-10">
                    <h1 className="text-bankLight text-3xl font-black capitalize">{activeTab.replace('-', ' ')} Management</h1>
                    <p className="text-bankLight/50 text-sm mt-1">Review and manage client requests from the central database.</p>
                </header>

                <div className="relative z-10 bg-bankCard border border-bankAccent/20 rounded-3xl overflow-hidden shadow-2xl">

                    {isLoading && <div className="p-10 text-center text-bankAccent font-bold">Yüklənir...</div>}

                    {!isLoading && activeTab === 'users' && (
                        <table className="w-full text-left text-sm text-bankLight">
                            <thead className="bg-bankPrimary/50 border-b border-bankAccent/10 text-bankLight/60 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Client ID</th>
                                    <th className="px-6 py-4">Full Name</th>
                                    <th className="px-6 py-4">Email Address</th>
                                    <th className="px-6 py-4">Total Wealth</th>
                                    <th className="px-6 py-4 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="border-b border-bankAccent/5 hover:bg-bankPrimary/30">
                                        <td className="px-6 py-4 font-mono text-bankAccent">{user.idNumber}</td>
                                        <td className="px-6 py-4 font-bold">{user.firstName} {user.lastName}</td>
                                        <td className="px-6 py-4 text-bankLight/70">{user.email}</td>
                                        <td className="px-6 py-4 font-mono">${user.balance.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-right text-emerald-400 text-xs font-bold">
                                            {user.isActive ? 'Active' : 'Inactive'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {!isLoading && activeTab === 'cards' && (
                        <div className="p-10 text-center text-bankLight/50">
                            Hələlik yeni kart sifarişi yoxdur.
                        </div>
                    )}

                    {!isLoading && activeTab === 'loans' && (
                        <table className="w-full text-left text-sm text-bankLight">
                            <thead className="bg-bankPrimary/50 border-b border-bankAccent/10 text-bankLight/60 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Client Name</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Duration</th>
                                    <th className="px-6 py-4">APR Rate</th>
                                    <th className="px-6 py-4 text-right">Decision</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loans.map(loan => (
                                    <tr key={loan.id} className="border-b border-bankAccent/5 hover:bg-bankPrimary/30">
                                        <td className="px-6 py-4 font-bold">{loan.customer.firstName} {loan.customer.lastName}</td>
                                        <td className="px-6 py-4 font-mono text-emerald-400 font-bold">{loan.amount.toLocaleString()} {loan.currencyType}</td>
                                        <td className="px-6 py-4 text-bankLight/70">{loan.termMonths} Months</td>
                                        <td className="px-6 py-4 text-bankAccent">{loan.interestRate}%</td>
                                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                                            {loan.status === 1 ? (
                                                <>
                                                    <button onClick={() => handleLoanAction(loan.id, 2)} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded hover:bg-emerald-500/30">Approve</button>
                                                    <button onClick={() => handleLoanAction(loan.id, 3)} className="bg-red-500/20 text-red-400 px-3 py-1 rounded hover:bg-red-500/30">Reject</button>
                                                </>
                                            ) : loan.status === 2 ? (
                                                <span className="text-emerald-400 font-bold text-xs uppercase">Approved</span>
                                            ) : (
                                                <span className="text-red-400 font-bold text-xs uppercase">Rejected</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </div>
    );
};

export default WorkerDashboard;