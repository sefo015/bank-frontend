import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboardData } from '../redux/bankSlice';
import logoImg from '../assets/logo.png';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { user, balance, transactions } = useSelector((state) => state.bank);

    useEffect(() => {
        dispatch(fetchDashboardData());
    }, [dispatch]);

    const nameParts = user ? user.split(' ') : ['Client'];
    const initials = nameParts.length > 1
        ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
        : (nameParts[0].substring(0, 2).toUpperCase() || 'CB');

    return (
        <div className="min-h-screen bg-bankPrimary flex flex-col font-sans relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bankAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <header className="bg-bankCard/50 border-b border-bankAccent/20 py-4 px-6 sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg border border-bankAccent/30 flex items-center justify-center bg-bankPrimary p-1">
                            <img src={logoImg} alt="SefoBank" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-bankLight text-sm font-bold tracking-wide">BS BANK</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-bankLight/80 text-xs font-semibold hidden md:block">Welcome, {user}</span>
                        <div className="w-8 h-8 rounded-full bg-bankAccent text-bankPrimary flex items-center justify-center text-xs font-black shadow-lg shadow-bankAccent/20">
                            {initials}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10 flex flex-col gap-10 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/order-card" className="flex items-center justify-center text-center bg-bankCard border border-bankAccent/30 text-bankAccent px-4 py-4 rounded-2xl text-xs font-bold hover:bg-bankAccent hover:text-bankPrimary transition-all shadow-xl">💳 Kart Sifarişi</Link>
                    <Link to="/transfer" className="flex items-center justify-center text-center bg-bankCard border border-bankAccent/30 text-bankAccent px-4 py-4 rounded-2xl text-xs font-bold hover:bg-bankAccent hover:text-bankPrimary transition-all shadow-xl">💸 Pul Köçür</Link>
                    <Link to="/loan" className="flex items-center justify-center text-center bg-bankCard border border-bankAccent/30 text-bankAccent px-4 py-4 rounded-2xl text-xs font-bold hover:bg-bankAccent hover:text-bankPrimary transition-all shadow-xl">🏦 Kredit Götür</Link>
                    <Link to="/invest" className="flex items-center justify-center text-center bg-bankCard border border-bankAccent/30 text-bankAccent px-4 py-4 rounded-2xl text-xs font-bold hover:bg-bankAccent hover:text-bankPrimary transition-all shadow-xl">📈 İnvestisiya</Link>
                </div>

                <div className="bg-gradient-to-r from-bankCard to-bankPrimary border border-bankAccent/20 p-10 rounded-3xl shadow-2xl flex justify-between items-center relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-bankAccent/10 rounded-full blur-[50px] pointer-events-none"></div>
                    <div className="relative z-10">
                        <p className="text-bankLight/60 text-xs font-bold uppercase tracking-wider mb-2">Total Balance</p>
                        <h2 className="text-bankAccent text-4xl md:text-6xl font-black tracking-tight">${(balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                        <p className="text-bankLight/40 text-sm mt-2">≈ {((balance || 0) * 1.7).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AZN</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-bankLight text-lg font-bold mb-6">Recent Transactions</h3>
                    <div className="bg-bankCard border border-bankAccent/20 rounded-3xl overflow-hidden shadow-xl min-h-[200px]">
                        {!transactions || transactions.length === 0 ? (
                            <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
                                <span className="text-4xl">🧾</span>
                                <p className="text-bankLight/50 text-sm">No recent transactions. Transfer funds to see history.</p>
                            </div>
                        ) : (
                            transactions.map((trx, idx) => (
                                <div key={trx.id} className={`flex justify-between items-center p-6 ${idx !== transactions.length - 1 ? 'border-b border-bankAccent/10' : ''} hover:bg-bankPrimary/30 transition-colors cursor-pointer`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${trx.type === 'INCOME' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-bankLight/5 text-bankLight'}`}>
                                            {trx.type === 'INCOME' ? '↓' : '↑'}
                                        </div>
                                        <div>
                                            <p className="text-bankLight text-sm font-bold">{trx.title}</p>
                                            <p className="text-bankLight/50 text-xs mt-1">
                                                {new Date(trx.date).toLocaleDateString('en-GB')}
                                            </p>
                                        </div>
                                    </div>
                                    <span className={`font-mono text-base font-bold ${trx.type === 'INCOME' ? 'text-emerald-400' : 'text-bankLight'}`}>
                                        {trx.type === 'INCOME' ? '+' : '-'}${trx.amount.toLocaleString()}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;