'use client'

import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader 
} from "@/components/ui/card";
import { Select, 
    SelectValue, 
    SelectTrigger,
    SelectContent,
    SelectItem 
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {Bold, Underline, Italic, Video} from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Stream() {
    return (
        <div className="flex flex-col gap-4 md:flex-row-reverse md:*:h-fit">
            <Card className="w-full md:w-2/3">
                <CardHeader>
                    <h2 className="text-lg font-semibold">Annoucements</h2>
                    <p className="text-sm text-muted-foreground">Announce something to your class.</p>
                </CardHeader>
                <CardContent>
                    <div>
                        <label>For</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Audience" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Students</SelectItem>
                                <SelectItem value="instructors">Everyone</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="mt-4 border rounded-md">
                        <textarea 
                            id="announcement" 
                            rows={4} 
                            className="w-full resize-none p-2 mt-1 outline-none"
                            placeholder="Write your announcement here..."
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
                </CardContent>
                <CardFooter>
                    <div className="w-full flex justify-end gap-4">
                        <Button variant='outline'>Cancel</Button>
                        <Button>Post</Button>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <h2 className="text-lg font-semibold">Stream</h2>
                </CardHeader>
                <CardContent>
                    <div className="flex *:w-1/2 items-center">
                        <div className="p-4">
                            <Video className=" text-neutral-500 size-full"/>
                        </div>
                        <div className="flex flex-col gap-1 p-1">
                            <p>This is where you can talk to your class</p>
                            <p className="text-sm">Use the stream button to create a meeting or schedule it for later</p>
                            <Button className=" self-end">
                                <p>Stream</p>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}