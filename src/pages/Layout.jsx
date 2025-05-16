import React, { Children } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const Layout = ({children}) => {
  return (
    <>
        <Header />
            <main>
            <Outlet />
            {children}
            </main>
        <Footer />
    </>
    
  )
}

export default Layout
