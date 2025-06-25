import Image from "next/image";

export default function Blog(){
    return(
        <div>
            <div>
                <Image className="w-100 sm:w-150 md:w-180" src="/windowboy.jpeg" alt="title" width={500} height={300}></Image>
            </div>
            <h2>In the window of time</h2>
        </div>
    )
}