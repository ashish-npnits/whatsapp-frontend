import React from 'react'

const ContentPane = ({children} : {children: React.ReactNode}) => {
  return (
    <div  className="w-full">
      {children}
    </div>
  )
}

export default ContentPane;
