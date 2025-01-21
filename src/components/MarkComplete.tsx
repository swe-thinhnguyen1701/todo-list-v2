import { Button } from "@chakra-ui/react";
import useTaskStore from "../state-management/store";


const MarkComplete = ({ taskId }: { taskId: string }) => {
    const completeTask = useTaskStore((statte) => statte.completeTask);

    const handleComplete = () => {
        completeTask(taskId);
    }

    return (
        <Button tabIndex={-1} onClick={handleComplete}>
            Complete
        </Button>
    )
}

export default MarkComplete;