import { Hourglass } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
export default function Navbar(){
    const auht =true;
    const tempUser ={
        name:"Sam",
        username:"sam"
    }
    return (
        <div className="flex justify-between px-5 py-4">
            <Link href="/" className="flex ">
            <Hourglass className="size-5" />
            <span className="font-bold">MindQuill</span> 
            </Link>
            <div>
                {auht ? (<UserModalCompent user={tempUser}/>):(<p>SignIn</p>)}
                
            </div>
        </div>
    )
}

const UserModalCompent =({user}) =>{
    return <DropdownMenu>
    <DropdownMenuTrigger>user</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Hii,{user.name}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href={`/profile/${user.username}`}>Go to Profile</Link>
      </DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}