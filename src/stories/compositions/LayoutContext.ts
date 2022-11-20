import { createContext } from "react";

// Types
interface LayoutContextProps {
  active?: number;
  isOpen?: boolean;
  language?: number;
  setActive?: (active: number) => void;
  setLanguage?: (active: number) => void;
  toggleMenu?: (isOpen: boolean) => void;
}

// Defaults
const defaultState = {
  active: 0,
  language: 0,
  isOpen: false,
  setActive: undefined,
  setLanguage: undefined,
  toggleMenu: undefined,
};

const LayoutContext = createContext<LayoutContextProps>(defaultState);

export default LayoutContext;
