import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Support = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-bankPrimary flex flex-col font-sans">

            <header className="bg-bankCard/50 border-b border-bankAccent/20 py-4 px-6 sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg border border-bankAccent/30 flex items-center justify-center bg-bankPrimary p-1">
                            <img src={logoImg} alt="SefoBank" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-bankLight text-sm font-bold tracking-wide">BS BANK</span>
                    </Link>
                    <Link to="/dashboard" className="text-bankAccent text-xs font-bold hover:underline">
                        Return to Dashboard
                    </Link>
                </div>
            </header>

            <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-16 flex flex-col lg:flex-row gap-12">

                <div className="flex-1 flex flex-col gap-6">
                    <div>
                        <h1 className="text-bankAccent text-4xl font-black mb-2">Private Concierge</h1>
                        <p className="text-bankLight/60 text-sm">Exclusive support for SefoBank premium members. Send a secure message to your dedicated wealth manager.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-bankCard border border-bankAccent/20 p-8 rounded-3xl shadow-xl flex flex-col gap-5">
                        <div>
                            <label className="text-bankLight/80 text-xs font-semibold block mb-2">Subject</label>
                            <select className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors appearance-none">
                                <option>Card Order & Delivery</option>
                                <option>Transaction Dispute</option>
                                <option>Investment Advice</option>
                                <option>Other Requests</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-bankLight/80 text-xs font-semibold block mb-2">Message</label>
                            <textarea
                                required
                                rows="5"
                                placeholder="How can we assist you today?"
                                className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-bankAccent text-bankPrimary py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all mt-2"
                        >
                            Send Secure Message
                        </button>
                        {isSubmitted && (
                            <p className="text-emerald-400 text-xs text-center font-bold mt-2">Message delivered. Your private banker will reply shortly.</p>
                        )}
                    </form>
                </div>

                <div className="lg:w-[400px] flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-bankCard to-black border border-bankAccent/30 p-8 rounded-3xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-bankAccent/10 rounded-full blur-[40px]"></div>
                        <h3 className="text-bankLight text-lg font-bold mb-6 relative z-10">Direct Channels</h3>

                        <div className="flex flex-col gap-6 relative z-10">
                            <div>
                                <p className="text-bankLight/50 text-[10px] uppercase tracking-wider mb-1">Global Support Line</p>
                                <p className="text-bankAccent text-lg font-mono font-bold">+994 (50) 000 00 00</p>
                            </div>
                            <div>
                                <p className="text-bankLight/50 text-[10px] uppercase tracking-wider mb-1">Wealth Management Email</p>
                                <p className="text-bankLight text-sm font-bold">concierge@sefobank.com</p>
                            </div>
                            <div>
                                <p className="text-bankLight/50 text-[10px] uppercase tracking-wider mb-1">Main Office</p>
                                <p className="text-bankLight text-sm font-bold">Baku, Azerbaijan</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Support;