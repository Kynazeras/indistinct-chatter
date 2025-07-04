import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MorePosts({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        More Posts
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
    </section>
  );
}
