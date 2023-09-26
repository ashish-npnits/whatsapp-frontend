'use client'
import { Avatar } from "@radix-ui/themes";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import React from "react";
import { useContext, createContext, useState } from "react"

// Define the type for the context value
interface SidebarContextType {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen ${
      expanded ? "w-52" : "w-20"
    }`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-md">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Provide the context value */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-4">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
        <Avatar color="green" fallback="AKV" />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="text-sm font-normal">Ashish Kumar Vishwakarma</h4>
              <span className="text-xs font-light text-gray-600">ashishrits081@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }: { icon: React.ReactNode, text: string, active: boolean, alert: boolean }) {
  // Get the context value
  const contextValue = useContext(SidebarContext);

  // Handle the case where the context value is undefined
  if (contextValue === undefined) {
    // You can return a default value or handle it in a way that suits your app
    return null;
  }

  const { expanded } = contextValue;

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800"
            : "hover:bg-green-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3 text-sm font-light" : "w-0 h-4"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-green-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-green-100 text-green-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          z-50
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
