'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Package, Sparkles, Trophy, Settings2 } from 'lucide-react';
import { AppShell } from './components/AppShell';
import { MintSection } from './components/MintSection';
import { InventorySection } from './components/InventorySection';
import { OpenPackSection } from './components/OpenPackSection';
import { AdminPanel } from './components/AdminPanel';

type TabType = 'mint' | 'inventory' | 'open' | 'admin';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('mint');
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-fg/60">Loading ForgePack...</p>
        </div>
      </div>
    );
  }

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-fg">ForgePack Collectibles</h1>
              <p className="text-fg/60">Mint, collect, and showcase unique onchain card packs</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('mint')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === 'mint'
                ? 'bg-accent text-white'
                : 'bg-surface text-fg/60 hover:text-fg'
            }`}
          >
            <Package className="w-4 h-4" />
            Mint Packs
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === 'inventory'
                ? 'bg-accent text-white'
                : 'bg-surface text-fg/60 hover:text-fg'
            }`}
          >
            <Trophy className="w-4 h-4" />
            My Collection
          </button>
          <button
            onClick={() => setActiveTab('open')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === 'open'
                ? 'bg-accent text-white'
                : 'bg-surface text-fg/60 hover:text-fg'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Open Packs
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === 'admin'
                ? 'bg-accent text-white'
                : 'bg-surface text-fg/60 hover:text-fg'
            }`}
          >
            <Settings2 className="w-4 h-4" />
            Admin
          </button>
        </div>

        {/* Content Sections */}
        <div className="animate-fadeIn">
          {activeTab === 'mint' && <MintSection />}
          {activeTab === 'inventory' && <InventorySection />}
          {activeTab === 'open' && <OpenPackSection />}
          {activeTab === 'admin' && <AdminPanel />}
        </div>
      </div>
    </AppShell>
  );
}
