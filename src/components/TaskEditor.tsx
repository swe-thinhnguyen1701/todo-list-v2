import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
// import TaskEditorToolBar from "./TaskEditorToolBar";
import useTaskStore, { ModifiedTask } from "../state-management/store";
import { useState } from "react";

const TaskEditor = ({ taskId }: { taskId: string }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getTaskById, modifyTask } = useTaskStore();
    const task = getTaskById(taskId);
    const [modifiedTask, setModifiedTask] = useState<ModifiedTask>({
        id: task?.id || "",
        originalDescription: task?.fullDescription || "",
        modifiedDescription: task?.fullDescription || ""
    });

    const onClickHandler = () => {
        setModifiedTask(
            {
                id: task?.id || "",
                originalDescription: task?.fullDescription || "",
                modifiedDescription: task?.fullDescription || ""
            }
        )
        onOpen();
    }

    const onRevertHandler = () => {
        setModifiedTask({
            ...modifiedTask,
            modifiedDescription: modifiedTask.originalDescription
        });
    }

    const onClearHandler = () => {
        setModifiedTask({
            ...modifiedTask,
            modifiedDescription: ""
        });
    }

    const onSaveHandler = () => {
        modifyTask(modifiedTask);
    }

    return (
        <>
            <Button onClick={onClickHandler} tabIndex={-1}>
                Edit
            </Button>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea
                            value={modifiedTask?.modifiedDescription}
                            rows={10}
                            placeholder="Modify your task"
                            onChange={(e) => setModifiedTask({
                                ...modifiedTask,
                                modifiedDescription: e.target.value
                            })} />
                    </ModalBody>
                    <ModalFooter>
                        {/* <TaskEditorToolBar modifiedTask={modifiedTask} onSetModifiedTask={setModifiedTask} /> */}
                        <HStack gap="15px">
                            <Button colorScheme="blue" variant="outline" onClick={onSaveHandler}>
                                Save
                            </Button>
                            <Button colorScheme="orange" variant="outline" onClick={onRevertHandler}>
                                Revert
                            </Button>
                            <Button colorScheme="red" variant="outline" onClick={onClearHandler}>
                                Clear
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TaskEditor;