import React, { useState } from 'react';
import { X, Globe, Video, ExternalLink, Play, Sparkles, BookOpen, ChevronRight, ShieldCheck } from 'lucide-react';
import { ONLINE_PORTALS, YOUTUBE_VIDEOS, VideoResource } from '../data/learningResources';

interface MediaHubModalProps {
  onClose: () => void;
  initialTab?: 'portals' | 'videos';
}

export const MediaHubModal: React.FC<MediaHubModalProps> = ({
  onClose,
  initialTab = 'portals'
}) => {
  const [activeTab, setActiveTab] = useState<'portals' | 'videos'>(initialTab);
  const [selectedVideo, setSelectedVideo] = useState<VideoResource>(YOUTUBE_VIDEOS[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-teal-500/80 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-950 border-b border-teal-700/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-amber-500 p-0.5 flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400 font-black">
                🦚
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-100 flex items-center gap-2">
                <span>Pusat Media & Sumber Belajar</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Online
                </span>
              </h3>
              <p className="text-xs text-teal-300/80">
                PMR Madya Kontingen Merak · SMP Negeri 1 Kemranjen
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-2 bg-slate-950 border-b border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('portals')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 font-bold ${
              activeTab === 'portals'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Portal & Web Interaktif (3)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('videos')}
            className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 font-bold ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Video Pembelajaran PMR (3)</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* TAB 1: PORTAL & WEB INTERAKTIF */}
          {activeTab === 'portals' && (
            <div className="space-y-3.5">
              <div className="p-3 bg-emerald-950/40 rounded-2xl border border-emerald-700/40 text-xs text-slate-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  Akses langsung aplikasi dan portal pembelajaran digital karya pembina & siswa SMPN 1 Kemranjen. Klik tombol interaktif untuk membuka di tab baru.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {ONLINE_PORTALS.map(portal => (
                  <div
                    key={portal.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-teal-500/60 transition-all flex flex-col justify-between gap-3 shadow-md group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                          {portal.badge}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {portal.category}
                        </span>
                      </div>

                      <h4 className="font-bold text-base text-slate-100 group-hover:text-amber-300 transition-colors">
                        {portal.title}
                      </h4>
                      <p className="text-xs text-teal-400/90 font-medium">
                        {portal.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {portal.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 truncate max-w-[200px]">
                        {portal.url.replace('https://', '')}
                      </span>
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                      >
                        <span>Buka Laman Web</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: VIDEO PEMBELAJARAN PMR MADYA */}
          {activeTab === 'videos' && (
            <div className="space-y-4">
              {/* Active Embedded Player */}
              <div className="rounded-2xl overflow-hidden border-2 border-emerald-600/70 bg-black shadow-lg">
                <div className="aspect-video w-full bg-slate-950">
                  <iframe
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-3 bg-slate-950 flex items-center justify-between gap-2 border-t border-slate-800">
                  <div className="min-w-0">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                      {selectedVideo.topic}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-100 truncate">
                      {selectedVideo.title}
                    </h5>
                  </div>
                  <a
                    href={selectedVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 rounded-xl bg-rose-700 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-colors"
                  >
                    <span>Buka YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Video List Selector */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-teal-300">
                  Pilih Video Edukasi PMR:
                </p>

                <div className="space-y-2">
                  {YOUTUBE_VIDEOS.map(video => {
                    const isSelected = selectedVideo.id === video.id;
                    return (
                      <button
                        key={video.id}
                        type="button"
                        onClick={() => setSelectedVideo(video)}
                        className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-teal-950/80 border-teal-500 ring-1 ring-teal-500/40 text-slate-100'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] font-bold text-amber-400 uppercase">
                              {video.topic}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              {video.channel}
                            </span>
                          </div>
                          <h6 className="font-bold text-xs sm:text-sm truncate">
                            {video.title}
                          </h6>
                          <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">
                            {video.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>SMPN 1 Kemranjen · Kontingen Merak</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-teal-700 text-white font-semibold hover:bg-teal-600 transition-colors"
          >
            Tutup Media Hub
          </button>
        </div>
      </div>
    </div>
  );
};
