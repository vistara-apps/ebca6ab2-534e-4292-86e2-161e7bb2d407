'use client';

import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  return (
    <button className="btn-primary flex items-center gap-2">
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  );
}
