import classes from './App.module.css'
import Tasks from './components/Tasks'
import NewTask from './components/NewTask'
import { useState } from 'react'

const dummy_data = [
  {
    id: 1,
    title: 'Zrobić zakupy',
    content: 'Wołowina, 40 szt. jajka, ocet jabłkowy, awokado, banany',
  },
  {
    id: 2,
    title: 'Spakować się na wyjazd',
    content: 'Buty, Kalesony, szczoteczka do zębów, okulary, konserwy',
  },
]

function App() {
  const [tasks, setTasks] = useState(dummy_data)

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks]
    })
  }

  const deleteTaskHandler = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <div className={classes.card}>
      <div className={classes.author}>
        <p>Damian Charążka</p>
        <p>113807</p>
      </div>
      <NewTask onAddTask={addTaskHandler}></NewTask>
      <Tasks items={tasks} onRemove={deleteTaskHandler} />
    </div>
  )
}

export default App
