import React from 'react';
import logo from './logo.png'; // 👈 Logo import

const MapPage = () => {
  return (
    <div className="relative h-screen w-full bg-slate-900 overflow-hidden font-sans">
      
      {/* 🗺️ FAKE MAP BACKGROUND (Using a darker, more techy map image) */}
      <img 
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200" 
        alt="Map Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
      />

      {/* 🔴 HEATMAP MARKERS (Tailwind Animation Magic) */}
      
      {/* Marker 1 - High Danger Zone */}
      <div className="absolute top-[30%] left-[20%] group cursor-pointer">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-16 h-16 bg-red-500 rounded-full animate-ping opacity-40"></div>
          <div className="relative w-5 h-5 bg-red-600 border-2 border-white rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
          {/* Tooltip */}
          <div className="absolute top-8 left-0 bg-white px-3 py-1 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
             <p className="text-[10px] font-bold text-gray-800">Illegal Dumping - Sector 4</p>
          </div>
        </div>
      </div>

      {/* Marker 2 - Moderate Zone */}
      <div className="absolute top-[50%] right-[25%] group cursor-pointer">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-12 h-12 bg-orange-500 rounded-full animate-ping opacity-40 duration-1000"></div>
          <div className="relative w-5 h-5 bg-orange-600 border-2 border-white rounded-full shadow-[0_0_15px_rgba(234,88,12,0.8)]"></div>
          <div className="absolute top-8 left-0 bg-white px-3 py-1 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
             <p className="text-[10px] font-bold text-gray-800">Water Logging - MG Road</p>
          </div>
        </div>
      </div>

      {/* Marker 3 - Fixed/Low Zone */}
      <div className="absolute bottom-[25%] left-[45%] group cursor-pointer">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-40 duration-700"></div>
          <div className="relative w-5 h-5 bg-green-500 border-2 border-white rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
          <div className="absolute top-8 left-0 bg-white px-3 py-1 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
             <p className="text-[10px] font-bold text-gray-800">Recently Resolved</p>
          </div>
        </div>
      </div>

      {/* 🔝 MAP FLOATING HEADER (Branded) */}
      <div className="absolute top-6 left-4 right-4 max-w-2xl mx-auto bg-white/90 backdrop-blur-xl px-5 py-4 rounded-[2rem] shadow-2xl flex justify-between items-center z-10 border border-white/20">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Darpan" className="h-8 w-auto" />
          <div className="h-6 w-[1px] bg-gray-300"></div>
          <div>
            <h2 className="font-black text-gray-900 text-sm tracking-tight leading-none italic">DARPAN MAP</h2>
            <p className="text-[10px] text-red-500 font-bold mt-1 animate-pulse uppercase tracking-wider">● 3 Active Zones</p>
          </div>
        </div>
        <button className="bg-gray-100 p-3 rounded-full text-xl shadow-inner hover:bg-gray-200 transition-colors">🎯</button>
      </div>

      {/* 📊 FLOATING STATS CARD (Bottom Right) */}
      <div className="absolute bottom-10 right-6 bg-slate-900/80 backdrop-blur-lg p-4 rounded-2xl border border-white/10 text-white shadow-2xl hidden sm:block">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">City Health Index</p>
        <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-green-400">84%</span>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <p className="text-[10px] leading-tight text-slate-300">Cleanliness up<br/>by 12% this week</p>
        </div>
      </div>

    </div>
  );
};


export default MapPage;
