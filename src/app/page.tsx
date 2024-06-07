'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Link from 'next/link'
import './globals.css'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <main>
      <div className='hero-text-container'>
        <h1>Welcome to Mind Palace 🧠 🏰</h1>
        <h2>Better learning for the rest of us</h2>
        <Link href="/offerings">Current Offerings</Link>
      </div>

      <div className='hero-text-body'>
        <h3>Tired of developer docs with walls of text & confusing jargon?</h3>
        <h3>Do images help you process & retain new information?</h3>
        <h2>I'm building Mind Palace for you -- the gritty, self & community taught developer with the slightly quirky learning style. </h2>
        <h2>How to support Mind Palace right now:</h2>
      </div>
      <div className='row-p'>
        <p>If you don't already have one, use the Create Wallet button at the top of the page to create a Smart Wallet. This wallet address will serve as your user profile to interact with gamification and social graph features as they are built.</p>
        <p>If you want to join our early supporters list, please fill out our <Link href="https://app.deform.cc/form/dcdc8d6b-1d3f-4745-83f9-8fb8783e70c6" target="_blank">Deform</Link></p>
        <p>Like and engage with our social media posts on Farcaster and X to help share the project with more builders</p>
      </div>
    </main>
  )
}

export default App
