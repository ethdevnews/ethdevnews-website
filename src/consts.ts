import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "ethdevnews",
  DESCRIPTION: "Ethereum news focused on developers (core & application).",
  EMAIL: "ethdevnews@gmail.com",
  NUM_CALENDAR_ITEMS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "latest",
  DESCRIPTION: "Latest Ethereum news focused on developers.",
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
    NAME: "X",
    HREF: "https://x.com/ethdevnews",
  },
  {
    NAME: "Farcaster",
    HREF: "https://warpcast.com/ethdevnews",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ethdevnews/ethdevnews-website",
  },
];
