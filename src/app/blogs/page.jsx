import Image from "next/image"
import Link from "next/link"

const blogItems = [
    {
        "id":"1",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/windowboy.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"2",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/garden.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"3",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/windowboy.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"1",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/windowboy.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"2",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/garden.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"3",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/windowboy.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"1",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/windowboy.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"2",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/garden.jpeg",
        "url":"/demo-slug"
    },
    {
        "id":"3",
        "title":"In the window of time",
        "excerpt":"The times which make you remember the past",
        "image":"/windowboy.jpeg",
        "url":"/demo-slug"
    },
]

export default function Blogs(){
    return(
        <div>
            <div className="grid gap-12 sm:grid-cols-2  lg:grid-cols-3 p-8">
                {blogItems.map((blog,index)=>(
                    <BlogCard key={index} 
                              title={blog.title}
                              image={blog.image}
                              excerpt={blog.excerpt}
                              url={blog.url}
                              />
                ))}
            </div>
        </div>
    )
}

const BlogCard= ({title,excerpt,image,url})=>{
    return(
        <div className="flex flex-col bg-gray-600/20  p-2 border gap-2 hover:scale-105 transition-all delay-100 duration-200">
            <div className="w-full h-72">
            <Image className="w-full" src={image} alt={title} width={300} height={150}/></div>
            <p className="text-xl font-bold">{title}</p>
            <p className="text-sm text-zinc-400 ">{excerpt}</p>
            <Link className="bg-zinc-500/30 rounded text-xs border w-fit px-2 py-1" href={`/blog/${url}`}>Read More</Link>
        </div>
    )
}