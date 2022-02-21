import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input'
import { useEmployee } from '../context/EmployeeContext';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const status = 'added'

  const {createEmployee} = useEmployee()

  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const res = await createEmployee({name, email, status})
    if (res.status === 200) {
      setName('')
      setEmail('')
      setSuccess(true)
      toast.success(res.data)
    }
   
    
  }

  return (
    <section className='section-wrapper'>
       <ToastContainer draggable={false} autoClose={2000} />
      <div className='title-wrapper'>
        <h3>
            Create employee
        </h3>
      </div >
      {
        !success ?<form className='deco-wrapper add-form' onSubmit={handleSubmit}>
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
         <button className='submit-btn' type='submit'>
            create employee
          </button>
      </form>: 
        <div className='deco-wrapper success-msg'>
            <p>Employee was added successfully!!!</p>
            <div className='action-wrapper'>
              <Link to="/">Go home</Link>
              <button type="button" onClick={(success)=>setSuccess(!success)}>Add new Employee</button>
            </div>
        </div>
      }
    </section>
  )
}

export default AddEmployee