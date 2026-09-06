import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('sefobank_user', formData.fullName);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-bankPrimary flex items-center justify-center px-6 py-12 relative overflow-hidden">
            <div className="absolute w-96 h-96 bg-bankAccent/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-md w-full bg-bankCard/80 backdrop-blur-md border border-bankAccent/20 p-8 rounded-3xl shadow-2xl relative z-10">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl border border-bankAccent/30 flex items-center justify-center bg-bankPrimary p-1">
                            <img src={logoImg} alt="SefoBank" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-bankLight text-lg font-bold tracking-wide">BS BANK</span>
                    </Link>
                    <h2 className="text-bankLight text-2xl font-extrabold mt-2">Private Membership</h2>
                    <p className="text-bankLight/60 text-xs mt-1">Open an exclusive multi-currency account</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="text-bankLight/80 text-xs font-semibold block mb-1.5">Full Legal Name</label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-2.5 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-bankLight/80 text-xs font-semibold block mb-1.5">Email Address</label>
                        <input
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-2.5 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-bankLight/80 text-xs font-semibold block mb-1.5">Phone Number</label>
                        <input
                            type="tel"
                            required
                            placeholder="+994 50 000 00 00"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-2.5 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-bankLight/80 text-xs font-semibold block mb-1.5">Security Password</label>
                        <input
                            type="password"
                            required
                            placeholder="••••••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-2.5 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-bankAccent text-bankPrimary py-3.5 rounded-xl font-bold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-bankAccent/20 transition-all mt-3"
                    >
                        Submit Application
                    </button>
                </form>

                <div className="mt-6 text-center border-t border-bankAccent/10 pt-5">
                    <p className="text-bankLight/60 text-xs">
                        Already have a private portal?{' '}
                        <Link to="/login" className="text-bankAccent font-bold hover:underline">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;