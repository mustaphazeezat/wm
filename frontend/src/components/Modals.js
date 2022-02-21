import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useEmployee } from '../context/EmployeeContext';
import Input from './Input';
import Select from './Select';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const Modals = ({openEdit, setOpenEdit, employee,  updateFxn}) => {
    Modal.setAppElement('#root');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('');
    const {updateEmployee} = useEmployee()
    let statusOptions = ['added', 'in-check', 'approved', 'active','inactive']

  async function closeModal() {
    setOpenEdit(false);
    updateFxn()
  }

useEffect(() => {
   if (employee !== null) {
    setName(employee.name)
    setEmail(employee.email)
    setStatus(employee.status)
   }else{
       return null
   }
    
}, [employee]);

const handleSubmit = async(item) =>{
    
let data = {}
    if(item){
        data ={
            name: name,
            email: email,
            status: item
        }
    }else{
        data ={
            name: name,
            email: email,
            status: status
        }
    }
    
    const res = await updateEmployee(data, employee.id)
    if (res.status === 200) {
        toast.success(res.data)

    }  
  }
  
    return <div>  
        <Modal
            isOpen={openEdit}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <ToastContainer draggable={false} autoClose={2000} />
            <button className='close-modal-btn' onClick={closeModal}>close</button>
            <div className='modal-content'>
            <div className='employee-info'>
                <h3>Employee Details</h3>
                <p >Name: <span>{name}</span></p> <p>Email: <span>{email}</span> </p>
                <div className='status'>
                    <p>status</p>
                    <div className='status-wrapper'>
                    {statusOptions.map((item,i)=><div onClick={()=>{setStatus(item); handleSubmit(item)}} key={i} className={`${status === item? 'active': ''} status-item`} role="button">{item} </div>)}
                    </div>
                </div>
                
            </div>
            <div className='edit-employee-info deco-wrapper'>
                <h3>Edit Employee</h3>
                <form className='edit-form' onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
                    <Input
                        type="text" 
                        label="Name" 
                        value={name}
                        onChange={val=>setName(val)}
                    />
                    <Input
                        type="email" 
                        label="Email" 
                        value={email}
                        onChange={val=>setEmail(val)}
                    />
                    <Select
                        value={status}
                        label='Status'
                        error='' 
                        options={statusOptions}
                        onChange={(e)=>setStatus(e.target.value)}
                    />
                    <button className='submit-btn' type='submit'>
                        Edit employee
                    </button>
                </form>
            </div>
            </div>
        </Modal>
    </div>;
    };

export default Modals;
