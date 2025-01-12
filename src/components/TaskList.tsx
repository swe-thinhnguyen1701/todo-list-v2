import { SimpleGrid, Text } from "@chakra-ui/react";
// import { getAllTaks } from "../services/localStorage";
import TaskCard from "./TaskCard";

export interface Task {
    id: number;
    briefDescription: string;
    fullDescription: string;
    dateCreated: string;
    status: string;
}

const TaskList = () => {
    const tasks = [
        {
            id: 1,
            briefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing...",
            fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis deleniti quam incidunt. Dolorum labore iste aperiam voluptatem ratione laboriosam, vero nam a inventore, impedit facere, esse in blanditiis quidem.",
            dateCreated: "2023-12-12",
            status: "pending"
        },
        {
            id: 2,
            briefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, alias?...",
            fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis deleniti quam incidunt. Dolorum labore iste aperiam voluptatem ratione laboriosam, vero nam a inventore, impedit facere, esse in blanditiis quidem.",
            dateCreated: "2023-12-12",
            status: "pending"
        },
        {
            id: 4,
            briefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, alias?...",
            fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis deleniti quam incidunt. Dolorum labore iste aperiam voluptatem ratione laboriosam, vero nam a inventore, impedit facere, esse in blanditiis quidem.",
            dateCreated: "2023-12-12",
            status: "pending"
        },
        {
            id: 5,
            briefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, alias?...",
            fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis deleniti quam incidunt. Dolorum labore iste aperiam voluptatem ratione laboriosam, vero nam a inventore, impedit facere, esse in blanditiis quidem.",
            dateCreated: "2023-12-12",
            status: "pending"
        },
        {
            id: 3,
            briefDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, alias?...",
            fullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis deleniti quam incidunt. Dolorum labore iste aperiam voluptatem ratione laboriosam, vero nam a inventore, impedit facere, esse in blanditiis quidem.",
            dateCreated: "2023-12-12",
            status: "pending"
        }
    ]

    if (tasks.length == 0)
        return <Text>You have no tasks to do</Text>;

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5}} justifyItems="center" rowGap={7}>
            {tasks.map((task) =>
                <TaskCard task={task} key={task.id} />)}
        </SimpleGrid>
    )


}

export default TaskList;