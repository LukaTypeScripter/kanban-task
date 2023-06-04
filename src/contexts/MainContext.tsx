
import React, { createContext, useState } from "react";

interface MainContextValue {
  HandlePlatformChange: (platform: string) => void;
  selectedPlatform: string;
  setName:React.Dispatch<React.SetStateAction<string>>,
  name:string
}

const initialContextValue: MainContextValue = {
  HandlePlatformChange: () => {},
  selectedPlatform: "Platform Launch",
  setName: () => {},
  name:''
};

const MainContext = createContext<MainContextValue>(initialContextValue);

export const MainContextProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    "Platform Launch"
  );
  const [name,setName] = useState<string>("");

  const HandlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const value: MainContextValue = {
    selectedPlatform,
    HandlePlatformChange,
    setName,
    name
  };

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  );
};

export default MainContext;
