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
  
  import { columns, Instructor } from "./column"
  import { DataTable } from "./data-table"
   
  async function getData(): Promise<Instructor[]> {
    // Fetch data from your API here.
    return [
      {
        id: "1",
        name: "Thompson Harper",
        email: "thompsonh@gmail.com",
        course: "Introduction to Programming",
      },
      {
        id: "2",
        name: "Tina Karter",
        email: "tinak@gmail.com",
        course: "Advanced Mathematics",
      },{
        id: "3",
        name: "Terry Jones",
        email: "terryj@yahoo.com",
        course: "Data Structures and Algorithms",
      },{
        id: "4",
        name: "Tina Smith",
        email: "tinas@outlook.com",
        course: "Web Development Basics",
      },{
        id: "5",
        name: "Thomas Brown",
        email: "thomasb@gmail.com",
        course: "Database Management Systems",
      },{
        id: "6",
        name: "Linda White",
        email: "lindaw@gmail.com",
        course: "Machine Learning Fundamentals",
      },
      {
        id: "7",
        name: "Liam Johnson",
        email: "liamj@outlook.com",
        course: "Computer Networks",
      },{
        id: "8",
        name: "Lily Green",
        email: "lilyg@yahoo.com",
        course: "Operating Systems Concepts",
      },{
        id: "9",
        name: "Lucas Martin",
        email: "lucasm@gmail.com",
        course: "Software Engineering Principles",
      },{
        id: "10",
        name: "Lara Wilson",
        email: "laraw@yahoo.com",
        course: "Introduction to Artificial Intelligence",
      },{
        id: "11",
        name: "Benjamin Lee",
        email: "benlee@yahoo.com",
        course: "Mobile App Development",
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
                  <BreadcrumbPage>Instructor List</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
          <div className="p-4 pb-0">
            <h1 className=" font-bold text-3xl">Instructors</h1>
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