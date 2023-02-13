<script>
  export let data;
</script>

<svelte:head>
  <title>About me</title>
  <meta name="author" content="Marouane Faris" />
  <meta
    name="description"
    content="Hello There, my name is Marouane and I am a React JS expert with 5 years of experience in frontend web developement"
  />
  <meta
    property="og:url"
    content="https://www.marouanefaris.dev/about_me"
  />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="About me" />
  <meta property="og:description" content="About me" />
  <meta property="og:image" content="/photo_linkedin.jpeg" />
</svelte:head>
<main>
  <article>
      {@html  data.htmlContent}
  </article>
</main>
