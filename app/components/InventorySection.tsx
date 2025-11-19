'use client';

import { useState } from 'react';
import { Package, Sparkles, Share2 } from 'lucide-react';

interface Pack {
  id: string;
  name: string;
  type: string;
  isOpened: boolean;
  imageUrl: string;
}

interface Card {
  id: string;
  name: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  imageUrl: string;
  balance: number;
}

const MOCK_PACKS: Pack[] = [
  { id: '1', name: 'Genesis Pack #342', type: 'Genesis', isOpened: false, imageUrl: '/pack-1.png' },
  { id: '2', name: 'Genesis Pack #343', type: 'Genesis', isOpened: false, imageUrl: '/pack-2.png' },
  { id: '3', name: 'Legendary Pack #128', type: 'Legendary', isOpened: true, imageUrl: '/pack-3.png' },
];

const MOCK_CARDS: Card[] = [
  { id: '1', name: 'Dragon Warrior', rarity: 'legendary', imageUrl: '/card-1.png', balance: 1 },
  { id: '2', name: 'Forest Mage', rarity: 'epic', imageUrl: '/card-2.png', balance: 2 },
  { id: '3', name: 'Shadow Assassin', rarity: 'rare', imageUrl: '/card-3.png', balance: 3 },
  { id: '4', name: 'Knight Guardian', rarity: 'common', imageUrl: '/card-4.png', balance: 5 },
];

const RARITY_COLORS = {
  common: 'from-gray-500 to-gray-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-yellow-500 to-orange-600',
};

export function InventorySection() {
  const [view, setView] = useState<'packs' | 'cards'>('packs');
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);

  const handleOpenPacks = () => {
    console.log('Opening packs:', selectedPacks);
    // Pack opening logic will be implemented here
  };

  const handleShare = (item: Pack | Card) => {
    console.log('Sharing:', item);
    // Farcaster share logic will be implemented here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-fg">My Collection</h2>
            <p className="text-sm text-fg/60 mt-1">
              {view === 'packs' ? `${MOCK_PACKS.length} packs` : `${MOCK_CARDS.length} unique cards`}
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setView('packs')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                view === 'packs'
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-fg/60 hover:bg-white/10'
              }`}
            >
              Packs
            </button>
            <button
              onClick={() => setView('cards')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                view === 'cards'
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-fg/60 hover:bg-white/10'
              }`}
            >
              Cards
            </button>
          </div>
        </div>

        {/* Points Display */}
        <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20">
          <Sparkles className="text-primary" size={24} />
          <div>
            <p className="text-sm text-fg/70">Total Points</p>
            <p className="text-2xl font-bold text-fg">1,250</p>
          </div>
        </div>
      </div>

      {/* Packs View */}
      {view === 'packs' && (
        <>
          {selectedPacks.length > 0 && (
            <div className="card">
              <div className="flex items-center justify-between">
                <p className="text-sm text-fg/70">
                  {selectedPacks.length} pack{selectedPacks.length > 1 ? 's' : ''} selected
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedPacks([])}
                    className="btn-secondary text-sm"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleOpenPacks}
                    className="btn-primary text-sm"
                  >
                    Open Selected
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {MOCK_PACKS.map((pack) => (
              <div
                key={pack.id}
                className={`card cursor-pointer transition-all duration-200 ${
                  selectedPacks.includes(pack.id)
                    ? 'ring-2 ring-primary'
                    : 'hover:shadow-xl'
                } ${pack.isOpened ? 'opacity-50' : ''}`}
                onClick={() => {
                  if (!pack.isOpened) {
                    setSelectedPacks((prev) =>
                      prev.includes(pack.id)
                        ? prev.filter((id) => id !== pack.id)
                        : [...prev, pack.id]
                    );
                  }
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center">
                  <Package className="text-primary" size={48} />
                </div>
                <h3 className="font-semibold text-fg text-sm mb-1">{pack.name}</h3>
                <p className="text-xs text-fg/60">{pack.type}</p>
                {pack.isOpened && (
                  <span className="inline-block mt-2 px-2 py-1 rounded text-xs bg-white/5 text-fg/50">
                    Opened
                  </span>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Cards View */}
      {view === 'cards' && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MOCK_CARDS.map((card) => (
            <div key={card.id} className="card hover:shadow-xl transition-all duration-200 group">
              <div className={`aspect-[3/4] bg-gradient-to-br ${RARITY_COLORS[card.rarity]} rounded-lg mb-3 flex items-center justify-center relative overflow-hidden`}>
                <Sparkles className="text-white/80" size={48} />
                <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/50 text-white text-xs font-medium capitalize">
                  {card.rarity}
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white text-xs font-bold flex items-center justify-center">
                  ×{card.balance}
                </div>
              </div>
              <h3 className="font-semibold text-fg text-sm mb-2">{card.name}</h3>
              <button
                onClick={() => handleShare(card)}
                className="btn-secondary w-full text-xs py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <Share2 size={14} className="inline mr-1" />
                Share
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
