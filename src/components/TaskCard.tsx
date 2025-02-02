import { Box, Card, CardBody, Collapse, Text } from "@chakra-ui/react";
import TaskActions from "./TaskActions";
import { useState } from "react";
import ExpandButton from "./ExpandButton";
import { Task } from "../state-management/store";

interface Props {
    task: Task
}

const TaskCard = ({ task }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <Card
            width={{ base: "93.75vw", md: "32.55vw", lg: "25.12vw", xl: "19.53vw" }}
            maxWidth={{ md: "400px" }}
            height={show ? "100%" : "100px"}
            position="relative">
            <CardBody id="task-card" paddingBottom="30px">
                <Collapse startingHeight={45} in={show}>
                    <Text marginBottom="20px">
                        {!show ? task.briefDescription : task.fullDescription}
                    </Text>
                    <Text fontSize="13px">
                        {task.dateCreated}
                    </Text>
                    {!task.isCompleted &&
                        <Box marginTop="30px">
                            <TaskActions taskId={task.id}/>
                        </Box>}
                </Collapse>
            </CardBody>
            <Box
                boxShadow="0 2px 2px lightgrey"
                borderRadius="50%"
                position="absolute"
                bottom="-15px"
                left="50%"
                transform="translateX(-50%)"
            >
                <ExpandButton setShow={setShow} />
            </Box>
        </Card>
    )
}

export default TaskCard;