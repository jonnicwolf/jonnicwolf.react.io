import React, { createContext, useState, ReactNode } from 'react';

interface DarkmodeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
};

interface DarkmodeProviderProps {
  children: ReactNode;
};

const defaultContext: DarkmodeContextType = {
  darkmode: false,
  toggleDarkmode: () => {},
};

export const DarkmodeContext = createContext<DarkmodeContextType>(defaultContext);

export function DarkmodeProvider ({ children }: DarkmodeProviderProps): JSX.Element {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  const toggleDarkmode = (): void => {
    setDarkmode(prevDarkmode => !prevDarkmode);
  };

  const contextValue: DarkmodeContextType = {
    darkmode,
    toggleDarkmode,
  };

  return (
    // @ts-ignore
    <DarkmodeContext.Provider value={contextValue}>
      {children}
    </DarkmodeContext.Provider>
  );
};
