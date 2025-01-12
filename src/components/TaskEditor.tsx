import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import TaskEditorToolBar from "./TaskEditorToolBar";
import { setModifyTask, getModifyTask } from "../services/localStorage";

interface Props {
    id: number;
}

const TaskEditor = ({ id }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClickHandler = () => {
        setModifyTask(id);
        onOpen();
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
                        {/* <Textarea defaultValue={modifiedTaskDescription} rows={10} placeholder="Modify your task" /> */}
                    </ModalBody>
                    <ModalFooter>
                        <TaskEditorToolBar />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default TaskEditor;