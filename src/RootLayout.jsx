import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
function RootLayout(props) {
  return (
    <>
        <Navbar cartCount={props.cartCount}/>
        {/* placeholder to load components */}
        <Outlet/>
    </>
  )
}

export default RootLayout