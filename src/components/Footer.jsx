import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Footer = () => {
    const githubUrl = "https://github.com/sefo015";
    const linkedinUrl = "https://www.linkedin.com/in/sefter-baghirli-624b27404";

    return (
        <footer className="bg-bankPrimary border-t border-bankAccent/20 pt-16 pb-12 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-bankAccent/10">

                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-3 w-max">
                            <div className="w-10 h-10 rounded-xl border border-bankAccent/30 flex items-center justify-center bg-bankPrimary p-1">
                                <img src={logoImg} alt="SefoBank Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-bankLight text-lg font-bold tracking-wide">BS BANK</span>
                                <span className="text-bankAccent text-[9px] tracking-[0.2em] font-medium uppercase -mt-1">Private Banking</span>
                            </div>
                        </Link>

                        <p className="text-bankLight/60 text-xs leading-relaxed max-w-sm">
                            SefoBank Private Banking N.V. is a licensed digital ecosystem providing ultra-secure wealth preservation, asset management, and global multi-currency settlements.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-bankCard border border-bankAccent/20 flex items-center justify-center text-bankLight/80 hover:text-bankAccent hover:border-bankAccent transition-all"
                                title="GitHub Profile"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </a>

                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-bankCard border border-bankAccent/20 flex items-center justify-center text-bankLight/80 hover:text-bankAccent hover:border-bankAccent transition-all"
                                title="LinkedIn Profile"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-bankAccent text-xs font-bold uppercase tracking-wider">Solutions</span>
                        <ul className="flex flex-col gap-2.5 text-xs text-bankLight/70">
                            <li><a href="#services" className="hover:text-bankAccent transition-colors">Wealth Management</a></li>
                            <li><a href="#services" className="hover:text-bankAccent transition-colors">VIP Concierge</a></li>
                            <li><a href="#calculator" className="hover:text-bankAccent transition-colors">Multi-Currency Accounts</a></li>
                            <li><a href="#services" className="hover:text-bankAccent transition-colors">Global Transfers</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-bankAccent text-xs font-bold uppercase tracking-wider">Security</span>
                        <ul className="flex flex-col gap-2.5 text-xs text-bankLight/70">
                            <li><a href="#security" className="hover:text-bankAccent transition-colors">AES-256 Encryption</a></li>
                            <li><a href="#security" className="hover:text-bankAccent transition-colors">Biometric Auth</a></li>
                            <li><a href="#security" className="hover:text-bankAccent transition-colors">PCI-DSS Standards</a></li>
                            <li><a href="#security" className="hover:text-bankAccent transition-colors">Zero-Knowledge Policy</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-bankAccent text-xs font-bold uppercase tracking-wider">SefoBank</span>
                        <ul className="flex flex-col gap-2.5 text-xs text-bankLight/70">
                            <li><a href="#about us" className="hover:text-bankAccent transition-colors">About Us</a></li>
                            <li><a href="#calculator" className="hover:text-bankAccent transition-colors">Yield Calculator</a></li>
                            <li><Link to="/login" className="hover:text-bankAccent transition-colors">Client Portal</Link></li>
                            <li><Link to="/register" className="hover:text-bankAccent transition-colors">Open Account</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-bankLight/50">
                    <p>© 2026 SefoBank Private Banking N.V. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-bankAccent cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-bankAccent cursor-pointer">Terms of Service</span>
                        <span className="hover:text-bankAccent cursor-pointer">Regulatory Disclosure</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;