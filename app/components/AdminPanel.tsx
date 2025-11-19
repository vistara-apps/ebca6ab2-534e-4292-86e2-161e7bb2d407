'use client';

import { Settings2, Plus, Save, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function AdminPanel() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  if (!isAuthorized) {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-error/20 flex items-center justify-center">
          <AlertCircle className="w-8 h-8 text-error" />
        </div>
        <h2 className="text-xl font-bold text-fg mb-2">Access Restricted</h2>
        <p className="text-fg/60 mb-6">This section is only available to authorized creators</p>
        <button
          onClick={() => setIsAuthorized(true)}
          className="btn-primary"
        >
          Verify Admin Access
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex items-center gap-3 mb-2">
          <Settings2 className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-fg">Creator Admin Panel</h2>
        </div>
        <p className="text-fg/60">Configure pack drops, manage cards, and control contract settings</p>
      </div>

      {/* Pack Configuration */}
      <div className="card">
        <h3 className="text-lg font-semibold text-fg mb-4">Pack Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-fg/80 mb-2">Pack Name</label>
            <input
              type="text"
              placeholder="Enter pack name"
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-fg/80 mb-2">Price (ETH)</label>
            <input
              type="number"
              step="0.001"
              placeholder="0.01"
              className="input-field w-full"
            />
          </div>
          <div>
            <label className="block text-sm text-fg/80 mb-2">Max Supply</label>
            <input
              type="number"
              placeholder="1000"
              className="input-field w-full"
            />
          </div>
        </div>
      </div>

      {/* Card Slots Configuration */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-fg">Card Slots</h3>
          <button className="btn-secondary text-sm py-2 px-4 flex items-center gap-1">
            <Plus className="w-4 h-4" />
            Add Slot
          </button>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((slot) => (
            <div key={slot} className="p-4 rounded-lg bg-surface border border-fg/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-fg">Slot {slot}</span>
                <button className="text-error text-sm hover:underline">Remove</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-fg/60 mb-1">Card ID</label>
                  <input type="text" className="input-field w-full text-sm" placeholder="1" />
                </div>
                <div>
                  <label className="block text-xs text-fg/60 mb-1">Weight</label>
                  <input type="number" className="input-field w-full text-sm" placeholder="100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contract Actions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-fg mb-4">Contract Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button className="btn-primary flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            Save Configuration
          </button>
          <button className="btn-secondary flex items-center justify-center gap-2">
            <Settings2 className="w-4 h-4" />
            Update Contract
          </button>
        </div>
      </div>
    </div>
  );
}
