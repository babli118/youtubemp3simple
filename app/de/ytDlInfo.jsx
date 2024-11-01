import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center mb-6 justify-center md:w-[77vw] xl:w-[50vw] w-[90vw] ">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3 ist der schnellste YouTube-zu-MP3-Konverter und -Downloader,
        mit dem Sie YouTube ganz einfach kostenlos und in der besten verfügbaren
        Audioqualität von YouTube in MP3 und MP4 konvertieren können. YOUTUBEMP3
        ist das ultimative Tool zum Herunterladen unbegrenzter MP3-Dateien von
        YouTube, ohne dass eine Registrierung erforderlich ist. Sie können
        Hunderte Musikdateien schnell und völlig kostenlos direkt von YouTube
        konvertieren und herunterladen.
      </p>
      <span className="text-sm">Last updated: {currentDateTime}</span>
    </div>
  );
};

export default YtDlInfo;
