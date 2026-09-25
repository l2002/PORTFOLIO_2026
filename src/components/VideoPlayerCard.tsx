import { useState, useEffect, useRef, ChangeEvent, DragEvent } from 'react';
import {
  Upload,
  Link as LinkIcon,
  Trash2,
  Film,
  ExternalLink,
  Play,
  RotateCcw,
} from 'lucide-react';
import { saveVideoBlob, getVideoBlob, deleteVideoBlob } from '../utils/videoStorage';

interface VideoPlayerCardProps {
  storageKey: string;
  defaultTitle: string;
  defaultDescription?: string;
  badge: string;
  badgeColor?: 'cyan' | 'emerald' | 'amber';
  suggestedFileName?: string;
  videoHighlights?: string[];
  defaultVideoUrl?: string;
}

/**
 * Parses and converts video URLs (YouTube, Vimeo, etc.) into clean embed URLs.
 */
function parseVideoSource(rawUrl: string | null) {
  if (!rawUrl) return { embedUrl: null, isIframe: false, isVimeo: false, rawUrl: null };
  const url = rawUrl.trim();

  // YouTube match
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) {
      return {
        embedUrl: `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=0&rel=0`,
        isIframe: true,
        isVimeo: false,
        rawUrl: url,
      };
    }
  }

  // Vimeo match
  // 1) reviews format: vimeo.com/reviews/<uuid>/videos/<id>
  // 2) standard format with params: vimeo.com/<id>?fl=...
  // 3) player format: player.vimeo.com/video/<id>
  if (url.includes('vimeo.com')) {
    const reviewMatch = url.match(/vimeo\.com\/reviews\/[^/]+\/videos\/(\d+)/);
    if (reviewMatch && reviewMatch[1]) {
      return {
        embedUrl: `https://player.vimeo.com/video/${reviewMatch[1]}?title=0&byline=0&portrait=0&badge=0`,
        isIframe: true,
        isVimeo: true,
        rawUrl: url,
      };
    }
    const standardMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (standardMatch && standardMatch[1]) {
      return {
        embedUrl: `https://player.vimeo.com/video/${standardMatch[1]}?title=0&byline=0&portrait=0&badge=0`,
        isIframe: true,
        isVimeo: true,
        rawUrl: url,
      };
    }
    if (url.includes('player.vimeo.com/video/')) {
      return {
        embedUrl: url,
        isIframe: true,
        isVimeo: true,
        rawUrl: url,
      };
    }
  }

  return {
    embedUrl: url,
    isIframe: false,
    isVimeo: false,
    rawUrl: url,
  };
}

export default function VideoPlayerCard({
  storageKey,
  defaultTitle,
  badge,
  badgeColor = 'cyan',
  defaultVideoUrl,
}: VideoPlayerCardProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>(defaultVideoUrl || null);
  const [customLink, setCustomLink] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Load from IndexedDB or localStorage on mount
  useEffect(() => {
    async function loadSavedVideo() {
      try {
        const blob = await getVideoBlob(storageKey);
        if (blob) {
          const objectUrl = URL.createObjectURL(blob);
          setVideoUrl(objectUrl);
          setFileName('Video tải lên từ thiết bị');
        } else {
          // Check localStorage for URL link
          const savedLink = localStorage.getItem(`url_${storageKey}`);
          if (savedLink) {
            setVideoUrl(savedLink);
            setCustomLink(savedLink);
          } else if (defaultVideoUrl) {
            setVideoUrl(defaultVideoUrl);
          }
        }
      } catch (e) {
        console.error('Error loading video', e);
      }
    }
    loadSavedVideo();

    return () => {
      if (videoUrl && videoUrl.startsWith('blob:')) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [storageKey, defaultVideoUrl]);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('video/')) {
      alert('Vui lòng chọn định dạng file video (.mp4, .webm, .mov)');
      return;
    }

    if (videoUrl && videoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(videoUrl);
    }

    const objectUrl = URL.createObjectURL(file);
    setVideoUrl(objectUrl);
    setFileName(file.name);

    // Save to IndexedDB for persistence
    await saveVideoBlob(storageKey, file);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleApplyLink = () => {
    if (!customLink.trim()) return;
    const url = customLink.trim();
    setVideoUrl(url);
    localStorage.setItem(`url_${storageKey}`, url);
    setShowLinkInput(false);
  };

  const handleResetToDefault = async () => {
    if (videoUrl && videoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(videoUrl);
    }
    await deleteVideoBlob(storageKey);
    localStorage.removeItem(`url_${storageKey}`);
    setFileName(null);
    setCustomLink('');
    setVideoUrl(defaultVideoUrl || null);
  };

  const handleRemoveVideo = async () => {
    if (videoUrl && videoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(videoUrl);
    }
    setVideoUrl(null);
    setFileName(null);
    await deleteVideoBlob(storageKey);
    localStorage.removeItem(`url_${storageKey}`);
  };

  const parsed = parseVideoSource(videoUrl);

  const getThemeClasses = () => {
    switch (badgeColor) {
      case 'emerald':
        return {
          icon: 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30',
          badge: 'text-emerald-300',
          button: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20',
          activeRing: 'ring-emerald-400 bg-emerald-950/30',
          border: 'border-emerald-500/20 hover:border-emerald-400/40',
        };
      case 'amber':
        return {
          icon: 'bg-amber-500/20 text-amber-400 border border-amber-400/30',
          badge: 'text-amber-300',
          button: 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20',
          activeRing: 'ring-amber-400 bg-amber-950/30',
          border: 'border-amber-500/20 hover:border-amber-400/40',
        };
      case 'cyan':
      default:
        return {
          icon: 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30',
          badge: 'text-cyan-300',
          button: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20',
          activeRing: 'ring-cyan-400 bg-cyan-950/30',
          border: 'border-cyan-500/20 hover:border-cyan-400/40',
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className={`rounded-3xl glass-panel border ${theme.border} overflow-hidden flex flex-col shadow-2xl transition-all duration-300`}>
      {/* Video Header Bar */}
      <div className="px-4 py-3 bg-slate-950/70 border-b border-white/5 flex items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${theme.icon}`}>
            <Film className="w-4 h-4" />
          </div>
          <div className="overflow-hidden">
            <span className={`text-[11px] font-extrabold uppercase tracking-wider block ${theme.badge}`}>
              {badge}
            </span>
            <span className="text-xs font-bold text-white truncate block">
              {fileName || defaultTitle}
            </span>
          </div>
        </div>

        {/* Video Actions Toolbar */}
        <div className="flex items-center gap-1.5 shrink-0">
          {parsed.rawUrl && (
            <a
              href={parsed.rawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-xl glass-pill hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 transition-all"
              title="Mở video trên tab mới"
            >
              <ExternalLink className="w-3 h-3" />
              <span className="hidden sm:inline">Mở link</span>
            </a>
          )}

          {defaultVideoUrl && videoUrl !== defaultVideoUrl && (
            <button
              onClick={handleResetToDefault}
              className="p-1.5 rounded-xl glass-pill hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Khôi phục video mặc định"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {videoUrl && (
            <button
              onClick={handleRemoveVideo}
              className="p-1.5 rounded-xl glass-pill hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-all"
              title="Xóa video"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Video Viewport */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full aspect-video bg-black flex flex-col items-center justify-center overflow-hidden transition-all ${
          isDragOver ? `ring-2 ${theme.activeRing}` : ''
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleInputChange}
        />

        {videoUrl ? (
          parsed.isIframe ? (
            <div className="relative w-full h-full bg-black">
              <iframe
                src={parsed.embedUrl!}
                title={defaultTitle}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
            </div>
          ) : (
            <div className="relative w-full h-full bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            </div>
          )
        ) : (
          /* Empty / Upload State */
          <div className="p-6 text-center max-w-sm mx-auto flex flex-col items-center justify-center">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-lg ${theme.icon}`}>
              <Play className="w-6 h-6 ml-0.5" />
            </div>

            <h4 className="text-sm sm:text-base font-extrabold text-white mb-3">
              {defaultTitle}
            </h4>

            {/* Action Buttons to Load Video */}
            <div className="flex flex-wrap items-center justify-center gap-2 w-full">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs shadow-md transition-all ${theme.button}`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Tải File Lên</span>
              </button>

              <button
                type="button"
                onClick={() => setShowLinkInput(!showLinkInput)}
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl glass-pill hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs transition-all border border-white/10"
              >
                <LinkIcon className="w-3 h-3" />
                <span>Dán Link</span>
              </button>
            </div>

            {/* Link Input Bar */}
            {showLinkInput && (
              <div className="mt-3 flex items-center gap-1.5 w-full">
                <input
                  type="text"
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                  placeholder="Dán link Vimeo, YouTube hoặc MP4..."
                  className="flex-1 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="button"
                  onClick={handleApplyLink}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                >
                  Xem
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
