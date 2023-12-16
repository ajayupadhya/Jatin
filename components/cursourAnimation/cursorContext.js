import React, { createContext, useState } from "react";

export const CursorContext = createContext();

const CursorContextProvider = ({children}) => {
  const [cursor, setCursor] = useState({ active: false });
  const [buttonHover, setButtonHover] = useState(false)

  return (
    <CursorContext.Provider value={[cursor, buttonHover ,setCursor , setButtonHover]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
