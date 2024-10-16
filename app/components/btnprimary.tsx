import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

interface BtnPrimaryProps {
  title: string;
  linkTo: string;
  linkExt?: string;
}

export const BtnPrimary: React.FC<BtnPrimaryProps> = ({
  title,
  linkTo,
  linkExt = null,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  if (linkExt != null) {
    return (
      <m.a
        className="btn-primary"
        href={linkExt}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered ? "#DD8620" : "rgba(0, 0, 0, 0)",
          color: isHovered ? "#fff" : "#000",
        }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </m.a>
    );
  } else {
    return (
      <Link to={linkTo}>
        <m.div
          className="btn-primary"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            backgroundColor: isHovered ? "#DD8620" : "rgba(0, 0, 0, 0)",
            color: isHovered ? "#fff" : "#000",
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </m.div>
      </Link>
    );
  }
};
