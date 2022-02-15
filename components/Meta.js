import Head from "next/head"

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keyword" content={keywords} />
      <meta name="description" content={description} />
      <link rel="icon" href="favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="favicon/logo192.png" />
      <link rel="manifest" href="favicon/manifest.json" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Movie App",
  keywords: "movie, movie app, movie search, movie search app, movie search engine, movie search engine app, movie search engine app",
  description: "Search for movies and find out more about them"
}



export default Meta