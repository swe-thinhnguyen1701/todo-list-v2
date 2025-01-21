import { create } from "zustand";
import { getAllTaks, addTask, completeTask } from "../services/localStorage";

export interface Task {
    id: string;
    briefDescription: string;
    fullDescription: string;
    dateCreated: string;
    isCompleted: boolean;
}

interface TaskStore {
    tasks: Task[];
    completeTask: (id: string) => void;
    setTasks: (tasks: Task[]) => void;
    addTask: (taskDescription: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
    tasks: getAllTaks(),
    completeTask: (id: string) => {
        completeTask(id);
        set({ tasks: getAllTaks() });
    },
    setTasks: (tasks) => set({ tasks }),
    addTask: (taskDescription: string) => {
        addTask(taskDescription);
        set({ tasks: getAllTaks() });
    }
}));

export default useTaskStore;