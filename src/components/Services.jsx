import React from 'react';

const Services = () => {
    const servicesList = [
        {
            title: 'Private Wealth',
            desc: 'Tailored investment strategies and portfolio management for high-net-worth individuals.',
            icon: '📈'
        },
        {
            title: 'VIP Concierge',
            desc: 'Exclusive lifestyle management and global premium support available 24/7.',
            icon: '🌟'
        },
        {
            title: 'Multi-Currency',
            desc: 'Hold, manage, and exchange over 50 global currencies with zero hidden fees.',
            icon: '💱'
        },
        {
            title: 'Instant Transfers',
            desc: 'Cross-border transactions executed in seconds with enterprise-grade security.',
            icon: '⚡'
        }
    ];

    return (
        <section id="services" className="bg-bankPrimary py-24 px-6 border-t border-bankAccent/10">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-bankAccent text-xs font-bold tracking-[4px] uppercase mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-bankLight text-3xl md:text-5xl font-extrabold">
                        Bespoke Financial Services
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesList.map((srv, idx) => (
                        <div
                            key={idx}
                            className="bg-bankCard p-8 rounded-2xl border border-bankAccent/10 hover:border-bankAccent/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-bankAccent/10 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-bankPrimary rounded-xl flex items-center justify-center text-2xl mb-6 border border-bankAccent/20 group-hover:bg-bankAccent transition-colors duration-300">
                                <span className="group-hover:brightness-0">{srv.icon}</span>
                            </div>
                            <h4 className="text-bankLight text-xl font-bold mb-3">
                                {srv.title}
                            </h4>
                            <p className="text-bankLight/60 text-sm leading-relaxed">
                                {srv.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;