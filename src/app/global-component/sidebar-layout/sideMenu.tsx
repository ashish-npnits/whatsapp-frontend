import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import  { SidebarItem } from '../../global-component/sidebar-layout/sidebar';

const SideMenu = () => {
  return (
  <>
      <SidebarItem icon={<DashboardCustomizeOutlinedIcon sx={{ fontSize: 16 }}/>} text="Dashboard" active={true} alert={false}/>
      <SidebarItem icon={<Person2OutlinedIcon sx={{ fontSize: 16 }}/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<QuickreplyOutlinedIcon sx={{ fontSize: 16 }}/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<PersonalVideoOutlinedIcon sx={{ fontSize: 16 }}/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<SecurityOutlinedIcon sx={{ fontSize: 16 }}/>} text="Dashboard" active={false} alert={false}/>
      <SidebarItem icon={<MarkChatUnreadOutlinedIcon sx={{ fontSize: 16 }}/>} text="Dashboard" active={false} alert={false}/>
  </>
  )
}

export default SideMenu
