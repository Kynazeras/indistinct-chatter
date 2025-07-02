"use client";
import { useRouter } from "next/navigation";

interface Props {
  tags: string[];
}

enum TagType {
  REVIEW = "review",
  SUMMER = "summer",
}

const tagStyleMapper = {
  [TagType.REVIEW]: "bg-sky-300",
  [TagType.SUMMER]: "bg-amber-300",
};

export const PostFooter = ({ tags }: Props) => {
  const router = useRouter();
  return (
    <div className="flex gap-x-4">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`${
            tagStyleMapper[tag as TagType]
          } p-1 rounded-sm text-white cursor-pointer`}
          onClick={() => router.push(`/tag/${tag}`)}
        >
          #{tag.toLowerCase()}
        </div>
      ))}
    </div>
  );
};
