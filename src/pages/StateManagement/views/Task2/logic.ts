import { useState } from "react";
import type { Task } from "../../../../types/task";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

export default function useLogic(){
    const [newTodo,setNewTodo] = useState('');
    const [todoList,setTodoList] = useLocalStorage<Task[]>('todo-list',[]);
    const addTodo = () => {
        setTodoList(prev=>[...prev,{
            identifier: uuidv4(),
            todoText: newTodo,
            completed: false,
        }]);
        setNewTodo('');
    }
    const updateTask = (identifier:string,status:boolean) => {
        setTodoList(prev=>{
            return prev.map((item)=>{
                if(identifier==item.identifier){
                    return {
                        ...item,
                        completed: status,
                    };
                }
                return item;
            });
        })
    }
    const deleteTask = (identifier:string) => {
        setTodoList(prev=>{
            return prev.filter((task)=>{
                return task.identifier !== identifier;
            });
        })
    }
    return {
        todoList,
        newTodo,
        setNewTodo,
        addTodo,
        updateTask,
        deleteTask
    };
}