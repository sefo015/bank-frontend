import React from 'react';
import heroManImg from '../assets/black.png';

const Hero = () => {
    return (
        <section className="bg-bankPrimary min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">

                <div className="flex-1 flex flex-col gap-6 text-center lg:text-left z-10">
                    <span className="inline-block text-bankAccent text-xs font-bold tracking-[2px] border border-bankAccent/30 px-4 py-2 rounded-full w-max mx-auto lg:mx-0 bg-bankAccent/5">
                        [ EXCLUSIVE ACCESS ]
                    </span>
                    <h1 className="text-bankLight text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        REDEFINING LUXURY <br className="hidden lg:block" /> IN FINANCE.
                    </h1>
                    <p className="text-bankLight/80 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        SefoBank — More than a bank, it is your digital financial ecosystem. Crafted with high-end design principles and cutting-edge technology, SefoBank offers the most secure and prestigious way to manage your capital.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                        <a href="#open-account" className="bg-bankAccent text-bankPrimary px-8 py-4 rounded-xl text-sm font-bold hover:opacity-90 hover:shadow-xl hover:shadow-bankAccent/20 hover:-translate-y-1 transition-all duration-300">
                            Open an Account
                        </a>
                        <a href="#wealth-management" className="bg-transparent text-bankAccent border border-bankAccent px-8 py-4 rounded-xl text-sm font-bold hover:bg-bankAccent/10 transition-all duration-300">
                            Explore Wealth Management
                        </a>
                    </div>
                </div>

                <div className="flex-1 relative flex justify-center items-center w-full mt-10 lg:mt-0">
                    <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-bankAccent/15 rounded-full blur-[80px]"></div>

                    <img src={heroManImg} alt="SefoBank Executive" className="w-full max-w-[350px] md:max-w-[450px] object-contain relative z-10 drop-shadow-2xl" />

                    <div className="absolute top-10 right-0 lg:-right-8 bg-bankCard border border-bankAccent/30 p-5 rounded-2xl z-20 shadow-2xl transform hover:scale-105 transition-transform duration-300 hidden md:block">
                        <div className="text-bankLight/70 text-xs mb-1">Total Assets</div>
                        <div className="text-bankAccent text-2xl font-bold">$2,450,000</div>
                    </div>

                    <div className="absolute bottom-16 left-0 lg:-left-12 bg-bankCard border border-bankAccent/30 p-4 rounded-2xl z-20 shadow-2xl flex items-center gap-4 transform hover:scale-105 transition-transform duration-300 hidden md:flex">
                        <div className="w-12 h-12 bg-bankPrimary rounded-full flex items-center justify-center border border-bankAccent/20">
                            <span className="text-bankAccent text-xl">🛡️</span>
                        </div>
                        <div>
                            <div className="text-bankLight text-sm font-bold">PCI-DSS Certified</div>
                            <div className="text-bankLight/60 text-xs">End-to-End Encryption</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto w-full mt-20 pt-10 border-t border-bankAccent/10 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center relative z-10">
                {[
                    { value: '$10B+', label: 'Assets Managed' },
                    { value: '99.99%', label: 'Uptime Security' },
                    { value: '24/7', label: 'Personal Concierge' }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <span className="text-bankAccent text-4xl font-black">{stat.value}</span>
                        <span className="text-bankLight/60 text-xs uppercase tracking-[2px] font-semibold">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hero;