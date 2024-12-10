import React, { createContext, useContext, useState } from 'react';

// Create a context
const ImageOpenContext = createContext();

// Create a provider to manage the state globally
export const ImageOpenProvider = ({ children }) => {
  const [isImageOpen, setIsImageOpen] = useState(null);

  const imageOpenOpen = (e) => setIsImageOpen(e);

  return (
    <ImageOpenContext.Provider value={{ isImageOpen, imageOpenOpen }}>
      {children}
    </ImageOpenContext.Provider>
  );
};

// Create a custom hook to use the context easily
export const useImageOpen = () => {
  const context = useContext(ImageOpenContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};