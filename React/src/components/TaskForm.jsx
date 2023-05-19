import { useState } from 'react'
import classes from './TaskForm.module.css'

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredContent, setEnteredContent] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const taskData = {
      title: enteredTitle,
      content: enteredContent,
    }

    props.onSaveTaskData(taskData)
    setEnteredTitle('')
    setEnteredContent('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.form__title} ${classes.form__div}`}>
        <label>Title</label>
        <input
          required
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className={`${classes.form__content} ${classes.form__div}`}>
        <label>Description</label>
        <textarea
          required
          type="text"
          value={enteredContent}
          onChange={contentChangeHandler}
        ></textarea>
      </div>
      <div className={classes.form__submit}>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default TaskForm
