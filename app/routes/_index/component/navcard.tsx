import { LazyMotion, domAnimation } from "framer-motion";
import { NavCard } from "~/components/navcard";
import { NavCardText } from "~/components/navcardtext";

const navCarLayout = (
  <section className="bg-white p-4 md:p-20 min-h-screen sm:min-h-[300px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-[1200px]">
      <LazyMotion features={domAnimation}>
        <NavCardText>
          <h2 className="text-[24px] sm:text-[32px]">Hi, Saya Arya Anjar</h2>
          <p className="text-[18px] sm:text-[24px]">
            Seorang Full-stack Developer dengan pengalaman 2+ tahun membangun
            produk menggunakan JavaScript dan PHP.
          </p>
          <p className="text-[18px] sm:text-[24px]">
            Selain itu Saya juga tertarik dengan Search Engine Optimization agar
            website membantu bisnis lebih berkembang.
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
);

export const NavCardSection = () => {
  return navCarLayout;
};
