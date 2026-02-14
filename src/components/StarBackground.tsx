import * as React from 'react';
import { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = 500;
    const colorrange = [0, 60, 240];

    interface Star {
      x: number;
      y: number;
      radius: number;
      hue: number;
      sat: number;
      opacity: number;
      baseOpacity: number;
      speed: number;
      phase: number;
    }

    const starArray: Star[] = [];

    function getRandom(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Initialize stars
    for (let i = 0; i < stars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 1.5;
      const hue = 0;
      const sat = 0;
      const baseOpacity = Math.random() * 0.5 + 0.5; // Base opacity between 0.5 and 1
      const opacity = baseOpacity;
      const speed = Math.random() * 0.002 + 0.0005; // Slow, smooth blink
      const phase = Math.random() * Math.PI * 2; // Random starting phase
      starArray.push({ x, y, radius, hue, sat, opacity, baseOpacity, speed, phase });
    }

    const drawStars = () => {
      for (let i = 0; i < stars; i++) {
        const star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 100%, ${star.opacity})`;
        context.fill();
      }
    };

    const updateStars = () => {
      const now = Date.now();
      for (let i = 0; i < stars; i++) {
        const star = starArray[i];
        // Sine wave blinking: varies opacity between 0.3 and baseOpacity
        const val = Math.sin(now * star.speed + star.phase);
        // Map sine -1..1 to range
        star.opacity = 0.3 + ((val + 1) / 2) * (star.baseOpacity - 0.3);
      }
    };

    let animationFrameId: number;

    const render = () => {
      // Clear canvas for next frame
      context.clearRect(0, 0, width, height);

      drawStars();
      updateStars();

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background color handled by App container (#111), this is just the stars layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Optional Gradient Overlay to blend with content if needed, mimicking original app style */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#111]/80" />
    </div>
  );
};

export default StarBackground;
