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