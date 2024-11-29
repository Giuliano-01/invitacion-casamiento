import React, { createContext, useContext, useState } from 'react';

// Create a context
const ToggleLetterContext = createContext();

// Create a provider to manage the state globally
export const ToggleProvider = ({ children }) => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const toggleLetterOpen = () => setIsLetterOpen(prevState => !prevState);

  return (
    <ToggleLetterContext.Provider value={{ isLetterOpen, toggleLetterOpen }}>
      {children}
    </ToggleLetterContext.Provider>
  );
};

// Create a custom hook to use the context easily
export const useToggleLetter = () => {
  const context = useContext(ToggleLetterContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};