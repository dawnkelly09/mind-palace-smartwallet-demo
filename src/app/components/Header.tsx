'use client'
import Link from 'next/link';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { coinbaseWallet } from 'wagmi/connectors';
import { BlueCreateWalletButton } from './BlueCreateWalletButton';
import '../globals.css'

function Header() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <main className='header-container'>
      <div>
        <Link href="/">
          <h1>🧠 🏰 Mind Palace</h1>
        </Link>
      </div>
      <div className='button-row'>
        <BlueCreateWalletButton />
      <button className="button-styles" onClick={() => connect({ connector: coinbaseWallet() })}>
          Connect
        </button>
        {account.status === 'connected' && (
          <button className="button-styles" type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
        
      </div>
    </main>
  )
}

export default Header