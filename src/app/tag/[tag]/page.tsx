import * as _ from "radashi";
import Container from "@/app/_components/container";
import { PostPreview } from "@/app/_components/post-preview";
import { getPostsByTag } from "@/lib/api";
import Header from "@/app/_components/header";

export default async function Post(props: Params) {
  const params = await props.params;
  const posts = getPostsByTag(params.tag);

  if (posts.length === 0) return <h1>Tag not found</h1>;

  return (
    <>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        {_.capitalize(params.tag)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-20 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </>
  );
}

type Params = {
  params: Promise<{
    tag: string;
  }>;
};
