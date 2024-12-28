import { type MetaFunction } from "react-router";

import { Banner } from "~/components/banner";
import * as seo from "~/libs/functions/seo";

import { NavCardSection } from "./component/navcard";

export const meta: MetaFunction = () => {
  return seo.defaultMetaData;
};

const Main = () => {
  return (
    <main>
      <Banner />
      <NavCardSection />
    </main>
  );
};

export default function Index() {
  return <Main />;
}
