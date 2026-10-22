/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { CadetProfile, Direction, GameScreen, LevelData, ObstacleEncounter, Position } from './types/game';
import { LEVELS } from './data/levels';
import { PP_QUESTIONS } from './data/questions';
import { PortalHeader } from './components/PortalHeader';
import { PanelMateri } from './components/PanelMateri';
import { PanelPermainan } from './components/PanelPermainan';
import { PanelTugas } from './components/PanelTugas';
import { HeaderHUD } from './components/HeaderHUD';
import { GameCanvas } from './components/GameCanvas';
import { VirtualDPad } from './components/VirtualDPad';
import { QuizModal } from './components/QuizModal';
import { FeatherKeyModal } from './components/FeatherKeyModal';
import { LevelClearedModal } from './components/LevelClearedModal';
import { GameOverModal } from './components/GameOverModal';
import { CertificateModal } from './components/CertificateModal';
import { PocketBookModal } from './components/PocketBookModal';
import { TitleScreen } from './components/TitleScreen';
import { PeacockEmblem } from './components/PeacockEmblem';
import { soundManager } from './utils/audio';

type PortalTab = 'materi' | 'permainan' | 'tugas' | 'bukusaku';

export default function App() {
  // Navigation: either inside the PMR Journey Portal, or actively playing the adventure game
  const [activePortalTab, setActivePortalTab] = useState<PortalTab>('permainan');
  const [isGameActive, setIsGameActive] = useState<boolean>(false);

  // Game States
  const [gameScreen, setGameScreen] = useState<GameScreen>('TITLE');
  const [cadet, setCadet] = useState<CadetProfile>({
    name: 'Bima Merak',
    gender: 'putra',
    contingent: 'Kontingen Merak',
    school: 'SMP Negeri 1 Kemranjen'
  });

  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [levelStates, setLevelStates] = useState<LevelData[]>(() => JSON.parse(JSON.stringify(LEVELS)));

  const currentLevel = levelStates[currentLevelIndex] || levelStates[0];

  const [playerPos, setPlayerPos] = useState<Position>(currentLevel.playerStart);
  const [playerDirection, setPlayerDirection] = useState<Direction>('DOWN');
  const [hearts, setHearts] = useState<number>(4);
  const maxHearts = 4;
  const [score, setScore] = useState<number>(0);
  const [collectedFeathers, setCollectedFeathers] = useState<number[]>([]);
  const [inventory, setInventory] = useState<string[]>(['Slayer Biru Madya', 'Buku Saku P3K']);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showPocketbook, setShowPocketbook] = useState<boolean>(false);
  const [pocketbookInitialTab, setPocketbookInitialTab] = useState<'dasar' | 'luka' | 'fraktur' | 'pingsan' | 'ular' | 'evakuasi' | 'online'>('dasar');

  // Active quiz encounter
  const [activeObstacle, setActiveObstacle] = useState<ObstacleEncounter | null>(null);

  // Sync player position when level changes
  useEffect(() => {
    if (currentLevel) {
      setPlayerPos(currentLevel.playerStart);
      setPlayerDirection('DOWN');
    }
  }, [currentLevelIndex]);

  const handleToggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  // Launching the built-in adventure game
  const handleLaunchPPGame = () => {
    soundManager.playClick();
    setIsGameActive(true);
    setGameScreen('TITLE');
  };

  const handleStartAdventure = (selectedCadet: CadetProfile) => {
    setCadet(selectedCadet);
    setGameScreen('PLAYING');
    setCurrentLevelIndex(0);
    setLevelStates(JSON.parse(JSON.stringify(LEVELS)));
    setHearts(4);
    setScore(0);
    setCollectedFeathers([]);
    setInventory(['Slayer Biru Madya', 'Buku Saku P3K']);
  };

  const handleBackToPortal = () => {
    soundManager.playClick();
    setIsGameActive(false);
  };

  // Terrain collision check
  const isTilePassable = (x: number, y: number): boolean => {
    if (x < 0 || x >= currentLevel.gridWidth || y < 0 || y >= currentLevel.gridHeight) {
      return false;
    }
    const tile = currentLevel.tiles[y][x];
    if (tile === 'bamboo' || tile === 'tree' || tile === 'river') {
      return false;
    }
    return true;
  };

  // Move handler
  const handleMove = useCallback((dir: Direction) => {
    if (gameScreen !== 'PLAYING') return;

    setPlayerDirection(dir);
    soundManager.playStep();

    let newX = playerPos.x;
    let newY = playerPos.y;

    if (dir === 'UP') newY -= 1;
    if (dir === 'DOWN') newY += 1;
    if (dir === 'LEFT') newX -= 1;
    if (dir === 'RIGHT') newX += 1;

    if (!isTilePassable(newX, newY)) {
      return;
    }

    // Check Obstacle
    const obstacle = currentLevel.obstacles.find(o => o.x === newX && o.y === newY && !o.defeated);
    if (obstacle) {
      soundManager.playEncounter();
      setActiveObstacle(obstacle);
      setGameScreen('QUIZ');
      return;
    }

    // Move player
    setPlayerPos({ x: newX, y: newY });

    // Collectible Item
    const item = currentLevel.items.find(i => i.x === newX && i.y === newY && !i.collected);
    if (item) {
      setLevelStates(prevLevels => {
        const next = [...prevLevels];
        const lvl = { ...next[currentLevelIndex] };
        lvl.items = lvl.items.map(it => it.id === item.id ? { ...it, collected: true } : it);
        next[currentLevelIndex] = lvl;
        return next;
      });

      if (item.type === 'feather_key') {
        setCollectedFeathers(prev => Array.from(new Set([...prev, currentLevel.id])));
        setScore(s => s + 200);
        setGameScreen('FEATHER_FOUND');
      } else {
        setScore(s => s + 60);
        setInventory(inv => Array.from(new Set([...inv, item.name])));
        soundManager.playCorrect();
      }
    }

    // Exit Gapura
    if (newX === currentLevel.exitGapura.x && newY === currentLevel.exitGapura.y) {
      const hasKey = collectedFeathers.includes(currentLevel.id);
      if (hasKey) {
        if (currentLevelIndex >= LEVELS.length - 1) {
          soundManager.playLevelVictory();
          setGameScreen('CERTIFICATE');
        } else {
          setGameScreen('LEVEL_CLEARED');
        }
      }
    }
  }, [gameScreen, playerPos, currentLevel, currentLevelIndex, collectedFeathers]);

  const handleTileTap = (target: Position) => {
    if (gameScreen !== 'PLAYING') return;
    const dx = target.x - playerPos.x;
    const dy = target.y - playerPos.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      handleMove(dx > 0 ? 'RIGHT' : 'LEFT');
    } else if (dy !== 0) {
      handleMove(dy > 0 ? 'DOWN' : 'UP');
    }
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (isCorrect && activeObstacle) {
      setScore(s => s + activeObstacle.rewardScore);
      setLevelStates(prevLevels => {
        const next = [...prevLevels];
        const lvl = { ...next[currentLevelIndex] };
        lvl.obstacles = lvl.obstacles.map(o => o.id === activeObstacle.id ? { ...o, defeated: true } : o);
        next[currentLevelIndex] = lvl;
        return next;
      });

      if (activeObstacle.rewardItem) {
        setInventory(inv => Array.from(new Set([...inv, activeObstacle.rewardItem || ''])));
      }
    } else {
      setHearts(prev => Math.max(0, prev - 1));
    }
  };

  const handleCloseQuiz = () => {
    if (hearts <= 0) {
      setGameScreen('GAME_OVER');
    } else {
      setGameScreen('PLAYING');
    }
    setActiveObstacle(null);
  };

  const handleProceedFromFeather = () => {
    setGameScreen('PLAYING');
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < LEVELS.length - 1) {
      setCurrentLevelIndex(idx => idx + 1);
      setHearts(maxHearts);
      setGameScreen('PLAYING');
    } else {
      setGameScreen('CERTIFICATE');
    }
  };

  const handleRetryLevel = () => {
    setHearts(maxHearts);
    setGameScreen('PLAYING');
    setPlayerPos(currentLevel.playerStart);
  };

  return (
    <div className="min-h-screen bg-[#02130c] text-slate-100 flex flex-col justify-between overflow-x-hidden font-sans">
      {/* ================= VIEW 1: PMR JOURNEY PORTAL ================= */}
      {!isGameActive && (
        <div className="flex-1 flex flex-col">
          {/* Portal Header with Branding & Navigation Tabs */}
          <PortalHeader
            activeTab={activePortalTab}
            onTabChange={tab => {
              if (tab === 'bukusaku') {
                setPocketbookInitialTab('dasar');
                setShowPocketbook(true);
              } else {
                soundManager.playClick();
                setActivePortalTab(tab);
              }
            }}
            isMuted={isMuted}
            onToggleSound={handleToggleSound}
          />

          {/* Main Content Area */}
          <main className="max-w-6xl w-full mx-auto px-4 py-6 flex-1">
            {/* TAB 1: PANEL MATERI (3 Video: PRS, PP, Kepalangmerahan) */}
            {activePortalTab === 'materi' && <PanelMateri />}

            {/* TAB 2: PANEL PERMAINAN (3 Permainan: Game PP Kunci Emas, PRS, Kepalangmerahan) */}
            {activePortalTab === 'permainan' && (
              <PanelPermainan
                onLaunchPPGame={handleLaunchPPGame}
                highScore={score}
                feathersUnlocked={collectedFeathers.length}
              />
            )}

            {/* TAB 3: PANEL TUGAS (Dina Project: dinaproject.netlify.app) */}
            {activePortalTab === 'tugas' && <PanelTugas />}
          </main>

          {/* Portal Footer */}
          <footer className="w-full bg-slate-950/80 border-t border-emerald-900/60 py-4 px-4 text-center text-xs text-emerald-400/80 space-y-1">
            <p className="font-bold text-slate-300">
              PMR Journey · Palang Merah Remaja Madya Kontingen Merak
            </p>
            <p className="text-[11px] text-slate-500">
              SMP Negeri 1 Kemranjen · "Siamo Tutti Fratelli" (Kita Semua Bersaudara)
            </p>
          </footer>
        </div>
      )}

      {/* ================= VIEW 2: GAME PP RIMBA KUNCI EMAS ================= */}
      {isGameActive && (
        <div className="flex-1 flex flex-col justify-between">
          {/* Title Screen View */}
          {gameScreen === 'TITLE' && (
            <div className="relative">
              {/* Back to Portal button on Title Screen */}
              <div className="absolute top-4 left-4 z-20">
                <button
                  type="button"
                  onClick={handleBackToPortal}
                  className="py-1.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-teal-300 font-bold text-xs flex items-center gap-1.5 border border-teal-600/40 shadow transition-colors"
                >
                  <span>← Kembali ke Portal PMR Journey</span>
                </button>
              </div>

              <TitleScreen
                onStartGame={handleStartAdventure}
                onOpenPocketbook={() => {
                  setPocketbookInitialTab('dasar');
                  setShowPocketbook(true);
                }}
                onOpenMediaHub={tab => {
                  setIsGameActive(false);
                  if (tab === 'videos') {
                    setActivePortalTab('materi');
                  } else {
                    setActivePortalTab('permainan');
                  }
                }}
              />
            </div>
          )}

          {/* Active Level Play View */}
          {gameScreen !== 'TITLE' && (
            <div className="flex-1 flex flex-col justify-between w-full max-w-lg mx-auto">
              {/* Header HUD Bar */}
              <HeaderHUD
                currentLevel={currentLevel.id}
                totalLevels={LEVELS.length}
                hearts={hearts}
                maxHearts={maxHearts}
                score={score}
                feathersCount={collectedFeathers.length}
                isMuted={isMuted}
                onToggleSound={handleToggleSound}
                onOpenPocketbook={() => {
                  setPocketbookInitialTab('dasar');
                  setShowPocketbook(true);
                }}
                onBackToPortal={handleBackToPortal}
                onRestartLevel={handleRetryLevel}
              />

              {/* Mission Indicator Banner */}
              <div className="px-3 pt-2 text-center">
                <h2 className="text-sm sm:text-base font-extrabold text-amber-200 tracking-tight font-display flex items-center justify-center gap-1.5">
                  <span>{currentLevel.title}</span>
                </h2>
                <p className="text-[11px] text-teal-300/90 leading-tight">
                  {currentLevel.learningTopic}
                </p>
              </div>

              {/* Interactive Game Canvas */}
              <div className="my-auto py-1 flex items-center justify-center">
                <GameCanvas
                  level={currentLevel}
                  playerPos={playerPos}
                  playerDirection={playerDirection}
                  cadet={cadet}
                  hasFeatherKey={collectedFeathers.includes(currentLevel.id)}
                  onMove={handleMove}
                  onTileTap={handleTileTap}
                />
              </div>

              {/* Mobile Ergonomic Touch Controller */}
              <VirtualDPad
                onMove={handleMove}
                onAction={() => handleMove(playerDirection)}
                onOpenPocketbook={() => {
                  setPocketbookInitialTab('dasar');
                  setShowPocketbook(true);
                }}
                disabled={gameScreen !== 'PLAYING'}
              />
            </div>
          )}
        </div>
      )}

      {/* ================= MODALS ================= */}

      {/* First Aid Encounter Challenge Modal */}
      {gameScreen === 'QUIZ' && activeObstacle && (
        <QuizModal
          obstacle={activeObstacle}
          question={PP_QUESTIONS[activeObstacle.questionId] || PP_QUESTIONS['q1']}
          heartsRemaining={hearts}
          onAnswerSubmit={handleAnswerSubmit}
          onClose={handleCloseQuiz}
        />
      )}

      {/* Feather Key Unlocked Modal */}
      {gameScreen === 'FEATHER_FOUND' && (
        <FeatherKeyModal
          levelNumber={currentLevel.id}
          levelTitle={currentLevel.title}
          onProceed={handleProceedFromFeather}
        />
      )}

      {/* Level Cleared Modal */}
      {gameScreen === 'LEVEL_CLEARED' && (
        <LevelClearedModal
          completedLevel={currentLevel.id}
          completedTitle={currentLevel.title}
          nextLevelTitle={LEVELS[currentLevelIndex + 1]?.title}
          score={score}
          onNextLevel={handleNextLevel}
        />
      )}

      {/* Game Over Modal */}
      {gameScreen === 'GAME_OVER' && (
        <GameOverModal
          score={score}
          levelTitle={currentLevel.title}
          onRetry={handleRetryLevel}
          onOpenPocketbook={() => {
            setPocketbookInitialTab('dasar');
            setShowPocketbook(true);
          }}
        />
      )}

      {/* Certificate Modal */}
      {gameScreen === 'CERTIFICATE' && (
        <CertificateModal
          cadet={cadet}
          score={score}
          onPlayAgain={() => {
            setGameScreen('TITLE');
          }}
          onOpenMediaHub={tab => {
            setIsGameActive(false);
            if (tab === 'videos') {
              setActivePortalTab('materi');
            } else {
              setActivePortalTab('tugas');
            }
          }}
        />
      )}

      {/* Pocket Book Modal (accessible anytime) */}
      {showPocketbook && (
        <PocketBookModal
          initialTab={pocketbookInitialTab}
          onClose={() => setShowPocketbook(false)}
        />
      )}
    </div>
  );
}
