import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { processTransfer } from '../redux/bankSlice';
import InteractiveCard from '../components/InteractiveCard';
import logoImg from '../assets/logo.png';

const Transfer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { balance } = useSelector((state) => state.bank);

    const handleTransfer = async (amount, recipient) => {
        const numAmount = parseFloat(amount);

        if (isNaN(numAmount) || numAmount <= 0) {
            alert("Zəhmət olmasa düzgün məbləğ daxil edin.");
            return;
        }
        if (numAmount > balance) {
            alert("Balansınızda kifayət qədər vəsait yoxdur!");
            return;
        }

        try {
            await dispatch(processTransfer({
                amount: numAmount,
                recipient: recipient || 'Unknown Account'
            })).unwrap();

            alert("Köçürmə uğurla tamamlandı!");
            navigate('/dashboard');
        } catch (error) {
            alert(error || "Köçürmə zamanı sistem xətası baş verdi");
        }
    };

    return (
        <div className="min-h-screen bg-bankPrimary flex flex-col font-sans relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-bankAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <header className="py-6 px-8 relative z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/dashboard" className="text-bankLight/60 hover:text-bankAccent text-sm font-bold flex items-center gap-2 transition-colors">
                        <span>&larr;</span> Back to Dashboard
                    </Link>
                    <div className="w-10 h-10 rounded-xl border border-bankAccent/30 flex items-center justify-center bg-bankCard p-1.5 shadow-lg">
                        <img src={logoImg} alt="SefoBank" className="w-full h-full object-contain" />
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-8 flex flex-col items-center relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-bankLight text-3xl md:text-5xl font-black tracking-wide mb-3">Transfer Funds</h1>
                    <p className="text-bankLight/60 text-sm md:text-base max-w-xl mx-auto">Send money globally with zero hidden fees. Secure and instant transfers.</p>
                </div>

                <div className="w-full">
                    <InteractiveCard onTransfer={handleTransfer} />
                </div>
            </main>
        </div>
    );
};

export default Transfer;