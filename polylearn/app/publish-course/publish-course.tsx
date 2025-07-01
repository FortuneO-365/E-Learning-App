import { 
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectItem
} from "@/components/ui/select"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import {Button} from '@/components/ui/button'
import { Separator } from "@/components/ui/separator";

export interface DraftedCourse {
    name: string;
    instructor: string;
}

export default function PublishCourse(props: { courses: DraftedCourse[] }) {
    return (
        <div className='shadow p-4 rounded-md bg-white'>
            <div className="mb-4">
                <Select>
                    <SelectTrigger className="w-full md:w-1/3">
                        <SelectValue placeholder="Select a course to publish" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            props.courses.map((course, index) => (
                                <SelectItem key={index} value={course.name}>
                                    {course.name} - {course.instructor}
                                </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>
            <Separator />
            <div>
                <div id="false-form" className="my-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2 mb-4">
                        <div className=" *:block">
                            <label htmlFor="course-name" className="p-1 text-sm font-semibold">Course Name</label>
                            <input
                                id="course-name"
                                className="w-full p-2 border rounded-md outline-none"
                                disabled
                            />
                        </div>
                        <div className=" *:block">
                            <label htmlFor="course-title" className="p-1 text-sm font-semibold">Course Title</label>
                            <input
                                id="course-title"
                                className="w-full p-2 border rounded-md outline-none"
                                disabled
                            />
                        </div>
                    </div>
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2 mb-4">
                        <div className=" *:block md:col-span-2">
                            <label htmlFor="description" className="p-1 text-sm font-semibold">Course Description</label>
                            <textarea 
                                id="description" 
                                rows={4} 
                                className="w-full resize-none p-2 mt-1 border rounded-md outline-none"
                                disabled
                            ></textarea>
                        </div>
                    </div>
                    
                </div>
                <div className=" flex justify-end">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button>Publish Course</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogTitle>
                                Confirm Course Publication
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to publish this course? This action cannot be undone.
                            </AlertDialogDescription>
                            <AlertDialogFooter>
                                <AlertDialogCancel className="hover:bg-red-300/50">Cancel</AlertDialogCancel>
                                <AlertDialogAction>Confirm</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </div>
    )
}