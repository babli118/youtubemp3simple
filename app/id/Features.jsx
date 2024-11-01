import React from "react";
import FeaturesCard from "../../containers/featuresCard.jsx";
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
        Fitur Utama Konverter YouTube ke MP3
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                KONVERSI CEPAT DAN MUDAH
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Dengan konversi satu klik yang sederhana, Anda dapat mengonversi dan mengunduh musik dan video favorit Anda ke format mp3 dan mp4 dalam waktu singkat."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                CEPAT, GRATIS, DAN MUDAH DIGUNAKAN
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Unduh musik dan video YouTube terlepas dari apakah Anda menggunakan Windows, Mac OS X, iOS, atau Android."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                UNDUHAN KUALITAS TINGGI
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Alat kami yang kuat memungkinkan Anda mengunduh video YouTube dalam HD 720p dengan kualitas suara terbaik."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                TANPA BATASAN UNDUHAN
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Unduh video sebanyak yang Anda inginkan menggunakan pengunduh YouTube ke MP3 tanpa batasan dan selalu gratis."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                BERBAGAI FORMAT DIDUKUNG
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Mendukung konversi cepat video YouTube ke mp3, membantu Anda mengunduh musik mp3 dengan segera tanpa harus menunggu seperti alat lainnya."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                UNDUHAN 100% AMAN DAN BERSIH
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Konverter YouTube ini benar-benar bersih dan bebas dari virus, dengan pengawasan ketat berdasarkan basis data keamanan."
          }
        />
      </div>
    </section>
  );
};

export default Features;
