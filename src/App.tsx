import NavBar from './components/NavBar'
import './App.css'
import TaskList from './components/TaskList'
import { Grid, GridItem } from '@chakra-ui/react'
import TaskTabs from './components/TaskTabs'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import useTasks from './hooks/useTasks'

function App() {
  const [selectedTab, setSelectTab] = useState(0);
  const tasks = useTasks(selectedTab);

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
          <TaskTabs onSelectTab={setSelectTab}/>
        </GridItem>
        <GridItem area="main">
          <TaskForm isInProgressTab={selectedTab === 0} />
          <TaskList tasks={tasks}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
