import { useParams } from "react-router-dom";
import TaskComponent from "../pages/StateManagement";
import TaskLayout from "./common/TaskLayout/TaskLayout";

export default function StateManagement() {
    const { taskNumber } = useParams();

    return (
        <TaskLayout taskNumber={taskNumber} sectionHeading="State Management">
            <TaskComponent taskNumber={taskNumber} />
        </TaskLayout>
    );
}