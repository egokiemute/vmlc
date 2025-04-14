import React from "react";
import CustomLink from "./ui/Link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="space-y-8 pt-20 bg-[#F8EAEA] w-full px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between w-full">
        <div className="flex flex-col items-start justify-start md:text-center gap-2">
          {/* <div className="text-[80px] md:text-8xl font-bold uppercase tracking-wide text-center font-baseneue w-full leading-none">
            Imagine More.
          </div> */}
          <Image className="bg-transparent" src="/logo.png" alt="imagine more" width={100} height={100}/>
          <span className="font-medium">Victory Mega Living Church (VMLC)</span>
        </div>
        <div className="flex flex-col gap-4 align-top items-start">
          <h4 className="text-[#0C0C0CB0] font-medium text-base font-helveticaNowDisplayRegular">
            Contact
          </h4>
          <div className="flex flex-col gap-5 items-start font-helveticaNowDisplayRegular">
            <div className="flex flex-col gap-2 items-start font-medium">
              <CustomLink
                href="tel:+2349063288657"
                animate={false}
                text="+23490-6328-8657"
              />
              <CustomLink
                href="mailto:hello@vmlc.org"
                animate={false}
                text="hello@vmlc.org"
                className="border-b-[0.2px] border-[#919191b0] text-[#0C0C0CB0]"
              />
            </div>
            <div className="max-w-sm text-start font-helveticaNowDisplayRegular">
              <p>Okumagba Avenue, </p>
              <p>Opposite Dudu Block, Estate,</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 align-top items-start">
          <h4 className="text-[#0C0C0CA3] text-base font-helveticaNowDisplayRegular">Links</h4>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 items-start font-helveticaNowDisplayRegular">
              <CustomLink
                href="linkedin.com"
                animate={true}
                text="LinkedIn"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="instagram.com"
                animate={true}
                text="Instagram"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="twiiter.com"
                animate={true}
                text="Twitter"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="facebook.com"
                animate={true}
                text="Facebook"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="behance.com"
                animate={true}
                text="Behance"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="dribbble.com"
                animate={true}
                text="Dribbble"
                className="border-b-[0.2px] border-[#919191b0]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 align-top items-start">
          <h4 className="text-[#0C0C0CA3] text-base font-helveticaNowDisplayRegular">Links</h4>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 items-start font-helveticaNowDisplayRegular">
              <CustomLink
                href="linkedin.com"
                animate={true}
                text="LinkedIn"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="instagram.com"
                animate={true}
                text="Instagram"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="twiiter.com"
                animate={true}
                text="Twitter"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="facebook.com"
                animate={true}
                text="Facebook"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="behance.com"
                animate={true}
                text="Behance"
                className="border-b-[0.2px] border-[#919191b0]"
              />
              <CustomLink
                href="dribbble.com"
                animate={true}
                text="Dribbble"
                className="border-b-[0.2px] border-[#919191b0]"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#000] text-black" />
      <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-between w-full py-4 pb-12 font-helveticaNowDisplayRegular tracking-wide">
        <div className="flex flex-col  md:flex-row items-center gap-5 text-[#0C0C0CB0]">
          <p>&copy; {year} Victory Mega Living Church, All right reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-[#0C0C0CB0]">
          <CustomLink href="/facebook.com" animate={true} text="Facebook" />
          <CustomLink href="/instagram.com" animate={true} text="Instagram" />
          <CustomLink href="/youtube.com" animate={true} text="YouTube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
