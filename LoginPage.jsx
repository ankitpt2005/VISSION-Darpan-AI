import React from 'react';
import logo from './logo.png'; // 👈 Make sure logo.png is in src/assets/

const LoginPage = ({ onLogin }) => {
  return (
    // Purani sm:max-w-md hata di taaki PC par full screen background dikhe
    <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center items-center px-6 font-sans relative overflow-hidden">
      
      {/* Background Glowing Effects (Full Screen) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      
      <div className="z-10 w-full max-w-md flex flex-col items-center">
        
        {/* 👇 Emoji ki jagah tumhara Premium Logo */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-500">
          <img 
            src={logo} 
            alt="Darpan Logo" 
            className="w-48 h-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
          />
        </div>
        
        <h1 className="text-4xl font-black text-white mb-2 tracking-tight text-center">
          DARPAN AI
        </h1>
        <p className="text-slate-400 text-center mb-10 text-sm font-medium">
          Smart Governance, Brighter Future.
        </p>

        {/* Login Box (Glassmorphism Effect) */}
        <div className="w-full bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="space-y-4">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-900/50 text-white placeholder-slate-500 border border-slate-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            
            <div className="relative">
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-slate-900/50 text-white placeholder-slate-500 border border-slate-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
          </div>
          
          <button 
            onClick={onLogin} 
            className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-500/20 hover:opacity-90 active:scale-[0.98] transition-all text-lg"
          >
            Login / Enter
          </button>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-700"></div></div>
            <span className="relative px-4 bg-[#161d2f] text-slate-500 text-sm">OR</span>
          </div>

          <button 
            onClick={onLogin} 
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-2xl font-bold shadow-lg hover:bg-gray-100 active:scale-[0.98] transition-all"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>

        <p className="mt-8 text-slate-500 text-sm">
          Don't have an account? <span className="text-purple-400 font-bold cursor-pointer hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};


export default LoginPage;
