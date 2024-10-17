import type { LinkDescriptor } from "@remix-run/node";

export const combineLinks = (
  ...linkArrays: LinkDescriptor[][]
): LinkDescriptor[] => {
  return linkArrays.flat();
};
