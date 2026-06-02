import type { TaskComponentProps } from "./types";
import Task1 from "./views/Task1";

export default function TaskComponent({taskNumber}:TaskComponentProps){
    switch (taskNumber){
        case "1":
            return <Task1 />;
        case "2":
            return "hello 2";
        default:
            return <div>Invalid Task</div>
    }
}