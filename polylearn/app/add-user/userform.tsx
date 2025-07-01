"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Select, 
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue 
} from "@/components/ui/select";

export default function AddUser() {
    return (
        <>
            <div className='shadow p-2 rounded-md bg-white'>
                <div id="form" className="p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-4">
                        <div className=" *:block">
                            <label htmlFor="first-name" className="p-1 text-sm font-semibold">First Name</label>
                            <Input
                                id="first-name"
                                placeholder="First Name"
                                className="w-full"
                            />
                        </div>
                        <div className=" *:block">
                            <label htmlFor="last-name" className="p-1 text-sm font-semibold">Last Name</label>
                            <Input
                                id="last-name"
                                placeholder="Last Name"
                                className="w-full"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="" className="p-1 text-sm font-semibold block">Role</label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="teacher">Instructor</SelectItem>
                                    <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-4">
                        <div className=" *:block md:col-span-2">
                            <label htmlFor="email" className="p-1 text-sm font-semibold">Email</label>
                            <Input
                                id="email"
                                placeholder="Email"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-4">
                        <div className=" *:block">
                            <label htmlFor="phone" className="p-1 text-sm font-semibold">Phone</label>
                            <Input
                                id="phone"
                                placeholder="Phone"
                                className="w-full"
                            />
                        </div>
                        <div className=" *:block md:col-span-2">
                            <label htmlFor="address" className="p-1 text-sm font-semibold">Address</label>
                            <Input
                                id="address"
                                placeholder="Address"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className=" flex justify-end">
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}