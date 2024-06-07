import Link from "next/link"
import Image from "next/image"
import SWCanvas from "../../../public/smartwalletcover.png"
import FCCanvas from "../../../public/farcaster101.png"
import BWCamCanvas from "../../../public/bos-web-cover.png"
import '../globals.css'

const OfferingsPage = () => {
  return (
    <main>
      <div>
        <h1>Current Offerings</h1>
        <h2>Educational Canvas Collection</h2>
        <div className="canvas-item-container">
          <div className="canvas-item">
            <h3>Hooks & Wagmi & Smart Wallets, Oh My!</h3>
            <Link href="https://www.tldraw.com/s/v2_c_3jPodSGY1xjI1oF1-7QxL?v=-1036,-839,4908,2860&p=xwlkkYotd40fNgCqDVJMF" target="_blank">
              <Image 
                src={SWCanvas}
                alt="Education canvas: Hooks & Wagmi & Smart Wallets, Oh My!"
                height={200}
                width={330}
              />
            </Link>
            <div className="canvas-item">
            <h3>Farcaster 101</h3>
            <Link href="https://www.tldraw.com/s/v2_c_K2MguusFSqn0sZDXkr3sc?v=-325,-231,2763,1610&p=page" target="_blank">
              <Image 
                src={FCCanvas}
                alt="Education canvas: Farcaster 101"
                height={200}
                width={330}
              />
            </Link>
          </div>
          <div className="canvas-item">
          <h3>BOS Webcam Component (WIP)</h3>
            <Link href="https://www.tldraw.com/ro/sbVb0lHkBL7R21DcWXjtE?v=-23,-161,5045,2940&p=z3JX94s4dvotSQxptSBy3" target="_blank">
              <Image 
                src={BWCamCanvas}
                alt="Education canvas: BOS Webcam Component"
                height={200}
                width={330}
              />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default OfferingsPage