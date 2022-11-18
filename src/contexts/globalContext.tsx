import { createContext } from "react";

// Types
interface GlobalContextProps {
  active?: number;
  // facebook?: string;
  // instagram?: string;
  language?: number;
  // menu: Link[];
  // messenger?: string;
  isOpen?: boolean | undefined;
  // phone?: string;
  // phoneRef?: string;
  setActive?: (active: number) => void | undefined;
  setLanguage?: (active: number) => void | undefined;
  toggleMenu?: (isOpen: boolean) => void | undefined;
  // whatsapp?: string;
}

// Defaults
const defaultState = {
  active: 0,
  // facebook: "",
  // instagram: "",
  language: 0,
  // menu: [
  //   {
  //     anchor: "",
  //     name: "",
  //     translate: "",
  //   },
  // ],
  // TODO: move messenger somewhere else
  // messenger: "http://m.me/vistalagoarenal",
  isOpen: false,
  // phone: "",
  // phoneRef: "",
  setActive: undefined,
  setLanguage: undefined,
  toggleMenu: undefined,
  // TODO: move whatsapp somewhere else
  // whatsapp: "https://wa.me/50683274040",
};

const GlobalContext = createContext<GlobalContextProps>(defaultState);

export default GlobalContext;
