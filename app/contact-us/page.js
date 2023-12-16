import React from "react";
import LetsTalk from "../../components/LetsTalk/LetsTalk";

import CursorContextProvider from "../../components/cursourAnimation/cursorContext";
import Cursor from "../../components/cursourAnimation/cursor";
const Contact = () => {
  return (
    <CursorContextProvider>
      <Cursor />
      <div className="app_container" style={{ marginTop: "var(--padding)" }}>
        <LetsTalk />
      </div>
    </CursorContextProvider>
  );
};

export default Contact;
