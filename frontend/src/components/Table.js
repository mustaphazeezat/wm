import React, { useState } from 'react'
import Modals from './Modals';

const Table = ({data,  updateFxn}) => {
    const [employee, setEmployee] = useState(null);
    const [openEdit, setOpenEdit] = useState(false);
    
  return (
    <>
        <table className='employee-table'>
        <thead>
            <tr>
            <th>Names</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item, i)=> {
                    return<tr key={`${i}-${item.id}`}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td className={`status ${item.status}`}>{item.status}</td>
                        <td><button onClick={() =>{setEmployee(item); setOpenEdit(true)}}>edit</button></td>
                    </tr>
                })
            }
        </tbody>
    </table>
    <Modals openEdit={openEdit} setOpenEdit={setOpenEdit} setEmployee={setEmployee} employee={employee} updateFxn={ updateFxn} />
    </>
  )
}

export default Table