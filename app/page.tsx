'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { MintSection } from './components/MintSection';
import { InventorySection } from './components/InventorySection';
import { AdminPanel } from './components/AdminPanel';
import { Package, Grid3x3, Settings2 } from 'lucide-react';

type Tab = 'mint' | 'inventory' | 'admin';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('mint');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-fg/60">Loading ForgePack...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {activeTab === 'mint' && <MintSection />}
          {activeTab === 'inventory' && <InventorySection />}
          {activeTab === 'admin' && <AdminPanel />}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 py-3">
            <button
              onClick={() => setActiveTab('mint')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'mint'
                  ? 'text-primary bg-primary/10'
                  : 'text-fg/60 hover:text-fg hover:bg-white/5'
              }`}
            >
              <Package size={24} />
              <span className="text-xs font-medium">Mint</span>
            </button>
            
            <button
              onClick={() => setActiveTab('inventory')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'inventory'
                  ? 'text-primary bg-primary/10'
                  : 'text-fg/60 hover:text-fg hover:bg-white/5'
              }`}
            >
              <Grid3x3 size={24} />
              <span className="text-xs font-medium">Inventory</span>
            </button>
            
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'admin'
                  ? 'text-primary bg-primary/10'
                  : 'text-fg/60 hover:text-fg hover:bg-white/5'
              }`}
            >
              <Settings2 size={24} />
              <span className="text-xs font-medium">Admin</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
