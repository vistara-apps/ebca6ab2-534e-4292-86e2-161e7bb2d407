'use client';

import { type ReactNode } from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Wallet } from '@coinbase/onchainkit/wallet';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-fg/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">FP</span>
            </div>
            <span className="font-bold text-lg text-fg">ForgePack</span>
          </div>
          <Wallet>
            <ConnectWallet />
          </Wallet>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-lg border-t border-fg/10 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-fg/60">
          <p>Built on Base • Powered by OnchainKit</p>
        </div>
      </footer>
    </div>
  );
}
