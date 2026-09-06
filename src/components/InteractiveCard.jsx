import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

const InteractiveCard = ({ onTransfer }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [amount, setAmount] = useState('');

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (value.length > 16) value = value.substring(0, 16);
        const parts = [];
        for (let i = 0; i < value.length; i += 4) {
            parts.push(value.substring(i, i + 4));
        }
        setCardNumber(parts.join(' '));
    };

    const handleSendClick = () => {
        if (onTransfer && amount) {
            onTransfer(amount, cardHolder || 'Unknown Account');
            setAmount('');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-12 items-center bg-bankPrimary p-10 rounded-3xl border border-bankAccent/20">

            <div className="w-full max-w-[400px] aspect-[1.586/1] bg-gradient-to-br from-bankCard to-black rounded-2xl px-6 pt-6 pb-8 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-bankAccent/30 group">
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-30deg] group-hover:left-[200%] transition-all duration-1000"></div>

                <div className="flex justify-between items-start z-10 relative">
                    <div className="flex flex-col">
                        <span className="text-bankLight text-xl font-black tracking-widest">SEFO BANK</span>
                        <span className="text-bankAccent text-[9px] tracking-[3px] uppercase mt-1">SefoBank / Users</span>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img src={logoImg} alt="SefoBank Logo" className="w-full h-full object-contain opacity-90" />
                    </div>
                </div>

                <div className="w-12 h-9 min-w-[48px] min-h-[36px] shrink-0 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-md relative z-10 opacity-90 mt-2">
                    <div className="absolute inset-0 border border-yellow-800/30 rounded-md"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-yellow-800/30"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-yellow-800/30"></div>
                </div>

                <div className="flex flex-col gap-3 z-10 relative mt-2">
                    <div className="text-bankLight text-2xl md:text-3xl font-mono tracking-[4px] drop-shadow-md min-h-[36px]">
                        {cardNumber || '•••• •••• •••• ••••'}
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                            <span className="text-bankLight/50 text-[8px] uppercase tracking-wider">Card Holder</span>
                            <span className="text-bankLight text-sm font-mono uppercase tracking-widest truncate max-w-[200px]">
                                {cardHolder || 'AD SOYAD'}
                            </span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-bankLight/50 text-[8px] uppercase tracking-wider">Expires</span>
                            <span className="text-bankLight text-sm font-mono tracking-widest">
                                MM / YY
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-md flex flex-col gap-4">
                <div>
                    <label className="text-bankLight/80 text-xs font-semibold block mb-2">Recipient Card Number</label>
                    <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full bg-bankCard border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent font-mono"
                    />
                </div>

                <div>
                    <label className="text-bankLight/80 text-xs font-semibold block mb-2">Recipient Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                        className="w-full bg-bankCard border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent"
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="text-bankLight/80 text-xs font-semibold block mb-2">Expiry Date</label>
                        <input
                            type="text"
                            value="MM / YY"
                            readOnly
                            className="w-full bg-bankCard/50 border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight/50 text-sm cursor-not-allowed font-mono"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-bankLight/80 text-xs font-semibold block mb-2">Amount ($)</label>
                        <input
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-bankCard border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent font-mono"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSendClick}
                    className="w-full bg-bankAccent text-bankPrimary py-3 mt-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-md"
                >
                    Transfer Funds
                </button>
            </div>

        </div>
    );
};

export default InteractiveCard;