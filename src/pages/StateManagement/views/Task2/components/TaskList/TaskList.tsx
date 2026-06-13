import { useMemo } from "react";
import Button from "../../../../../../components/common/Button/Button";
import Checkbox from "../../../../../../components/common/Checkbox/Checkbox";
import { List, ListItem, ListItemText } from "../../../../../../components/common/List/List";
import type { TaskListProps } from "./types";
import Box from "../../../../../../components/common/Box/Box";
import Chip from "../../../../../../components/common/Chip/Chip";
import useLocalStorage from "../../../../../../hooks/useLocalStorage";

const FILTERS = {
    'ALL':'ALL',
    'COMPLETED':'COMPLETED',
    'PENDING':'PENDING'
};

export default function TaskList({taskList, updateTask, deleteTask}:TaskListProps){
    const [filters,setFilters] = useLocalStorage('task2-state-management-filter',FILTERS.ALL);
    const displayTasks = useMemo(()=>{
        if(filters == FILTERS.ALL) return taskList;
        else if(filters == FILTERS.COMPLETED) return taskList.filter((task)=>task.completed);
        else if(filters == FILTERS.PENDING) return taskList.filter((task)=>!task.completed);
        else return [];
    },[taskList,filters]);
    if(taskList.length === 0) return null;
    return (
        <Box>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {Object.values(FILTERS).map(filter=>{
                    return <Chip key={filter} label={filter} onClick={()=>{
                        setFilters(filter)
                    }} color={filters === filter ? "primary" : "default"} variant={filters === filter ? "filled" : "outlined"} />
                })}
            </Box>
            <List>
                {displayTasks.map((task) => (
                    <ListItem key={task.identifier}>
                        <Checkbox checked={task.completed} onChange={(e)=>updateTask(task.identifier,(e.target.checked))} />
                        <ListItemText primary={task.todoText} sx={{
                            ...task.completed?{ textDecoration: 'line-through', }: {},
                        }}/>
                        <Button onClick={()=>deleteTask(task.identifier)}>Delete Task</Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}