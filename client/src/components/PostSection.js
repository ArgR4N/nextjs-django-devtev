//Components
import PostsCol from "./PostsCol.js"
import { disarmPostsArray } from "../services/disarmPostsArray.js"

export default function PostSection() {
  const posts = [
    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://media.vogue.mx/photos/61ddf896e3221d620be7c3be/2:3/w_2560%2Cc_limit/zendaya-euphoria.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
        user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
      
        user: {
        username: "a",
      },
    },    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
        user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
      
        user: {
        username: "a",
      },
    },    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
        user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
      
        user: {
        username: "a",
      },
    },    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
        user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
      
        user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
        user: {
        username: "a",
      },
    },
    {
      image:"https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

      user: {
        username: "a",
      },
    },
    {
      image:
        "https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true",
      user: {
        username: "a",
      },
    },
    {
      image:"https://media.vogue.mx/photos/61ddf896e3221d620be7c3be/2:3/w_2560%2Cc_limit/zendaya-euphoria.jpg",
      
        user: {
        username: "a",
      },
    },
  ];

  return (
      <section className="mt-16 grid grid-cols-5 gap-4  px-20 grid-rows-1 ">
        
        {
            [...Array(5).keys()].map( n => <PostsCol posts={disarmPostsArray(posts, 5)[n]}/>)
        }

      </ section>
  );
}
