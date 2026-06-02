"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { Particle } from "../types";

interface IntroAnimationProps {
  scrollProgress: number;
}

type Coordinate = {
  x: number;
  y: number;
};

const INTRO_TEXT = "Singularity";

const IntroAnimation: React.FC<IntroAnimationProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>(0);
  const initializedRef = useRef(false);

  const getTextCoordinates = useCallback((width: number, height: number, text: string): Coordinate[] => {
    const offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;

    const ctx = offscreen.getContext("2d");
    if (!ctx) return [];

    const fontSize = Math.min(86, Math.max(42, width * 0.085));
    ctx.font = `700 ${fontSize}px "Noto Serif SC", serif`;
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, width / 2, height / 2);

    const imageData = ctx.getImageData(0, 0, width, height).data;
    const coords: Coordinate[] = [];
    const step = 4;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const alpha = imageData[(y * width + x) * 4 + 3];
        if (alpha > 128) {
          coords.push({ x, y });
        }
      }
    }

    return coords;
  }, []);

  const initParticles = useCallback(
    (width: number, height: number) => {
      const textCoords = getTextCoordinates(width, height, INTRO_TEXT);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.15;

      particlesRef.current = textCoords.map((target, index) => {
        const angle = (index / Math.max(textCoords.length, 1)) * Math.PI * 2;
        const originX = centerX + Math.cos(angle) * radius;
        const originY = centerY + Math.sin(angle) * radius;

        return {
          x: originX,
          y: originY,
          originX,
          originY,
          targetX: target.x,
          targetY: target.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
        };
      });

      initializedRef.current = true;
    },
    [getTextCoordinates],
  );

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !initializedRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle) => {
      let destX = particle.originX;
      let destY = particle.originY;
      let alpha = 1;

      if (scrollProgress < 0.15) {
        const breath = Math.sin(Date.now() / 500) * 5;
        const angle = Math.atan2(particle.originY - canvas.height / 2, particle.originX - canvas.width / 2);
        destX = particle.originX + Math.cos(angle) * breath;
        destY = particle.originY + Math.sin(angle) * breath;
      } else if (scrollProgress < 0.45) {
        const explosionFactor = (scrollProgress - 0.15) / 0.3;
        const randomFactor = (1 - explosionFactor) * (1 - explosionFactor);
        destX =
          particle.originX +
          (particle.targetX - particle.originX) * explosionFactor +
          (Math.random() - 0.5) * 30 * randomFactor;
        destY =
          particle.originY +
          (particle.targetY - particle.originY) * explosionFactor +
          (Math.random() - 0.5) * 30 * randomFactor;
      } else if (scrollProgress < 0.65) {
        destX = particle.targetX;
        destY = particle.targetY;
      } else {
        const disperseFactor = (scrollProgress - 0.65) / 0.35;
        alpha = 1 - disperseFactor;
        destX = particle.targetX + (particle.targetX - canvas.width / 2) * disperseFactor * 0.5;
        destY = particle.targetY - disperseFactor * 100;
      }

      particle.x += (destX - particle.x) * 0.1;
      particle.y += (destY - particle.y) * 0.1;

      const baseAlpha = parseFloat(particle.color.match(/[\d.]+(?=\))/)?.[0] || "1");
      ctx.fillStyle = `rgba(255, 255, 255, ${baseAlpha * alpha})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });

  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [initParticles]);

  useEffect(() => {
    const frame = () => {
      drawFrame();
      requestRef.current = requestAnimationFrame(frame);
    };

    requestRef.current = requestAnimationFrame(frame);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [drawFrame]);

  return <canvas ref={canvasRef} className="fixed left-0 top-0 z-10 h-full w-full pointer-events-none" />;
};

export default IntroAnimation;
