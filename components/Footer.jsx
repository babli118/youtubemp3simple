import React from "react";
import FootLink from "../containers/footLink.jsx";
import Link from "next/link.js";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="items-centre   shadow-md mx-auto flex justify-center ">
      <div className=" md:w-[70vw] xl:w-[50vw] w-[90vw]">
        <hr className="text-text/20" />
        <div className="flex mx-auto mt-6 justify-center">
          <Link href="https://x.com/YoutubeMp3Io">
            <span>
              <FaSquareXTwitter
                style={{
                  width: "25px", // Default for mobile or before 'sm'
                  height: "25px", // Default for mobile or before 'sm'
                }}
                className="sm:w-[35px] sm:h-[35px] text-black"
              />
            </span>
          </Link>{" "}
          <Link href="https://m.me/61565890374780">
            <span>
              <FaFacebookSquare
                style={{
                  width: "25px", // Default for mobile or before 'sm'
                  height: "25px", // Default for mobile or before 'sm'
                }}
                className="sm:w-[35px] sm:h-[35px] text-black"
              />
            </span>
          </Link>
        </div>
        <div className=" flex justify-center items-center gap-x-6 gap-y-2  flex-wrap mt-2  sm:gap-4 text-[0.95rem]    text-text ">
          <FootLink name={"About"} href={"/about"} />
          <FootLink name={"Privacy Policy"} href={"/privacy-policy"} />
          <FootLink name={"Copyright"} href={"/copyright"} />
          <FootLink name={"Terms of Service"} href={"/tos"} />
          <FootLink name={"Contact"} href={"/contact"} />
        </div>
        <div className="text-text text-center p-4 sm:text-base text-sm ">
          <p>
            This website is not affiliated with or endorsed by Youtube. Our use
            of the name &quot;Youtube&quot; is for context, not claiming any
            ownership. It remains the property of the copyright holder.
          </p>

          <p className="text-primary1 mt-2">
            © {new Date().getFullYear()} - youtubemp3.io
            <span className="text-sm font-normal text-textLight"> (v1.2)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
