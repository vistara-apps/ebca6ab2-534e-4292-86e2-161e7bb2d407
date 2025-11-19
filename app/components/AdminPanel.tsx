'use client';

import { useState } from 'react';
import { Shield, Settings2, Upload, Save } from 'lucide-react';

interface PackConfig {
  packType: string;
  cardIds: string;
  weights: string;
  missWeight: string;
}

export function AdminPanel() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [config, setConfig] = useState<PackConfig>({
    packType: 'Genesis',
    cardIds: '1,2,3,4,5',
    weights: '10,20,30,25,15',
    missWeight: '5',
  });

  const handleAuthorize = () => {
    // FID verification logic will be implemented here
    setIsAuthorized(true);
  };

  const handleSaveConfig = () => {
    console.log('Saving config:', config);
    // Contract interaction logic will be implemented here
  };

  if (!isAuthorized) {
    return (
      <div className="card max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <Shield className="text-primary" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-fg mb-2">Admin Access Required</h2>
        <p className="text-fg/60 mb-6">
          This section is restricted to authorized creators. Please verify your identity to continue.
        </p>
        <button onClick={handleAuthorize} className="btn-primary">
          Verify with Farcaster
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Settings2 className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-fg">Creator Dashboard</h2>
            <p className="text-sm text-fg/60">Manage pack configurations and drops</p>
          </div>
        </div>
      </div>

      {/* Pack Configuration */}
      <div className="card">
        <h3 className="text-xl font-bold text-fg mb-4">Pack Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-fg/70 mb-2">
              Pack Type
            </label>
            <input
              type="text"
              value={config.packType}
              onChange={(e) => setConfig({ ...config, packType: e.target.value })}
              className="input"
              placeholder="e.g., Genesis, Legendary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fg/70 mb-2">
              Card IDs (comma-separated)
            </label>
            <input
              type="text"
              value={config.cardIds}
              onChange={(e) => setConfig({ ...config, cardIds: e.target.value })}
              className="input"
              placeholder="e.g., 1,2,3,4,5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fg/70 mb-2">
              Weights (comma-separated)
            </label>
            <input
              type="text"
              value={config.weights}
              onChange={(e) => setConfig({ ...config, weights: e.target.value })}
              className="input"
              placeholder="e.g., 10,20,30,25,15"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fg/70 mb-2">
              Miss Weight
            </label>
            <input
              type="text"
              value={config.missWeight}
              onChange={(e) => setConfig({ ...config, missWeight: e.target.value })}
              className="input"
              placeholder="e.g., 5"
            />
          </div>

          <button onClick={handleSaveConfig} className="btn-primary w-full">
            <Save size={18} className="inline mr-2" />
            Save Configuration
          </button>
        </div>
      </div>

      {/* Card Forge */}
      <div className="card">
        <h3 className="text-xl font-bold text-fg mb-4">Card Forge</h3>
        <p className="text-sm text-fg/60 mb-4">
          Create and design new collectible cards for your packs
        </p>
        
        <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="text-fg/40 mx-auto mb-3" size={48} />
          <p className="text-fg/60 text-sm">
            Click to upload card artwork or drag and drop
          </p>
          <p className="text-fg/40 text-xs mt-2">
            PNG, JPG up to 10MB
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="btn-secondary">
            Preview Cards
          </button>
          <button className="btn-primary">
            Export Metadata
          </button>
        </div>
      </div>

      {/* Contract Management */}
      <div className="card">
        <h3 className="text-xl font-bold text-fg mb-4">Contract Management</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <span className="text-sm text-fg/70">Pack Drop Contract</span>
            <span className="text-xs font-mono text-primary">0x1234...5678</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <span className="text-sm text-fg/70">Opener Contract</span>
            <span className="text-xs font-mono text-primary">0xabcd...ef01</span>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <span className="text-sm text-fg/70">Network</span>
            <span className="text-xs text-success">Base Mainnet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
