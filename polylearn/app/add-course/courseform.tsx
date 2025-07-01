'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from 'lucide-react';

export default function AddCourse() {
    return (
        <div className='shadow p-2 md:w-2/3 rounded-md bg-white'>
            <div id="form" className="p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 mb-4">
                    <div className=" *:block">
                        <label htmlFor="course-name" className="p-1 text-sm font-semibold">Course Name</label>
                        <Input
                            id="course-name"
                            placeholder="Course Name"
                            className="w-full"
                        />
                    </div>
                    <div className=" *:block">
                        <label htmlFor="course-title" className="p-1 text-sm font-semibold">Course Title</label>
                        <Input
                            id="course-title"
                            placeholder="Course Title"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 mb-4">
                    <div className=" *:block md:col-span-2">
                        <label htmlFor="description" className="p-1 text-sm font-semibold">Course Description</label>
                        <div className=" border rounded-md shadow-xs">
                        <textarea 
                            id="description" 
                            rows={4} 
                            className="w-full resize-none p-2 mt-1 outline-none"
                            placeholder="Course description goes here..."
                        ></textarea>
                        <div>
                            <ToggleGroup type="multiple">
                                <ToggleGroupItem value="bold">
                                    <Bold className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="italic">
                                    <Italic className="size-4" />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="underline">
                                    <Underline className="size-4" />
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-4">
                    <div className=" *:block">
                        <label htmlFor="instuctor-id" className="p-1 text-sm font-semibold">Instructor Id</label>
                        <Input
                            id="instuctor-id"
                            placeholder="Instructor ID"
                            className="w-full"
                        />
                    </div>
                    <div className=" *:block md:col-span-2">
                        <label htmlFor="instructor-name" className="p-1 text-sm font-semibold">Instructor Name</label>
                        <Input
                            id="instructor-name"
                            placeholder="Instructor Name"
                            className="w-full"
                            disabled
                        />
                    </div>
                </div>
                <div className=" flex justify-end gap-4">
                    <Button variant="outline">Check</Button>
                    <Button disabled>Submit</Button>
                </div>
            </div>
        </div>
        
    )
}