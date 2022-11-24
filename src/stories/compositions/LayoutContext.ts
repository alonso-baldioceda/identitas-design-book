import { createContext } from "react";

// Types
interface LayoutContextProps {
  active: number;
  isOpen: boolean;
  language?: number;
  setActive: (active: number) => void;
  setIsOpen: (isOpen: boolean) => void;
  setLanguage?: (language: number) => void;
}

// Defaults
const defaultState = {
  active: 0,
  // TODO: maybe need to include a global language variable
  isOpen: false,
  language: 0,
  setActive: () => {},
  setIsOpen: () => {},
  setLanguage: undefined,
};

const LayoutContext = createContext<LayoutContextProps>(defaultState);

export default LayoutContext;
