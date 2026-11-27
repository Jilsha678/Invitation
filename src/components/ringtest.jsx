import { Canvas } from '@react-three/fiber';
import WeddingRing from './weddingRIng';
import './ringtest.css'
import { Environment } from '@react-three/drei';

function RingTest(){
    return(
        <div className='ring-test'>
            
            <Canvas  >
                <ambientLight intensity={1.5} />

<directionalLight
  position={[5, 5, 5]}
  intensity={2.5}
/>
<Environment preset="studio" />
                    <WeddingRing/>
                
            </Canvas>
    
</div>
    )

}
export default RingTest