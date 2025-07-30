import React, { createContext, useContext, useState } from 'react';
import useSound from 'use-sound';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSoundEffects = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundEffects must be used within a SoundProvider');
  }
  return context;
};

interface SoundProviderProps {
  children: React.ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  // Sound URLs (you can replace these with your own sound files)
  const [playHoverSound] = useSound('/sounds/hover.mp3', { 
    volume: 0.2,
    soundEnabled: isSoundEnabled 
  });
  
  const [playClickSound] = useSound('/sounds/click.mp3', { 
    volume: 0.3,
    soundEnabled: isSoundEnabled 
  });
  
  const [playSuccessSound] = useSound('/sounds/success.mp3', { 
    volume: 0.4,
    soundEnabled: isSoundEnabled 
  });

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const playHover = () => {
    if (isSoundEnabled) playHoverSound();
  };

  const playClick = () => {
    if (isSoundEnabled) playClickSound();
  };

  const playSuccess = () => {
    if (isSoundEnabled) playSuccessSound();
  };

  return (
    <SoundContext.Provider value={{
      isSoundEnabled,
      toggleSound,
      playHover,
      playClick,
      playSuccess,
    }}>
      {children}
    </SoundContext.Provider>
  );
};