'use client';

import { Package, Sparkles, Share2 } from 'lucide-react';

interface CollectibleItem {
  id: string;
  name: string;
  type: 'pack' | 'card';
  rarity?: string;
  balance: number;
  imageUrl: string;
  isOpened?: boolean;
}

const mockInventory: CollectibleItem[] = [
  {
    id: '1',
    name: 'Genesis Pack',
    type: 'pack',
    balance: 3,
    imageUrl: '/pack-genesis.png',
    isOpened: false,
  },
  {
    id: '2',
    name: 'Dragon Warrior',
    type: 'card',
    rarity: 'Legendary',
    balance: 1,
    imageUrl: '/card-dragon.png',
  },
  {
    id: '3',
    name: 'Mystic Healer',
    type: 'card',
    rarity: 'Rare',
    balance: 2,
    imageUrl: '/card-healer.png',
  },
];

export function InventorySection() {
  const handleShare = (item: CollectibleItem) => {
    console.log(`Sharing ${item.name}`);
    // TODO: Implement Farcaster composeCast integration
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-fg mb-2">My Collection</h2>
        <p className="text-fg/60">Browse and showcase your collectible packs and cards</p>
      </div>

      {/* Points Display */}
      <div className="card bg-gradient-to-r from-accent/20 to-accent/10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-fg/60 mb-1">Total Points</p>
            <p className="text-3xl font-bold text-fg">1,250</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockInventory.map((item) => (
          <div key={item.id} className="card hover:scale-105 transition-transform duration-200">
            {/* Item Image Placeholder */}
            <div className="w-full aspect-square bg-accent/20 rounded-lg mb-3 flex items-center justify-center relative">
              {item.type === 'pack' ? (
                <Package className="w-12 h-12 text-accent" />
              ) : (
                <Sparkles className="w-12 h-12 text-accent" />
              )}
              {item.balance > 1 && (
                <div className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                  x{item.balance}
                </div>
              )}
            </div>

            {/* Item Info */}
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold text-fg text-sm">{item.name}</h3>
                {item.rarity && (
                  <p className="text-xs text-accent">{item.rarity}</p>
                )}
              </div>

              {/* Share Button */}
              <button
                onClick={() => handleShare(item)}
                className="btn-secondary w-full text-sm py-2 flex items-center justify-center gap-1"
              >
                <Share2 className="w-3 h-3" />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
