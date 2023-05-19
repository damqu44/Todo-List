import TaskForm from './TaskForm'

const NewTask = (props) => {
  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    }
    props.onAddTask(taskData)
  }
  return (
    <>
      <TaskForm onSaveTaskData={saveTaskDataHandler}></TaskForm>
    </>
  )
}

export default NewTask
