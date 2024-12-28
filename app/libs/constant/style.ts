import type { LinkDescriptor } from "react-router";

import tailwind from "~/tailwind.css?url";

export const styleLinks: LinkDescriptor[] = [
  {
    rel: "stylesheet",
    href: tailwind,
  },
];
