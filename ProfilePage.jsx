import React, { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('My Reports');
  const tabs = ['My Reports', 'Saved', 'Upvoted'];

  // Dummy user posts for the profile grid
  const userPosts = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500',
    'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500',
    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500',
    'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?w=500',
    'https://images.unsplash.com/photo-1506484381205-f7945653044d?w=500',
    'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=500',
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans text-gray-800">
      
      {/* 🔝 HEADER & COVER SECTION */}
      <div className="relative bg-white pb-6 rounded-b-3xl shadow-sm">
        {/* Top Navbar */}
        <div className="absolute top-0 w-full flex justify-between px-4 py-4 z-10">
          <button className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow text-gray-800">
            ⬅️
          </button>
          <button className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow text-gray-800">
            ⚙️
          </button>
        </div>

        {/* Cover Image */}
        <div className="h-40 w-full bg-gradient-to-r from-purple-400 to-blue-500 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800" 
            alt="Cover" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        </div>

        {/* Profile Avatar & Info */}
        <div className="px-4 -mt-12 relative flex flex-col items-center">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="Profile Avatar" 
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold text-gray-900 mt-3">Ankit Pandit</h2>
          <p className="text-sm text-gray-500 font-medium">@ankit_civic_hero</p>
          
          <p className="text-center text-gray-600 text-sm mt-3 px-6">
            Passionate about keeping my city clean. Open source contributor & AI enthusiast. 🌍✨
          </p>

          <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition shadow-md">
            Edit Profile
          </button>
        </div>

        {/* 📊 STATS SECTION */}
        <div className="flex justify-center items-center gap-8 mt-6 border-t border-gray-100 pt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">42</p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Reported</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-green-500">38</p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Resolved</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">1.2k</p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Upvotes</p>
          </div>
        </div>
      </div>

      {/* 📁 TABS SECTION */}
      <div className="flex justify-around px-4 mt-4 bg-transparent">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-semibold transition-all duration-300 w-1/3 text-center ${
              activeTab === tab 
                ? 'text-purple-600 border-b-2 border-purple-600' 
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🖼️ POSTS GRID (Instagram Style) */}
      <div className="px-1 mt-4 grid grid-cols-3 gap-1">
        {userPosts.map((img, index) => (
          <div key={index} className="aspect-square bg-gray-200">
            <img 
              src={img} 
              alt={`Post ${index}`} 
              className="w-full h-full object-cover hover:opacity-80 transition cursor-pointer"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfilePage;