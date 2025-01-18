import { SimpleGrid, Text } from "@chakra-ui/react";
// import { getAllTaks } from "../services/localStorage";
import TaskCard from "./TaskCard";
import { Task } from "../hooks/useTasks";

interface Props {
    tasks: Task[];
}

const TaskList = ({tasks}: Props) => {
    if (tasks.length == 0)
        return <Text>You have no tasks to do</Text>;

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} justifyItems="center" rowGap={7}>
            {tasks.map((task) =>
                <TaskCard task={task} key={task.id} />)}
        </SimpleGrid>
    )


}

export default TaskList;