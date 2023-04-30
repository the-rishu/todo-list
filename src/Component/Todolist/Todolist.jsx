import React from 'react'
import './Todolist.css'
import { useState } from 'react'
import Createtask from '../Modals/Createtask'
import Data from '../Create/Data'

const Todolist = () => {
  let date = new Date();

  let time = {
     hour : date.getHours(),
     min : date.getMinutes(),
     sec : date.getSeconds()
  }
  

  const [modal, setModal] = useState(false);

  const [tasklist,setTasklist] = useState([]);

  const toggle = () =>{
    setModal(!modal) 
  }

  const deleteTask = (index) => {
      const olditem = [...tasklist]
      const item = olditem.filter((element)=>{
        return element.id!== index
      })
      setTasklist(item)
  }

   const updatelist = (x) =>{
     console.log("latest",x)
     let templist = [...tasklist];
    
    
        const item = templist.filter((y) => {
          if(y.id===x.id){
            y.task = x.task
            y.desc = x.desc
          }
          return y
        })
        
    setTasklist(templist)
   
  }

  const saveTask = (taskobj) =>{
    let templist = [taskobj,...tasklist];
    localStorage.setItem("tasklist",JSON.stringify(templist))
    setTasklist(templist)
    setModal(false)
  }
  return (
   <>
    <div className='header'>
        <h3>Todo List</h3>
        <button className="btn btn-primary" onClick={() =>{
          setModal(true)
        }}>Create Task</button>
    </div>
    
        <div>
        {tasklist.map((obj) => <Data key={obj.id} arg={obj} time={time} deleteTask={deleteTask} updatelist={updatelist} />)}
        </div>
    <div className='task-container'>
         <Createtask toggle = {toggle} modal={modal} save={saveTask}/>
    </div>
    
   </>
  )
}

export default Todolist