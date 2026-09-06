import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeTransfer } from '../redux/bankSlice';
import logoImg from '../assets/logo.png';

const Invest = () => {
    const [activeTab, setActiveTab] = useState('crypto');
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [amount, setAmount] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { balance } = useSelector((state) => state.bank);

    const assets = {
        crypto: [
            { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 62450.00, change: '+2.4%', color: 'text-orange-400' },
            { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 3420.50, change: '+1.8%', color: 'text-purple-400' },
            { id: 'sol', name: 'Solana', symbol: 'SOL', price: 145.20, change: '-0.5%', color: 'text-teal-400' },
        ],
        stocks: [
            { id: 'aapl', name: 'Apple Inc.', symbol: 'AAPL', price: 185.30, change: '+1.2%', color: 'text-gray-300' },
            { id: 'tsla', name: 'Tesla Inc.', symbol: 'TSLA', price: 210.80, change: '-3.4%', color: 'text-red-400' },
            { id: 'msft', name: 'Microsoft', symbol: 'MSFT', price: 415.50, change: '+0.9%', color: 'text-blue-400' },
        ]
    };

    const handleTrade = (e) => {
        e.preventDefault();
        const tradeAmount = parseFloat(amount);

        if (isNaN(tradeAmount) || tradeAmount <= 0) {
            alert("Məbləği düzgün daxil edin.");
            return;
        }

        if (tradeAmount > balance) {
            alert("Kifayət qədər vəsait yoxdur.");
            return;
        }

        dispatch(makeTransfer({
            amount: tradeAmount,
            recipient: `Bought ${selectedAsset.name} (${selectedAsset.symbol})`
        }));

        alert("Trade successful! Redirecting to dashboard...");
        navigate('/dashboard');
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

            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8 flex flex-col relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-bankLight text-3xl md:text-5xl font-black tracking-wide mb-3">Wealth Trading</h1>
                    <p className="text-bankLight/60 text-sm md:text-base max-w-xl mx-auto">Invest in global markets and digital assets with zero commission fees.</p>
                </div>

                <div className="flex gap-4 mb-8 justify-center">
                    <button
                        onClick={() => { setActiveTab('crypto'); setSelectedAsset(null); }}
                        className={`px-8 py-3 rounded-xl text-sm font-bold border transition-all ${activeTab === 'crypto' ? 'bg-bankAccent text-bankPrimary border-bankAccent shadow-lg' : 'bg-transparent text-bankLight/60 border-bankAccent/30 hover:border-bankAccent'}`}
                    >
                        Crypto
                    </button>
                    <button
                        onClick={() => { setActiveTab('stocks'); setSelectedAsset(null); }}
                        className={`px-8 py-3 rounded-xl text-sm font-bold border transition-all ${activeTab === 'stocks' ? 'bg-bankAccent text-bankPrimary border-bankAccent shadow-lg' : 'bg-transparent text-bankLight/60 border-bankAccent/30 hover:border-bankAccent'}`}
                    >
                        Stocks
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-bankCard border border-bankAccent/20 rounded-3xl p-6 shadow-xl flex flex-col gap-4">
                        <h3 className="text-bankLight/80 text-xs font-bold uppercase tracking-wider mb-2">Market Overview</h3>
                        {assets[activeTab].map(asset => (
                            <div
                                key={asset.id}
                                onClick={() => setSelectedAsset(asset)}
                                className={`flex justify-between items-center p-4 rounded-xl cursor-pointer border transition-all ${selectedAsset?.id === asset.id ? 'bg-bankAccent/10 border-bankAccent' : 'bg-bankPrimary border-bankAccent/10 hover:border-bankAccent/30'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full bg-bankCard border border-bankAccent/20 flex items-center justify-center font-bold text-xs ${asset.color}`}>
                                        {asset.symbol}
                                    </div>
                                    <div>
                                        <p className="text-bankLight text-sm font-bold">{asset.name}</p>
                                        <p className="text-bankLight/50 text-xs">{asset.symbol}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-bankLight font-mono text-sm">${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                                    <p className={`text-xs font-bold ${asset.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>{asset.change}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-bankCard to-black border border-bankAccent/30 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-bankAccent/10 rounded-full blur-[40px]"></div>

                        {!selectedAsset ? (
                            <div className="text-center text-bankLight/50">
                                <span className="text-4xl block mb-4">📊</span>
                                <p className="text-sm">Select an asset from the market to start trading.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleTrade} className="flex flex-col gap-6 relative z-10">
                                <div>
                                    <h3 className="text-bankLight text-xl font-bold mb-1">Buy {selectedAsset.name}</h3>
                                    <p className="text-bankLight/50 text-xs">Current Price: <span className="text-bankAccent font-mono">${selectedAsset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></p>
                                </div>

                                <div>
                                    <label className="text-bankLight/80 text-xs font-semibold block mb-2 uppercase tracking-wider">Amount to Invest (USD)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-bankLight/50 font-mono">$</span>
                                        <input
                                            type="number" required placeholder="0.00"
                                            value={amount} onChange={(e) => setAmount(e.target.value)}
                                            className="w-full bg-bankPrimary border border-bankAccent/30 rounded-xl pl-8 pr-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent font-mono"
                                        />
                                    </div>
                                    {amount && (
                                        <p className="text-bankLight/40 text-xs mt-2 font-mono">
                                            ≈ {(parseFloat(amount) / selectedAsset.price).toFixed(6)} {selectedAsset.symbol}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-bankAccent text-bankPrimary py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all uppercase tracking-wider"
                                >
                                    Confirm Trade
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Invest;