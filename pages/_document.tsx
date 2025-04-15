import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  charset: "utf-8",
  title: "Dinesh Suthar - Portfolio",
  description:
    "A website about Dinesh Suthar, full stack developer, open source enthusiast, and tech creator.",
  keywords:
    "Dinesh Suthar, Full Stack Developer, Open Source, Tech Creator, Surat, Gujarat, India",
  author: "Dinesh Suthar",
  openGraph: {
    url: "https://raw.githubusercontent.com/Nick-h4ck3r/portfolio-nextjs-latest/master/public/screenshots/portfolio/heroDemo.png",
    title: "Dinesh Suthar - Portfolio",
    description:
      "A website about Dinesh Suthar, full stack developer, open source enthusiast, and tech creator.",
    siteName: "Dinesh Suthar",
    images: [
      {
        url: "https://raw.githubusercontent.com/Nick-h4ck3r/portfolio-nextjs-latest/master/public/screenshots/portfolio/heroDemo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh Suthar - Portfolio",
    description:
      "A website about Dinesh Suthar, full stack developer, open source enthusiast, and tech creator.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Nick-h4ck3r/portfolio-nextjs-latest/master/public/screenshots/portfolio/heroDemo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Document() {
  return (
    <Html
      lang="en"
      className={""}
    >
      <Head>
        <meta charSet={metadata.charset} />
        <meta
          name="title"
          content={metadata.title}
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          name="keywords"
          content={metadata.keywords}
        />
        <meta
          name="author"
          content={metadata.author}
        />
        <meta
          property="og:url"
          content={metadata.openGraph.url}
        />
        <meta
          property="og:title"
          content={metadata.openGraph.title}
        />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          property="og:type"
          content={metadata.openGraph.type}
        />
        <meta
          property="og:locale"
          content={metadata.openGraph.locale}
        />
        <meta
          name="twitter:card"
          content={metadata.twitter.card}
        />
        <meta
          name="twitter:title"
          content={metadata.twitter.title}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta
          name="twitter:image"
          content={metadata.twitter.images[0].url}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
