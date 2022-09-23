import React from 'react'
import './EmployeeTable.css'

const EmployeeTable = () => {
  return (
    <div className='employee'><h4 className='title'>Employees</h4>
    <div className='table'>
     <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Last login</th>
          <th>Department</th>
          <th>Status</th>
          <th>user</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Logan Henderson<p>Logan@company.com</p></td>
          <td>Sept 20, 2019<p>2 days ago</p></td>
          <td>Accounting</td>
          <td>Active</td>
          <td></td>
        </tr>
        <tr>
          <td>Susie Carlson<p>Susie@company.com</p></td>
          <td>Sept 22, 2019<p>5 hours ago</p></td>
          <td>Development</td>
          <td>Inactive</td>
          <td></td>
        </tr>
        <tr>
          <td>Markus Benes<p>Markus@company.com</p></td>
          <td>Sept 18, 2019<p>4 days ago</p></td>
          <td>Development</td>
          <td>Active</td>
          <td></td>
        </tr>
        <tr>
          <td>Marie stephens<p>Marie@company.com</p></td>
          <td>Sept 20, 2019<p>2 days ago</p></td>
          <td>Human Resources</td>
          <td>Active</td>
          <td></td>
        </tr>
        <tr>
          <td>Jacob Gibson<p>Jacob@company.com</p></td>
          <td>Sept 22, 2019<p>3 hours ago</p></td>
          <td>Sales</td>
          <td>Active</td>
          <td></td>
        </tr>
      </tbody>
      </table> 
    </div>
    </div>
  )
}

export default EmployeeTable