import SideBarLayout from '../../global-component/sidebar-layout/SideBarLayout'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <SideBarLayout contentPane={children}/>
    </div>
  )
}

export default Layout
