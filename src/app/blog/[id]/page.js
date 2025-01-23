import React from "react";

const BlogDetailsPage = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return (
    <div className="h-screen flex items-center md:px-10 px-5">
      <div className="border h-[80vh] p-5 w-full rounded-3xl bg-white shadow-lg  m-auto flex flex-col items-center justify-center">
        <h1 className="md:text-3xl text-xl text-center font-semibold">
          {data?.title}
        </h1>
        <p className="text-center md:mt-10 mt-5">{data?.body}</p>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
