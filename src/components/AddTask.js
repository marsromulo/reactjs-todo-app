import React, { useState, useEffect } from 'react'

const AddTask = ({onAddTask, tasks, setTasks, setEditTask, editTask}) => {

    const [title, setTitle] = useState('');

    const updateTask = (id, title)  => {
        const newTasks = tasks.map((task) => 
            task.id === id ? {id, title} : task
        )
        setTasks(newTasks);
        setEditTask("");
    }

    useEffect(() => {
        if(editTask){
            setTitle(editTask.title);
        }else{
            setTitle('');
        }

    },[setTitle, editTask]);

    const handleOnSubmit =  (e) => {
        e.preventDefault();
        
        if(!title) {
            alert('Please add a task')
            return
        }

        if(!editTask){
            const id = tasks.length + 1;
            onAddTask({id, title, completed:false});
            setTitle('');
        }else{
            updateTask(editTask.id,  title);
        }
       

    }
    
  return (
    <form onSubmit={handleOnSubmit}>
        <div className="form-group add-task">
            <input type="text" className="form-control" value={title} placeholder="Enter task" onChange={(e)=>setTitle(e.target.value)} />
            <button type="submit" className="btn btn-primary">{editTask ? 'Update':'Add'}</button>
        </div>
    </form>

  )
}

export default AddTask