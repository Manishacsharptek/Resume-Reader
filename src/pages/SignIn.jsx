import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Dummy login logic for now
    setTimeout(() => {
      setLoading(false);
      navigate('/resume');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white overflow-hidden relative selection:bg-indigo-500 selection:text-white pb-20">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900 opacity-20 blur-[100px] pointer-events-none animate-pulse duration-10000"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-900 opacity-20 blur-[120px] pointer-events-none animate-pulse duration-7000"></div>

      <div className="w-full max-w-md p-6 sm:p-8 relative z-10 mt-10">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block text-2xl font-black tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400 mb-2 hover:scale-105 transition-transform drop-shadow-sm">
            Resume Worded
          </Link>
          <p className="text-slate-400 font-light mt-2">Welcome back! Sign in to continue scanning.</p>
        </div>

        <div className="bg-[#0f172a]/70 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-50 bg-[length:200%_auto] animate-gradient"></div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white drop-shadow-sm">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full bg-[#1e293b]/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 hover:border-slate-500 shadow-inner"
                placeholder="john@example.com"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
               <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-slate-300">Password</label>
                 <Link to="/forgot-password" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors hover:underline">Forgot password?</Link>
               </div>
               <input 
                 type="password" 
                 name="password"
                 required
                 className="w-full bg-[#1e293b]/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 hover:border-slate-500 shadow-inner"
                 placeholder="••••••••"
                 onChange={handleChange}
               />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full relative group/btn overflow-hidden rounded-xl p-[1px] mt-6"
            >
               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-gradient"></span>
               <div className="relative bg-[#0f172a] hover:bg-transparent transition-colors duration-300 px-6 py-3.5 rounded-xl flex items-center justify-center">
                 {loading ? (
                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                 ) : (
                   <span className="font-semibold text-white tracking-wide">Sign In</span>
                 )}
               </div>
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-400">
             Don't have an account?{' '}
             <Link to="/signup" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors underline underline-offset-4 decoration-blue-400/30">
               Sign Up
             </Link>
          </div>
        </div>
      </div>
      {/* Keyframes inline style */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: -200% 50%; }
        }
        .animate-gradient {
            animation: gradient 3s linear infinite;
        }
      `}} />
    </div>
  );
};

export default SignIn;
