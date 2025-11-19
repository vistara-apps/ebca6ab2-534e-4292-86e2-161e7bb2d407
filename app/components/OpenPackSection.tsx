'use client';

import { Package, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Pack {
  id: string;
  name: string;
  balance: number;
  isApproved: boolean;
}

const mockPacks: Pack[] = [
  { id: '1', name: 'Genesis Pack', balance: 3, isApproved: false },
  { id: '2', name: 'Rare Legends Pack', balance: 1, isApproved: false },
];

export function OpenPackSection() {
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isOpening, setIsOpening] = useState(false);

  const handleApprove = (packId: string) => {
    console.log(`Approving pack ${packId}`);
    // TODO: Implement approval transaction
  };

  const handleOpen = () => {
    if (!selectedPack) return;
    setIsOpening(true);
    console.log(`Opening ${quantity} pack(s) of ${selectedPack}`);
    // TODO: Implement pack opening transaction and animation
    setTimeout(() => {
      setIsOpening(false);
    }, 3000);
  };

  const selected = mockPacks.find(p => p.id === selectedPack);

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-fg mb-2">Open Packs</h2>
        <p className="text-fg/60">Reveal your cards and earn points through pack opening</p>
      </div>

      {/* Pack Selection */}
      <div className="card">
        <h3 className="text-lg font-semibold text-fg mb-4">Select Pack to Open</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockPacks.map((pack) => (
            <button
              key={pack.id}
              onClick={() => setSelectedPack(pack.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedPack === pack.id
                  ? 'border-accent bg-accent/10'
                  : 'border-fg/10 hover:border-fg/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-fg">{pack.name}</h4>
                  <p className="text-sm text-fg/60">Balance: {pack.balance}</p>
                </div>
                {pack.isApproved && (
                  <CheckCircle className="w-5 h-5 text-success" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Opening Controls */}
      {selectedPack && (
        <div className="card space-y-4">
          <h3 className="text-lg font-semibold text-fg">Opening Options</h3>
          
          {/* Quantity Selector */}
          <div>
            <label className="block text-sm text-fg/80 mb-2">Number of Packs</label>
            <input
              type="number"
              min="1"
              max={selected?.balance || 1}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="input-field w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {!selected?.isApproved && (
              <button
                onClick={() => handleApprove(selectedPack)}
                className="btn-secondary w-full"
              >
                Approve Pack Transfer
              </button>
            )}
            <button
              onClick={handleOpen}
              disabled={!selected?.isApproved || isOpening}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isOpening ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Opening...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Open {quantity} Pack{quantity > 1 ? 's' : ''}
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Opening Animation Placeholder */}
      {isOpening && (
        <div className="card bg-gradient-to-br from-accent/20 to-accent/5">
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
              <Sparkles className="w-12 h-12 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-fg mb-2">Opening Pack...</h3>
            <p className="text-fg/60">Revealing your cards</p>
          </div>
        </div>
      )}
    </div>
  );
}
