import { Head } from "@unhead/react";

const SEO = ({ title, description }) => {
  return (
    <Head>
      {/* Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicons */}
      <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicons/16-16.svg" />
      <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicons/32-32.svg" />
      <link rel="icon" type="image/svg+xml" sizes="64x64" href="/favicons/64-64.svg" />
      <link rel="icon" type="image/svg+xml" sizes="256x256" href="/favicons/256-256.svg" />
      <link rel="icon" type="image/svg+xml" sizes="512x512" href="/favicons/512-512.svg" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;
