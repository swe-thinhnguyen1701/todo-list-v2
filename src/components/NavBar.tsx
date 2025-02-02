import { HStack } from "@chakra-ui/react";
import TodoListHeader from "./TodoListHeader";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
    return(
        <HStack justifyContent="space-between" marginBottom="30px" padding={{md: "20px"}}>
            <TodoListHeader />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;