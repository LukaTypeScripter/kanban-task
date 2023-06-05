
import React, { createContext, useState } from "react";
import NameData from '../data.json'
interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
}

interface SubTask {
  title: string;
  isCompleted: boolean;
}

interface Column {
  name: string;
  tasks: Task[];
}

interface BoardData {
  name: string;
  columns: Column[];
}
interface MainContextValue {
  HandlePlatformChange: (platform: string) => void;
  selectedPlatform: string;
  setName:React.Dispatch<React.SetStateAction<string>>,
  name:string,
  boardName:string,
  setBoardName:React.Dispatch<React.SetStateAction<string>>
  boardData:BoardData[],
  setBoaredData:React.Dispatch<React.SetStateAction<BoardData[]>>;
}

const initialContextValue: MainContextValue = {
  HandlePlatformChange: () => {},
  selectedPlatform: "Platform Launch",
  setName: () => {},
  name:'',
  boardName:"",
  setBoardName:() => {},
  boardData: [] as BoardData[],
  setBoaredData:() => {},
};

const MainContext = createContext<MainContextValue>(initialContextValue);

export const MainContextProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    "Platform Launch"
  );
  const [name,setName] = useState<string>("");
  const [boardName,setBoardName] = useState<string>("")
  const [boardData,setBoaredData] = useState(NameData.boards)
  const HandlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
  };

  const value: MainContextValue = {
    selectedPlatform,
    HandlePlatformChange,
    setName,
    name,
    boardName,
    setBoardName,
    boardData,
    setBoaredData
  };

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  );
};

export default MainContext;
