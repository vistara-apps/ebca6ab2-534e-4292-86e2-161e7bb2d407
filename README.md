# ForgePack Collectibles

A Base Mini App for minting and opening ERC1155 collectible packs, displaying user inventories, and providing an admin interface for creators.

## Features

- **Pack Minting**: Gas-sponsored minting of collectible packs
- **Inventory Management**: View and showcase your collection
- **Interactive Pack Opening**: Reveal cards with engaging animations
- **Points & Rewards**: Earn points from pack openings
- **Creator Admin Panel**: Configure pack drops and manage cards
- **Farcaster Integration**: Social sharing and notifications

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.local.example` to `.env.local` and configure:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Configuration

### Wallet Connection
The app uses OnchainKit's wallet components with Coinbase Smart Wallet:
- **Smart Wallet Only**: Configured for streamlined onboarding
- **Coinbase Wallet Connector**: Integrated via wagmi
- **Base Network**: Optimized for Base mainnet

The wallet connection is implemented with:
- `WagmiProvider` for wallet state management
- `OnchainKitProvider` for Base integration
- `ConnectWallet` component with identity features (Avatar, Name, Address, ETH Balance)

### OnchainKit Setup
1. Get an API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
2. Configure paymaster for gas sponsorship
3. Update `.env.local` with your credentials

### Contract Deployment
1. Deploy ERC1155 Pack Drop contract
2. Deploy Opener contract
3. Update contract addresses in `.env.local`

### Admin Access
Add authorized Farcaster FIDs to `ADMIN_FIDS` in `.env.local`

## Project Structure

```
app/
├── components/          # React components
│   ├── AppShell.tsx    # Main layout with wallet integration
│   ├── MintSection.tsx # Pack minting
│   ├── InventorySection.tsx # Collection view
│   ├── OpenPackSection.tsx # Pack opening
│   └── AdminPanel.tsx  # Creator tools
├── layout.tsx          # Root layout
├── page.tsx            # Main page
├── providers.tsx       # Context providers (Wagmi, OnchainKit, React Query)
└── globals.css         # Global styles

lib/
└── wagmi.ts            # Wagmi configuration

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to Vercel or your preferred hosting platform

3. Configure custom domain and update `farcaster.json`

## License

MIT
