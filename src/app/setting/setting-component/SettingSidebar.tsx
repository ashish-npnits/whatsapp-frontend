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
        <div id="default-sidebar" className="top-0 left-0 w-64 h-screen " aria-label="Sidebar">
       <div className="h-full px-3 py-4 overflow-y-auto bg-grey-50 dark:bg-grey-800 border-r shadow-sm">
          <ul className="space-y-2 font-medium">
          <li>
                <div className="text-xl my-10 ml-3 font-normal" >Settings</div>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                   <DashboardCustomizeOutlinedIcon sx={{ fontSize: 16 }}  />
                   <span className="ml-3 text-sm font-light">Dashboard</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                    <Person2OutlinedIcon sx={{ fontSize: 16 }} />
                   <span className="ml-3 text-sm font-light">Profile</span>
                   
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                <QuickreplyOutlinedIcon sx={{ fontSize: 16 }} />
                   <span className="ml-3 text-sm font-light">Quick-reply</span>
                   
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                   <GroupsIcon sx={{ fontSize: 16 }} />
                   <span className="ml-3 text-sm font-light">Team Setting</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                   <PersonalVideoOutlinedIcon sx={{ fontSize: 16 }} />
                   <span className="ml-3 text-sm font-light">Developer Setting</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                   <SecurityOutlinedIcon sx={{ fontSize: 16 }} />
                   <span className="ml-3 text-sm font-light">Access Permission</span>
                </a>
             </li>
             <hr/>
             <li>
                <a href="#" className="flex items-center p-2 text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700 group">
                   <MarkChatUnreadOutlinedIcon sx={{ fontSize: 16 }} />
                   <span className="ml-3 text-sm font-light">Manage Whatsapp <br/> Profile</span>
                </a>
             </li>
             <hr/>
          </ul>
       </div>
    </div>
      )
}

export default SettingSidebar
