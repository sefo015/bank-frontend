import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-bankPrimary border-b border-bankAccent/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl border border-bankAccent/30 flex items-center justify-center bg-bankPrimary p-1">
                        <img src={logoImg} alt="Bank Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-bankLight text-xl font-bold tracking-wide">SEFO BANK</span>
                        <span className="text-bankAccent text-[10px] tracking-[0.2em] font-medium uppercase -mt-1">Private Banking</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {['Services', 'Security', 'Calculator', 'About Us'].map((item, idx) => (
                        <a key={idx} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-bankLight/80 text-sm font-medium hover:text-bankAccent transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-5">
                    <Link to="/support" className="text-bankLight/80 hover:text-bankAccent text-xs transition-colors">
                        Support
                    </Link>
                    <div className="flex items-center gap-3 pl-4 border-l border-bankAccent/20">
                        <Link to="/register" className="text-xs font-semibold text-bankAccent border border-bankAccent px-4 py-2 rounded-lg hover:bg-bankAccent/10 transition-all duration-300">
                            Sign Up
                        </Link>
                        <Link to="/login" className="text-xs font-bold text-bankPrimary bg-bankAccent px-4 py-2 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-bankAccent/20 hover:-translate-y-0.5 transition-all duration-300">
                            Log In
                        </Link>
                    </div>
                </div>

                <button className="md:hidden text-bankAccent" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-bankPrimary border-b border-bankAccent/20 px-6 py-4 flex flex-col gap-4 shadow-xl absolute w-full left-0">
                    {['Services', 'Security', 'Calculator', 'About Us'].map((item, idx) => (
                        <a key={idx} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-bankLight/80 text-sm font-medium hover:text-bankAccent" onClick={() => setIsOpen(false)}>
                            {item}
                        </a>
                    ))}
                    <Link to="/support" className="text-bankLight/80 text-sm font-medium hover:text-bankAccent" onClick={() => setIsOpen(false)}>
                        Support
                    </Link>
                    <div className="flex flex-col gap-3 pt-4 border-t border-bankAccent/20">
                        <Link to="/register" className="text-center text-sm font-semibold text-bankAccent border border-bankAccent px-4 py-3 rounded-lg" onClick={() => setIsOpen(false)}>Sign Up</Link>
                        <Link to="/login" className="text-center text-sm font-bold text-bankPrimary bg-bankAccent px-4 py-3 rounded-lg" onClick={() => setIsOpen(false)}>Log In</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;