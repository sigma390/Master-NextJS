import { link } from 'fs';
import React from 'react'

type TaskProps = {
    title:string;
    completed:boolean;
    priority:string;

}

const tasks:TaskProps[] = 
    [
        {
          
          priority:"High",
          title: "Chatbot ",
          completed: false
        },
        {
          
            priority:"Med",
            title: "nextJs Revision ",
            completed: false
          },
          {
          
            priority:"Med ",
            title: "AptiPractice ",
            completed: false
          },
          {
          
            priority:"High",
            title: "Learn Recursion ",
            completed: false
          },
    ]
        
         




const TaskList = () => {
  return (
    <div className=''>
        <h1>Tasks List For Today</h1>

        {
            tasks.map(task=> <li  key={task.title}  >{task.title}
           <span className='text-red-500'>{task.priority} </span>  {task.completed}<span><input type="checkbox" /></span></li>)
        }
      
    </div>
  )
}

export default TaskList
























// import { link } from 'fs';
// import React from 'react'

// type TaskProps = {
//     title:string;
//     completed:boolean;
//     priority:string;

// }

// const tasks:TaskProps[] = 
//     [
//         {
          
//           priority:"High",
//           title: "Chatbot ",
//           completed: false
//         },
//         {
          
//             priority:"Med",
//             title: "nextJs Revision ",
//             completed: false
//           },
//           {
          
//             priority:"Med ",
//             title: "AptiPractice ",
//             completed: false
//           },
//           {
          
//             priority:"High",
//             title: "Learn Recursion ",
//             completed: false
//           },
//     ]
        
         




// const TaskList = () => {
//   return (
//     <div className=''>

//         {
//             tasks.map(task=> <li key={task.title} >{task.title}
//            <span className='text-red-500'>{task.priority} </span>  {task.completed}<span><input type="checkbox" /></span></li>)
//         }
      
//     </div>
//   )
// }

// export default TaskList
