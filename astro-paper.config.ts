import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://ajthilakan.com",
    title: "Ajith Thilakan",
    description: "Reflections on Technology, Product Management & Strategy",
    author: "Ajith Thilakan",
    profile: "https://ajthilakan.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "x", url: "https://twitter.com/Gyfindor" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ajthilakan/" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "bluesky", url: "https://bsky.app/intent/compose?text=" },
    { name: "reddit", url: "https://www.reddit.com/submit?url=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
