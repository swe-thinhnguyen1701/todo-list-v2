import { Button, HStack } from "@chakra-ui/react";


const TaskEditorToolBar = () => {
    return (
        <HStack gap="15px">
            <Button colorScheme="blue" variant="outline" >
                Save
            </Button>
            <Button colorScheme="orange" variant="outline" >
                Revert
            </Button>
            <Button colorScheme="red" variant="outline">
                Clear
            </Button>
        </HStack>
    )
}

export default TaskEditorToolBar;