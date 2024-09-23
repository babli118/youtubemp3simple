import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center mb-6 justify-center md:w-[77vw] xl:w-[50vw] w-[90vw] ">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3 is the fastest Youtube To Mp3 Converter and Downloader that
        allows you to easily convert youtube to MP3 and MP4 from youtube for
        free and in the best audio available quality. YOUTUBEMP3 is the ultimate
        tool for downloading unlimited Mp3 from youtube without any need for
        registration. You can quickly convert and download hundreds music files
        directly from youtube for completely free.
      </p>
      <span className="text-sm">Last updated: {currentDateTime}</span>
    </div>
  );
};

export default YtDlInfo;
