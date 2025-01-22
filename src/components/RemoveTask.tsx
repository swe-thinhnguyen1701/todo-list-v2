import { Button } from "@chakra-ui/react";
import useTaskStore from "../state-management/store";

const RemoveTask = ({taskId} : {taskId: string}) => {
    const {removeTask} = useTaskStore();

    const handleRemove = () => {
        removeTask(taskId);
    }

    return (
        <Button tabIndex={-1} onClick={handleRemove}>
            Remove
        </Button>
    )
}

export default RemoveTask;