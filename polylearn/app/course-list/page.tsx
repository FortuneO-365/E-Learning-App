import {
    SidebarTrigger,
  } from "@/components/ui/sidebar";
  import {
    
    Home
  } from 'lucide-react'
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Separator } from "@/components/ui/separator"
  
  import { columns, Course } from "./columns"
  import { DataTable } from "./data-table"
   
  async function getData(): Promise<Course[]> {
    // Fetch data from your API here.
    return [
      {
        id: "1",
        name: "Introduction to Programming",
        status: "published",
      },
      {
        id: "2",
        name: "Advanced Mathematics",
        status: "draft",
      },{
        id: "3",
        name: "Data Structures and Algorithms",
        status: "published",
      },{
        id: "4",
        name: "Web Development Basics",
        status: "published",
      },{
        id: "5",
        name: "Database Management Systems",
        status: "draft",
      },{
        id: "6",
        name: "Machine Learning Fundamentals",
        status: "archived",
      },{
        id: "7",
        name: "Computer Networks",
        status: "published"
      },{
        id: "8",
        name: "Operating Systems Concepts",
        status: "published",
      },{
        id: "9",
        name: "Software Engineering Principles",
        status: "draft",
      },{
        id: "10",
        name: "Introduction to Artificial Intelligence",
        status: "published",
      },{
        id: "11",
        name: "Mobile App Development",
        status: "published",
      },
      // ...
    ]
  }
  
  export default async function Page() {
    const data = await getData()
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
                  <BreadcrumbPage>Course List</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
          <div className="p-4 pb-0">
            <h1 className=" font-bold text-3xl">Courses</h1>
          </div>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="container mx-auto py-5">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </>
    )
  }