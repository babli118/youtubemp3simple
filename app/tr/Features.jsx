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
        Youtube&apos;dan MP3&apos;e Dönüştürücünün En İyi Özellikleri
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                HIZLI VE KOLAY DÖNÜŞÜM
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Tek tıklamayla basit bir dönüşümle, en sevdiğiniz müzikleri ve videoları anında mp3 ve mp4 formatına dönüştürebilir ve indirebilirsiniz."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                HIZLI, ÜCRETSİZ VE KULLANIMI KOLAY
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Windows, Mac OS X, iOS veya Android kullanmanıza bakılmaksızın YouTube müziklerini ve videolarını indirin."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                YÜKSEK KALİTELİ İNDİRMELER
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Güçlü aracımız, YouTube videolarını en iyi ses kalitesiyle HD 720p'ye indirmenize olanak tanır."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                İNDİRME SINIRLAMASI YOK
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "YouTube'dan mp3'e indiriciyi kullanarak sınırlama olmaksızın ve her zaman ücretsiz olarak istediğiniz kadar video indirin."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                ÇOKLU FORMAT DESTEĞİ
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "YouTube videolarını hızlı bir şekilde mp3'e dönüştürme desteği, diğer araçlar gibi beklemeden anında mp3 müzik indirmenize yardımcı olur."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                %100 GÜVENLİ VE TEMİZ İNDİRMELER
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "YouTube Dönüştürücümüz, güvenlik veritabanına dayalı olarak yoğun denetim altında virüs içermez ve tamamen temizdir."
          }
        />
      </div>
    </section>
  );
};

export default Features;
