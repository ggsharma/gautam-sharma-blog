// @ts-nocheck
"use client";
import { genPageMetadata } from "app/seo";
// import { PageHeading } from "@/components/PageHeading";
import Link from "next/link";

import { annotate } from "rough-notation";
import { useEffect } from "react";

// export const metadata = genPageMetadata({
//   title: "Gautam Sharma Blog",
//   description: "Hi! I am Gautam and welcome to my blog.",
// });

export default async function Page() {
  useEffect(() => {
    const e = document.querySelector("#newsletter");
    const annotation = annotate(e, { type: "underline", color: "yellow" });
    annotation.show();
  }, []);
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <span id="newsletter">{"Join my Newsletter 👇🏻"}</span>
        </h1>
        <h2 className="space-y-2  pt-6 md:space-y-5">
          Stay updated on my coding journey 🔥!
        </h2>
        <p className="space-y-2 pb-8 pt-6 md:space-y-5">
          These days I am mostly active on my{" "}
          <Link
            className="text-orange-400 text-pretty underline"
            href={"https://gsharma.beehiiv.com/subscribe"}
          >
            newsletter
          </Link>
          . The contents on my website is not current since I am just
          maintaining the newsletter at the moment. If you are interested in
          learning about my journey from a mechanical engineer to a software
          engineer, please do{" "}
          <Link
            className="text-orange-400 text-pretty underline"
            href={"https://gsharma.beehiiv.com/subscribe"}
          >
            {"subscribe"}
          </Link>
          . I also talk about business, startups, software as a service and my
          daily grind in learning new skills.
        </p>

        <iframe
          src="https://embeds.beehiiv.com/f428ff77-08d1-43d4-be41-27f54306476b"
          data-test-id="beehiiv-embed"
          width={"100%"}
          height={320}
          frameBorder="0"
          scrolling="no"
          style={{
            borderRadius: 4,
            border: "2px solid #e5e7eb",
            margin: 0,
            color: "red",
            backgroundColor: "transparent",
          }}
          title="Newsletter Subscription"
        />
      </div>
    </div>
  );

  // <PageHeading>Welcome to my Blog!</PageHeading>;
}
