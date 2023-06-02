import React, { createContext, useState } from 'react';

// Define the shape of your context value
interface AppContextValue {
    isOpen: boolean,
    isToggled:boolean,
    toggleOpen:() => void,
    toggleTheme:() => void
}

// Create the initial context value
const initialContextValue: AppContextValue = {
    isOpen: false,
    isToggled:false,
    toggleOpen:() => {},
    toggleTheme: () => {}
};

// Create the context
const AppContext = createContext<AppContextValue>(initialContextValue);

// Create the provider component
export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
 const [isOpen,setIsOpen] = useState(false)
 const [isToggled, setIsToggled] = useState(false);
 const toggleTheme = () => {
    setIsToggled(!isToggled)
 }
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

const value:AppContextValue = { isOpen,toggleOpen,toggleTheme,isToggled };
  // Provide the context value to the children components
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
