import { type MetaFunction } from "react-router";

import { Nav } from "~/components/nav";
import * as seo from "~/libs/functions/seo";

export const meta: MetaFunction = () => {
  const seoTitle = "Tentang Arya Anjar Ginantara";
  const seoDescription =
    "Perkenalkan Saya Arya, seorang Fullstack Developer dari Bali, baca lebih lanjut untuk lihat prodil saya ya!";
  const seoURL = "https://ginantara.xyz/tentang-saya";
  const robots = { name: "robots", content: "index, follow" };
  return seo.generateSEOMetadata({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogUrl: seoURL,
    canonicalUrl: seoURL,
    customMeta: [robots],
  });
};

const BodyAbout = () => {
  return (
    <section className={"section-wrapper py-vertical px-horizontal"}>
      <div className={"flex flex-col-reverse md:flex-row gap-section"}>
        <div
          className={
            "flex flex-col gap-default md:max-w-[400px] lg:max-w-[600px] px-horizontal"
          }
        >
          <div className={"body-text"}>
            <h1 className="text-[24px] sm:text-[32px] heading-colorful">
              Tentang
            </h1>
            <p>
              Hidup itu serba masalah, jadi mencari solusi masalah dari berbagai
              perspektif menjadi hobi yang menyenangkan.
            </p>
            <p>
              Hi! Perkenalkan saya Arya Anjar Ginantara, seorang full stack
              developer dari Bali. Selain sibuk ngoding selama hampir 4 tahun,
              saya juga berkecimpung di dunia digital marketing, terutama di
              bagian SEO, bagian paling seru menurut saya, ya karena tidak jauh
              juga dari ranah website.
            </p>
            <p>
              Sebagai full stack developer, tugas yang saya kerjakan tentu
              banyak, mulai dari perancangan design, pembuatan database hingga
              akhirnya deploy ke server. Jadi bisa dibilang saya aslinya tiga
              orang :D.
            </p>
          </div>
          <div className={"body-text"}>
            <h2 className="text-[18px]">Apa Itu Full Stack Developer?</h2>
            <p>
              Full stack developer singkatnya adalah seorang yang mampu bekerja
              di seluruh tahap pengembangan aplikasi, mulai dari tampilan
              pengguna (front end) hingga basis data dan logika aplikasi (back
              end).
            </p>
            <p>
              Dalam konteks ini, seorang full stack developer memiliki keahlian
              di kedua sisi pengembangan, sehingga mereka dapat memahami
              sekaligus mengatasi masalah baik di sisi front end maupun back
              end. Selengkapnya baca disini ya:
              <a
                href={
                  "https://ginantara.xyz/blog/apa-itu-full-stack-developer-keahlian-keahlian-utama-yang-harus-dikuasai/"
                }
              >
                Pengertian Full Stack Developer
              </a>
            </p>
          </div>
          <div className={"body-text"}>
            <h2 className="text-[18px]">Keahlian</h2>
            <p>
              Dalam proses proses menjadi software engineer full stack, tentu
              saya memahami berbagai tenologi yang ada saat ini, terutama yang
              paling sering digunakan adalah:
            </p>
          </div>
          <div className={"body-text"}>
            <h3 className={"text-[16px]"}>Favorite Programming Language:</h3>
            <ul>
              <li>PHP</li>
              <li>Javascript & Typescript</li>
              <li>Python</li>
              <li>Golang</li>
            </ul>
          </div>
          <div className={"body-text"}>
            <h3 className={"text-[16px]"}>Favorite Framework:</h3>
            <ul>
              <li>Remix or React Router 7</li>
              <li>Laravel</li>
              <li>Nuxt</li>
            </ul>
          </div>
          <div className={"body-text"}>
            <h3 className={"text-[16px]"}>
              Teknologi favorite lainnya yang sering digunakan:
            </h3>
            <ul>
              <li>CMS (WordPress, Strapi, Ghost)</li>
              <li>Baas (Supabase, Firebase)</li>
              <li>Shopify</li>
            </ul>
          </div>
        </div>
        <div className={"flex mx-auto items-start"}>
          <img
            src={"/tentang/frame-photo.webp"}
            alt={"tumpukan foto Arya Anjar Ginantara"}
            className={"object-contain"}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default function Tentang() {
  return (
    <>
      <div className="banner flex flex-col border-b border-black">
        <Nav />
      </div>
      <BodyAbout />
    </>
  );
}
