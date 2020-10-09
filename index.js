import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import InputField from "./components/InputField"
import InputField from "./components/InputField"
import List from "./components/List"
import StatusBar from "./components/StatusBar"
import SelectFilter from "./components/SelectFilter"

const App = (props) => {
   const [tasks, setTasks] = useState([
      { name: "buy cabel", isComplete: false, priority: 'low' },
      { name: "go to ride", isComplete: true, priority: 'medium' },
      { name: "watch csk match", isComplete: false, priority: 'high' }
  ])

  const [priority, setPriority] = useState('All');
  const lowPriTask = tasks.filter(task => task.priority == "low");
    const mediumPriorityTasks = tasks.filter(task => task.priority == "medium");
    const highPriorityTasks = tasks.filter(task => task.priority == "high");
    const completedTasks = tasks.filter(task => task.isComplete == true);
    const pendingTasks = tasks.filter(task => task.isComplete != true);

    const lowPriTaskCount = lowPriTask.length;
    const mediumPriorityTasksCount = mediumPriorityTasks.length;
    const highPriorityTasksCount = highPriorityTasks.length;
    const completedTasksCount = completedTasks.length;
    const pendingTasksCount = pendingTasks.length;

  const toggleTask = (taskIndex) => {
      setTasks(tasks.map((task, index) => {
          if (taskIndex === index) {
              return {
                  ...task,
                  isComplete: !task.isComplete
              }
          }
          return task
      }))
  };

  const addTask = (name, priority) => {
      let newTask = { name, isComplete: false, priority };
      setTasks([...tasks, newTask]);
  }

  const deleteTask = (deletedId) => {
      setTasks(tasks.filter((task, index) => deletedId !== index));
  }
  
     return(
          <>
           <div className="first">
              <div className="Second">
                <h1>{props.title}</h1>
                <br/>
                 <InputField addTask={addTask} /> 
                 <br/>
                 <SelectFilter selectPriority={setPriority} />
                 <br/>
                 <List tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
                 <br/>
                 <br/>
                
                 <br/>
                 <br/>
                 <StatusBar high={highPriorityTasksCount} medium={mediumPriorityTasksCount} low={lowPriTaskCount} completed={completedTasksCount} pending={pendingTasksCount} />
                 <h1>hemanth kumars</h1>
              </div>
           </div>

          </> 

     )
}

ReactDOM.render(<App title="ToDO-List" />,document.querySelector("#root"));

export default App;


//ReactDOM.render(<App title="ToDo list" info="fre app" />,document.querySelector("#root"));