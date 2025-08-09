'use client'
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import { sideBarData } from '../../data/sidebar.data'
import { Link } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

export const SideBar = () => {
  return (
    <Sidebar className="relative h-full w-[240px] border-r border-gray-200 bg-white dark:bg-gray-900">
      <SidebarHeader className="px-4 py-3 text-lg font-semibold">
        Menu
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col gap-1">
            {sideBarData.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton>
                  <Link
                    href={`/${item.link}`}
                    className={cn(
                      "block px-4 py-2 rounded-md transition-colors",
                      "hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <span>    {item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
        © 2025 My App
      </SidebarFooter>
    </Sidebar>
  )
}
