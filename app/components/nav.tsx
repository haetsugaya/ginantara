import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from "react-router";

import { NavItem } from "~/libs/constant/types.server";

export const NavData: NavItem[] = [
  { url: "/", name: "Home" },
  { url: "/tentang-saya", name: "Tentang Saya" },
];

export const Nav = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] p-4 mx-auto">
      <div className="flex w-full sm:w-fit justify-between items-center pb-4 sm:pb-0">
        <Link to="/" className="font-bold text-xl">
          Ginantara.xyz
        </Link>
        <LazyMotion features={domAnimation}>
          <m.a
            href="https://triology.agency"
            className="btn-agency sm:hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            Triology Agency
          </m.a>
        </LazyMotion>
      </div>
      <ul className="flex w-fit justify-center items-center space-x-6">
        {NavData.map((item, index) => (
          <li className="text-[14px] md:text-[24px]" key={index}>
            <Link to={item.url} className="hover:text-gray-200">
              {item.name}
            </Link>
          </li>
        ))}
        <li className="text-[14px] md:text-[24px]">
          <a href="/blog" className="hover:text-gray-200">
            Blog
          </a>
        </li>
        <LazyMotion features={domAnimation}>
          <m.a
            href="https://triology.agency"
            className="btn-agency hidden sm:block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            Triology Agency
          </m.a>
        </LazyMotion>
      </ul>
    </nav>
  );
};
