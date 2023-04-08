import React from 'react'
import EditTask from '../Modals/EditTask';
import './Data.css'
import { useState } from 'react';


const Data = (props) => {
  const day=props.arg.expdate.toLocaleString('en-US',{day:'2-digit'});
    const month=props.arg.expdate.toLocaleString('en-US',{month:'long'});
    const year=props.arg.expdate.getFullYear();


  const handledelete = () =>{
    console.log(props.arg.id)
    let index = props.arg.id
    props.deleteTask(index);
  }


  const [modal, setModal] = useState(false);
  const toggle = () =>{
    setModal(!modal) 
  }
   const updatetask = (tempobj) =>{
    console.log("id",props.arg.id)
  
    let id2 = props.arg.id
    let x = tempobj;
    x.id = id2
    console.log(x)
     props.updatelist(x)
     setModal(false)
   }
  return (
   <div className='main-div'>

    <div className='title-div'> {props.arg.task} </div>


     <div className='desc-div'> {props.arg.desc}</div>


          <div className='time-div'>
              <span>{props.time.hour}:</span>
              <span>{props.time.min}</span>
          </div>


     <div className='status-div'>
          <label >Status : </label>
          <select >
              <option value="Open">Open</option>
              <option value="Working">Working</option>
              <option value="Completed">Completed</option>
              <option value="Overdue">Overdue</option>
          </select>
     </div>
        
        <div className='exp-div'>
            {day} 
            {month}
            {year}
        </div>
   
     <div className='modify-div'>
         <button onClick={() =>{setModal(true)}}>Edit</button> 
          <button onClick={handledelete}>Delete</button>
      </div>
   
    <EditTask modal={modal} toggle={toggle} updatetask={updatetask}/>
   </div> 
   
  )
}

export default Data