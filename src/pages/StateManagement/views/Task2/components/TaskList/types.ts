import type { Task } from "../../../../../../types/task";

export interface TaskListProps {
    taskList: Task[];
    updateTask: (identifier:string, status:boolean)=>void;
    deleteTask: (identifier:string) => void;
}