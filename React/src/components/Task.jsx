// import React, { useState } from 'react'
// import classes from './Task.module.css'

// const Task = (props) => {
//   const [expandedTaskId, setExpandedTaskId] = useState(null)

//   const expandHandler = (taskId) => {
//     if (expandedTaskId === taskId) {
//       setExpandedTaskId(null)
//     } else {
//       setExpandedTaskId(taskId)
//     }
//   }

//   const isExpanded = expandedTaskId === props.id

//   const removeHandler = () => {
//     console.log(props)
//     props.onRemoveItem(props.id)
//   }

//   return (
//     <>
//       <div
//         onClick={() => expandHandler(props.id)}
//         className={`${classes.task} ${
//           isExpanded ? classes['task-expanded'] : classes.task__hover
//         }`}
//       >
//         <div className={classes.task__box}>
//           <div className={classes.task__title}>{props.title}</div>
//           <div
//             className={`${classes['task__button']} ${
//               isExpanded ? classes['task__hidden'] : ''
//             }`}
//           >
//             <button
//               className={classes['task__delete-button']}
//               onClick={removeHandler}
//             >
//               done
//             </button>
//           </div>
//         </div>

//         <div
//           className={`${classes.task__content} ${
//             isExpanded ? classes['task__visible'] : ''
//           }`}
//         >
//           {props.content}
//         </div>
//         <div
//           className={`${classes['task__button']} ${
//             !isExpanded ? classes['task__hidden'] : ''
//           }`}
//         >
//           <button
//             className={classes['task__delete-button']}
//             onClick={removeHandler}
//           >
//             done
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Task

import React from 'react'
import classes from './Task.module.css'

const Task = (props) => {
  const { id, title, content, isExpanded, onRemoveItem } = props

  const removeHandler = () => {
    onRemoveItem(id)
  }

  return (
    <div
      onClick={() => props.onExpand(id)}
      className={`${classes.task} ${
        isExpanded ? classes['task-expanded'] : classes.task__hover
      }`}
    >
      <div className={classes.task__box}>
        <div className={classes.task__title}>{title}</div>
        <div
          className={`${classes['task__button']} ${
            isExpanded ? classes['task__hidden'] : ''
          }`}
        >
          <button
            className={classes['task__delete-button']}
            onClick={removeHandler}
          >
            done
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className={classes.task__content}>{content}</div>
          <div className={`${classes['task__button']}`}>
            <button
              className={classes['task__delete-button']}
              onClick={removeHandler}
            >
              done
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Task
