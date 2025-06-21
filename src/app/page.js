"use client";

import { Button } from "@/components/ui/button";
import { Brain, CalendarDays, FilePen, Lightbulb } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
      <div>
        <section>
          <div className="mb-29 flex flex-col items-center  justify-center h-[90vh] gap-6 sm:h-[80vh]">
            <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Where Content, Memories, and Life Converge</h1>
            <p className="text-[12px] sm:text-[14px] md:text-[17px] text-zinc-600">Transform how you create, manage, and relive your entire digital life.
            </p>
            <div className="flex gap-7">
              <Button variant='secondary' size='lg'>Try It out</Button>
              <Button variant='destructive' size='lg'>Try It out</Button>
            </div>
          </div>
        </section>
        <section>MIDDLE</section>
        <section>
          <div className=" flex flex-col items-center  h-[90vh] gap-4 sm:h-screen">
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
        <secton>
          ENDINg
        </secton>
      </div>
  );
}
