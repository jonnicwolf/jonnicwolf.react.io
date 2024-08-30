import React, { createContext, useState } from 'react';

const DarkmodeContext = createContext();

function DarkmodeProvider (props) {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {props.children}
    </DarkmodeContext.Provider>
  );
};

export { DarkmodeContext, DarkmodeProvider };
