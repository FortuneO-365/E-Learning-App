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
import PublishCourse, {DraftedCourse} from "./publish-course";


// This is a sample data structure for courses.
// You can replace this with actual data fetching logic.
const courses: DraftedCourse[] = [
    { 
        name: "Introduction to Programming", 
        instructor: "John Doe", 
    },
    { 
        name: "Advanced Data Science", 
        instructor: "Jane Smith",
    },
    { 
        name: "Web Development Basics", 
        instructor: "Emily Johnson",
    },
];

export default function Page() {
    return (
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
                        <BreadcrumbPage>Publish Course</BreadcrumbPage>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                </div>
            </header>
            <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
                <div className="p-4 pb-0">
                    <h1 className=" font-bold text-3xl">Publish Course</h1>
                    <p className="text-sm text-primary/70">Select the course to be published below</p>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="container mx-auto py-5 ">
                        <PublishCourse courses={courses} />
                    </div>
                </div>
            </div>
        </>
    )
}