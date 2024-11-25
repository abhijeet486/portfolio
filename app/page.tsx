import Portfolio from './components/Portfolio'; // Import your Portfolio component
import Head from "next/head"; // For managing SEO and meta tags

export default function Home() {
  return (
    <div>
      {/* Head section for SEO */}
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio website" />
      </Head>
      <Portfolio /> {/* Render the Portfolio component */}
    </div>
  );
}