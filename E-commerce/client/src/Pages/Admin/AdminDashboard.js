import React from 'react'
import AppLayout from '../../Compo/AppLayout/AppLayout'
import AdminMenu from '../../Compo/AppLayout/AdminMenu'
import { useAuth } from '../../Context/auth'

const AdminDashboard = () => {
  const[auth]=useAuth();
  return (
    <AppLayout>
    
    <div className='container-fluid m-3 p-3'>
      <div className='row'>
        <div className='col-md-3'>
          <AdminMenu />

        </div>
        <div className='col-md-9'>
          <div className='card w-75 p-3'>
            <h1>Admin Name: {auth?.user?.name}</h1>
            <h1>Admin Email: {auth?.user?.email}</h1>
            <h1>Admin Contact: {auth?.user?.phone}</h1>

          </div>

        </div>
      </div>

    </div>

    </AppLayout>
  )
}

export default AdminDashboard
