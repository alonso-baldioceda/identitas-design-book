import { createContext } from "react";

// Types
export interface LayoutContextProps {
  active: number;
  isDark: boolean;
  isOpen: boolean;
  language?: number;
  setActive: (active: number) => void;
  setIsDark: (isDark: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
  setLanguage?: (language: number) => void;
}

// Defaults
const defaultState = {
  active: 0,
  isDark: false,
  isOpen: false,
  language: 0,
  setActive: () => {},
  setIsDark: () => {},
  setIsOpen: () => {},
  setLanguage: () => {},
};

const LayoutContext = createContext<LayoutContextProps>(defaultState);

export default LayoutContext;
