import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const[count,setCount]=useState(0)
  const counters=(value)=>{
    setCount(count+value)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"onClick={()=>counters(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"onClick={()=>{if(count > 0){counters(-1)}}}>-</button>
    </div>
  );
};

export default Counter;
