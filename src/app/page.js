import Link from "next/link";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">All Blogs Post</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data.map((post) => (
          <Link href={`/blog/${post?.id}`} key={post?.id} className="border p-2 rounded-lg bg-white hover:shadow-lg hover:border-blue-400 transition duration-200">
            <p>{post?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
