import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ethdevnews",
  DESCRIPTION: "ethdevnews is curated Ethereum news focused on developers (core & application).",
  EMAIL: "ethdevnews@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "latest",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const ARCHIVE: Metadata = {
  TITLE: "archive",
  DESCRIPTION: "Archive of ethdevnews issues.",
};

export const CALENDAR: Metadata = {
  TITLE: "calendar",
  DESCRIPTION:
    "Calendar of Ethereum focused conferences, hackathons, upgrades and grant deadlines.",
};

export const ABOUT: Metadata = {
  TITLE: "about",
  DESCRIPTION:
    "About ethdevnews, disclosures and resources.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (Twitter)",
    HREF: "https://x.com/ethdevnews",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ethdevnews/ethdevnews-website",
  },
  {
    NAME: "Website",
    HREF: "https://ethdevnews.com",
  },
];
