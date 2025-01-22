import { Task } from "../state-management/store";
import { idGenerator } from "./idGenerator";

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
    updateData(tasks);
}

export const completeTask = (id: string) => {
    const tasks = getAllTaks();
    tasks.map(task => {
        if(task.id === id)
            task.isCompleted = true;
    });
    
    updateData(tasks);
}

export const removeTask = (taskId: string) => {
    const tasks = getAllTaks();
    console.log(taskId);
    
    const newTasks = tasks.filter(task => task.id !== taskId);
    updateData(newTasks);

}

export const getTaskById = (taskId: string) => {
    const tasks = getAllTaks();
    return tasks.find(task => task.id === taskId);
}

const updateData = (task: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(task));
}

export const updateTask = (task: Task) => {
    const tasks = getAllTaks();
    const newTasks = tasks.map(t => {
        if(t.id === task.id)
            return task;
        return t;
    });
    updateData(newTasks);
}

export const clearCompletedTask = () => {
    const tasks = getAllTaks();
    const newTasks = tasks.filter(task => !task.isCompleted);
    updateData(newTasks);
}