import React from 'react';
import logo from './assets/logo.png'; // 👈 Logo for branding

const LeaderboardPage = () => {
  const leaders = [
    { rank: 1, name: "Ankit Pandit", score: 9850, avatar: "https://i.pravatar.cc/150?img=11", medal: "🥇" },
    { rank: 2, name: "Priya Sharma", score: 8420, avatar: "https://i.pravatar.cc/150?img=5", medal: "🥈" },
    { rank: 3, name: "Rahul Dev", score: 7900, avatar: "https://i.pravatar.cc/150?img=8", medal: "🥉" },
    { rank: 4, name: "Neha Singh", score: 6200, avatar: "https://i.pravatar.cc/150?img=2" },
    { rank: 5, name: "Amit Kumar", score: 5800, avatar: "https://i.pravatar.cc/150?img=33" },
    { rank: 6, name: "Sneha Rao", score: 5100, avatar: "https://i.pravatar.cc/150?img=9" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans text-gray-800">
      
      {/* 🏷️ BRANDED HEADER (Matching Home & Map) */}
      <header className="bg-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Darpan" className="h-8 w-auto" />
          <div className="h-5 w-[1px] bg-gray-200 mx-1"></div>
          <span className="text-xs font-black text-purple-600 tracking-widest uppercase">Rankings</span>
        </div>
        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-[10px] font-bold">
          MARCH 2026
        </div>
      </header>

      {/* 🏆 GRADIENT TOP SECTION */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 px-6 pt-8 pb-20 rounded-b-[50px] shadow-xl text-center relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full -ml-10 -mb-10 blur-xl"></div>
        
        <h1 className="text-3xl font-black text-white relative z-10 tracking-tight">Civic Heroes</h1>
        <p className="text-purple-100 mt-1 relative z-10 text-sm font-medium">Our top city transformers this month</p>
      </div>

      {/* 👑 TOP 3 PODIUM (Visual Hack - Adjusted for PC/Mobile) */}
      <div className="flex justify-center items-end gap-3 -mt-14 px-4 relative z-20 mb-10 max-w-md mx-auto">
        
        {/* Rank 2 - Silver */}
        <div className="flex flex-col items-center group transition-transform hover:scale-105">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-slate-300 shadow-lg overflow-hidden bg-white ring-4 ring-slate-300/20">
              <img src={leaders[1].avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-2 -right-1 bg-slate-300 text-[10px] px-2 py-0.5 rounded-full font-black text-slate-700 shadow-sm">#2</div>
          </div>
          <p className="text-[10px] font-bold mt-2 text-white sm:text-gray-700 truncate w-16 text-center">{leaders[1].name.split(' ')[0]}</p>
          <div className="bg-white px-3 py-1 rounded-full shadow-md mt-1 text-[11px] font-black text-slate-600 border border-slate-100 italic">
            🥈 {leaders[1].score}
          </div>
        </div>

        {/* Rank 1 - Gold */}
        <div className="flex flex-col items-center mb-6 group transition-transform hover:scale-110">
          <div className="relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl animate-bounce">👑</div>
             <div className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-2xl overflow-hidden bg-white ring-8 ring-yellow-400/20">
               <img src={leaders[0].avatar} alt="" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-black text-yellow-800 shadow-sm">#1</div>
          </div>
          <p className="text-xs font-black mt-2 text-white sm:text-gray-900 truncate w-20 text-center uppercase tracking-tighter">{leaders[0].name}</p>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-1.5 rounded-full shadow-xl mt-1 text-xs font-black text-white border border-yellow-300">
            🏆 {leaders[0].score}
          </div>
        </div>

        {/* Rank 3 - Bronze */}
        <div className="flex flex-col items-center group transition-transform hover:scale-105">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-orange-300 shadow-lg overflow-hidden bg-white ring-4 ring-orange-300/20">
              <img src={leaders[2].avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-2 -right-1 bg-orange-300 text-[10px] px-2 py-0.5 rounded-full font-black text-orange-800 shadow-sm">#3</div>
          </div>
          <p className="text-[10px] font-bold mt-2 text-white sm:text-gray-700 truncate w-16 text-center">{leaders[2].name.split(' ')[0]}</p>
          <div className="bg-white px-3 py-1 rounded-full shadow-md mt-1 text-[11px] font-black text-orange-600 border border-orange-100 italic">
            🥉 {leaders[2].score}
          </div>
        </div>

      </div>

      {/* 📜 REMAINING LIST */}
      <div className="max-w-2xl mx-auto px-5 space-y-3 mt-4">
        <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 pl-2">Top Citizens</h3>
        {leaders.slice(3).map((user) => (
          <div key={user.rank} className="bg-white p-4 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between border border-gray-100 transition-all hover:bg-purple-50 group">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-black text-sm w-5 group-hover:text-purple-300">0{user.rank}</span>
              <img src={user.avatar} className="w-11 h-11 rounded-full border-2 border-gray-50 shadow-sm" alt="" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{user.name}</h3>
                <p className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase">Contributor</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-purple-600 font-black text-sm">{user.score.toLocaleString()}</p>
              <p className="text-[9px] text-gray-400 font-bold uppercase">Points</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LeaderboardPage;