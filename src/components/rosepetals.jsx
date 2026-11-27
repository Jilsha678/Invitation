import './petals.css'
import petalImage from '../assets/petal.png'
import { useMemo } from 'react';
function RosePetals(){
    const petals = useMemo(() => {
    return Array.from({ length: 20 }, (_, index) => ({
        id: index,
        left: Math.random() * 90,
        size: 15 + Math.random() * 15,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5
    }));
}, []);
     return (
        <div className="petals-container">
            {petals.map((petal) => (
                <span
                    className="petal"
                    key={petal.id}
                    style={{
                       left: `${petal.left}%`,
    width: `${petal.size}px`,
    height: `${petal.size * 1.3}px`,
    animationDuration: `${petal.duration}s`,
    animationDelay: `${petal.delay}s`
                    }}
                >
                    <img src={petalImage} alt="" className="petal-image" />
                </span>
            ))}
        </div>
    );
}
export default RosePetals