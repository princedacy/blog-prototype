"use client";

import { useQuery } from "react-query";
import { getBlogs } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

interface BlogAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
  description: { type: string; children: { type: string; text: string }[] }[];
  title: string;
}

interface Blog {
  id: number;
  attributes: BlogAttributes;
}

interface BlogsResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const Blogs = () => {
  const { data: blogsResponse, error } = useQuery<BlogsResponse, Error>(
    "blogs",
    getBlogs
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!blogsResponse) return <div>Loading...</div>;

  return (
    <section className="w-full lg:w-2/3 lg:mx-auto">
      <header className="py-12">
        <h1 className="text-4xl text-center">List of blogs</h1>
      </header>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogsResponse.data.map((blog) => (
            <Link
              className="col-span-1 flex flex-none cursor-pointer flex-col gap-4 p-4 transition-all hover:scale-105 hover:shadow-md"
              key={blog.id}
              href={`/blog/${blog.id}`}
            >
              <figure className="relative h-[208px] w-full">
                <Image
                  src={blog.attributes.imageUrl}
                  alt={blog.attributes.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <h3 className="text-lg font-bold">{blog.attributes.title}</h3>
              <span className="text-sm">
                {moment(blog.attributes.publishedAt).format("LL")}
              </span>
              <p className="text-sm leading-normal text-gray-700">
                {blog.attributes.description
                  .map((desc) =>
                    desc.children.map((child) => child.text).join(" ")
                  )
                  .join(" ")}
              </p>
              <span className="text-sm rounded-full border w-fit px-2 py-1">
                {blog.attributes.category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
