import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

const [tasks, setTasks] = useState([
  {
    id : 1,
    title: "Buy Milk",
    completed: false

  }
]);
const [editTask, setEditTask] = useState(null);

console.log(tasks);

const handleAddTask = (newTask) => {
  setTasks([newTask, ...tasks])
}

const handleDeleteTask = (id) => {
  setTasks(tasks.filter( task => task.id !== id))
}

const handleCompleteTask = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {id: id, title: task.title, completed: !task.completed} : task ))
}


  return (
    <div className="container w-50 mt-3">
      <Header/>
      <AddTask 
        onAddTask= {handleAddTask} 
        editTask = {editTask} 
        setEditTask = {setEditTask} 
        tasks = {tasks}
        setTasks = {setTasks}
      />
      {tasks.length > 0 ?
        <Tasks 
          tasks={tasks} 
          onDeleteTask = {handleDeleteTask}
          setEditTask = {setEditTask}
          onCompleteTask  = {handleCompleteTask}
        /> 
        : 
        'No task to show'
      }

    </div>
  );
}

export default App;
