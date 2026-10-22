import React, { useState } from 'react';
import { CheckCircle2, XCircle, Heart, Award, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';
import { ObstacleEncounter, PPQuestion } from '../types/game';
import { soundManager } from '../utils/audio';

interface QuizModalProps {
  obstacle: ObstacleEncounter;
  question: PPQuestion;
  heartsRemaining: number;
  onAnswerSubmit: (isCorrect: boolean) => void;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  obstacle,
  question,
  heartsRemaining,
  onAnswerSubmit,
  onClose
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedIndex(index);
    const correct = index === question.correctIndex;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
    }

    onAnswerSubmit(correct);
  };

  // Icon / Artwork based on obstacle type
  const renderObstacleBadge = () => {
    switch (obstacle.type) {
      case 'nyamuk_raksasa':
        return (
          <div className="w-14 h-14 rounded-2xl bg-amber-950 border border-amber-500/60 flex items-center justify-center text-3xl shadow-inner">
            🦟
          </div>
        );
      case 'ular_berbisa':
        return (
          <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-500/60 flex items-center justify-center text-3xl shadow-inner">
            🐍
          </div>
        );
      case 'monster_sampah':
        return (
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-rose-500/60 flex items-center justify-center text-3xl shadow-inner">
            👹
          </div>
        );
      case 'ranting_duri':
        return (
          <div className="w-14 h-14 rounded-2xl bg-amber-950 border border-amber-600/60 flex items-center justify-center text-3xl shadow-inner">
            🪵
          </div>
        );
      case 'tebing_curam':
        return (
          <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-cyan-500/60 flex items-center justify-center text-3xl shadow-inner">
            ⛰️
          </div>
        );
      default:
        return (
          <div className="w-14 h-14 rounded-2xl bg-teal-950 border border-teal-500/60 flex items-center justify-center text-3xl shadow-inner">
            🏛️
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div 
        className={`w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 border-2 ${
          isAnswered 
            ? isCorrect 
              ? 'border-emerald-500 shadow-emerald-900/50' 
              : 'border-rose-500 shadow-rose-900/50' 
            : 'border-teal-500/50 shadow-teal-950/70'
        } rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 max-h-[92vh]`}
      >
        {/* Header Ribbon */}
        <div className="px-4 py-3 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 border-b border-teal-800/40 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>Tantangan P3K Madya 2008</span>
            <span aria-hidden="true" className="text-teal-600">·</span>
            <span className="text-amber-300">{question.category}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-full border border-teal-800/40">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span className="text-xs font-bold text-rose-300 tabular-nums">{heartsRemaining}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Obstacle info */}
          <div className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-2xl border border-slate-800">
            {renderObstacleBadge()}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-100 truncate">
                {obstacle.name}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {obstacle.description}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[11px] text-amber-400 font-bold block">
                +{obstacle.rewardScore} Pts
              </span>
              <span className="text-[10px] text-slate-500">Skor PP</span>
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-teal-400 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              Soal Evaluasi Pertolongan Pertama:
            </p>
            <h4 className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
              {question.question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-2 pt-1">
            {question.options.map((option, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedIndex === idx;
              const isCorrectOption = idx === question.correctIndex;

              let btnStyle = 'bg-slate-900 hover:bg-slate-800/80 text-slate-200 border-slate-800';

              if (isAnswered) {
                if (isCorrectOption) {
                  btnStyle = 'bg-emerald-950/90 text-emerald-200 border-emerald-500 ring-2 ring-emerald-500/40';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/90 text-rose-200 border-rose-500 ring-2 ring-rose-500/40';
                } else {
                  btnStyle = 'bg-slate-950/40 text-slate-500 border-slate-900 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-teal-900 text-teal-100 border-teal-400';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 active:scale-[0.99] ${btnStyle}`}
                >
                  <span className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 ${
                    isAnswered && isCorrectOption
                      ? 'bg-emerald-500 text-slate-950'
                      : isAnswered && isSelected
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {letter}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed flex-1">
                    {option}
                  </span>
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Modul Explanation Banner */}
          {isAnswered && (
            <div className={`p-3.5 rounded-2xl border ${
              isCorrect 
                ? 'bg-emerald-950/70 border-emerald-600/50 text-emerald-100' 
                : 'bg-rose-950/70 border-rose-600/50 text-rose-100'
            } space-y-2 animate-in fade-in duration-200`}>
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                {isCorrect ? (
                  <>
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>Jawaban Tepat! Rintangan Terlewati! (+{obstacle.rewardScore} Poin)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>Kurang Tepat! Cadet terkena damage (-1 Nyawa).</span>
                  </>
                )}
              </div>

              <p className="text-xs leading-relaxed text-slate-300">
                {question.explanation}
              </p>

              <div className="text-[11px] text-teal-400/90 font-medium pt-1 border-t border-slate-800">
                📖 Sumber: {question.modulReference}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end">
          {isAnswered ? (
            <button
              type="button"
              onClick={onClose}
              className={`w-full py-3 px-5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 ${
                isCorrect
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500'
                  : 'bg-gradient-to-r from-slate-800 to-slate-700 text-slate-200 hover:bg-slate-700'
              }`}
            >
              <span>{isCorrect ? 'Buka Kunci Jalan & Lanjutkan' : 'Lanjutkan Pencarian'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="text-xs text-slate-500 text-center w-full">
              Pilih salah satu jawaban dari Modul PP Madya 2008 untuk melanjutkan
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
