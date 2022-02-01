import Link from "next/link";

export default function PostCol({ posts }) {
  return (
    <ul style={{width:'252px', minWidth:'252px', maxWidth:'252'}} className="h-fit mt-5 flex flex-nowrap flex-col items-center">
      {posts.map((post, i) => (
        <li style={{width:'252px', minWidth:'252px'}} key={i} className="px-1 mb-1 overflow-hidden h-fit">
          <Link href={`/post/${post.text}`}>
            <section >
              <div className="w-full h-full inset-0 bg-gray-200"></div>
              <img
                className="min-w-96 cursor-pointer rounded-md w-full"
                src={post.image}
              />
            </section>
          </Link>
          <Link href={`/${post.user.username}`}>
            <div className="cursor-pointer">
              <img />
              <p className="w-fit text-slate-500">
                {post.user.username}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
