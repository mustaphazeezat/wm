import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Table from '../components/Table';
import { useEmployee } from '../context/EmployeeContext';

const Employees = () => {
  const {getAllEmployees} = useEmployee()

    const [data, setData] = useState([]);

  useEffect(() => {
    getEmployees()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getEmployees = async () =>{
    const response = await getAllEmployees()
    if (response.status === 200) {
        setData(response.data)
    }
  }

  return (
    <section className='section-wrapper'>
      <div className='title-wrapper'>
        <h3>
            Employee list
        </h3>
        <Link to="/add-employee" className='add-btn' type='button'>
          Add employee
        </Link>
      </div>
      <div className='deco-wrapper'>
        {data.length > 0? <Table data={data} updateFxn={getEmployees} /> : <p>you do not have any employees.</p>}
      </div>
    </section>
  )
}

export default Employees