import tailwind from "~/tailwind.css?url";
import type { LinkDescriptor } from "react-router";

export const styleLinks: LinkDescriptor[] = [
  {
    rel: "stylesheet",
    href: tailwind,
  },
];
