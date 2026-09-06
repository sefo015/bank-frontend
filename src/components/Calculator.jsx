import React, { useState } from 'react';

const Calculator = () => {
    const [currency, setCurrency] = useState('USD');
    const [portfolioType, setPortfolioType] = useState('fixed');
    const [initialDeposit, setInitialDeposit] = useState(50000);
    const [monthlyContribution, setMonthlyContribution] = useState(1000);
    const [years, setYears] = useState(3);

    const currencySymbols = {
        USD: '$',
        EUR: '€',
        AZN: '₼',
        TRY: '₺'
    };

    const returnRates = {
        fixed: 0.085,
        wealth: 0.135,
        crypto: 0.220
    };

    const rate = returnRates[portfolioType];
    const symbol = currencySymbols[currency];

    const months = years * 12;
    const monthlyRate = rate / 12;

    const futureValueInitial = initialDeposit * Math.pow(1 + monthlyRate, months);
    const futureValueMonthly = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const totalValue = Math.round(futureValueInitial + futureValueMonthly);
    const totalInvested = initialDeposit + (monthlyContribution * months);
    const totalProfit = totalValue - totalInvested;

    return (
        <section id="calculator" className="bg-bankPrimary py-24 px-6 border-t border-bankAccent/10">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <span className="text-bankAccent text-xs font-bold tracking-[4px] uppercase border border-bankAccent/30 px-4 py-1.5 rounded-full bg-bankAccent/5">
                        [ CAPITAL GROWTH ]
                    </span>
                    <h2 className="text-bankLight text-3xl md:text-5xl font-extrabold mt-4">
                        Wealth Yield Calculator
                    </h2>
                    <p className="text-bankLight/60 text-sm max-w-xl mx-auto mt-2">
                        Simulate your portfolio performance with SefoBank's exclusive investment strategies.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-7 bg-bankCard p-8 rounded-3xl border border-bankAccent/20 shadow-2xl flex flex-col gap-8">

                        <div className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-bankAccent/10">

                            <div>
                                <label className="text-bankLight/70 text-xs font-bold uppercase tracking-wider block mb-2">Currency</label>
                                <div className="flex gap-2">
                                    {['USD', 'EUR', 'AZN', 'TRY'].map((cur) => (
                                        <button
                                            key={cur}
                                            onClick={() => setCurrency(cur)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === cur
                                                ? 'bg-bankAccent text-bankPrimary'
                                                : 'bg-bankPrimary text-bankLight/70 hover:text-bankAccent border border-bankAccent/20'
                                                }`}
                                        >
                                            {cur}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-bankLight/70 text-xs font-bold uppercase tracking-wider block mb-2">Strategy</label>
                                <div className="flex gap-2">
                                    {[
                                        { id: 'fixed', label: 'Fixed 8.5%' },
                                        { id: 'wealth', label: 'Wealth 13.5%' },
                                        { id: 'crypto', label: 'Alpha 22%' }
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setPortfolioType(tab.id)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${portfolioType === tab.id
                                                ? 'bg-bankAccent text-bankPrimary'
                                                : 'bg-bankPrimary text-bankLight/70 hover:text-bankAccent border border-bankAccent/20'
                                                }`}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <span className="text-bankLight text-sm font-semibold">Initial Investment</span>
                                <span className="text-bankAccent text-xl font-bold">{symbol}{initialDeposit.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="5000"
                                max="500000"
                                step="5000"
                                value={initialDeposit}
                                onChange={(e) => setInitialDeposit(Number(e.target.value))}
                                className="w-full accent-bankAccent bg-bankPrimary h-2 rounded-lg cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <span className="text-bankLight text-sm font-semibold">Monthly Contribution</span>
                                <span className="text-bankAccent text-xl font-bold">{symbol}{monthlyContribution.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="20000"
                                step="500"
                                value={monthlyContribution}
                                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                                className="w-full accent-bankAccent bg-bankPrimary h-2 rounded-lg cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="text-bankLight text-sm font-semibold">Investment Horizon</span>
                            <div className="grid grid-cols-4 gap-3">
                                {[1, 3, 5, 10].map((y) => (
                                    <button
                                        key={y}
                                        onClick={() => setYears(y)}
                                        className={`py-3 rounded-xl text-xs font-bold transition-all border ${years === y
                                            ? 'bg-bankAccent text-bankPrimary border-bankAccent'
                                            : 'bg-bankPrimary text-bankLight/80 border-bankAccent/20 hover:border-bankAccent'
                                            }`}
                                    >
                                        {y} {y === 1 ? 'Year' : 'Years'}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-5 bg-bankCard p-8 rounded-3xl border border-bankAccent/30 shadow-2xl flex flex-col justify-between gap-8 relative overflow-hidden">

                        <div className="flex flex-col gap-6 relative z-10">
                            <span className="text-bankLight/60 text-xs font-bold uppercase tracking-wider">Projected Future Value</span>

                            <div>
                                <h3 className="text-bankAccent text-4xl md:text-5xl font-black tracking-tight">
                                    {symbol}{totalValue.toLocaleString()}
                                </h3>
                                <p className="text-bankLight/60 text-xs mt-2">
                                    Estimated value after {years} {years === 1 ? 'year' : 'years'} at {(rate * 100).toFixed(1)}% APY
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 pt-6 border-t border-bankAccent/10">
                                <div className="flex justify-between text-xs">
                                    <span className="text-bankLight/70">Total Principal Invested:</span>
                                    <span className="text-bankLight font-bold">{symbol}{totalInvested.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-bankLight/70">Estimated Interest Earned:</span>
                                    <span className="text-emerald-400 font-bold">+{symbol}{totalProfit.toLocaleString()}</span>
                                </div>
                            </div>

                            {totalValue >= 100000 && (
                                <div className="bg-bankPrimary border border-bankAccent/40 p-4 rounded-xl flex items-center gap-3">
                                    <span className="text-xl">👑</span>
                                    <div>
                                        <p className="text-bankAccent text-xs font-bold">VIP Status Unlocked</p>
                                        <p className="text-bankLight/60 text-[11px]">Eligible for Concierge & Metal World Elite Card</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button className="w-full bg-bankAccent text-bankPrimary py-4 rounded-xl font-bold text-sm hover:opacity-90 hover:shadow-xl hover:shadow-bankAccent/20 transition-all duration-300 relative z-10">
                            Lock In This Yield Strategy
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Calculator;