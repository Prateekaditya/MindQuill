"use client";
import {Icons} from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Hourglass } from "lucide-react";

export default function SignIn(){
    return(
        <div className="w-full flex items-center flex-col "> 
            <div className=" flex items-center flex-col w-full bg-zinc-600 md:w-100  gap-5 p-8 mt-20 rounded-lg">
            <Hourglass className="size-15"/>
            <p className="w-50 text-center">Hii To Reimagine your Mind And it content Join MindQuill</p>
            <Button variant='outline' > <Icons.GoogleLogo className="size-7"/> Sign-In</Button>
        </div>
        </div>
    )
}