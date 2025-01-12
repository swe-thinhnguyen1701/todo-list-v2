import NavBar from './components/NavBar'
import './App.css'
import TaskList from './components/TaskList'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {


  return (
    <>
      <Grid templateAreas={`"nav" "main"`}
            padding={5}
            gap={10}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
        <TaskList />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
