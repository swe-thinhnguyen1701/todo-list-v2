import { useEffect, useState } from "react";
import { getAllTaks } from "../services/localStorage";

export interface Task {
    id: number;
    briefDescription: string;
    fullDescription: string;
    dateCreated: string;
    isCompleted: boolean;
}

const useTasks = (selectedTab: number, refreshKey: boolean): Task[] => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const data: Task[] = getAllTaks();
        if (selectedTab === 0)
            setTasks(data.filter(task => !task.isCompleted));
        else
            setTasks(data.filter(task => task.isCompleted));
    },[selectedTab, refreshKey]);

    return tasks;
}

export default useTasks;