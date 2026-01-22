import React, { useEffect, useRef, useState } from 'react';
import { Particle } from '../types';

interface IntroAnimationProps {
    scrollProgress: number; // 0 to 1
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ scrollProgress }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [particles, setParticles] = useState<Particle[]>([]);
    const requestRef = useRef<number>(0);
    const initialized = useRef(false);

    // Helper to create text coordinates
    const getTextCoordinates = (width: number, height: number, text: string): { x: number, y: number }[] => {
        const offscreen = document.createElement('canvas');
        offscreen.width = width;
        offscreen.height = height;
        const ctx = offscreen.getContext('2d');
        if (!ctx) return [];

        ctx.font = '700 80px "Noto Serif SC"';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, width / 2, height / 2);

        const imageData = ctx.getImageData(0, 0, width, height).data;
        const coords: { x: number, y: number }[] = [];
        const step = 4; // Scan every 4th pixel for performance

        for (let y = 0; y < height; y += step) {
            for (let x = 0; x < width; x += step) {
                const alpha = imageData[(y * width + x) * 4 + 3];
                if (alpha > 128) {
                    coords.push({ x, y });
                }
            }
        }
        return coords;
    };

    const initParticles = (width: number, height: number) => {
        const textCoords = getTextCoordinates(width, height, "奇点社");
        const numParticles = textCoords.length; // Use text density as base count

        const newParticles: Particle[] = [];
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.15; // Initial ring radius

        for (let i = 0; i < numParticles; i++) {
            // Circle State (Origin)
            // Distribute evenly around circle
            const angle = (i / numParticles) * Math.PI * 2;
            const originX = centerX + Math.cos(angle) * radius;
            const originY = centerY + Math.sin(angle) * radius;

            // Text State (Target)
            // Map one-to-one roughly
            const target = textCoords[i];

            newParticles.push({
                x: originX,
                y: originY,
                originX: originX,
                originY: originY,
                targetX: target.x,
                targetY: target.y,
                vx: (Math.random() - 0.5) * 2, // Random velocity for explosion effect
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 2 + 1,
                color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`
            });
        }
        setParticles(newParticles);
        initialized.current = true;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(canvas.width, canvas.height);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas || !initialized.current) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Core Animation Logic - 更紧凑的时间线
        // Phase 1 (0.0 - 0.15): Ring Breathing / Idle
        // Phase 2 (0.15 - 0.45): Explosion / Transition to Text
        // Phase 3 (0.45 - 0.65): Text stable
        // Phase 4 (0.65 - 1.0): Fade out and disperse

        particles.forEach(p => {
            let destX = p.originX;
            let destY = p.originY;
            let alpha = 1;

            if (scrollProgress < 0.15) {
                // Breathing effect on origin
                const breath = Math.sin(Date.now() / 500) * 5;
                const angle = Math.atan2(p.originY - canvas.height / 2, p.originX - canvas.width / 2);
                destX = p.originX + Math.cos(angle) * breath;
                destY = p.originY + Math.sin(angle) * breath;
            } else if (scrollProgress >= 0.15 && scrollProgress < 0.45) {
                // Explosion Phase - 更快速地过渡到文字
                const explosionFactor = (scrollProgress - 0.15) / 0.3; // 0 to 1

                // Simple easing with reduced randomness
                const randomFactor = (1 - explosionFactor) * (1 - explosionFactor); // Quadratic decay
                destX = p.originX + (p.targetX - p.originX) * explosionFactor + (Math.random() - 0.5) * 30 * randomFactor;
                destY = p.originY + (p.targetY - p.originY) * explosionFactor + (Math.random() - 0.5) * 30 * randomFactor;

            } else if (scrollProgress >= 0.45 && scrollProgress < 0.65) {
                // Text stable phase
                destX = p.targetX;
                destY = p.targetY;
            } else {
                // Fade out and disperse phase
                const disperseFactor = (scrollProgress - 0.65) / 0.35; // 0 to 1
                alpha = 1 - disperseFactor;

                // Particles drift upward and outward as they fade
                const driftX = (p.targetX - canvas.width / 2) * disperseFactor * 0.5;
                const driftY = -disperseFactor * 100; // Float upward
                destX = p.targetX + driftX;
                destY = p.targetY + driftY;
            }

            // Physics easing
            p.x += (destX - p.x) * 0.1;
            p.y += (destY - p.y) * 0.1;

            // Apply alpha to color
            const baseAlpha = parseFloat(p.color.match(/[\d.]+(?=\))/)?.[0] || '1');
            ctx.fillStyle = `rgba(255, 255, 255, ${baseAlpha * alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [particles, scrollProgress]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
        />
    );
};

export default IntroAnimation;