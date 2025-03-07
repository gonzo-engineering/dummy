// Temporary as a proof of concept before moving out of the template

import type { PublicationDetails } from "@gonzo-engineering/libs";

export const PUBLICATION_DETAILS: PublicationDetails = {
  name: "The Daily News",
  parentOrganization: "The News Company",
  description: "A publication about everything",
  yearFounded: 2017,
  url: "https://example.com",
  supportLink: "https://example.com/support",
  logoUrl: "/logo.png",
  emblemUrl:
    "https://i.pinimg.com/originals/a2/d3/af/a2d3afcd0496f2dff604b6aaa01ed255.jpg",
  faviconUrl:
    "https://i.pinimg.com/originals/a2/d3/af/a2d3afcd0496f2dff604b6aaa01ed255.jpg",
  sections: [
    { label: "Old Town", slug: "old-town" },
    { label: "New Town", slug: "new-town" },
    { label: "Business District", slug: "business-district" },
  ],
  navigation: {
    header: [
      {
        label: "Old Town",
        url: "/old-town",
        subNav: [
          { label: "Council", url: "/tags/council" },
          { label: "Planning", url: "/tags/planning" },
        ],
      },
      { label: "New Town", url: "/new-town" },
      {
        label: "Business District",
        url: "/business-district",
        subNav: [{ label: "Culture", url: "/tags/culture" }],
      },
    ],
    footer: [],
  },
};
