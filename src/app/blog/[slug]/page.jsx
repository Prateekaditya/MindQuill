import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Blog(){
    const temptags= "Alone,me,lonely,thoughts"
    return(
        <div>
            <div className="flex items-center flex-col gap-4 ">
                <Image className="w-[90%]  border border-gray-400 md:w-[700px] rounded" src="/windowboy.jpeg" alt="title" width={500} height={250}></Image>
                <h2 className="text-4xl font-bold">In the line window</h2>
              <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <Calendar className="text-gray-400 size-4"/>
                <p className="text-gray-400 text-xs">Created On:{dateFormat(new Date())}</p>
                </div>
                <div className="text-xs flex items-center gap-2">
                    <p>Category:</p>
                    <p className="border border-gray-700 w-fit px-2 py-1 rounded bg-gray-600/30">Thinking</p>
                </div>
                <div className="text-xs flex items-center gap-2">
                    <p>Tags:</p>
                    {temptags.split(",").map((tag,index)=> 
                    <p key={index} className="border border-gray-700 w-fit px-2 py-1 rounded bg-gray-600/30">
                        {tag}
                    </p>
                    )}
                    
                </div>
              </div>
              <p className="text-sm w-[90%] md:w-2/3 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellendus facere sit vero suscipit beatae repudiandae quas placeat? Voluptatibus reiciendis laudantium ullam odit fugit officiis magnam ipsam quae, molestias iure? Repudiandae aut nam sed ratione atque distinctio inventore consequatur voluptatum id voluptatem facilis a quae, impedit natus iure, corrupti nesciunt iste labore excepturi ipsa esse? Asperiores mollitia, aliquid labore 
                <br/>
                ipsa cum expedita soluta consequatur eveniet vitae dignissimos aspernatur quo, facilis reprehenderit. Quaerat unde aliquid eius laboriosam deserunt error recusandae quod. Nam sit, reprehenderit adipisci quae quam architecto quas sapiente dolorem corrupti alias consequuntur, consequatur quod molestias accusantium in dolores animi, nemo dolorum similique nobis ad? Ab cumque laborum, voluptas ipsum at a expedita voluptatibus necessitatibus error, provident velit autem corrupti quos tempora itaque minima hic, tenetur maiores enim illum blanditiis fugit quo! Magni quos aliquam quisquam, nesciunt
                <br/> aperiam tempore? Necessitatibus laboriosam tempora obcaecati cum mollitia labore iure neque omnis repellendus aut nisi cupiditate harum, velit impedit molestias reiciendis optio reprehenderit qui animi blanditiis expedita quae, tenetur possimus repudiandae. Enim laboriosam optio quidem autem, ducimus veniam laborum eaque a harum dolorem fuga, fugiat ut quo voluptates cum quaerat et alias, eligendi necessitatibus ab doloribus tenetur. Tenetur dolor quod repellendus expedita excepturi!</p>
            </div>
          
        </div>
    )
}