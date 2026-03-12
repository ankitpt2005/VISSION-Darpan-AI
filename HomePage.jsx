import React, { useState } from 'react';
import logo from './assets/logo.png'; // 👈 Logo import kiya

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Top');
  const tabs = ['Top', 'Recent', 'My Ward', 'Resolved'];

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'selena.caramoy',
      time: '45 mins ago',
      avatar: 'https://i.pravatar.cc/150?img=1',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500',
      description: 'The streetlights in Sector 14 are finally fixed! Great job by the authorities. 💡✨',
      likes: 4200,
      isLiked: false,
      comments: 24,
    },
    {
      id: 2,
      username: 'rahul_dev',
      time: '2 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=11',
      image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500',
      description: 'Pothole issue on the main highway. Needs immediate attention before monsoon hits. 🌧️🚧',
      likes: 1250,
      isLiked: true,
      comments: 89,
    }
  ]);

  const toggleLike = (id) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        return { 
          ...post, 
          isLiked: !post.isLiked, 
          likes: post.isLiked ? post.likes - 1 : post.likes + 1 
        };
      }
      return post;
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      
      {/* 🏷️ BRANDED HEADER SECTION */}
      <div className="bg-white/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50 border-b border-gray-100">
        <div className="flex justify-between items-center max-w-4xl mx-auto mb-4">
          {/* Logo instead of Text */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Darpan" className="h-10 w-auto" />
            <div className="h-6 w-[2px] bg-gray-200 mx-1"></div>
            <span className="text-sm font-black text-purple-600 tracking-widest uppercase">Feed</span>
          </div>

          <div className="flex gap-5 text-xl">
            <button className="relative text-gray-500 hover:text-purple-600 transition-colors">
              🔔
              <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-gray-500 hover:text-purple-600 transition-colors">✉️</button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-8 max-w-4xl mx-auto overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 whitespace-nowrap text-sm font-bold transition-all relative ${
                activeTab === tab 
                  ? 'text-purple-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 rounded-full animate-in fade-in zoom-in duration-300"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 📱 FEED SECTION */}
      <div className="max-w-xl mx-auto px-4 py-6 space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform hover:scale-[1.01]">
            
            {/* User Info */}
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className="p-[2px] bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full">
                   <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[15px] text-gray-900 leading-none">{post.username}</h3>
                  <p className="text-[11px] text-gray-400 mt-1 font-medium italic">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-300 hover:text-gray-600 transition-colors px-2 text-xl">•••</button>
            </div>

            {/* Post Image */}
            <div className="px-2">
              <img 
                src={post.image} 
                alt="Post Content" 
                className="w-full h-[400px] object-cover rounded-[1.5rem] shadow-inner"
              />
            </div>

            {/* Content Body */}
            <div className="p-5">
              <p className="text-[15px] leading-relaxed text-gray-700 mb-5">
                {post.description}
              </p>

              {/* Interaction Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex gap-6">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-2 group"
                  >
                    <div className={`text-2xl transition-transform active:scale-125 ${post.isLiked ? 'text-red-500' : 'text-gray-300 group-hover:text-gray-400'}`}>
                      {post.isLiked ? '❤️' : '🤍'}
                    </div>
                    <span className="text-sm font-bold text-gray-600">{post.likes.toLocaleString()}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 group">
                    <div className="text-2xl text-gray-300 group-hover:text-gray-400 transition-colors">💬</div>
                    <span className="text-sm font-bold text-gray-600">{post.comments}</span>
                  </button>
                </div>
                
                <button className="text-2xl text-gray-300 hover:text-purple-500 transition-colors">🔖</button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default HomePage;