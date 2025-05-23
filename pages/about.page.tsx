import Head from "next/head";
import { TestIds } from "@/lib/testIds";

// The About page of the I75 League recap site
// Sets up SEO <Head> tags and renders the page content under a styled <main>
export default function AboutPage() {
  return (
    <>
      {/* Next.js <Head> for setting document title and meta description */}
      <Head>
        <title>About – I75 League Recaps</title>
        <meta
          name="description"
          content="Learn the story behind the I75 League fantasy football recap site."
        />
      </Head>
      {/* Main content area for the About page, with styling and test identifier */}
      <main data-testid={TestIds.ABOUT_MAIN} className="pt-6 max-w-3xl mx-auto px-4">
        <div className="md:text-center">
          <h1
            className={[
              "text-4xl font-bold mb-4",
              "bg-gradient-to-r from-green-300 to-green-700",
              "bg-clip-text text-transparent",
              "inline-block leading-tight"
            ].join(" ")}
          >
            About I75 League
          </h1>

        </div>
        {/* Paragraphs describing the history and mission of the league */}
        <p className="text-lg mb-4">
          The I75 League began as a tight‑knit fantasy football group in Florida. Over the
          years, our members have moved up and down the East Coast—building families, careers, and
          rivalries along the way—which inspired the name “I75 League.”
        </p>
        <p className="text-lg mb-4">
          After our <strong>20th season</strong>, we've transformed weekly email threads into a
          polished web experience complete with scores, highlights, GIFs, and a dash of humor.
        </p>
        <p className="text-lg">
          Whether you’re a longtime member or a curious visitor, we hope you enjoy reliving each
          week’s matchups and laughs right here.
        </p>
      </main>
    </>
  );
}
