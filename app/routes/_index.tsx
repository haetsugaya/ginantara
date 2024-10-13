import { json, type MetaFunction } from "@remix-run/node";
import { Banner } from "~/components/banner";
import * as seo from "~/utils/seo";
import { LazyMotion, domAnimation } from "framer-motion";
import { NavCard } from "~/components/navcard";
import { BtnPrimary } from "~/components/btnprimary";
import { NavCardText } from "~/components/navcardtext";
import { Link } from "@remix-run/react";

export async function loader() {
  const seoData: seo.SEOMetadata = {
    title: "Arya Anjar Ginantara",
    description: "Seorang Full-stack Developer and A SEO Enthusiast dari Bali!",
    keywords: "full-stack developer, SEO, Bali, web development",
    ogTitle: "Arya Anjar Ginantara - Full-stack Developer & SEO Enthusiast",
    ogDescription:
      "Berkenalan dengan karya Arya Anjar Ginantara, seorang pengembang full-stack yang penuh semangat dan penggemar SEO dari Bali, Indonesia.",
    ogImage: "",
    ogUrl: "https://ginantara.xyz",
    canonicalUrl: "https://ginantara.xyz",
  };

  return json({ seoData });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.seoData) {
    return seo.defaultMetaData;
  } else {
    return seo.generateSEOMetadata(data.seoData);
  }
};

const Main = () => {
  return (
    <main>
      <Banner />
      <section className="bg-white p-4 md:p-20 min-h-screen sm:min-h-[300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-[1200px]">
          <LazyMotion features={domAnimation}>
            <NavCardText>
              <h2 className="text-[24px] sm:text-[32px]">
                Hi, Saya Arya Anjar
              </h2>
              <p className="text-[18px] sm:text-[24px]">
                Seorang Full-stack Developer dengan pengalaman 2+ tahun
                membangun produk menggunakan JavaScript dan PHP.
              </p>
              <p className="text-[18px] sm:text-[24px]">
                Selain itu Saya juga tertarik dengan Search Engine Optimization
                agar website membantu bisnis lebih berkembang.
              </p>
            </NavCardText>

            <NavCard
              title="Mau membuat website?"
              description="Ketahui bagaimana website bisa mengubah bisnis Anda! Dari meningkatkan visibilitas hingga menarik lebih banyak pelanggan."
              imageUrl="/home/website.png"
              linkTo="jasa-membuat-website"
            />

            <NavCard
              title="Butuh jasa SEO juga?"
              description="Selain sebagai developer, Saya juga terjun di dunia Digital Marketing, terutama dalam bidang SEO."
              imageUrl="/home/seo.png"
              linkTo="jasa-search-engine-optimization"
            />

            <NavCard
              title="Kunjungi Blog Saya"
              description="Saya suka menulis mengenai isu terbaru dunia teknologi serta SEO, berbagi pengetahuan itu indah."
              imageUrl="/home/website.png"
              linkTo=""
              linkExt="/blog"
            />
          </LazyMotion>
        </div>
      </section>
      <section className="text-center border-t border-b border-black px-4 py-20 bg-[#DD8620]">
        <h2 className="text-[28px] sm:text-[56px] font-bold">
          Ready to realises your ideas?
        </h2>
        <p className="text-[14px] sm:text-[16px]">
          LET’S HAVE A COFFEE TOGETHER
        </p>
      </section>
      <footer className="bg-white py-6 px-4">
        <section className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto gap-6">
          <div className="flex gap-3 justify-center">
            <BtnPrimary title="Resume" linkTo="#" />
            <BtnPrimary title="LinkedIn" linkTo="#" />
            <BtnPrimary title="Instagram" linkTo="#" />
          </div>
          <Link to="/" className="font-bold text-xl">
            Ginantara.xyz
          </Link>
        </section>
      </footer>
    </main>
  );
};

export default function Index() {
  return <Main />;
}
