'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import {MoreHorizontal, Plus, BookMarked, TextSelection} from 'lucide-react'

export default function Module() {
    return (
        <div>
            <div className="p-4">
                <Button>
                    <Plus />
                    <span>Create</span>
                </Button>
            </div>
            <div>
                <div id="topic" className="py-6 px-4">
                    <div className=" flex justify-between items-center pb-4 border-b">
                        <h2 className=" text-xl font-semibold">Introduction</h2>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreHorizontal />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Rename</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                        <Card className=" rounded-none shadow-none hover:shadow-md">
                            <CardContent className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className=" bg-neutral-800 text-white p-2 rounded-full">
                                        <BookMarked  className="size-4"/>
                                    </div>
                                    <div>
                                        <p>Introduction to Maths</p>
                                    </div>
                                </div>
                                <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <MoreHorizontal />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Rename</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className=" rounded-none shadow-none hover:shadow-md">
                            <CardContent className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className=" bg-neutral-800 text-white p-2 rounded-full">
                                        <TextSelection  className="size-4"/>
                                    </div>
                                    <div>
                                        <p>Maths Assignment</p>
                                    </div>
                                </div>
                                <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <MoreHorizontal />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Rename</DropdownMenuItem>
                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}