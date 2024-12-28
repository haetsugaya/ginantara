import { motion as m } from "framer-motion";
import React, { ReactNode } from "react";

const navCardAnimation = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

interface NavCardProps {
  children: ReactNode;
}

export const NavCardText: React.FC<NavCardProps> = ({ children }) => {
  return (
    <m.div
      className="navCard navText"
      initial="offscreen"
      whileInView="onscreen"
      variants={navCardAnimation}
      viewport={{ once: true }}
    >
      {children}
    </m.div>
  );
};
