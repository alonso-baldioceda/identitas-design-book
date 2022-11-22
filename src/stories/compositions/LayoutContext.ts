import { createContext } from "react";

// Types
interface LayoutContextProps {
  active?: number;
  isOpen?: boolean;
  language?: number;
  setActive?: (active: number) => void;
  setIsOpen?: (isOpen: boolean) => void;
  setLanguage?: (active: number) => void;
}

// Defaults
const defaultState = {
  active: 0,
  // TODO: maybe need to include a global language variable
  isOpen: false,
  language: 0,
  setActive: undefined,
  setIsOpen: undefined,
  setLanguage: undefined,
};

const LayoutContext = createContext<LayoutContextProps>(defaultState);

export default LayoutContext;
