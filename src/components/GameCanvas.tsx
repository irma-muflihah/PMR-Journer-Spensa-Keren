import React, { useEffect, useRef, useState } from 'react';
import { CadetProfile, Direction, LevelData, ObstacleEncounter, Position } from '../types/game';

interface GameCanvasProps {
  level: LevelData;
  playerPos: Position;
  playerDirection: Direction;
  cadet: CadetProfile;
  hasFeatherKey: boolean;
  onMove: (dir: Direction) => void;
  onTileTap: (pos: Position) => void;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  level,
  playerPos,
  playerDirection,
  cadet,
  hasFeatherKey,
  onMove,
  onTileTap
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animTick, setAnimTick] = useState(0);

  // Animation loop for flowing river, glowing feather key, and enemy idle animations
  useEffect(() => {
    let animId: number;
    const loop = () => {
      setAnimTick(prev => (prev + 1) % 360);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = level.gridWidth;
    const rows = level.gridHeight;

    // Responsive sizing
    const container = containerRef.current;
    const clientWidth = container ? container.clientWidth : 360;
    const tileSize = Math.floor(clientWidth / cols);
    const width = tileSize * cols;
    const height = tileSize * rows;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;

    // Background fill (Jungle earth)
    ctx.fillStyle = '#062817';
    ctx.fillRect(0, 0, width, height);

    // 1. Draw Base Tiles
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const tile = level.tiles[y][x];
        const px = x * tileSize;
        const py = y * tileSize;

        drawTile(ctx, tile, px, py, tileSize, animTick, (x + y) % 2 === 0);
      }
    }

    // 2. Draw Items
    level.items.forEach(item => {
      if (item.collected) return;
      const px = item.x * tileSize;
      const py = item.y * tileSize;

      if (item.type === 'feather_key') {
        drawPeacockFeather(ctx, px, py, tileSize, animTick);
      } else {
        drawItemKit(ctx, px, py, tileSize, item.type, animTick);
      }
    });

    // 3. Draw Obstacles & Enemies
    level.obstacles.forEach(obs => {
      const px = obs.x * tileSize;
      const py = obs.y * tileSize;
      drawObstacle(ctx, obs, px, py, tileSize, animTick);
    });

    // 4. Draw Player
    const playerPx = playerPos.x * tileSize;
    const playerPy = playerPos.y * tileSize;
    drawPlayer(ctx, playerPx, playerPy, tileSize, playerDirection, cadet, animTick);

    // 5. Draw Exit Gapura Shimmer
    const exitPx = level.exitGapura.x * tileSize;
    const exitPy = level.exitGapura.y * tileSize;
    drawExitGapuraState(ctx, exitPx, exitPy, tileSize, hasFeatherKey, animTick);

  }, [level, playerPos, playerDirection, cadet, hasFeatherKey, animTick]);

  // Touch handling on canvas (tap to move)
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const tileSize = canvas.clientWidth / level.gridWidth;
    const targetX = Math.floor(x / tileSize);
    const targetY = Math.floor(y / tileSize);

    if (targetX >= 0 && targetX < level.gridWidth && targetY >= 0 && targetY < level.gridHeight) {
      onTileTap({ x: targetX, y: targetY });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full flex items-center justify-center p-1 sm:p-2 select-none touch-none"
    >
      <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-700/60 shadow-2xl shadow-emerald-950/80 bg-slate-950">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="block cursor-pointer"
        />

        {/* Ambient Top Vignette & Zone Title */}
        <div className="absolute top-0 left-0 right-0 px-3 py-1 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none flex items-center justify-between text-[11px] text-emerald-200">
          <span className="font-semibold tracking-wide flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            {level.zoneName}
          </span>
          <span className="text-amber-300 font-medium">
            {hasFeatherKey ? 'Kunci Merak: Siap Membuka Gapura!' : 'Cari Bulu Merak Bersinar'}
          </span>
        </div>
      </div>
    </div>
  );
};

// ================= DRAWING HELPERS =================

function drawTile(
  ctx: CanvasRenderingContext2D,
  tile: string,
  px: number,
  py: number,
  size: number,
  tick: number,
  alt: boolean
) {
  switch (tile) {
    case 'grass': {
      ctx.fillStyle = alt ? '#14532d' : '#166534';
      ctx.fillRect(px, py, size, size);

      // Grass tufts
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(px + size * 0.2, py + size * 0.3, 2, 4);
      ctx.fillRect(px + size * 0.7, py + size * 0.6, 2, 5);
      break;
    }
    case 'path': {
      ctx.fillStyle = '#451a03'; // earthy brown border
      ctx.fillRect(px, py, size, size);
      ctx.fillStyle = alt ? '#b45309' : '#92400e';
      ctx.beginPath();
      ctx.roundRect(px + 2, py + 2, size - 4, size - 4, 4);
      ctx.fill();

      // Stepping stones
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.arc(px + size * 0.4, py + size * 0.5, size * 0.22, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'bamboo': {
      // Bamboo forest cluster
      ctx.fillStyle = '#064e3b';
      ctx.fillRect(px, py, size, size);

      ctx.fillStyle = '#10b981';
      for (let i = 0; i < 3; i++) {
        const bx = px + size * (0.2 + i * 0.3);
        ctx.fillRect(bx, py + 2, size * 0.12, size - 4);
        // Nodes
        ctx.fillStyle = '#047857';
        ctx.fillRect(bx - 1, py + size * 0.35, size * 0.16, 2);
        ctx.fillRect(bx - 1, py + size * 0.7, size * 0.16, 2);
        ctx.fillStyle = '#10b981';
      }
      break;
    }
    case 'tree': {
      // Tropical canopy
      ctx.fillStyle = '#022c22';
      ctx.fillRect(px, py, size, size);

      ctx.fillStyle = '#047857';
      ctx.beginPath();
      ctx.arc(px + size * 0.5, py + size * 0.5, size * 0.45, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#059669';
      ctx.beginPath();
      ctx.arc(px + size * 0.45, py + size * 0.42, size * 0.32, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'river': {
      // Flowing blue water
      ctx.fillStyle = '#0369a1';
      ctx.fillRect(px, py, size, size);

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const waveShift = Math.sin((tick * 0.05) + px * 0.02) * 3;
      ctx.moveTo(px, py + size * 0.3 + waveShift);
      ctx.bezierCurveTo(
        px + size * 0.4, py + size * 0.2 + waveShift,
        px + size * 0.6, py + size * 0.5 + waveShift,
        px + size, py + size * 0.4 + waveShift
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(px, py + size * 0.7 - waveShift);
      ctx.bezierCurveTo(
        px + size * 0.3, py + size * 0.8 - waveShift,
        px + size * 0.7, py + size * 0.6 - waveShift,
        px + size, py + size * 0.75 - waveShift
      );
      ctx.stroke();
      break;
    }
    case 'bridge': {
      // Wooden bridge over water
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(px, py, size, size);

      ctx.fillStyle = '#78350f';
      ctx.fillRect(px + 3, py + 2, size - 6, size - 4);

      ctx.strokeStyle = '#451a03';
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        const by = py + (size / 4) * i;
        ctx.beginPath();
        ctx.moveTo(px + 3, by);
        ctx.lineTo(px + size - 3, by);
        ctx.stroke();
      }
      break;
    }
    case 'stone':
    case 'moss_ruins': {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(px, py, size, size);

      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.roundRect(px + 3, py + 3, size - 6, size - 6, 4);
      ctx.fill();

      // Green moss accents
      ctx.fillStyle = '#15803d';
      ctx.fillRect(px + 4, py + 4, 6, 4);
      ctx.fillRect(px + size - 10, py + size - 8, 7, 5);
      break;
    }
    case 'gapura_entrance': {
      // Entrance Portal Candi Bentar
      ctx.fillStyle = '#14532d';
      ctx.fillRect(px, py, size, size);

      ctx.fillStyle = '#b45309';
      // Left and right pillars
      ctx.fillRect(px + 2, py + 2, size * 0.25, size - 4);
      ctx.fillRect(px + size * 0.75 - 2, py + 2, size * 0.25, size - 4);

      // Gold tip
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.moveTo(px + 2, py + 2);
      ctx.lineTo(px + size * 0.15, py - 4);
      ctx.lineTo(px + size * 0.27, py + 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(px + size * 0.73, py + 2);
      ctx.lineTo(px + size * 0.85, py - 4);
      ctx.lineTo(px + size - 2, py + 2);
      ctx.fill();
      break;
    }
    case 'gapura_exit': {
      // Exit Gapura (Gate of the Peacock)
      ctx.fillStyle = '#064e3b';
      ctx.fillRect(px, py, size, size);

      // Stone pillars
      ctx.fillStyle = '#d97706';
      ctx.fillRect(px + 2, py + 2, size * 0.28, size - 4);
      ctx.fillRect(px + size * 0.72 - 2, py + 2, size * 0.28, size - 4);

      // Arch banner
      ctx.fillStyle = '#047857';
      ctx.fillRect(px + size * 0.2, py + 2, size * 0.6, 6);
      break;
    }
    default: {
      ctx.fillStyle = '#14532d';
      ctx.fillRect(px, py, size, size);
    }
  }
}

function drawPeacockFeather(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  size: number,
  tick: number
) {
  const floatOffset = Math.sin(tick * 0.08) * 4;
  const centerX = px + size * 0.5;
  const centerY = py + size * 0.5 + floatOffset;

  // Magical aura glow
  ctx.save();
  const radGrad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, size * 0.45);
  radGrad.addColorStop(0, 'rgba(234, 179, 8, 0.9)');
  radGrad.addColorStop(0.5, 'rgba(13, 148, 136, 0.6)');
  radGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
  ctx.fillStyle = radGrad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 0.45, 0, Math.PI * 2);
  ctx.fill();

  // Feather stem
  ctx.strokeStyle = '#fef08a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX - size * 0.15, centerY + size * 0.35);
  ctx.quadraticCurveTo(centerX, centerY, centerX + size * 0.15, centerY - size * 0.35);
  ctx.stroke();

  // Peacock Feather Eye (Golden-Teal-Sapphire)
  const eyeX = centerX + size * 0.1;
  const eyeY = centerY - size * 0.18;

  // Outer Golden Ring
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.ellipse(eyeX, eyeY, size * 0.22, size * 0.28, Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();

  // Emerald Teal Ring
  ctx.fillStyle = '#0d9488';
  ctx.beginPath();
  ctx.ellipse(eyeX, eyeY, size * 0.16, size * 0.2, Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();

  // Cobalt Blue Core
  ctx.fillStyle = '#1e3a8a';
  ctx.beginPath();
  ctx.ellipse(eyeX, eyeY, size * 0.1, size * 0.13, Math.PI / 6, 0, Math.PI * 2);
  ctx.fill();

  // Inner shimmer sparkle
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(eyeX - 2, eyeY - 2, 2, 0, Math.PI * 2);
  ctx.fill();

  // Sparkles
  ctx.fillStyle = '#fef08a';
  const sparkleAngle = tick * 0.1;
  for (let i = 0; i < 3; i++) {
    const angle = sparkleAngle + (i * Math.PI * 2) / 3;
    const sx = centerX + Math.cos(angle) * (size * 0.32);
    const sy = centerY + Math.sin(angle) * (size * 0.32);
    ctx.fillRect(sx - 1.5, sy - 1.5, 3, 3);
  }

  ctx.restore();
}

function drawItemKit(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  size: number,
  type: string,
  tick: number
) {
  const bob = Math.sin(tick * 0.1) * 2;
  const cx = px + size * 0.5;
  const cy = py + size * 0.5 + bob;

  ctx.save();
  // Item pedestal / shadow
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath();
  ctx.ellipse(cx, py + size * 0.85, size * 0.25, size * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  // Red Cross / P3K Kit Item Box
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.roundRect(cx - size * 0.25, cy - size * 0.22, size * 0.5, size * 0.44, 4);
  ctx.fill();
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Red cross mark
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(cx - size * 0.15, cy - 2, size * 0.3, 4);
  ctx.fillRect(cx - 2, cy - size * 0.15, 4, size * 0.3);

  ctx.restore();
}

function drawObstacle(
  ctx: CanvasRenderingContext2D,
  obs: ObstacleEncounter,
  px: number,
  py: number,
  size: number,
  tick: number
) {
  if (obs.defeated) {
    // Defeated / cleared marker (peaceful green flag)
    ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.beginPath();
    ctx.arc(px + size * 0.5, py + size * 0.5, size * 0.35, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10b981';
    ctx.font = `bold ${Math.floor(size * 0.4)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✓', px + size * 0.5, py + size * 0.5);
    return;
  }

  const cx = px + size * 0.5;
  const cy = py + size * 0.5;

  ctx.save();

  switch (obs.type) {
    case 'nyamuk_raksasa': {
      // Animated giant mosquito
      const hover = Math.sin(tick * 0.25) * 3;
      const my = cy + hover;

      // Translucent wings
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      const wingFlap = Math.sin(tick * 0.8) * 0.4;
      ctx.beginPath();
      ctx.ellipse(cx - size * 0.2, my - size * 0.2, size * 0.25, size * 0.1, wingFlap, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx + size * 0.2, my - size * 0.2, size * 0.25, size * 0.1, -wingFlap, 0, Math.PI * 2);
      ctx.fill();

      // Mosquito body (striped abdomen)
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.ellipse(cx, my, size * 0.14, size * 0.24, 0, 0, Math.PI * 2);
      ctx.fill();

      // Red eyes
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(cx - 3, my - size * 0.15, 3, 0, Math.PI * 2);
      ctx.arc(cx + 3, my - size * 0.15, 3, 0, Math.PI * 2);
      ctx.fill();

      // Needle proboscis
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, my - size * 0.15);
      ctx.lineTo(cx, my - size * 0.38);
      ctx.stroke();
      break;
    }
    case 'ular_berbisa': {
      // Coiled jungle viper
      const wiggle = Math.sin(tick * 0.15) * 2;
      ctx.fillStyle = '#15803d'; // Viper green
      ctx.beginPath();
      ctx.arc(cx, cy + 2, size * 0.32, 0, Math.PI * 2);
      ctx.fill();

      // Snake body coil
      ctx.fillStyle = '#052e16';
      ctx.beginPath();
      ctx.arc(cx, cy + 2, size * 0.18, 0, Math.PI * 2);
      ctx.fill();

      // Snake head
      ctx.fillStyle = '#16a34a';
      ctx.beginPath();
      ctx.ellipse(cx + size * 0.2 + wiggle, cy - 2, size * 0.15, size * 0.11, 0, 0, Math.PI * 2);
      ctx.fill();

      // Yellow predatory eyes
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(cx + size * 0.25 + wiggle, cy - 4, 2, 0, Math.PI * 2);
      ctx.fill();

      // Flicking red tongue
      if (Math.sin(tick * 0.2) > 0.3) {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx + size * 0.35 + wiggle, cy - 2);
        ctx.lineTo(cx + size * 0.45 + wiggle, cy - 2);
        ctx.stroke();
      }
      break;
    }
    case 'monster_sampah': {
      // Monster sampah (Trash boss)
      const pulse = Math.sin(tick * 0.1) * 3;
      ctx.fillStyle = '#3f3f46';
      ctx.beginPath();
      ctx.roundRect(cx - size * 0.35, cy - size * 0.35 + pulse, size * 0.7, size * 0.65, 8);
      ctx.fill();

      // Plastic litter decorations
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(cx - size * 0.2, cy - size * 0.1 + pulse, 6, 8);
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(cx + size * 0.1, cy - size * 0.15 + pulse, 8, 10);
      ctx.fillStyle = '#eab308';
      ctx.fillRect(cx - size * 0.05, cy + size * 0.1 + pulse, 7, 7);

      // Angry monster eyes
      ctx.fillStyle = '#facc15';
      ctx.beginPath();
      ctx.arc(cx - size * 0.14, cy - size * 0.1 + pulse, 5, 0, Math.PI * 2);
      ctx.arc(cx + size * 0.14, cy - size * 0.1 + pulse, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#7f1d1d';
      ctx.beginPath();
      ctx.arc(cx - size * 0.14, cy - size * 0.1 + pulse, 2, 0, Math.PI * 2);
      ctx.arc(cx + size * 0.14, cy - size * 0.1 + pulse, 2, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'ranting_duri': {
      // Thorny bramble
      ctx.fillStyle = '#451a03';
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#78350f';
      ctx.lineWidth = 2.5;
      for (let i = 0; i < 5; i++) {
        const ang = (i * Math.PI * 2) / 5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ang) * (size * 0.42), cy + Math.sin(ang) * (size * 0.42));
        ctx.stroke();
      }
      break;
    }
    case 'tebing_curam': {
      // Rocky crevasse / cliff
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.roundRect(px + 4, py + 4, size - 8, size - 8, 4);
      ctx.fill();
      ctx.fillStyle = '#334155';
      ctx.fillRect(px + 6, py + 6, size - 12, size * 0.3);
      break;
    }
    default: {
      // Default ancient stone challenge
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.roundRect(px + 4, py + 4, size - 8, size - 8, 6);
      ctx.fill();
      ctx.fillStyle = '#e2e8f0';
      ctx.font = `bold ${Math.floor(size * 0.4)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('?', cx, cy);
    }
  }

  // Question mark alert bubble above undefeated obstacle
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(px + size * 0.8, py + size * 0.2, size * 0.16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${Math.floor(size * 0.22)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('!', px + size * 0.8, py + size * 0.2);

  ctx.restore();
}

function drawPlayer(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  size: number,
  direction: Direction,
  cadet: CadetProfile,
  tick: number
) {
  const cx = px + size * 0.5;
  const cy = py + size * 0.5;
  const isPutri = cadet.gender === 'putri';
  const walkBob = Math.abs(Math.sin(tick * 0.2)) * 2;

  ctx.save();

  // Cadet shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.beginPath();
  ctx.ellipse(cx, py + size * 0.88, size * 0.28, size * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  // White collared shirt
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.roundRect(cx - size * 0.22, cy - size * 0.05 - walkBob, size * 0.44, size * 0.38, 4);
  ctx.fill();

  // Royal blue PMR Madya slayer (scarf)
  ctx.fillStyle = '#0284c7';
  ctx.beginPath();
  ctx.moveTo(cx - size * 0.15, cy - size * 0.05 - walkBob);
  ctx.lineTo(cx, cy + size * 0.15 - walkBob);
  ctx.lineTo(cx + size * 0.15, cy - size * 0.05 - walkBob);
  ctx.closePath();
  ctx.fill();

  // Gold slayer ring
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(cx, cy + size * 0.07 - walkBob, 3, 0, Math.PI * 2);
  ctx.fill();

  // Navy blue pants/skirt
  ctx.fillStyle = '#1e3a8a';
  ctx.fillRect(cx - size * 0.18, cy + size * 0.3 - walkBob, size * 0.36, size * 0.2);

  // Shoes
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(cx - size * 0.18, cy + size * 0.48 - walkBob, size * 0.14, size * 0.1);
  ctx.fillRect(cx + size * 0.04, cy + size * 0.48 - walkBob, size * 0.14, size * 0.1);

  // Cadet Head / Hair / Jilbab
  if (isPutri) {
    ctx.fillStyle = '#e2e8f0'; // White Jilbab
    ctx.beginPath();
    ctx.arc(cx, cy - size * 0.22 - walkBob, size * 0.26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fed7aa'; // Face oval
    ctx.beginPath();
    ctx.ellipse(cx, cy - size * 0.2 - walkBob, size * 0.16, size * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Face
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(cx, cy - size * 0.2 - walkBob, size * 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Boy's PMR field cap (Topi Madya Biru)
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(cx, cy - size * 0.28 - walkBob, size * 0.22, Math.PI, 0);
    ctx.fill();
    // Cap visor
    ctx.fillStyle = '#0369a1';
    ctx.fillRect(cx - size * 0.24, cy - size * 0.28 - walkBob, size * 0.48, 4);

    // Red Cross mini emblem on cap
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(cx - 3, cy - size * 0.36 - walkBob, 6, 2);
    ctx.fillRect(cx - 1, cy - size * 0.38 - walkBob, 2, 6);
  }

  // Cartoon Eyes based on direction
  ctx.fillStyle = '#0f172a';
  let eyeOffsetX = 0;
  let eyeOffsetY = 0;
  if (direction === 'LEFT') eyeOffsetX = -3;
  if (direction === 'RIGHT') eyeOffsetX = 3;
  if (direction === 'UP') eyeOffsetY = -2;
  if (direction === 'DOWN') eyeOffsetY = 2;

  if (direction !== 'UP') {
    ctx.beginPath();
    ctx.arc(cx - size * 0.07 + eyeOffsetX, cy - size * 0.22 - walkBob + eyeOffsetY, 2.5, 0, Math.PI * 2);
    ctx.arc(cx + size * 0.07 + eyeOffsetX, cy - size * 0.22 - walkBob + eyeOffsetY, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Rosy Cheeks
    ctx.fillStyle = 'rgba(244, 63, 94, 0.45)';
    ctx.beginPath();
    ctx.arc(cx - size * 0.12 + eyeOffsetX, cy - size * 0.17 - walkBob, 3, 0, Math.PI * 2);
    ctx.arc(cx + size * 0.12 + eyeOffsetX, cy - size * 0.17 - walkBob, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Explorer backpack
  ctx.fillStyle = '#b45309';
  if (direction === 'UP') {
    ctx.beginPath();
    ctx.roundRect(cx - size * 0.18, cy - size * 0.02 - walkBob, size * 0.36, size * 0.28, 4);
    ctx.fill();
  }

  ctx.restore();
}

function drawExitGapuraState(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  size: number,
  unlocked: boolean,
  tick: number
) {
  ctx.save();
  const cx = px + size * 0.5;
  const cy = py + size * 0.5;

  if (unlocked) {
    // Radiant golden light beam
    const glow = Math.sin(tick * 0.15) * 0.25 + 0.75;
    ctx.fillStyle = `rgba(234, 179, 8, ${glow * 0.6})`;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.42, 0, Math.PI * 2);
    ctx.fill();

    // Golden lock open icon
    ctx.fillStyle = '#fef08a';
    ctx.font = `bold ${Math.floor(size * 0.35)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨', cx, cy);
  } else {
    // Locked feather slot silhouette
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // Feather key hole outline
    ctx.strokeStyle = '#eab308';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy - 2, 4, 0, Math.PI * 2);
    ctx.moveTo(cx, cy + 2);
    ctx.lineTo(cx, cy + 8);
    ctx.stroke();
  }
  ctx.restore();
}
