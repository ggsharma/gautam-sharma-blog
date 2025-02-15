import { Authors, allAuthors } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({ title: "About" });

import MyTimeline from "@/components/Timeline";

export default function Page() {
  const author = allAuthors.find((p) => p.slug === "default") as Authors;
  const mainContent = coreContent(author);

  return (
    <>
      <AuthorLayout content={mainContent}>
        {/* Don't know what it does */}
        <MDXLayoutRenderer code={author.body.code} />
        <MyTimeline />
      </AuthorLayout>
    </>
  );
}
