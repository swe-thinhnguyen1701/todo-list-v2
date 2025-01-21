import { Task } from "../hooks/useTasks";
import { idGenerator } from "./idGenerator";

export const getModifyTask = () => {
    return JSON.parse(localStorage.getItem('modifyTask') || '{}');
}

export const getAllTaks = (): Task[] => {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}

export const addTask = (taskDescription: string) => {
    const task = {
        id: idGenerator(),
        briefDescription: taskDescription.length > 50 ? taskDescription.substring(0, 50) : taskDescription,
        fullDescription: taskDescription,
        dateCreated: new Date().toLocaleString().split(",")[0],
        isCompleted: false
    }
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const completeTask = (id: string) => {
    const tasks = getAllTaks();
    tasks.map(task => {
        if(task.id === id)
            task.isCompleted = true;
    });
    console.log("update task", id);
    
    updateData(tasks);
}

const updateData = (task: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(task));
}