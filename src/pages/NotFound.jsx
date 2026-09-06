import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-bankPrimary flex flex-col items-center justify-center px-6 relative overflow-hidden font-sans">
            <div className="absolute w-[600px] h-[600px] bg-bankAccent/10 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-xl w-full bg-bankCard/90 backdrop-blur-md border border-bankAccent/30 p-12 rounded-3xl shadow-2xl text-center relative z-10 flex flex-col items-center">

                <div className="w-16 h-16 rounded-2xl border border-bankAccent/40 flex items-center justify-center bg-bankPrimary p-2 shadow-xl mb-8">
                    <img src={logoImg} alt="SefoBank" className="w-full h-full object-contain" />
                </div>

                <span className="text-bankAccent text-sm font-mono font-bold tracking-[6px] uppercase border border-bankAccent/40 px-5 py-2 rounded-full bg-bankAccent/10 mb-6">
                    ERROR 404
                </span>

                <h1 className="text-bankLight text-4xl md:text-5xl font-black mb-4 tracking-wide">
                    Access Restricted
                </h1>

                <p className="text-bankLight/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                    The requested portal page does not exist or has been relocated within our secure private network.
                </p>

                <div className="flex flex-col sm:flex-row w-full gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-1 bg-bankAccent text-bankPrimary py-4 px-6 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-xl shadow-bankAccent/20 uppercase tracking-wider"
                    >
                        &larr; Previous Page
                    </button>

                    <Link
                        to="/dashboard"
                        className="flex-1 bg-bankPrimary border border-bankAccent/30 text-bankLight py-4 px-6 rounded-xl font-bold text-sm hover:border-bankAccent hover:text-bankAccent transition-all text-center uppercase tracking-wider flex items-center justify-center"
                    >
                        Dashboard
                    </Link>
                </div>

            </div>

            <p className="text-bankLight/40 text-xs font-mono mt-10 tracking-widest relative z-10">
                SEFO BANK PRIVATE WEALTH • SECURITY CODE 0x404
            </p>
        </div>
    );
};

export default NotFound;