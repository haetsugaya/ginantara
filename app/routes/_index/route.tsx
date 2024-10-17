import { type MetaFunction } from "@remix-run/node";
import { Banner } from "~/components/banner";
import * as seo from "~/libs/functions/seo";
import { NavCardSection } from "./component/navcard";
import { Footer } from "~/components/footer";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return seo.defaultMetaData;
};

const Main = () => {
  return (
    <main>
      <Banner />
      <NavCardSection />
      <Outlet />
      <Footer />
    </main>
  );
};

export default function Index() {
  return <Main />;
}
