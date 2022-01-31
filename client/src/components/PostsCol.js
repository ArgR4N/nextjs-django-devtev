import Link from "next/link";

export default function PostCol({ posts }) {
  return (
    <ul className="w-full h-fit py-3  flex flex-wrap flew-row ">
      {posts.map((post) => (
        <li className="overflow-hidden min-w-1/5 h-fit">
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
