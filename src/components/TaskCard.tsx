import { Box, Card, CardBody, Collapse, Text } from "@chakra-ui/react";
import TaskActions from "./TaskActions";
import { useState } from "react";
import ExpandButton from "./ExpandButton";
import { Task } from "./TaskList";

interface Props {
    task: Task
}

const TaskCard = ({task}: Props) => {
    const [show, setShow] = useState(false);

    return (
        <Card width="300px" height={show ? "100%" : "100px"}>
            <CardBody id="task-card" paddingBottom="30px">
                <Collapse startingHeight={50} in={show}>
                    <Text marginBottom="20px">
                        {!show ? task.briefDescription : task.fullDescription}
                    </Text>
                    <Text marginBottom="30px" fontSize="13px">
                        {task.dateCreated}
                    </Text>
                    <TaskActions />
                </Collapse>
            </CardBody>
            <Box position="absolute" bottom="-15px" left="130px">
                <ExpandButton setShow={setShow}/>
            </Box>
        </Card>
    )
}

export default TaskCard;