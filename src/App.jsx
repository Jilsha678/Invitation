
import WeddingPage from './components/weddingpages';
import RingIntro from './components/ringIntro';
import { useState,useRef} from 'react';
import './App.css';
import music from './assets/wedmusic.mp3'
import ScratchReveal from './components/scratchreveal';

function App() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
const startMusic = async() => {
    try {
        await audioRef.current.play();
        setIsPlaying(true);
    } catch (error) {
        console.log("Music could not start", error);
    }
};
const toggleMusic = () => {
    if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
    } else {
        startMusic();
    }
};
    const [showWedding, setShowWedding] = useState(false);
    const [showRing, setShowRing] = useState(true);
    const [weddingVisible, setWeddingVisible] = useState(false);

    const handleComplete = () => {
        setShowWedding(true);

        setTimeout(() => {
            setWeddingVisible(true);
            setShowRing(false);
        }, 50);
    };

    return (
        <>
            <audio ref={audioRef} src={music} loop />
            {!showRing && (
    <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? '♫ Pause audio' : '♫ Play audio'}
    </button>
)}
            {showRing && (
                <div className="page-layer ring-layer">
                    <RingIntro onComplete={handleComplete}
                     onStartMusic={startMusic}
                    />

                </div>
            )}

            {showWedding && (
                <div className={`page-layer wedding-layer ${weddingVisible ? 'visible' : ''}`}>
                    <WeddingPage />
                </div>
            )}
        </>
    );
    
}

export default App;
