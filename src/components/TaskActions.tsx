import { HStack } from "@chakra-ui/react";
import TaskEditor from "./TaskEditor";
import MarkComplete from "./MarkComplete";
import RemoveTask from "./RemoveTask";

interface Props {
    taskId: string;
}

const TaskActions = ({taskId}: Props) => {
    const task = {
        id: 1,
        description: "This is a task description",
        dateCreated: "2021-09-01",
        priority: 1,
        isComplete: false
      }

    return(
        <HStack>
            <TaskEditor id={task.id}/>
            <MarkComplete taskId={taskId}/>
            <RemoveTask />
        </HStack>
        
    )
}

export default TaskActions;