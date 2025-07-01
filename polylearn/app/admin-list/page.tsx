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
  
  import { columns, Admin } from "./columns"
  import { DataTable } from "./data-table"
   
  async function getData(): Promise<Admin[]> {
    // Fetch data from your API here.
    return [
      {
        id: "1",
        name: "Tyreek Hill",
        email: "th@gmail.com",
      },
      {
        id: "2",
        name: "Lamar Jackson",
        email: "lamar@outlook.com",
      },{
        id: "3",
        name: "Patrick Mahomes",
        email: "mahomesp@yahoo.com",
      },{
        id: "4",
        name: "Travis Kelce",
        email: "tk22@gmail.com",
      },{
        id: "5",
        name: "Tua Tagovailoa",
        email: "tt@yahoo.com",
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
                  <BreadcrumbPage>Admin List</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
          <div className="p-4 pb-0">
            <h1 className=" font-bold text-3xl">Admins</h1>
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