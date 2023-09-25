import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';

const SettingSidebar = () => {
    return (
        <div id="default-sidebar" className="top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
       <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
          <li>
                <div className="text-3xl my-10 ml-3" >Settings</div>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <DashboardCustomizeOutlinedIcon/>
                   <span className="ml-3">Dashboard</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <Person2OutlinedIcon/>
                   <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                   
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <QuickreplyOutlinedIcon/>
                   <span className="flex-1 ml-3 whitespace-nowrap">Quick-reply</span>
                   
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <GroupsIcon/>
                   <span className="flex-1 ml-3 whitespace-nowrap">Team Setting</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <PersonalVideoOutlinedIcon/>
                   <span className="flex-1 ml-3 whitespace-nowrap">Developer Setting</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <SecurityOutlinedIcon/>
                   <span className="flex-1 ml-3 whitespace-nowrap">Access Permission</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <MarkChatUnreadOutlinedIcon/>
                   <span className="flex-1 ml-3 whitespace-nowrap">Manage Whatsapp Profile</span>
                </a>
             </li>
             <hr/>
          </ul>
       </div>
    </div>
      )
}

export default SettingSidebar
