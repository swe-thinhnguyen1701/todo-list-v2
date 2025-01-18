import { getAllTaks } from "../services/localStorage";

export interface Task {
    id: number;
    briefDescription: string;
    fullDescription: string;
    dateCreated: string;
    isCompleted: boolean;
}

const useTasks = (selectedTab: number): Task[] => {
    const data: Task[] = getAllTaks();

    if (selectedTab === 0)
        return data.filter(task => !task.isCompleted);

    return data.filter(task => task.isCompleted);
}

export default useTasks;