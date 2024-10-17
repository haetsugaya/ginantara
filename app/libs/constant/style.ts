import tailwind from "~/tailwind.css?url";
import type { LinkDescriptor } from "@remix-run/node";

export const styleLinks: LinkDescriptor[] = [
  {
    rel: "stylesheet",
    href: tailwind,
  },
];
