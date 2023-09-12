import { createContext } from 'react';
import { globalStyles } from '../components/GlobalCSS';

export interface UIProviderProps {
  children: React.ReactNode;
}

const UIContext = createContext({});

export const UiProvider = ({ children }: UIProviderProps) => {
  globalStyles();
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};
