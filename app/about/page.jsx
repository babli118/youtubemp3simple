import React from "react";

import ReturnBtn from "../../containers/returnBtn.jsx";

export const metadata = {
  title: " About - YOUTUBEMP3 Youtube Converter and Downloader",
  metadataBase: new URL("https://youtubemp3.io/"),
  alternates: {
    canonical: "/about",
  },
};
const Page = () => {
  return (
    <div>
      <div className=" flex flex-col ">
        <div className=" text-text mt-20 md:mt-[7.5rem]  md:w-[70vw] xl:w-[45vw] w-[90vw] mx-auto">
          <h1 className="text-4xl sm:text-5xl text-center font-bold  text-text my-10">
            About - YOUTUBEMP3
          </h1>
          <p className="text-text text-base  ">
            YOUTUBEMP3 is the fastest Youtube To Mp3 Converter and Downloader
            that allows you to easily convert and download videos in MP3 and MP4
            from youtube for free and in the best audio available quality.
            YOUTUBEMP3 is the ultimate tool for downloading unlimited Mp3 from
            youtube without any need for registration. You can quickly convert
            and download hundreds music files directly from youtube. the best
            thing is that it&apos;s completely free.
          </p>
        </div>
        <div className="text-white">
          <ReturnBtn text={"Return to homepage"} />
        </div>
      </div>{" "}
    </div>
  );
};

export default Page;
