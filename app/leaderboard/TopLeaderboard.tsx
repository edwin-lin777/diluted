'use client'
import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

export default function ModernLeaderboard() {
  const [leaders] = useState([
    { 
      id: 1, 
      name: 'OpenAI', 
      score: 2847,
      change: '+127',
      rank: 1,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    { 
      id: 2, 
      name: 'Metal', 
      score: 2643,
      change: '+94',
      rank: 2,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
    },
    { 
      id: 3, 
      name: 'Google', 
      score: 2401,
      change: '+82',
      rank: 3,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan'
    }
  ]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
        <div  className="fixed mt-25 top-0 left-0">
        <div className="flex flex-col  gap-3 mb-2">
            <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <h1 className="text-4xl font-light text-white tracking-tight">Leaderboard</h1> 
            </div>
             <p className="text-gray-500 text-sm ml-7">Top performers this week</p>
          </div>
        </div>
        
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          
         
        </div>

        {/* Leaderboard Cards */}
        <div className="space-y-3">
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className="group relative bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                leader.rank === 1 ? 'from-purple-500/20 via-pink-500/20 to-purple-500/20' :
                leader.rank === 2 ? 'from-blue-500/20 via-cyan-500/20 to-blue-500/20' :
                'from-emerald-500/20 via-teal-500/20 to-emerald-500/20'
              }`}></div>
              
              <div className="relative p-6 flex items-center gap-6">
                {/* Rank */}
                <div className="flex-shrink-0 w-16 text-center">
                  <div className={`text-5xl font-bold bg-gradient-to-br bg-clip-text text-transparent ${
                    leader.rank === 1 ? 'from-purple-400 to-pink-600' :
                    leader.rank === 2 ? 'from-blue-400 to-cyan-600' :
                    'from-emerald-400 to-teal-600'
                  }`}>
                    {leader.rank}
                  </div>
                </div>

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br p-0.5 ${
                    leader.rank === 1 ? 'from-purple-500 to-pink-500' :
                    leader.rank === 2 ? 'from-blue-500 to-cyan-500' :
                    'from-emerald-500 to-teal-500'
                  }`}>
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-white text-xl font-semibold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-lg mb-1">{leader.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">{leader.change}</span>
                    <span>this week</span>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right flex-shrink-0">
                  <div className="text-3xl font-bold text-white mb-1">
                    {leader.score.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Amount of longs 
                  </div>
                </div>

                {/* Rank Badge */}
                {leader.rank === 1 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    LEADER
                  </div>
                )}
              </div>

              {/* Bottom Border Accent */}
              <div className={`h-0.5 bg-gradient-to-r ${
                leader.rank === 1 ? 'from-transparent via-purple-500 to-transparent' :
                leader.rank === 2 ? 'from-transparent via-blue-500 to-transparent' :
                'from-transparent via-emerald-500 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Players</div>
            <div className="text-white text-2xl font-bold">1,247</div>
          </div>
          <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Avg Score</div>
            <div className="text-white text-2xl font-bold">1,856</div>
          </div>
           
        </div>
      </div>
    </div>
  );
}