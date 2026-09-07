import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/bankSlice';
import logoImg from '../assets/logo.png';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await axios.post('https://bank-backend-r1m9.onrender.com/api/auth/login', {
                email: formData.username,
                password: formData.password
            });

            const { token, user } = response.data;

            localStorage.setItem('sefobank_token', token);
            localStorage.setItem('sefobank_user', user.fullName);

            dispatch(setUser(user.fullName));

            if (user.role === 'WORKER') {
                localStorage.setItem('sefobank_worker', user.fullName);
                navigate('/worker-dashboard');
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Sistemə qoşularkən xəta baş verdi');
        } finally {
            setIsLoading(false);
        }
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
                    <h2 className="text-bankLight text-2xl font-extrabold mt-2">Welcome Back</h2>
                    <p className="text-bankLight/60 text-xs mt-1">Access your private wealth portal</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-lg text-center font-semibold">
                            {error}
                        </div>
                    )}
                    <div>
                        <label className="text-bankLight/80 text-xs font-semibold block mb-2">Email Address</label>
                        <input
                            type="text"
                            required
                            placeholder="client@sefobank.com"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-bankLight/80 text-xs font-semibold">Password</label>
                            <a href="#forgot" className="text-bankAccent text-[11px] hover:underline">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            required
                            placeholder="••••••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full bg-bankPrimary border border-bankAccent/20 rounded-xl px-4 py-3 text-bankLight text-sm focus:outline-none focus:border-bankAccent transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-bankAccent text-bankPrimary py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all mt-2 disabled:opacity-50"
                    >
                        {isLoading ? 'Authenticating...' : 'Authenticate Access'}
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-bankAccent/10 pt-6">
                    <p className="text-bankLight/60 text-xs">
                        Not a SefoBank member yet?{' '}
                        <Link to="/register" className="text-bankAccent font-bold hover:underline">Apply for Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;