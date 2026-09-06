import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const OrderCard = () => {
    const [selectedCard, setSelectedCard] = useState('metal'); // default olaraq elit kart seçili olsun
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleOrder = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // 3 saniyə sonra dashboard-a qaytarır
        setTimeout(() => navigate('/dashboard'), 3000);
    };

    return (
        <div className="min-h-screen bg-bankPrimary flex flex-col font-sans relative overflow-hidden">
            {/* Arxa fon effekti */}
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
                    <h1 className="text-bankLight text-3xl md:text-5xl font-black tracking-wide mb-3">Choose Your Class</h1>
                    <p className="text-bankLight/60 text-sm md:text-base max-w-xl mx-auto">Select the card that matches your lifestyle. Experience borderless banking with exclusive privileges.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">

                    <div
                        onClick={() => setSelectedCard('digital')}
                        className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 relative overflow-hidden ${selectedCard === 'digital' ? 'bg-bankCard border-bankLight shadow-2xl shadow-bankLight/10 scale-105 z-10' : 'bg-bankCard/50 border-bankAccent/10 opacity-70 hover:opacity-100'}`}
                    >
                        <div className="w-full aspect-[1.586/1] bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 flex flex-col justify-between shadow-xl mb-6 relative">
                            <div className="flex justify-between items-start">
                                <span className="text-white font-black tracking-widest text-lg">SEFO BANK</span>
                                <span className="text-white/60 text-[8px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded">Virtual</span>
                            </div>
                            <div className="text-white text-xl font-mono tracking-[4px]">•••• •••• •••• 1024</div>
                        </div>
                        <h3 className="text-bankLight text-xl font-bold mb-1">Digital Standard</h3>
                        <p className="text-bankLight/50 text-xs mb-6">Free • Instant Activation</p>
                        <ul className="flex flex-col gap-3 text-sm text-bankLight/80">
                            <li className="flex items-center gap-2"><span className="text-bankLight">✓</span> Zero maintenance fee</li>
                            <li className="flex items-center gap-2"><span className="text-bankLight">✓</span> Instant Apple/Google Pay</li>
                            <li className="flex items-center gap-2"><span className="text-bankLight">✓</span> Standard support</li>
                        </ul>
                    </div>

                    <div
                        onClick={() => setSelectedCard('metal')}
                        className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 relative overflow-hidden ${selectedCard === 'metal' ? 'bg-bankCard border-bankAccent shadow-2xl shadow-bankAccent/20 scale-105 z-10' : 'bg-bankCard/50 border-bankAccent/10 opacity-70 hover:opacity-100'}`}
                    >
                        {selectedCard === 'metal' && <div className="absolute top-0 right-0 px-4 py-1 bg-bankAccent text-bankPrimary text-[10px] font-bold uppercase rounded-bl-xl z-20">Most Popular</div>}

                        <div className="w-full aspect-[1.586/1] bg-gradient-to-br from-black via-zinc-900 to-black border border-bankAccent/30 rounded-2xl p-6 flex flex-col justify-between shadow-xl mb-6 relative">
                            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-bankAccent/10 to-transparent skew-x-[-30deg]"></div>
                            <div className="flex justify-between items-start z-10">
                                <span className="text-bankLight font-black tracking-widest text-lg drop-shadow-md">SEFO BANK</span>
                                <span className="text-bankAccent text-[8px] uppercase tracking-wider border border-bankAccent/30 px-2 py-1 rounded">Metal</span>
                            </div>
                            <div className="text-bankLight text-xl font-mono tracking-[4px] drop-shadow-md z-10">•••• •••• •••• 9999</div>
                        </div>
                        <h3 className="text-bankAccent text-xl font-bold mb-1">Black Elite Metal</h3>
                        <p className="text-bankLight/50 text-xs mb-6">$15/month • 18g Physical Card</p>
                        <ul className="flex flex-col gap-3 text-sm text-bankLight/80">
                            <li className="flex items-center gap-2"><span className="text-bankAccent">✓</span> Unlimited Free FX transfers</li>
                            <li className="flex items-center gap-2"><span className="text-bankAccent">✓</span> VIP Airport Lounge Access</li>
                            <li className="flex items-center gap-2"><span className="text-bankAccent">✓</span> 24/7 Private Concierge</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full max-w-2xl bg-bankCard border border-bankAccent/20 rounded-3xl p-8 shadow-xl">
                    <h3 className="text-bankLight text-lg font-bold mb-6">Delivery Details</h3>
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 rounded-full bg-bankAccent/20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-bankAccent text-2xl">✓</span>
                            </div>
                            <h4 className="text-bankLight text-xl font-bold mb-2">Order Confirmed!</h4>
                            <p className="text-bankLight/60 text-sm">Your {selectedCard === 'metal' ? 'Black Elite Metal' : 'Digital Standard'} card is being prepared. Redirecting to dashboard...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleOrder} className="flex flex-col gap-5">
                            {selectedCard === 'metal' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="md:col-span-2">
                                        <label className="text-bankLight/80 text-xs font-semibold block mb-2">Delivery Address</label>
                                        <input
                                            type="text" required placeholder="Street, Building, Apartment"
                                            value={address} onChange={(e) => setAddress(e.target.value)}
                                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-bankLight/80 text-xs font-semibold block mb-2">City</label>
                                        <input
                                            type="text" required placeholder="Baku"
                                            value={city} onChange={(e) => setCity(e.target.value)}
                                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-bankLight/80 text-xs font-semibold block mb-2">Phone Number</label>
                                        <input
                                            type="tel" required placeholder="+994"
                                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent"
                                        />
                                    </div>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-bankAccent text-bankPrimary py-4 rounded-xl font-bold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-bankAccent/20 transition-all mt-4">
                                {selectedCard === 'metal' ? 'Order Physical Card - $15' : 'Activate Virtual Card - Free'}
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default OrderCard;