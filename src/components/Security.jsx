import React from 'react';
import securityImg from '../assets/security.png';

const Security = () => {
    return (
        <section id="security" className="bg-bankPrimary py-24 px-6 border-t border-bankAccent/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

                <div className="flex-1 relative w-full flex justify-center items-center">
                    <div className="absolute w-72 h-72 bg-bankAccent/10 rounded-full blur-[90px]"></div>

                    <div className="relative z-10 border border-bankAccent/20 p-3 rounded-3xl bg-bankCard/50 backdrop-blur-sm max-w-[480px] w-full shadow-2xl">
                        <img
                            src={securityImg}
                            alt="Bank Grade Security"
                            className="w-full h-auto object-cover rounded-2xl border border-bankAccent/10"
                        />

                        <div className="absolute -bottom-6 -right-2 md:right-4 bg-bankPrimary border border-bankAccent/30 p-4 rounded-xl shadow-2xl flex items-center gap-3">
                            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
                            <div>
                                <p className="text-bankLight text-xs font-bold">AES 256-Bit Encryption</p>
                                <p className="text-bankAccent text-[10px] uppercase font-semibold">Active & Monitored</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    <span className="text-bankAccent text-xs font-bold tracking-[3px] uppercase border border-bankAccent/30 px-4 py-1.5 rounded-full w-max bg-bankAccent/5">
                        [ UNCOMPROMISED SECURITY ]
                    </span>

                    <h2 className="text-bankLight text-3xl md:text-5xl font-extrabold leading-tight">
                        Institutional-Grade Protection for Your Assets.
                    </h2>

                    <p className="text-bankLight/70 text-base leading-relaxed">
                        At SefoBank, privacy and capital preservation are paramount. We deploy military-grade encryption protocols and zero-trust architecture to ensure your assets stay completely shielded.
                    </p>

                    <div className="flex flex-col gap-4 mt-2">
                        {[
                            {
                                title: 'Biometric Access Control',
                                desc: 'Multi-factor authentication integrated with hardware-level security keys and biometrics.'
                            },
                            {
                                title: 'Zero-Knowledge Privacy',
                                desc: 'Your transaction records and personal data are fully obfuscated from third-party exposure.'
                            },
                            {
                                title: 'PCI-DSS Level 1 Compliance',
                                desc: 'Adhering to global banking protocols with continuous automated threat detection.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 p-4 rounded-xl bg-bankCard/40 border border-bankAccent/10 hover:border-bankAccent/30 transition-all duration-300">
                                <div className="text-bankAccent text-lg font-bold">✓</div>
                                <div>
                                    <h3 className="text-bankLight text-sm font-bold">{item.title}</h3>
                                    <p className="text-bankLight/60 text-xs mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Security;