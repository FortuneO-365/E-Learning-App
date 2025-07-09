
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"

import Login from "@/components/login"
import Register from "@/components/register"

export default function Page() {
    return (
        <div className=" w-full flex justify-center items-center h-dvh ">
            <Tabs defaultValue="login" className="w-full p-6 max-w-[500px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="register">
                    <Register />
                </TabsContent>
            </Tabs>
        </div>
    )
}