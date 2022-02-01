//Components
import PostsCol from "./PostsCol.js";
import { disarmPostsArray, getColsNumber } from "../services/postsServices.js";
import { useState, useEffect } from "react";

export default function PostSection() {
  const [width, setWidth] = useState(0);
  const [cols, setCols] = useState(2);
  const handleResize = (_) => {
    setWidth(window.innerWidth);
  };
  useEffect(
    (_) => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      setCols(getColsNumber(width));
      return () => window.removeEventListener("resize", handleResize);
    },
    [handleResize]
  );

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
      image:
        "https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",
      user: {
        username: "a",
      },
    },
    {
      image:
        "https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

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
        "https://cdn.statically.io/img/i.pinimg.com/originals/d5/4d/48/d54d483defb8072daa63792715db4c11.jpg",

      user: {
        username: "a",
      },
    },
  ];

  return (
    <section className="mt-16 flex justify-center">
      {[...Array(cols).keys()].map((n) => (
        <PostsCol posts={disarmPostsArray(posts, cols)[n]} />
      ))}
    </section>
  );
}
