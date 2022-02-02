import Link from "next/link";

export default function PostCol({ posts, i }) {
  return (
    <ul key={i} style={{width:'352px', minWidth:'352px', maxWidth:'352'}} className="h-fit mt-5 flex flex-nowrap flex-col items-center">
      {posts.map((post, i) => (
        <li key={i} className="px-1 mb-1 overflow-hidden h-fit w-full  hover:text-slate-500 ease-out duration-200">
          <Link href={`/post/`}>
            <section >
              <div className="w-full h-full inset-0 bg-gray-200"></div>
              <img
                className="min-w-96 cursor-pointer rounded-md w-full "
                src={post}
              />
            </section>
          </Link>
          <Link href={`/$`}>
            <div className="cursor-pointer w-fit border-b border-white hover:border-slate-500 text-lg hover:text-slate-900">
              <img className="z-20"/>
              <p >
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
