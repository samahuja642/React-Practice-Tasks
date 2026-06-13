import Box from "../../../../components/common/Box/Box";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import useLogic from "./logic";

export default function Task2() {
    const { todoList, newTodo, setNewTodo, addTodo, updateTask, deleteTask } = useLogic();
    return <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <AddTask value={newTodo} onChange={setNewTodo} onAdd={addTodo} />
        <TaskList taskList={todoList} updateTask={updateTask} deleteTask={deleteTask}/>
    </Box>;
}
