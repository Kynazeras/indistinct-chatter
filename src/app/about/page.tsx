import { getAboutPage } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { PostBody } from "../_components/post-body";

export default async function Index() {
  const aboutPage = getAboutPage();

  if (!aboutPage) {
    return notFound();
  }

  const content = await markdownToHtml(aboutPage.content || "");
  return (
    <main>
      <h1 className="text-4xl">About Indistinct Chatter</h1>
      <PostBody content={content} />
    </main>
  );
}
