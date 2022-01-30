import Link from "next/link"


export default function PostSection(){

    const posts = [{
        image:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
        user:{
            username:"a"

        }
    },
    {
        image:"https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",        user:{
            username:"a"

        }
    },
    {
        image:"https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg", 
        user:{
            username:"a"

        }
    }]
    
    return(
        <ul className="w-screen h-navScreen grid grid-flow-col gap-2 p-4">
            {posts.map(post => (
                <div className="overflow-hidden min-w-fit"> 
                    <Link href={`/post/${post.text}`}>
                        <section className="">
                            <div className="w-full h-full inset-0 bg-gray-200"></div>
                            <img className="min-w-96 cursor-pointer rounded-xl w-full" src={post.image} />
                        </section>
                    </Link>
                    <Link href={`/${post.user.username}`} >
                        <div className="cursor-pointer">
                            <img />
                           <p className="hover:border-b hover:font-extrabond w-fit text-slate-500">{post.user.username}</p>
                        </div>
                    </Link>
                </div>

            ))}
        </ul>
    )
}
