import React,{useState} from "react";
import styles from "./addTask.module.css";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  let[value,setValue]=useState("")
  const [todo,setTodo]=useState([])

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task...." className={styles.input} value={value}
      onChange={(e)=>setValue(e.target.value)} />
      <button data-cy="add-task-button" className={styles.btn} onClick={()=>{
        setTodo([...todo,{id:Date.now(),value:value}])
        setValue("")
      }}>+</button>
    </div>
  );
};

export default AddTask;
