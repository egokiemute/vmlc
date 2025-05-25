import React from "react";
import CustomLink from "./ui/Link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="space-y-8 pt-20 bg-primary w-full px-4 md:px-10">
      <div className="text-white flex flex-col md:flex-row gap-10 items-start md:items-center justify-between w-full">
        <div className="flex flex-col items-start justify-start md:items-center md:justify-center md:text-center gap-2">
          {/* <div className="text-[80px] md:text-8xl font-bold uppercase tracking-wide text-center font-baseneue w-full leading-none">
            Imagine More.
          </div> */}
          <Image className="bg-transparent" src="/logo.png" alt="imagine more" width={100} height={100}/>
          <span className="font-medium text-white">Omega Living Bridge Tabernacle</span>
        </div>
        <div className="flex flex-col gap-4 align-top items-start">
          <h4 className="text-[#ddd] font-medium text-base font-helveticaNowDisplayRegular">
            Contact
          </h4>
          <div className="flex flex-col gap-5 items-start font-helveticaNowDisplayRegular">
            <div className="flex flex-col gap-2 items-start font-medium">
              <CustomLink
                href="tel:+2347045348482"
                animate={false}
                text="+2347045348482"
                className="text-white"
              />
              <CustomLink
                href="mailto:hello@omegalivingbride.com"
                animate={false}
                text="hello@omegalivingbride.com"
                className="border-b-[0.2px] border-[#919191b0] text-[#fff]"
              />
            </div>
            <div className="max-w-sm text-white text-start font-helveticaNowDisplayRegular">
              <p>11 Ejoyokah Street, Jakpa Rd, Tori, </p>
              <p>Effurun 330102, Delta</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 align-top items-start">
          <h4 className="text-[#ddd] text-base font-helveticaNowDisplayRegular">Socials</h4>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 items-start font-helveticaNowDisplayRegular">
              <CustomLink
                href="https://www.youtube.com/@OmegaLivingBrideTabernacle"
                animate={true}
                text="YouTube"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="https://www.facebook.com/profile.php?id=100064929420548"
                animate={true}
                text="Facebook"
                className="border-b-[0.2px] border-[#919191b0]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 align-top items-start">
          <h4 className="text-[#ddd] text-base font-helveticaNowDisplayRegular">Links</h4>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 items-start font-helveticaNowDisplayRegular">
              <CustomLink
                href="/about"
                animate={true}
                text="About us"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="/sermons"
                animate={true}
                text="Sermons"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="/give"
                animate={true}
                text="Give"
                className="border-b-[0.2px] border-[#919191b0]"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#000] text-black" />
      <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-between w-full py-4 pb-12 font-helveticaNowDisplayRegular tracking-wide">
        <div className="flex flex-col  md:flex-row items-center gap-5 text-[#fff]">
          <p>&copy; {year} Omega Living Bridge Tabernacle, All right reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-[#fff]">
          <CustomLink href="https://kodenigga.vercel.app" animate={true} text="Developed by egokiemute" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
