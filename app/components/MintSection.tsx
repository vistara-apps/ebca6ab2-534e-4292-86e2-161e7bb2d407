'use client';

import { Package, Clock, Coins } from 'lucide-react';
import { useState } from 'react';

interface PackDrop {
  id: string;
  name: string;
  description: string;
  price: string;
  currentMinted: number;
  maxSupply: number;
  phase: string;
  imageUrl: string;
}

const mockPackDrops: PackDrop[] = [
  {
    id: '1',
    name: 'Genesis Pack',
    description: 'The first collection of legendary cards',
    price: '0.01 ETH',
    currentMinted: 450,
    maxSupply: 1000,
    phase: 'Public Sale',
    imageUrl: '/pack-genesis.png',
  },
  {
    id: '2',
    name: 'Rare Legends Pack',
    description: 'Exclusive rare cards with unique abilities',
    price: '0.025 ETH',
    currentMinted: 120,
    maxSupply: 500,
    phase: 'Early Access',
    imageUrl: '/pack-rare.png',
  },
];

export function MintSection() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleMint = (packId: string) => {
    const quantity = quantities[packId] || 1;
    console.log(`Minting ${quantity} pack(s) of ${packId}`);
    // TODO: Implement actual minting logic with OnchainKit Transaction component
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-fg mb-2">Active Pack Drops</h2>
        <p className="text-fg/60">Mint new packs from active drops with gas-sponsored transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPackDrops.map((pack) => (
          <div key={pack.id} className="card hover:scale-105 transition-transform duration-200">
            {/* Pack Image Placeholder */}
            <div className="w-full h-48 bg-accent/20 rounded-lg mb-4 flex items-center justify-center">
              <Package className="w-16 h-16 text-accent" />
            </div>

            {/* Pack Info */}
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-fg">{pack.name}</h3>
                <p className="text-sm text-fg/60">{pack.description}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-fg/80">
                  <Clock className="w-4 h-4" />
                  <span>{pack.phase}</span>
                </div>
                <div className="flex items-center gap-1 text-fg/80">
                  <Coins className="w-4 h-4" />
                  <span>{pack.price}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm text-fg/60 mb-1">
                  <span>Minted</span>
                  <span>{pack.currentMinted} / {pack.maxSupply}</span>
                </div>
                <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent transition-all duration-300"
                    style={{ width: `${(pack.currentMinted / pack.maxSupply) * 100}%` }}
                  />
                </div>
              </div>

              {/* Quantity Input */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-fg/80">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantities[pack.id] || 1}
                  onChange={(e) => setQuantities({ ...quantities, [pack.id]: parseInt(e.target.value) || 1 })}
                  className="input-field w-20 text-center"
                />
              </div>

              {/* Mint Button */}
              <button
                onClick={() => handleMint(pack.id)}
                className="btn-primary w-full"
              >
                Mint Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
