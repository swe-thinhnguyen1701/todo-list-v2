import NavBar from './components/NavBar'
import './App.css'
import TaskList from './components/TaskList'
import { Grid, GridItem } from '@chakra-ui/react'
import TaskTabs from './components/TaskTabs'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import useTaskStore from './state-management/store'

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const { tasks, addTask } = useTaskStore();

  const handleAddTask = (taskDescription: string) => {
    addTask(taskDescription);
  };

  const filteredTasks = tasks.filter((task) => {
    return selectedTab === 0 ? !task.isCompleted : task.isCompleted
  });

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "aside" "main"`,
        md: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr"
        }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="aside">
          <TaskTabs onSelectTab={setSelectedTab} />
        </GridItem>
        <GridItem area="main" padding="10px">
          <TaskForm isInProgressTab={selectedTab === 0} onAddTask={handleAddTask} />
          <TaskList tasks={filteredTasks} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
