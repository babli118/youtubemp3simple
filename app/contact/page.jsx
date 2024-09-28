import React from "react";
import ReturnBtn from "../../containers/returnBtn";
import Footer from "../../components/Footer";
import TaskBar from "../../components/taskBar";

export const metadata = {
  title: "Contact - YOUTUBEMP3 Youtube Converter and Downloader",
  metadataBase: new URL("https://youtubemp3.io"),
  alternates: {
    canonical: "/contact",
  },
};

const Page = () => {
  return (
    <div>
      <div className=" flex flex-col ">
        <div className="mt-20 md:mt-[7.5rem]  md:w-[70vw] xl:w-[45vw] w-[90vw] mx-auto text-text ">
          <h1 className="text-4xl sm:text-5xl text-center font-bold  text-text my-10">
            Contact - YOUTUBEMP3
          </h1>
          <div className="flex gap-x-2 items-center justify-center">
            <p className="text-text text-base  ">
              Want to get in touch with us for any query, Please connect with us
              by using this link:
            </p>
            <a className="text-accent1" href="https://m.me/61565890374780">
              m.me/YOUTUBEMP3
            </a>
          </div>
          <div className="text-white">
            <ReturnBtn text={"Return to homepage"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
