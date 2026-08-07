"use client";

import React, { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse interactive effect
    const mouse = { x: width / 2, y: height / 2, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Forge Ember Particle class
    class Ember {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      color: string;
      alpha: number;
      decay: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.alpha = Math.random() * 0.7 + 0.3;
        this.decay = Math.random() * 0.003 + 0.001;

        const colors = ["#ff4500", "#ff6b35", "#ffb703", "#fb8500", "#d4d4d8"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Mouse repulsion / influence
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
        }

        this.alpha -= this.decay;
        if (this.alpha <= 0 || this.y < -10) {
          this.reset();
        }
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.alpha = Math.random() * 0.7 + 0.3;
        this.speedY = Math.random() * 1.5 + 0.8;
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.globalAlpha = this.alpha;
        context.fillStyle = this.color;
        context.shadowColor = this.color;
        context.shadowBlur = 10;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const emberCount = Math.min(Math.floor(width / 12), 90);
    const embers: Ember[] = [];
    for (let i = 0; i < emberCount; i++) {
      embers.push(new Ember());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Radial background glow around mouse
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        350
      );
      gradient.addColorStop(0, "rgba(255, 69, 0, 0.12)");
      gradient.addColorStop(0.5, "rgba(255, 183, 3, 0.04)");
      gradient.addColorStop(1, "rgba(5, 5, 7, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      embers.forEach((ember) => {
        ember.update();
        ember.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
    />
  );
}
