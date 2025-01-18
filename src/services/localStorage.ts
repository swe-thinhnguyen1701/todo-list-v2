import { idGenerator } from "./idGenerator";

export const getTaskById = (id: number) => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks.find((task: { id: number; }) => task.id === id);
}

export const setModifyTask = (id: number) => {
    const task = getTaskById(id);
    localStorage.setItem('modifyTask', JSON.stringify(task));
}

export const getModifyTask = () => {
    return JSON.parse(localStorage.getItem('modifyTask') || '{}');
}

export const getAllTaks = () => {
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