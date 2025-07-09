"use client"

import * as React from "react"
import {
  MessageSquareText,
  BookOpen,
  Frame,
  Map,
  PieChart,
  Settings2,
  UsersIcon,
  BookMarked
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Users",
      url: "#",
      icon: UsersIcon,
      isActive: true,
      items: [
        {
          title: "Admin List",
          url: "/admin-list",
        },
        {
          title: "Instuctors List",
          url: "/instructors",
        },
        {
          title: "Student List",
          url: "/student-list",
        },
        {
          title: "Add User",
          url: "/add-user",
        },
      ],
    },
    {
      title: "Courses",
      url: "#",
      icon: BookMarked,
      items: [
        {
          title: "My Course",
          url: "/course",
        },
        {
          title: "Course List",
          url: "/course-list",
        },
        {
          title: "Add Course",
          url: "/add-course",
        },
        {
          title: "Publish Course",
          url: "/publish-course",
        },
        {
          title: "Course Enrollment",
          url: "/enroll",
        },
      ],
    },
    {
      title: "Messages",
      url: "#",
      icon: MessageSquareText,
      items: [
        {
          title: "View Chats",
          url: "#",
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/courses",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
