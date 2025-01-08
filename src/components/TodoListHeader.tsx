import { Heading, Text } from "@chakra-ui/react";

const TodoListHeader = () => {
    return (
        <Heading as="h1" size="2xl" >
            <Text className="todo-list-header">Todo List</Text>
        </Heading>
    )
}

export default TodoListHeader;