import { Heading, Tab, TabList, Tabs } from "@chakra-ui/react";
import { BsCheckSquareFill, BsFillGrid3X3GapFill } from "react-icons/bs";

interface Props {
    onSelectTab: (tab: number) => void;
}

const TaskTabs = ({ onSelectTab }: Props) => {
    const TABS = [
        {
            icon: <BsFillGrid3X3GapFill />,
            lable: "In Progress",
        },
        {
            icon: <BsCheckSquareFill />,
            lable: "Completed"
        }
    ];

    return (
        <>
            <Heading as="h2" fontSize={{base: "2xl"}} textAlign="center" marginBottom="10px">Task Status Overview</Heading>
            <Tabs variant="unstyled" onChange={(index) => onSelectTab(index)} marginBottom={{base: "20px", md: "0"}}>
                <TabList flexDir={{ base: "row", md: "column" }} gap={{ base: "0", md: "10px" }}>
                    {TABS.map((tab, index) => {
                        return (
                            <Tab _selected={{ color: "white", fontWeight: "bold", bg: "blue.500" }} key={index} width="100%">
                                {tab.lable}
                            </Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </>
    )
}

export default TaskTabs;