import NavBar from './components/NavBar'
import './App.css'

function App() {
  const task = {
    id: 1,
    description: "This is a task",
    dateCreated: "2021-09-01",
    priority: 1,
    isComplete: false
  }

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
