import { useContext, useCallback } from "react";
import { CursorContext } from "./cursorContext";
export const UseCursorHandlers = (options = {}) => {
  const [cursor, setCursor] = useContext(CursorContext);
  const toggleCursor = () => {
    setCursor({ active: !cursor.active });
  };
  const onMouseEnter = useCallback((event) => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }

    toggleCursor();
  });
  const onMouseLeave = useCallback((event) => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }

    toggleCursor();
  });
  return { onMouseEnter, onMouseLeave };
};
