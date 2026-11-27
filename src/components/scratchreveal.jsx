
import './scratch.css';
import { useRef, useEffect } from 'react';
import RosePetals from './rosepetals'
function ScratchReveal() {
    const canvasRefs = useRef([]);

    useEffect(() => {
        canvasRefs.current.forEach((canvas) => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const ctx = canvas.getContext('2d');

            ctx.fillStyle = '#D8B878';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = 'destination-out';

            let isScratching = false;
            let isRevealed = false;

            function checkScratch() {
                if (isRevealed) return;

                const imageData = ctx.getImageData(
                    0, 0, canvas.width, canvas.height
                );

                let cleared = 0;

                for (let i = 3; i < imageData.data.length; i += 4) {
                    if (imageData.data[i] === 0) {
                        cleared++;
                    }
                }

                const percentage =
                    cleared / (canvas.width * canvas.height);

                if (percentage >= 0.5) {
                    isRevealed = true;
                    canvas.style.transition = 'opacity 0.5s ease';
                    canvas.style.opacity = '0';
                }
            }

            function scratch(event) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                ctx.beginPath();
                ctx.arc(x, y, 20, 0, Math.PI * 2);
                ctx.fill();
            }

            canvas.addEventListener('pointerdown', (event) => {
                isScratching = true;
                canvas.setPointerCapture(event.pointerId);
                scratch(event);
                checkScratch();
            });

            canvas.addEventListener('pointermove', (event) => {
                if (!isScratching || isRevealed) return;

                scratch(event);
                checkScratch();
            });

            canvas.addEventListener('pointerup', () => {
                isScratching = false;
            });

            canvas.addEventListener('pointercancel', () => {
                isScratching = false;
            });
        });
    }, []);

    return (
        
        <div className="scratch-page">
            <RosePetals/>
              <div className="scratch-heading">
        <h2>SCRATCH TO REVEAL</h2>
        <p>Gently scratch each  card to reveal our wedding date</p>
        <div className="gold-divider"></div>
    </div>
    
    <div className="scratch-cards">
        
            <div className="scratch-card">
                <h4>03</h4>
                <canvas
                    className="scratch-canvas"
                    ref={el => canvasRefs.current[0] = el}
                />
            </div>

            <div className="scratch-card">
                <h4>JAN</h4>
                <canvas
                    className="scratch-canvas"
                    ref={el => canvasRefs.current[1] = el}
                />
            </div>

            <div className="scratch-card">
                <h4>2027</h4>
                <canvas
                    className="scratch-canvas"
                    ref={el => canvasRefs.current[2] = el}
                />
            </div>
    </div>
    <div className="scroll-hint">
    <span>SCROLL DOWN</span>
    <div className="scroll-arrow">↓</div>
</div>
        </div>
    );
}

export default ScratchReveal;
