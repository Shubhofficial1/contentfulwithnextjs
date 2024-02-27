import { client } from "@/config/contentful";
import Image from "next/image";
import Link from "next/link";

async function fetchBlogsData() {
  const response = await client.getEntries();
  const blogs = response.items;
  return blogs;
}

export default async function Home() {
  const blogs = await fetchBlogsData();

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {blogs?.map((blog: any) => (
          <Link key={blog.sys.id} href={`/blogs/${blog?.fields?.slug}`}>
            <div className="h-fit shadow flex flex-col justify-between bg-slate-100 rounded-md">
              <div className=" h-[200px] object-contain overflow-hidden rounded-md">
                <Image
                  src={`https://${blog?.fields?.thumbnail.fields?.file?.url}`}
                  width={
                    blog?.fields?.thumbnail?.fields?.file?.details?.image?.width
                  }
                  height={
                    blog?.fields?.thumbnail?.fields?.file?.details?.image?.width
                  }
                  alt={`${blog?.fields.title}`}
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {blog?.fields?.title}
                </h2>
                <p className=" font-semibold text-sm text-gray-400  capitalize line-clamp-1">
                  {blog?.fields?.description}
                </p>
              </div>
              <div className="flex flex-row p-5">
                {blog?.fields?.topics?.map((topic: string) => (
                  <h1
                    key={topic}
                    className="mr-2 text-[12px] font-medium capitalize py-1 px-2 bg-cyan-500 rounded-md text-white "
                  >
                    {topic}
                  </h1>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
