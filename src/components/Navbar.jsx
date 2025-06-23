import { Hourglass } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return (
        <div className="flex justify-between px-5 py-4">
            <Link href="/" className="flex ">
            <Hourglass className="size-5" />
            <span className="font-bold">MindQuill</span> 
            </Link>
            <div>
                <p>SignIn</p>
            </div>
        </div>
    )
}