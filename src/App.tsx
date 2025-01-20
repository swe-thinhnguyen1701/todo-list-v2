import NavBar from './components/NavBar'
import './App.css'
import TaskList from './components/TaskList'
import { Grid, GridItem } from '@chakra-ui/react'
import TaskTabs from './components/TaskTabs'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import useTasks from './hooks/useTasks'
import { addTask } from './services/localStorage'

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [refreshKey, setRefreshKey] = useState(false);
  const tasks = useTasks(selectedTab, refreshKey);

  const handleAddTask = (taskDescription: string) => {
    addTask(taskDescription);
    setRefreshKey(prev => !prev);
  };

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
          <TaskTabs onSelectTab={setSelectedTab}/>
        </GridItem>
        <GridItem area="main" padding="10px">
          <TaskForm isInProgressTab={selectedTab === 0} onAddTask={handleAddTask} />
          <TaskList tasks={tasks}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
