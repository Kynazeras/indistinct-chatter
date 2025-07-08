import Link from "next/link";

export const Nav = () => {
  return (
    <div className="flex gap-x-16 w-full border-y-2 border-sky-300 py-2 mb-2">
      <div>
        <Link href={`/`}>Home</Link>
      </div>
      <div>
        <Link href={`/about`}>About</Link>
      </div>
      <div>
        <Link href={`/tag/review`}>Reviews</Link>
      </div>
    </div>
  );
};
