"use client"

import * as React from "react"

import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserMenuWithSession } from "@/features/auth/components/user-menu"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="absolute top-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-xs">
            ✓
        </span>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        
      </SidebarContent>
      <UserMenuWithSession variant='profile'/>
    </Sidebar>
  )
}
