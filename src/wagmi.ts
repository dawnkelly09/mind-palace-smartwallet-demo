import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [baseSepolia], //add mainnet, sepolia, etc here if desired
  connectors: [
    //injected(),
    coinbaseWallet({ appName: 'Mind Palace - Create Smart Wallet',  preference: 'smartWalletOnly'}),
    //walletConnect({ projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }),
  ],
  ssr: true,
  transports: {
    //[mainnet.id]: http(),
    //[sepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
