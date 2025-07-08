import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MorePosts } from "@/app/_components/more-posts";
import { getAllPosts, getPostsByTag } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </>
    </main>
  );
}
