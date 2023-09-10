import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <>
      <h2>
        Hello World 3
    </h2>
    <Outlet />
    </>
  )
}
