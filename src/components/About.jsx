import React from 'react';

const About = () => {
    return (
        <section id="aboutus" className="bg-bankPrimary py-24 px-6 border-t border-bankAccent/10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-bankAccent text-xs font-bold tracking-[3px] uppercase border border-bankAccent/30 px-3.5 py-1.5 rounded-full bg-bankAccent/5 inline-block mb-4">
                            [ OUR LEGACY ]
                        </span>
                        <h2 className="text-bankLight text-3xl md:text-5xl font-extrabold tracking-tight">
                            Architecting the Future <br className="hidden md:block" /> of Private Wealth.
                        </h2>
                    </div>
                    <p className="text-bankLight/70 text-sm max-w-md leading-relaxed">
                        SefoBank bridges classic private banking trust with modern digital infrastructure, offering absolute financial sovereignty for the modern elite.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <article className="bg-bankCard/60 p-8 rounded-2xl border border-bankAccent/15 flex flex-col justify-between hover:border-bankAccent/40 transition-all duration-300">
                        <div>
                            <span className="text-bankAccent text-sm font-mono font-bold">01.</span>
                            <h3 className="text-bankLight text-xl font-bold mt-4 mb-3">Exclusivity First</h3>
                            <p className="text-bankLight/60 text-xs leading-relaxed">
                                Admission to SefoBank is strictly managed to preserve personalized liquidity solutions and bespoke concierge attention for every member.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-bankAccent/10 text-[11px] text-bankAccent font-semibold">
                            Bespoke Asset Management →
                        </div>
                    </article>

                    <article className="bg-bankCard/60 p-8 rounded-2xl border border-bankAccent/15 flex flex-col justify-between hover:border-bankAccent/40 transition-all duration-300">
                        <div>
                            <span className="text-bankAccent text-sm font-mono font-bold">02.</span>
                            <h3 className="text-bankLight text-xl font-bold mt-4 mb-3">Digital Autonomy</h3>
                            <p className="text-bankLight/60 text-xs leading-relaxed">
                                Instant execution across global markets without intermediary delays. Your capital remains under your direct cryptographic control.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-bankAccent/10 text-[11px] text-bankAccent font-semibold">
                            Zero Intermediary Risk →
                        </div>
                    </article>

                    <article className="bg-bankCard/60 p-8 rounded-2xl border border-bankAccent/15 flex flex-col justify-between hover:border-bankAccent/40 transition-all duration-300">
                        <div>
                            <span className="text-bankAccent text-sm font-mono font-bold">03.</span>
                            <h3 className="text-bankLight text-xl font-bold mt-4 mb-3">Global Hubs</h3>
                            <p className="text-bankLight/60 text-xs leading-relaxed">
                                Operating with direct liquidity channels across major financial centers including Zurich, London, Singapore, and New York.
                            </p>
                        </div>
                        <div className="mt-8 pt-4 border-t border-bankAccent/10 text-[11px] text-bankAccent font-semibold">
                            24/7 Global Presence →
                        </div>
                    </article>

                </div>

            </div>
        </section>
    );
};

export default About;