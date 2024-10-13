import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

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
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string;
  linkExt?: string;
}

export const NavCard: React.FC<NavCardProps> = ({
  title,
  description,
  imageUrl,
  linkTo,
  linkExt = null,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (linkExt != null) {
    return (
      <m.a
        href={linkExt}
        className="navCard navTWImage"
        initial="offscreen"
        whileInView="onscreen"
        variants={navCardAnimation}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#DD8620" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <m.h2
          className="text-[24px] sm:text-[32px]"
          animate={{
            color: isHovered ? "#fff" : "#000",
          }}
        >
          {title}
        </m.h2>
        <m.p
          className="text-[16px] sm:text-[18px]"
          animate={{
            color: isHovered ? "#fff" : "#000",
          }}
        >
          {description}
        </m.p>
        <m.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          src={imageUrl}
          alt={title}
        />
      </m.a>
    );
  }

  return (
    <Link to={linkTo}>
      <m.div
        className="navCard navTWImage"
        initial="offscreen"
        whileInView="onscreen"
        variants={navCardAnimation}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#DD8620" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <m.h2
          className="text-[24px] sm:text-[32px]"
          animate={{
            color: isHovered ? "#fff" : "#000",
          }}
        >
          {title}
        </m.h2>
        <m.p
          className="text-[16px] sm:text-[18px]"
          animate={{
            color: isHovered ? "#fff" : "#000",
          }}
        >
          {description}
        </m.p>
        <m.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          src={imageUrl}
          alt={title}
        />
      </m.div>
    </Link>
  );
};
