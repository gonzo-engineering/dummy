export default {
  site: {
    name: "Example News",
    url: "https://example.news",
    description: "Independent local journalism",
    language: "en",
  },

  brand: {
    logo: "/logo.svg",
    primaryColor: "#111827",
    accentColor: "#2563eb",
  },

  content: {
    provider: "filesystem",
    articles: {
      path: "content/articles",
    },
    pages: {
      path: "content/pages",
    },
  },

  cms: {
    enabled: true,
    provider: "decap",
    path: "/admin",
  },

  build: {
    output: "dist",
    basePath: "/",
    clean: true,
  },
};
