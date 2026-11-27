import './ring.css'
// import ring from '../assets/ring.png'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import WeddingRing from './weddingRIng'
// import { , useRef } from 'react'
import { useState,useRef,Suspense } from 'react'
import confetti from 'canvas-confetti'
import RosePetals from './rosepetals'
import music from '../assets/wedmusic.mp3'
function RingIntro({onComplete,onStartMusic}){ 
     const [showIntroText, setShowIntroText] = useState(true);
    const [showNames, setShowNames] = useState(false);
    const [ringAtBottom, setRingAtBottom] = useState(false);
    const [fadeNames, setFadeNames] = useState(false);
    const audioref=useRef(null)
  
   const handleFallComplete = () => {
    setTimeout(() => {
        setShowNames(true);

        setTimeout(() => {
          setFadeNames(true);

setTimeout(() => {
    onComplete();
}, 1500);
        }, 3000);

    }, 1000);
};
const launchConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#D8B878', '#FFFFFF', '#F5E6C8'],
        gravity: 0.5,
        ticks: 500
    });
};
    return(
        
        <div className="ring-intro">
            {showIntroText&&(
                <>
                <h3 className="intro-title">YOU ARE CORDIALLY INVITED</h3>
            <h4 className="intro-subtitle">A Celebration of Love</h4>
                </>
            )}
            
            <div className={`ring-container ${ringAtBottom ? 'ring-bottom' : ''}`} >
    <Canvas camera={{ position: [0, 0.8, 4], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <Environment preset="studio" />
        <Suspense fallback={null}>
            <WeddingRing 
            onFallStart={() => {
                onStartMusic()
                setShowIntroText(false);
                 setRingAtBottom(true);
                 launchConfetti();
            } }
            onFallComplete={handleFallComplete} 
            />
        </Suspense>
        
    </Canvas>
</div>
{showNames && (
    <div  className={`couples-names ${fadeNames ? 'fade-out' : ''}`}>
        <h4 className='welcome-reception'>WEDDING RECEPTION</h4>
        <div className='couple-details'>
            <h2 className='couple-name'>
            <span>Rushda</span>
            <span>&</span>   
            <span>Shahid</span></h2>
        <h2 className='and'>&</h2>

        <h2 className='couple-name'>
            <span>Althaf</span> 
            <span>&</span> 
            <span>Irfana Thasni</span></h2>
        </div>
        
        <h4 className='welcome-reception'>WELCOME TO OUR CELEBRATION</h4>
    </div>
)}
            {showIntroText && (
    <button className="open-button">Tap the ring</button>
)}
            {showNames && <RosePetals />}
        </div>
    )
}
export default RingIntro
