import React from 'react'
import SideBar from './sidebar'
import ContentPane from './contentPane'
import { Flex } from '@radix-ui/themes'
import SideMenu from './sideMenu'

const SideBarLayout = ({ contentPane}:{ contentPane: React.ReactNode}) => {
  return (
    <Flex>
      <SideBar><SideMenu/></SideBar>
      <ContentPane>{contentPane}</ContentPane>
    </Flex>
  )
}

export default SideBarLayout
