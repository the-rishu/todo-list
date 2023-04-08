import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const Createtask = ({modal,toggle,save}) => {
    const [tasktitle,setTitle] = useState('');
    const [taskdesc,setDesc] = useState('');
    const [count,setCount] = useState(0)
    const [enterdate,setDate] = useState('')
    
    const handletitle = (e)=>{
       setTitle(e.target.value)
    }
    const handledesc = (e)=>{
        setDesc(e.target.value)
     }
     const handledate = (e) =>{
        setDate(e.target.value)
       
     }
     const handlesave = (e) =>{
         setCount(count+1)
         e.preventDefault()
        let taskobj ={
            task:tasktitle,
            desc:taskdesc,
            id:count,
            expdate:new Date(enterdate)
        }
        console.log(taskobj)
        save(taskobj)
        setDesc('')
        setTitle('')
        setDate('')
     }
     
  return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <form >
                <div className="form-group">
                    <label >Task Title</label>
                    <input type="text" className='form-control' value={tasktitle} onChange={handletitle} />
                </div><br />
                <div className="form-group">
                    <label >Description</label>
                    <textarea name="" id="" cols="30" rows="5" className='form-control' value={taskdesc} onChange={handledesc} ></textarea>
                </div>
                <div>
                    <label> Due Date :</label>
                    <input type="date" value={enterdate} onChange={handledate} />
                </div>
            </form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={handlesave}>
        create</Button>
        <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>
        </ModalFooter>
  </Modal>
  )
}

export default Createtask