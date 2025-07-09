import { SidebarTrigger, } from "@/components/ui/sidebar";
import { Home } from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import Enrollment, {CourseDetails} from "./enrollment";
export default function Page() {
    const courses: CourseDetails[] = [
        {
            name: "Introduction to Programming",
            instructor: ' Micheal Smith',
            title: 'PRO-101'
          },
          {
            name: "Advanced Mathematics",
            instructor: 'Leo Karlo',
            title: 'MTH-101'
          },{
            name: "Data Structures and Algorithms",
            instructor: 'Patrick Mahomes',
            title: 'DBS-101'
          },{
            name: "Web Development Basics",
            instructor: 'Tom Brady',
            title: 'PRO-102'
          },{
            name: "Database Management Systems",
            instructor: 'Philip Lahm',
            title: 'DBS-102'
          },{
            name: "Machine Learning Fundamentals",
            instructor: 'Stacy Flynn',
            title: 'MLS-101'
          },{
            name: "Computer Networks",
            instructor: 'Matthew Williams',
            title: 'COM-101'
          },{
            name: "Operating Systems Concepts",
            instructor: 'Linda Stewart',
            title: 'COM-102'
          },{
            name: "Software Engineering Principles",
            instructor: 'Mikaila Liam',
            title: 'PRO-103'
          },{
            name: "Introduction to Artificial Intelligence",
            instructor: 'Rick Sanchez',
            title: 'MLS-102'
          },{
            name: "Mobile App Development",
            instructor: 'Kira Queen',
            title: 'PRO-104'
          }
    ]
    return(
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>
                    <BreadcrumbItem className="block">
                        <BreadcrumbLink href="/">
                        <Home className="size-4"/>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Course Enrollment</BreadcrumbPage>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                </div>
            </header>
            <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
                <div className="p-4 pb-0">
                    <h1 className=" font-bold text-3xl">Course Enrollment</h1>
                    <p className="text-sm text-primary/70">Choose the course you want to enroll in</p>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="container mx-auto py-5 ">
                        <Enrollment courses={courses}/>
                    </div>
                </div>
            </div>
        </>
    ) 
}