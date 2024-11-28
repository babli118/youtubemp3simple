import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center justify-center">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3 adalah Pengonversi dan Pengunduh Youtube Ke Mp3 tercepat yang
        memungkinkan Anda dengan mudah mengonversi youtube ke MP3 dan MP4 dari
        youtube secara gratis dan dalam kualitas audio terbaik yang tersedia.
        YOUTUBEMP3 adalah alat terbaik untuk mengunduh Mp3 tanpa batas dari
        youtube tanpa perlu registrasi. Anda dapat dengan cepat mengonversi dan
        mengunduh ratusan file musik langsung dari youtube secara gratis.
      </p>
    </div>
  );
};

export default YtDlInfo;
