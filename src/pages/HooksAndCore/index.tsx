import type { TaskComponentProps } from "./types";
import Task1 from "./views/Task1";
import Task2 from "./views/Task2";
import Task3 from "./views/Task3";
import Task4 from "./views/Task4";
import Task5 from "./views/Task5";
import Task6 from "./views/Task6";

export default function TaskComponent({taskNumber}:TaskComponentProps){
    switch (taskNumber){
        case "1":
            return <Task1 />;
        case "2":
            return <Task2 />;
        case "3":
            return <Task3 />;
        case "4":
            return <Task4 />;
        case "5":
            return <Task5 />;
        case "6":
            return <Task6 />;
        default:
            return <div>Invalid Task</div>
    }
}