import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { processLoan } from '../redux/bankSlice';
import logoImg from '../assets/logo.png';

const Loan = () => {
    const [amount, setAmount] = useState(15000);
    const [duration, setDuration] = useState(12);
    const [income, setIncome] = useState('');
    const [selectedRate, setSelectedRate] = useState(0.12);
    const [recommendedRate, setRecommendedRate] = useState(0.12);
    const [currency, setCurrency] = useState({ code: 'USD', sym: '$' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currencies = [
        { code: 'USD', sym: '$' },
        { code: 'EUR', sym: '€' },
        { code: 'AZN', sym: '₼' }
    ];

    const rates = [
        { value: 0.045, label: '4.5%' },
        { value: 0.065, label: '6.5%' },
        { value: 0.085, label: '8.5%' },
        { value: 0.120, label: '12.0%' }
    ];

    const handleIncomeChange = (e) => {
        const val = Number(e.target.value);
        setIncome(val);

        let newRate = 0.12;
        if (val >= 100000) newRate = 0.045;
        else if (val >= 50000) newRate = 0.065;
        else if (val >= 20000) newRate = 0.085;

        setRecommendedRate(newRate);
        setSelectedRate(newRate);
    };

    const totalInterest = amount * selectedRate * (duration / 12);
    const totalRepayment = amount + totalInterest;
    const monthlyPayment = totalRepayment / duration;

    const handleApply = async (e) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            await dispatch(processLoan({
                amount: parseFloat(amount),
                interestRate: selectedRate,
                termMonths: duration,
                currencyType: currency.code
            })).unwrap();

            setIsSubmitted(true);
            setTimeout(() => navigate('/dashboard'), 3000);
        } catch (error) {
            setErrorMsg(error || "Kredit əməliyyatında xəta baş verdi");
        }
    };

    return (
        <div className="min-h-screen bg-bankPrimary flex flex-col font-sans relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-bankAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

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

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8 flex flex-col items-center relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-bankLight text-3xl md:text-5xl font-black tracking-wide mb-3">Private Credit Line</h1>
                    <p className="text-bankLight/60 text-sm md:text-base max-w-xl mx-auto">Tailored liquidity with dynamic rates based on your financial profile.</p>
                </div>

                <div className="w-full bg-bankCard border border-bankAccent/20 rounded-3xl p-8 md:p-12 shadow-2xl relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-bankAccent/10 rounded-full blur-[60px] pointer-events-none"></div>

                    {isSubmitted ? (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 rounded-full bg-bankAccent/20 flex items-center justify-center mx-auto mb-6">
                                <span className="text-bankAccent text-4xl">✓</span>
                            </div>
                            <h4 className="text-bankLight text-2xl font-bold mb-3">Credit Approved</h4>
                            <p className="text-bankLight/60 text-sm max-w-md mx-auto">Your funds of <span className="text-bankAccent font-bold">{currency.sym}{amount.toLocaleString()}</span> have been instantly credited to your account. Redirecting...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleApply} className="flex flex-col gap-8">
                            {errorMsg && (
                                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-4 rounded-xl text-center font-semibold">
                                    {errorMsg}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-bankPrimary/50 p-6 rounded-2xl border border-bankAccent/10">
                                <div>
                                    <label className="text-bankLight/80 text-xs font-semibold block mb-3 uppercase tracking-wider">Select Currency</label>
                                    <div className="flex gap-2">
                                        {currencies.map(c => (
                                            <button
                                                key={c.code} type="button" onClick={() => setCurrency(c)}
                                                className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${currency.code === c.code ? 'bg-bankAccent text-bankPrimary border-bankAccent' : 'bg-transparent text-bankLight/60 border-bankAccent/20 hover:border-bankAccent/50'}`}
                                            >
                                                {c.code}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="text-bankLight/80 text-xs font-semibold block mb-3 uppercase tracking-wider">Annual Income ({currency.sym})</label>
                                    <input
                                        type="number" required placeholder="e.g. 50000"
                                        value={income} onChange={handleIncomeChange}
                                        className="w-full bg-bankCard border border-bankAccent/20 rounded-lg px-4 py-2 text-bankLight text-sm focus:outline-none focus:border-bankAccent font-mono"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-bankLight/80 text-sm font-bold uppercase tracking-wider block mb-4">Interest Rate (APR)</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {rates.map(rate => (
                                        <div
                                            key={rate.value} onClick={() => setSelectedRate(rate.value)}
                                            className={`cursor-pointer p-4 rounded-xl border transition-all text-center relative ${selectedRate === rate.value ? 'bg-bankAccent text-bankPrimary border-bankAccent shadow-lg' : 'bg-bankPrimary text-bankLight/80 border-bankAccent/20 hover:border-bankAccent/50'}`}
                                        >
                                            {recommendedRate === rate.value && (
                                                <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${selectedRate === rate.value ? 'bg-bankPrimary text-bankAccent' : 'bg-bankAccent text-bankPrimary'}`}>
                                                    Suggested
                                                </span>
                                            )}
                                            <span className="text-lg font-black">{rate.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-bankLight/80 text-sm font-bold uppercase tracking-wider">Requested Amount</label>
                                    <span className="text-bankAccent text-3xl font-black">{currency.sym}{amount.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range" min="1000" max="100000" step="1000"
                                    value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-bankPrimary rounded-lg appearance-none cursor-pointer accent-bankAccent"
                                />
                                <div className="flex justify-between text-bankLight/40 text-xs mt-2 font-mono">
                                    <span>{currency.sym}1,000</span>
                                    <span>{currency.sym}100,000</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-bankLight/80 text-sm font-bold uppercase tracking-wider block mb-4">Duration</label>
                                <div className="flex gap-4">
                                    {[6, 12, 24, 36].map((months) => (
                                        <button
                                            key={months} type="button" onClick={() => setDuration(months)}
                                            className={`flex-1 py-3 rounded-xl text-sm font-bold border transition-all ${duration === months ? 'bg-bankAccent text-bankPrimary border-bankAccent' : 'bg-bankPrimary text-bankLight/60 border-bankAccent/20 hover:border-bankAccent/50'}`}
                                        >
                                            {months} Mo
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-bankPrimary to-black border border-bankAccent/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6">
                                <div>
                                    <p className="text-bankLight/50 text-xs uppercase tracking-wider mb-1">Monthly Payment</p>
                                    <p className="text-bankLight text-2xl font-mono font-bold">{currency.sym}{monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                </div>
                                <div className="hidden md:block w-px bg-bankAccent/10"></div>
                                <div>
                                    <p className="text-bankLight/50 text-xs uppercase tracking-wider mb-1">Total Repayment</p>
                                    <p className="text-bankLight text-2xl font-mono font-bold">{currency.sym}{totalRepayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-bankAccent text-bankPrimary py-4 rounded-xl font-bold text-base hover:opacity-90 hover:shadow-xl hover:shadow-bankAccent/20 transition-all uppercase tracking-wide mt-2"
                            >
                                Accept & Receive Funds
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Loan;