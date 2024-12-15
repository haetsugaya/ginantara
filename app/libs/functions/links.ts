import type { LinkDescriptor } from "react-router";

export const combineLinks = (
  ...linkArrays: LinkDescriptor[][]
): LinkDescriptor[] => {
  return linkArrays.flat();
};
