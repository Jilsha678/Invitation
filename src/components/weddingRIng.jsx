import {useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'   
import ringModel from '../assets/ringrotate.glb'
import { useRef } from 'react'
import { useState } from 'react'
function WeddingRing({onFallStart,onFallComplete}){
    const [isFalling, setIsfalling] = useState(false)
    const fallProgress = useRef(0)
    const startRotationY = useRef(0)
    const hasCompleted = useRef(false)
const handleRingClick=()=>{
    if (isFalling) return;
    startRotationY.current = ringRef.current.rotation.y;
    onFallStart?.();
    setIsfalling(true)
}
const {scene}=useGLTF(ringModel)
const ringRef=useRef()
useFrame((state,delta)=>{
    
    if (!ringRef.current) return
     if(!isFalling)    {
    ringRef.current.rotation.y += delta * 0.5;
     ringRef.current.scale.setScalar(1.3);
    return
}
 fallProgress.current += delta * 0.5;
 const progress = Math.min(fallProgress.current, 1);
  const eased = 1 - Math.pow(1 - progress, 3);
    ringRef.current.rotation.y =
        startRotationY.current * (1 - eased);
    ringRef.current.rotation.x = eased * Math.PI / 2;
    ringRef.current.position.y = -eased * 0.8
    if (progress >= 1 && !hasCompleted.current) {
    hasCompleted.current = true;
    onFallComplete?.();
}
})
return <primitive  ref={ringRef} object={scene} scale={1.3} onClick={handleRingClick}/>
}
export default WeddingRing
useGLTF.preload(ringModel)