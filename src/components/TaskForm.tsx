import { Button, Icon, InputGroup, Text, Textarea, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { FaPlus, FaBackspace } from "react-icons/fa";

interface Props {
    isInProgressTab: boolean;
    onAddTask: (taskDescription: string) => void;
}

const TaskForm = ({ isInProgressTab, onAddTask }: Props) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    const resetInput = () => {
        if (ref.current) {
            ref.current.value = "";
        }
    }

    if (!isInProgressTab) return null;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
                onAddTask(ref.current.value);
                ref.current.value = "";
            }
        }}>
            <InputGroup gap="10px" alignItems="center">
                <Textarea ref={ref} resize="none" placeholder="Enter your to-do description" height="100px"/>
                <VStack>
                    <Button alignItems="center" gap="5px" type="submit" colorScheme="blue" width="100%">
                        <Icon as={FaPlus} />
                        <Text fontWeight="bold"> ADD</Text>
                    </Button>
                    <Button alignItems="center" gap="5px" type="reset" colorScheme="red" onClick={resetInput}>
                        <Icon as={FaBackspace} />
                        <Text fontWeight="bold"> CLEAR</Text>
                    </Button>
                </VStack>
            </InputGroup>
        </form>
    )
}

export default TaskForm;