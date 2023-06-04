import React, { useContext } from 'react';
import {
  Board,
  Cols,
  ColName,
  Task,
  TaskTitle,
  NumOfSubTAsks,
} from './MainPAgeStyles/mainPage';
import Data from '../../data.json';
import MainContext from '../../contexts/MainContext';
import AppContext from '../../contexts/Header';

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

const MainPage: React.FC = () => {
  const platformData: BoardData[] = Object.values(Data.boards);
  const { selectedPlatform } = useContext(MainContext);
  const {isToggled} = useContext(AppContext)
  const board = platformData.find((board) => board.name === selectedPlatform);

  if (!board) return null;

  return (
    <div>
      <Board key={board.name} isToggled={isToggled}>
        {board.columns.map((column) => (
          <Cols key={column.name} >
            <ColName>{column.name}</ColName>
            {column.tasks.map((task) => (
              <Task key={task.title} isToggled={isToggled} draggable>
                <TaskTitle isToggled={isToggled}>{task.title}</TaskTitle>
                <NumOfSubTAsks>
                  {task.subtasks.filter((subtask) => !subtask.isCompleted).length} of {task.subtasks.length} subtasks
                </NumOfSubTAsks>
              </Task>
            ))}
          </Cols>
        ))}
      </Board>
    </div>
  );
};

export default MainPage;
