import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface DarkmodeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const DarkmodeContext = createContext<DarkmodeContextType | undefined>(undefined);

export const DarkmodeProvider = ({ children }: { children: ReactNode }) => {
  // Check session storage for an initial value
  const getInitialDarkmode = (): boolean => {
    const storedValue = sessionStorage.getItem('darkmode');
    return storedValue ? JSON.parse(storedValue) : false;
  };

  const [darkmode, setDarkmode] = useState<boolean>(getInitialDarkmode);

  const toggleDarkmode = () => {
    setDarkmode((prev) => {
      const newValue = !prev;
      sessionStorage.setItem('darkmode', JSON.stringify(newValue)); // Save to session storage
      return newValue;
    });
  };

  useEffect(() => {
    // Sync state with session storage on mount (in case session storage was updated manually)
    const storedValue = sessionStorage.getItem('darkmode');
    if (storedValue !== null) {
      setDarkmode(JSON.parse(storedValue));
    }
  }, []);

  return (
    <DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};

// Custom hook to access darkmode context
export const useDarkmode = () => {
  const context = useContext(DarkmodeContext);
  if (!context) {
    throw new Error('useDarkmode must be used within a DarkmodeProvider');
  }
  return context;
};
