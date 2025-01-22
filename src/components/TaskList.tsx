import { SimpleGrid, Text } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import { Task } from "../state-management/store";
import ClearCompletedTasks from "./ClearCompletedTasks";

interface Props {
    tasks: Task[];
    isCompletedTab: boolean;
}

const TaskList = ({ tasks, isCompletedTab }: Props) => {
    if (tasks.length == 0)
        return <Text>You have no tasks to do</Text>;

    return (
        <>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} justifyItems="center" rowGap={7} marginBottom="40px">
                {tasks.map((task) =>
                    <TaskCard task={task} key={task.id} />)}
            </SimpleGrid>
           {isCompletedTab && <ClearCompletedTasks />}
        </>
    )


}

export default TaskList;