'use client';

import { useEffect, useRef } from 'react';

const MATRIX_CHARACTERS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const FONT_SIZE = 14;
const ANIMATION_FPS = 30;
const GLITCH_CHECK_INTERVAL = 100;
const GLITCH_PROBABILITY = 0.95;
const DROP_RESET_PROBABILITY = 0.975;

export default function HackerBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const columns = Math.floor(canvas.width / FONT_SIZE);
    const drops: number[] = Array(columns).fill(1);

    const drawScanlines = () => {
      for (let y = 0; y < canvas.height; y += 2) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, y, canvas.width, 1);
      }
    };

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATRIX_CHARACTERS[Math.floor(Math.random() * MATRIX_CHARACTERS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        const gradient = ctx.createLinearGradient(x, y - FONT_SIZE * 10, x, y);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 255, 136, 1)');

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ff88';
        ctx.fillStyle = '#00ff88';
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        if (y > canvas.height && Math.random() > DROP_RESET_PROBABILITY) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      drawScanlines();
    };

    const interval = setInterval(drawMatrix, 1000 / ANIMATION_FPS);

    const glitchInterval = setInterval(() => {
      if (Math.random() > GLITCH_PROBABILITY) {
        const glitchHeight = 2;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(0, y, canvas.width, glitchHeight);
      }
    }, GLITCH_CHECK_INTERVAL);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 20, 20, 1) 0%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
      {/* Additional overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.03) 2px, rgba(0, 212, 255, 0.03) 4px)'
        }}
      />
    </div>
  );
}
