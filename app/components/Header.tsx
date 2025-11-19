'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Package } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Package className="text-primary" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-fg">ForgePack</h1>
              <p className="text-xs text-fg/60">Collectibles on Base</p>
            </div>
          </div>
          
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
