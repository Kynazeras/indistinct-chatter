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
  console.log(tags[1] === TagType.SUMMER);
  return (
    <div className="flex gap-x-4">
      {tags.map((tag) => (
        <div
          key={tag}
          className={`${
            tagStyleMapper[tag as TagType]
          } p-1 rounded-sm text-white`}
        >
          #{tag.toLowerCase()}
        </div>
      ))}
    </div>
  );
};
