export default {
  githubUrl: "https://github.com/LesleyLai/cpptutorial",
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://cpptutorial.org",
    gaTrackingId: null,
  },
  header: {
    title: "C++ Tutorial",
  },
  sidebar: {
    links: [{ text: "cppreference", link: "https://en.cppreference.com/w/" }],
    ignoreIndex: false,
  },
  siteMetadata: {
    title: "C++ Tutorial",
    description: "C++ Tutorial",
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "C++ Tutorial",
      short_name: "cpptutorial",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};
