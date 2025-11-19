'use client';

import { useState } from 'react';
import { Sparkles, TrendingUp, Clock } from 'lucide-react';

interface PackDrop {
  id: string;
  name: string;
  description: string;
  price: string;
  supply: number;
  minted: number;
  phase: string;
  imageUrl: string;
}

const MOCK_DROPS: PackDrop[] = [
  {
    id: '1',
    name: 'Genesis Pack',
    description: 'First edition collectible cards with rare variants',
    price: '0.01 ETH',
    supply: 1000,
    minted: 342,
    phase: 'Public Sale',
    imageUrl: '/pack-genesis.png',
  },
  {
    id: '2',
    name: 'Legendary Pack',
    description: 'Premium cards with guaranteed rare drops',
    price: '0.05 ETH',
    supply: 500,
    minted: 128,
    phase: 'Early Access',
    imageUrl: '/pack-legendary.png',
  },
];

export function MintSection() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleMint = (packId: string) => {
    console.log(`Minting ${quantity} pack(s) of ${packId}`);
    // Transaction logic will be implemented here
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="card">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="text-primary" size={24} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-fg mb-2">Active Pack Drops</h2>
            <p className="text-fg/70 text-sm leading-relaxed">
              Mint exclusive collectible packs with gas-free transactions. Each pack contains unique cards with varying rarities.
            </p>
          </div>
        </div>
      </div>

      {/* Pack Drops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_DROPS.map((drop) => (
          <div key={drop.id} className="card hover:shadow-xl transition-all duration-300">
            {/* Pack Image */}
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
              <Package className="text-primary" size={80} />
            </div>

            {/* Pack Info */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-fg">{drop.name}</h3>
                  <p className="text-sm text-fg/60 mt-1">{drop.description}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                  {drop.phase}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp size={16} className="text-primary" />
                  <span className="text-fg/70">
                    {drop.minted}/{drop.supply} minted
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-primary" />
                  <span className="text-fg/70">{drop.price}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${(drop.minted / drop.supply) * 100}%` }}
                />
              </div>

              {/* Quantity Selector */}
              {selectedPack === drop.id && (
                <div className="flex items-center gap-3 pt-2">
                  <label className="text-sm text-fg/70">Quantity:</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center input py-1"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-md bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => {
                  if (selectedPack === drop.id) {
                    handleMint(drop.id);
                  } else {
                    setSelectedPack(drop.id);
                  }
                }}
                className="btn-primary w-full"
              >
                {selectedPack === drop.id ? `Mint ${quantity} Pack${quantity > 1 ? 's' : ''}` : 'Select Pack'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
