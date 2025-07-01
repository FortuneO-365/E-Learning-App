import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
    Table, 
    TableHeader, 
    TableBody, 
    TableRow,
    TableCell
} from "@/components/ui/table"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

import { UserCircle } from "lucide-react"
import Link from "next/link"

export default function Profile(){
    return(
        <div className='shadow p-2 rounded-md bg-white md:w-2/3'>
            <div id="top" className="p-4">
                <div className="flex gap-5 mb-4">
                    <div>
                        <Avatar className="size-22 rounded-md">
                            <AvatarImage src='/avatar/image.jpg'></AvatarImage>
                            <AvatarFallback className="rounded-md">
                                <UserCircle className="size-14"/>
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-primary/70">Student</p>
                    </div>
                </div>
                <div>
                    <Link href='/profile/edit'>
                        <Button>Edit Profile</Button>
                    </Link>
                </div>
            </div>
            <Separator />
            <div id="classes" className="p-4">
                <h3 className="text-xl font-semibold mb-4">My Classes</h3>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell>
                                    Course Code
                                </TableCell>
                                <TableCell>
                                    Course Name
                                </TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                        </TableBody>
                    </Table>
                </div>

            </div>
        </div>
    )
}