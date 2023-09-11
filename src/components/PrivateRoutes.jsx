import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  return (
    <>
            <div>PrivateRoutes</div>
        <Outlet/>
    </>
  )
}

export default PrivateRoutes