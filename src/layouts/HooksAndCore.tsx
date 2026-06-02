import { useParams } from "react-router-dom";
import TaskComponent from "../pages/HooksAndCore";

export default function HooksAndCore(){
    const { taskNumber } = useParams();
    
    return (
        <section>
            <header>
                <h2>Hooks And Core</h2>
                <h3>Task Number: {taskNumber}</h3>
            </header>
            <main>
                <TaskComponent taskNumber={taskNumber}/>            
            </main>
        </section>
    );
}