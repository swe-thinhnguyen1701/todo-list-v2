import { Button, useToast } from "@chakra-ui/react";
import useTaskStore from "../state-management/store";

const ClearCompletedTasks = () => {
    const toast = useToast();
    const {clearCompletedTask} = useTaskStore();

    const onClickHandler = () => {
        const onClearData = new Promise((res, rej) => {
            setTimeout(() => {
                clearCompletedTask();
                res(200);
            }, 3000);
        });

        toast.promise(onClearData, {
            success: { title: 'Complete', description: 'Looks great' },
            error: { title: 'Error', description: 'Something went wrong' },
            loading: { title: 'Cleaning data', description: 'Please wait' },
        })
    }

    return (
        <Button colorScheme="red" onClick={onClickHandler}>
            Clear Data
        </Button>
    )
}

export default ClearCompletedTasks;