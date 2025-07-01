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
import EditProfile from "./editprofile";

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
                    <BreadcrumbItem className="block">
                        <BreadcrumbLink href="/profile">User Profile</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Edit profile</BreadcrumbPage>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                </div>
            </header>
            <div className="bg-sidebar-primary-foreground/20 min-h-dvh">
                <div className="p-4 pb-0">
                    <h1 className=" font-bold text-3xl"> Edit Profile</h1>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="container mx-auto py-5">
                        <EditProfile />
                    </div>
                </div>
            </div>
        </>
    )
}