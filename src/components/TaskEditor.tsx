import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import TaskEditorToolBar from "./TaskEditorToolBar";

interface Props {
    id: number;
}

const TaskEditor = ({ id }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onClickHandler = () => {
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