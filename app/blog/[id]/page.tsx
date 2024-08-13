"use client";

import { useQuery } from "react-query";
import { getBlogById, getBlogs } from "@/lib/api";
import { useParams } from "next/navigation";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

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

const BlogDetail = () => {
  const params = useParams();
  const id = params.id;

  const {
    data: blog,
    error,
    isLoading,
  } = useQuery(["blog", id], () => getBlogById(Number(id)), {
    enabled: !!id,
  });

  const { data: featuredBlogs } = useQuery("featuredBlogs", () =>
    getBlogs({ featured: true, limit: 3 })
  );

  if (error) return <div>Error: {(error as Error).message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <section className="w-full lg:w-2/3 mx-auto flex flex-col gap-8">
      <header className="py-12">
        <h1 className="text-3xl">{blog.attributes.title}</h1>
      </header>
      <figure className="relative h-[300px] w-full">
        <Image
          src={blog.attributes.imageUrl}
          alt={blog.attributes.title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="flex flex-row justify-between items-center">
        <span className="text-sm">
          {moment(blog.attributes.publishedAt).format("LL")}
        </span>
        <span className="text-sm rounded-full border w-fit px-2 py-1">
          {blog.attributes.category}
        </span>
      </div>
      <p className="text-md leading-normal text-gray-700">
        {blog.attributes.description
          .map((desc) => desc.children.map((child) => child.text).join(" "))
          .join(" ")}
      </p>

      {/* Featured blogs section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredBlogs?.data.map((featuredBlog) => (
            <Link href={`/blog/${featuredBlog.id}`} key={featuredBlog.id}>
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={featuredBlog.attributes.imageUrl}
                    alt={featuredBlog.attributes.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {featuredBlog.attributes.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {featuredBlog.attributes.description[0].children[0].text.slice(
                      0,
                      100
                    )}
                    ...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
