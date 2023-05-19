// import classes from './Tasks.module.css'
// import Task from './Task'

// const Tasks = (props) => {
//   return (
//     <div className={classes.tasks}>
//       {props.items.map((task) => (
//         <Task
//           key={task.id}
//           id={task.id}
//           title={task.title}
//           content={task.content}
//           onRemoveItem={() => props.onRemove(task.id)}
//           isExpanded={props.expandedTaskId === task.id}
//         ></Task>
//       ))}
//     </div>
//   )
// }

// export default Tasks

import React, { useState } from 'react'
import classes from './Tasks.module.css'
import Task from './Task'

const Tasks = (props) => {
  const [expandedTaskId, setExpandedTaskId] = useState(null)

  const handleExpand = (taskId) => {
    setExpandedTaskId(taskId === expandedTaskId ? null : taskId)
  }

  const handleRemove = (taskId) => {
    props.onRemove(taskId)
  }

  return (
    <div className={classes.tasks}>
      {props.items.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          content={task.content}
          onRemoveItem={() => handleRemove(task.id)}
          isExpanded={expandedTaskId === task.id}
          onExpand={handleExpand}
        />
      ))}
    </div>
  )
}

export default Tasks
