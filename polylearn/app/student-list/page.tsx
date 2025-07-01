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

import { columns, Student } from "./colums"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Student[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Aliyu Abdullah",
      status: "active",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "a@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
    },{
      id: "728ed52f",
      name: "Yusuf Abdullah",
      status: "active",
      email: "m@example.com",
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
                <BreadcrumbPage>Student List</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
        <div className="p-4 pb-0">
          <h1 className=" font-bold text-3xl">Students</h1>
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