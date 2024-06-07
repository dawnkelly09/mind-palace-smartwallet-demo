import React, { useCallback } from 'react';
import { useConnect } from 'wagmi';
import { CoinbaseWalletLogo } from './CoinbaseWalletLogo';
import '../globals.css'
 
export function BlueCreateWalletButton() {
  const { connectors, connect, data } = useConnect();
 
  const createWallet = useCallback(() => {
    const coinbaseWalletConnector = connectors.find(
      (connector) => connector.id === 'coinbaseWalletSDK'
    );
    if (coinbaseWalletConnector) {
      connect({ connector: coinbaseWalletConnector });
    }
  }, [connectors, connect]);
  return (
    <button className='button-styles' onClick={createWallet}>
      <CoinbaseWalletLogo />
      Create Wallet
    </button>
  );
}