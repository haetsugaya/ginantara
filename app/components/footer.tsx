import { BtnPrimary } from "~/components/btnprimary";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <>
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
    </>
  );
};
