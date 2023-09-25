import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import { SidebarItem } from './sidebar';

const SideMenu = () => {
  return (
  <>
      <SidebarItem icon={<DashboardCustomizeOutlinedIcon/>} text="Dashboard" active={true} alert={false}/>
      <SidebarItem icon={<Person2OutlinedIcon/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<QuickreplyOutlinedIcon/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<PersonalVideoOutlinedIcon/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<SecurityOutlinedIcon/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<MarkChatUnreadOutlinedIcon/>} text="Dashboard" active={false} alert={false}/>
  </>
  )
}

export default SideMenu
