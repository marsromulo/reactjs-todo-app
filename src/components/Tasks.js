import React from 'react'
import {FaTimes, FaPenSquare, FaCheckCircle} from 'react-icons/fa'
const Tasks = ({tasks, onDeleteTask, onCompleteTask, setEditTask}) => {
   
   const handleEdit = (id) => {
    const task = tasks.find( (task) => task.id === id );
    setEditTask(task);
    console.log("EDIT:", task);
   }

  return (
    <div className='tasks'>
        <ul>
           {tasks.map((task)=>(
            <li key={task.id}><span className={ task.completed ? "completed" : "" }>{task.title}</span>
                <span>
                    <FaCheckCircle 
                        style={{ cursor:"pointer", marginRight:'10px'} }  
                        onClick = {() => (onCompleteTask(task.id))}
                    />
                    <FaPenSquare 
                        style={{ cursor:"pointer", marginRight:'10px' }}
                        onClick = {() => handleEdit(task.id)}
                     />
                    <FaTimes 
                    style={{ color:"red", cursor:"pointer" }} 
                    onClick = {() => (onDeleteTask(task.id))}
                    />
                </span>
                 </li>
           ))}
        </ul>
    </div>
  )
}

export default Tasks