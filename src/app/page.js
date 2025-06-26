"use client";

import { Button } from "@/components/ui/button";
import { Brain, CalendarDays, FilePen, Icon, Layers, Lightbulb, PenTool, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
      <div>
        <section>
          <div className=" flex flex-col items-center  justify-center h-[70vh] gap-6 sm:h-[80vh]">
            <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Where Content, Memories, and Life Converge</h1>
            <p className="text-[12px] sm:text-[14px] md:text-[17px] text-zinc-600">Transform how you create, manage, and relive your entire digital life.
            </p>
            
            <div className="flex gap-7">
              <Link href="sign-in"><Button variant='secondary' size='lg'>Try It out</Button></Link>
              <Button variant='destructive' size='lg'>Try It out</Button>
            </div>
          </div>
        </section>
        <section>
          <div className="flex mb-30 bg-gray-600/20 md:h-[50vh] w-full justify-center ">
            <div className="flex flex-col items-center justify-center cursor-pointer p-10">
              <span className="hover:scale-110 duration-150"> <PenTool size={50} /> </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl">Intuitive Editor</h2>
              <p className="text-[12px] text-center  sm:text-[14px] md:text-[16px] text-zinc-500">Create and edit content with user friendly interface</p>
            </div>
            <div className="flex flex-col items-center justify-center  cursor-pointer p-10">
              <span className="hover:scale-110 duration-150"> <Layers size={50}/> </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl">Seamless interface</h2>
              <p className="text-[12px] text-center sm:text-[14px] md:text-[16px] text-zinc-500">Create and edit content with user friendly interface</p>
            </div>
            <div className="flex flex-col items-center justify-center  cursor-pointer  p-10">
              <span className="hover:scale-110 duration-150">
                <Zap size={50}/>
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl">Lightning Fast</h2>
              <p className="text-[12px] text-center  sm:text-[14px] md:text-[16px] text-zinc-500">Create and edit content with user friendly interface</p>
            </div>
          </div>
        </section>
        <section>
          <div className=" flex flex-col items-center  h-[170vh] gap-4 sm:h-screen">
          <h1 className="text-xl font-bold sm:text-3xl  md:text-4xl lg:text-5xl">What You Can Store and Manage</h1>
            <div className="flex  flex-wrap gap-9 justify-center md:w-250 p-4 md:gap-30 mt-8 ">
                <div className="p-4 shadow-2xl shadow-slate-500/15 h-50 justify-center gap-2 w- flex flex-col items-center border-2 w-100 hover:scale-110 duration-150">
                  <h3 className="flex gap-2 font-bold "><span><FilePen/></span>Professional Content</h3>
                  <ul className="p-2 text-zinc-500 list-disc flex flex-col ">
                    <li>Blog posts and articles</li>
                    <li>Business documentation and workflows</li>
                    <li>Client projects and portfolios</li>
                    <li>Landing pages and marketing materials</li>
                  </ul>
                </div>
                <div className="p-4 h-50 justify-center gap-2 shadow-2xl shadow-slate-500/15 flex flex-col items-center border-2 w-100 hover:scale-110 duration-150">
                  <h3 className="flex gap-2 font-bold"><span><Brain /></span> Personal Memories</h3>
                  <ul className="p-2 text-zinc-500 list-disc flex flex-col ">
                    <li>Daily journal entries and reflections</li>
                    <li>Photo collections with smart tagging</li>
                    <li>Voice notes and audio memories</li>
                    <li>Special moments and milestones</li>
                  </ul>
                </div>
                <div className="p-4 h-50 justify-center gap-2 shadow-2xl shadow-slate-500/15 flex flex-col items-center border-2 w-100 hover:scale-110 duration-150">
                  <h3 className="flex gap-2 font-bold"><span><Lightbulb /></span>  Knowledge and Learning</h3>
                  <ul className="p-2 text-zinc-500 list-disc flex flex-col ">
                    <li>Programming solutions and algorithm </li>
                    <li>Study notes and research findings</li>
                    <li>Skill development progress</li>
                    <li>Creative ideas and inspirations</li>
                  </ul>
                </div>
                <div className="p-4 h-50 justify-center gap-2 shadow-2xl shadow-slate-500/15 flex flex-col items-center border-2 w-100 hover:scale-110 duration-150">
                  <h3 className="flex gap-2 font-bold"><span><CalendarDays /></span>Life Documentation</h3>
                  <ul className="p-2 text-zinc-500 list-disc flex flex-col ">
                    <li>Daily activities and routines</li>
                    <li>Travel experiences and adventures</li>
                    <li>Relationship moments and conversations</li>
                    <li>Goals, dreams, and achievements</li>
                  </ul>
                </div>
            </div>
          </div>
        </section>
        <secton  >
          <div className="flex bg-gray-600/20 flex-col sm:mt-20 items-center justify-center h-[60vh] gap-[19px] sm:h-[50vh] ">
            <h4 className="text-2xl md:text-3xl font-bold">Ready to Unlock Your Creative Genius?</h4>
            <p className="text-sm md:text-[16px] text-zinc-500">Be among successful creators worldwide on MindQuill</p>
            <div className="flex gap-3">
              <input typr='text' placeholder="Enter Your Email" className="bg-zinc-800/60 px-2 py-[10px] text-sm focus:outline-none rounded text-zinc-500"/>
              <Button variant='outline'>Submit</Button>
            </div>
          </div>
        </secton>
      </div>
  );
}
