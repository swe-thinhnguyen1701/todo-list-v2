import { create } from "zustand";
import { getAllTaks, addTask, completeTask, removeTask, updateTask, clearCompletedTask } from "../services/localStorage";

export interface Task {
    id: string;
    briefDescription: string;
    fullDescription: string;
    dateCreated: string;
    isCompleted: boolean;
}

export interface ModifiedTask {
    id: string;
    originalDescription: string;
    modifiedDescription: string;
}

interface TaskStore {
    tasks: Task[];
    completeTask: (id: string) => void;
    addTask: (taskDescription: string) => void;
    modifyTask: (task: ModifiedTask) => void;
    getTaskById: (id: string) => Task | undefined;
    removeTask: (id: string) => void;
    clearCompletedTask: () => void;
}

const useTaskStore = create<TaskStore>((set, get) => ({
    tasks: getAllTaks(),
    completeTask: (id: string) => {
        completeTask(id);
        set({ tasks: getAllTaks() });
    },
    addTask: (taskDescription: string) => {
        if (taskDescription.trim().length === 0)
            return;
        addTask(taskDescription);
        set({ tasks: getAllTaks() });
    },
    modifyTask: (modifiedTask: ModifiedTask) => {
        if (modifiedTask.modifiedDescription.trim().length === 0)
            get().removeTask(modifiedTask.id);
        if (modifiedTask.modifiedDescription === modifiedTask.originalDescription)
            return;

        const task = get().tasks.find((task: Task) => task.id === modifiedTask.id);
        if (!task)
            return;

        task.fullDescription = modifiedTask.modifiedDescription;
        task.briefDescription = modifiedTask.modifiedDescription.length > 90 ? modifiedTask.modifiedDescription.slice(0, 90) + "..." : modifiedTask.modifiedDescription;
        updateTask(task);
        set({ tasks: getAllTaks() });
    },
    getTaskById: (id: string) => {
        return get().tasks.find((task: Task) => task.id === id);
    },
    removeTask: (id: string) => {
        removeTask(id);
        set({ tasks: getAllTaks() });
    },
    clearCompletedTask: () => {
        clearCompletedTask();
        set({ tasks: getAllTaks() });
    }
}));

export default useTaskStore;