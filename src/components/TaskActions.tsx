import { HStack } from "@chakra-ui/react";
import TaskEditor from "./TaskEditor";
import MarkComplete from "./MarkComplete";
import RemoveTask from "./RemoveTask";

interface Props {
    taskId: string;
}

const TaskActions = ({taskId}: Props) => {
    return(
        <HStack justifyContent="center">
            <TaskEditor taskId={taskId}/>
            <MarkComplete taskId={taskId}/>
            <RemoveTask taskId={taskId}/>
        </HStack>
        
    )
}

export default TaskActions;