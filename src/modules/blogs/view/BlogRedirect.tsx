import { Button } from "@/modules/core/ui/button";
import { BlogContainer } from "../components/BlogContainer";
import Link from "next/link";

export const BlogRedirect = () => {
  return (
    <BlogContainer>
      <h1 className="text-white text-center text-2xl mb-6">Blogs</h1>
      <img src="/astronaut_blog.svg" width={200} alt="" />
      <p className="text-white mt-5">
        You can see some of my personal blogs in this section
      </p>
      <Button asChild className="mt-5" variant={"outline"} >
        <Link href={"/blogs"}>SEE MY BLOGS</Link>
      </Button>
    </BlogContainer>
  );
};
