import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import { UserCircle } from "lucide-react"
import Link from "next/link"

export default function EditProfile() {
    return(
        <>
        <div className='shadow p-2 rounded-md bg-white md:w-2/3'>
                <div id="form" className="p-4">
                    <div id="top" className="p-4">
                        <div className="flex gap-5 mb-4">
                            <div>
                                <Avatar className="size-10 rounded-md md:size-22">
                                    <AvatarImage src='/avatar/image.jpg'></AvatarImage>
                                    <AvatarFallback className="rounded-md">
                                        <UserCircle className="size-6 md:size-14 "/>
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p className="text-primary/70 mb-2">Student</p>
                                <Button variant='outline'>Upload</Button>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2 my-4">
                        <div className=" *:block">
                            <label htmlFor="first-name" className="px-1 py-3 text-sm font-semibold">First Name</label>
                            <Input
                                id="first-name"
                                placeholder="First Name"
                                className="w-full"
                            />
                        </div>
                        <div className=" *:block">
                            <label htmlFor="last-name" className="px-1 py-3 text-sm font-semibold">Last Name</label>
                            <Input
                                id="last-name"
                                placeholder="Last Name"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2 mb-4">
                        <div className="">
                            <div className=" flex justify-between items-center w-full *:block">
                                <label htmlFor="email" className="px-1 py-3 text-sm font-semibold">Email</label>
                                <Button variant='link' className="text-button/90">Change Email</Button>
                            </div>
                            <Input
                                id="email"
                                placeholder="Email"
                                className="w-full"
                                disabled
                            />
                        </div>
                        <div className="">
                            <div className=" flex justify-between items-center w-full *:block">
                                <label htmlFor="password" className="px-1 py-3 text-sm font-semibold block">Password</label>
                                <Button variant='link' className="text-button/90">Change Password</Button>
                            </div>
                            <Input 
                                id="password"
                                placeholder="**********"
                                className="w-full"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-4">
                        <div className=" *:block">
                            <label htmlFor="phone" className="px-1 py-3 text-sm font-semibold">Phone</label>
                            <Input
                                id="phone"
                                placeholder="Phone"
                                className="w-full"
                            />
                        </div>
                        <div className=" *:block md:col-span-2">
                            <label htmlFor="address" className="px-1 py-3 text-sm font-semibold">Address</label>
                            <Input
                                id="address"
                                placeholder="Address"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className=" mt-6 w-full flex gap-4 md:justify-between">
                        <Link href='/profile' className=" block w-1/2 md:w-fit">
                            <Button variant='outline' className="hover:bg-red-300/50 w-full">Back</Button>
                        </Link>
                        <Button className="w-1/2 md:w-fit">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}