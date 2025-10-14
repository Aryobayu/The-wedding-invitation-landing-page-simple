'use client';

import { useEffect, useRef } from 'react';
import { useAudio } from '@/context/audio-context';
import { Button } from '@/components/ui/button';
import { Music, Music2, Music3, Music4 } from 'lucide-react';

export function MusicPlayer() {
  const { isPlaying, setIsPlaying } = useAudio();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch((error) => {
        console.error('Audio play failed:', error);
        // Autoplay was prevented.
        setIsPlaying(false);
      });
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/lagu-pernikahan.mp3" loop />
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={togglePlayPause}
          variant="outline"
          size="icon"
          className="rounded-full bg-card/80 backdrop-blur-sm border-border shadow-lg w-12 h-12"
        >
          {isPlaying ? (
            <Music2 className="w-6 h-6 animate-pulse" />
          ) : (
            <Music4 className="w-6 h-6" />
          )}
          <span className="sr-only">Play/Pause Music</span>
        </Button>
      </div>
    </>
  );
}
