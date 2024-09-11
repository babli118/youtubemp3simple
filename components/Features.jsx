import React from "react";
import FeaturesCard from "../containers/featuresCard.jsx";
import { MdHighQuality } from "react-icons/md";
import { HiOutlineFastForward } from "react-icons/hi";
import { SiConvertio } from "react-icons/si";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";

const Features = () => {
  return (
    <section className="text-text text-left mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10 mt-4 text-text">
        Top Features Of Youtube To MP3 Converter
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text  ">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                QUICK AND EASY CONVERSION
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "With a simple one-click conversion, you can convert and download your favorite music and videos to mp3 and mp4 format in no time at all."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                FAST AND EASY TO USE
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Download youtube music and videos regardless of whether you are using Windows, Mac OS X, iOS, or Android."
          }
        />

        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                HIGH QUALITY DOWNLOADS
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Our powerful tool allows downloading Youtube videos to HD 720p with the best sound quality"
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                No DOWNLOAD LIMITATIONS
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Download as many videos as you want using youtube to mp3 downloader without limitation and always free."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                Multiple Format Supported
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Support converting Youtube videos to mp3 quickly, helping you to download mp3 music immediately without waiting like other tools."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                100% SAFE AND CLEAN DOWNLOADS
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Youtube Converter is totally clean with no virus under intense supervision based on security database."
          }
        />
      </div>
    </section>
  );
};

export default Features;
