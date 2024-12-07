import { createContext, useState, ReactNode, useContext } from 'react';

interface DarkmodeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const DarkmodeContext = createContext<DarkmodeContextType | undefined>(undefined);

export const DarkmodeProvider = ({ children }: { children: ReactNode }) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  const toggleDarkmode = () => {
    setDarkmode((prev) => !prev);
  };

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
