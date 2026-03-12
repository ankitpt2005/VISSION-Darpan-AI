import React, { useState } from 'react';

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data for the masonry grid (different heights for Pinterest effect)
  const exploreItems = [
    { id: 1, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500', title: 'Street Repair', height: 'h-64' },
    { id: 2, url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500', title: 'Pothole Issue', height: 'h-48' },
    { id: 3, url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500', title: 'Water Logging', height: 'h-72' },
    { id: 4, url: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?w=500', title: 'Clean Drive', height: 'h-56' },
    { id: 5, url: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?w=500', title: 'Park Maintenance', height: 'h-80' },
    { id: 6, url: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=500', title: 'Waste Management', height: 'h-48' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans text-gray-800">
      
      {/* 🔍 SEARCH HEADER SECTION */}
      <div className="bg-white px-4 py-6 rounded-b-3xl shadow-sm sticky top-0 z-50">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 text-lg">
            🔍
          </span>
          <input
            type="text"
            className="w-full bg-gray-100 text-gray-900 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-400 font-medium"
            placeholder="Search issues, wards, or people..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* 🖼️ MASONRY GRID SECTION (Tailwind Magic) */}
      <div className="px-4 mt-6 columns-2 gap-4 space-y-4">
        {exploreItems.map((item) => (
          <div 
            key={item.id} 
            className="relative group break-inside-avoid rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              src={item.url}
              alt={item.title}
              className={`w-full object-cover ${item.height} transition-transform duration-500 group-hover:scale-105`}
            />
            {/* Hover Gradient & Text (Modern UI touch) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white font-semibold text-sm drop-shadow-md">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ExplorePage;