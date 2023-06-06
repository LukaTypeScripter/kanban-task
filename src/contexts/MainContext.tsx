
import React, { createContext, useState } from "react";
import NameData from '../data.json'
export interface Task {
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

export interface BoardData {
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
  board:BoardData | undefined,
  modifiedBoard: BoardData[];
  setModifiedBoard: React.Dispatch<React.SetStateAction<BoardData[]>>;
  platformData:BoardData[]
  setActiveIndex:React.Dispatch<React.SetStateAction<number | null>>
  activeIndex:number | null
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
  board: undefined,
  modifiedBoard:[],
  setModifiedBoard:() => {},
  platformData:[] as BoardData[],
  activeIndex:null,
  setActiveIndex:() => {}
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
  const [modifiedBoard, setModifiedBoard] = useState<BoardData[]>(boardData);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const HandlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
  };
  const platformData: BoardData[] = Object.values(boardData);
  const board = platformData.find((board) => board.name === selectedPlatform);

  
  const value: MainContextValue = {
    selectedPlatform,
    HandlePlatformChange,
    setName,
    name,
    boardName,
    setBoardName,
    boardData,
    setBoaredData,
    board,
    modifiedBoard,
    setModifiedBoard,
    platformData,
    activeIndex,
    setActiveIndex
  };

  return (
    <MainContext.Provider value={value}>{children}</MainContext.Provider>
  );
};

export default MainContext;
