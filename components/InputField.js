import React, { Fragment, useState } from 'react';
import ReactDOM from "react-dom";

const InputField = (props) => {

  const [inputValueData, setInputValueData] = useState("");
  const [priority, setPriority] = useState("low");

  const inputtextdata = (event) => {
      let inputText = event.target.value;
      console.log(event.target.value)
      setInputValueData(inputText);
      setPriority("Low")
  }
  
  const inputPriority = (event) => {
    let inputPrival = event.target.value;
      console.log(event.target.value)
      setPriority(inputPrival);
  }
  const addTask = () => {
    if (inputValueData) {
        props.addTask(inputValueData, priority)
    }
    setInputValueData('')
    setPriority('');
}
    return(
        <>
               <input 
               onChange={inputtextdata}
               value={inputValueData} type="text" 
               placeholder="Please Add the ToDo Item"></input>
             
               <select onChange={inputPriority} style={{ margin:"5px",padding:"1px", textAlign: "center" }}  >

                  <option value="low">Low</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  
               </select>

               <button onClick={addTask}>➕</button>
              
        </>
   );

}

export default InputField;