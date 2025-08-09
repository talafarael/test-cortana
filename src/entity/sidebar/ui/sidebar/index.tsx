'use client'
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
} from "@/shared/components/ui/sidebar"
import { sideBarData } from '../../data/sidebar.data'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { usePathname } from 'next/navigation'
import { useLanguageStore } from '@/entity/language'

export const SideBar = () => {
  const pathname = usePathname()
  const { language } = useLanguageStore()
  return (
    <Sidebar className="relative h-full w-[240px] border-r border-gray-200 bg-white dark:bg-gray-900">
      <SidebarContent className="p-3">
        <SidebarGroup>
          <div className="flex flex-col gap-1">
            {sideBarData.map((item) => {
              const isActive = pathname === `/${item.link}`
              const Icon = item.icon

              return (
                <Link
                  key={item.link}
                  href={`/${item.link}`}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                    isActive && "bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-blue-500" : "text-gray-500"
                  )} />
                  <span className={cn(
                    "font-medium",
                    isActive ? "text-blue-500" : "text-gray-700 dark:text-gray-200"
                  )}>
                    {language == "ua" ? item.titleUa : item.title}
                  </span>
                </Link>
              )
            })}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
