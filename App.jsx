import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import MapPage from './MapPage'; 
import LeaderboardPage from './LeaderboardPage';
import ProfilePage from './ProfilePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'map': return <MapPage />;
      case 'leaderboard': return <LeaderboardPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    // 👇 Ab Background poori screen par gray rahega (Koi black bars nahi!)
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      
      {/* 👇 MAIN CONTENT: Laptop pe center rahega par width zyada lega (max-w-4xl) */}
      <main className="flex-1 w-full max-w-4xl mx-auto bg-white shadow-sm relative min-h-screen pb-24">
        {renderPage()}
      </main>

      {/* 🚨 REPORT MODAL: Ab yeh bhi responsive hai */}
      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex justify-center items-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Report an Issue</h2>
              <button onClick={() => setIsReportModalOpen(false)} className="text-gray-400 text-2xl">✖</button>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl h-40 flex flex-col items-center justify-center bg-gray-50 text-gray-500 cursor-pointer">
                <span className="text-4xl mb-2">📸</span>
                <span className="font-semibold">Upload Issue Photo</span>
              </div>
              <input type="text" placeholder="Issue Title" className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none" />
              <textarea placeholder="Description..." rows="3" className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
              <button 
                onClick={() => { alert("Reported!"); setIsReportModalOpen(false); }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🧭 BOTTOM NAVIGATION: Laptop par bhi center mein tameez se dikhega */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 z-[100]">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-3 px-8 relative">
          
          <button onClick={() => setCurrentPage('home')} className={`text-2xl transition-all ${currentPage === 'home' ? 'text-purple-600 scale-110' : 'text-gray-400'}`}>🏠</button>
          <button onClick={() => setCurrentPage('map')} className={`text-2xl transition-all ${currentPage === 'map' ? 'text-purple-600 scale-110' : 'text-gray-400'}`}>🗺️</button>
          
          {/* Plus Button: Laptop par bhi sexy lagega */}
          <button 
            onClick={() => setIsReportModalOpen(true)}
            className="bg-gradient-to-tr from-purple-600 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-4xl shadow-xl -mt-12 border-4 border-white hover:scale-110 transition-transform"
          >
            +
          </button>

          <button onClick={() => setCurrentPage('leaderboard')} className={`text-2xl transition-all ${currentPage === 'leaderboard' ? 'text-purple-600 scale-110' : 'text-gray-400'}`}>🏆</button>
          <button onClick={() => setCurrentPage('profile')} className={`text-2xl transition-all ${currentPage === 'profile' ? 'text-purple-600 scale-110' : 'text-gray-400'}`}>👤</button>
        </div>
      </nav>

    </div>
  );
};

export default App;