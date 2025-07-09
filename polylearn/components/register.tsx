'use client'

import {
    Card, 
    CardHeader,
    CardContent
} from "@/components/ui/card"



import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Register() {
    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-center flex-col">
                        <h2 className="text-2xl font-bold">Register</h2>
                        <p className="text-sm text-muted-foreground">Create your student profile on PolyLearn</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <div>
                            <label htmlFor="name" className="block text-sm">Full Name</label>
                            <Input 
                                type="text" 
                                id="name" 
                                name="email" 
                                placeholder="Enter your name" 
                                className="mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <Input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="mt-1"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm">Password</label>
                            <Input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                className="mt-1"
                                required
                            />
                            <div className="py-1 hidden" id="password-check">
                                <ul className="flex gap-2 flex-wrap *:text-xs">
                                    <li id="uppercase" className="item match">1 Uppercase Letter</li>
                                    <li id="lowercase" className="item">1 Lowercase Letter</li>
                                    <li id="length" className="item">8 Characters</li>
                                    <li id="symbol" className="item">1 Symbol</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="confirm" className="block text-sm">Confirm Password</label>
                            <Input 
                                type="password" 
                                id="confirm" 
                                name="password" 
                                placeholder="Confirm password" 
                                className="mt-1"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <Button type="submit" className="w-full">Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}