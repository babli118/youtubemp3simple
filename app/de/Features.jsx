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
        Top-Funktionen des YouTube-zu-MP3-Konverters
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                SCHNELLER UND EINFACHER UMBAU
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Mit einer einfachen Ein-Klick-Konvertierung können Sie Ihre Lieblingsmusik und -videos im Handumdrehen in das MP3- und MP4-Format konvertieren und herunterladen."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                SCHNELL, KOSTENLOS UND EINFACH ZU BEDIENEN
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Laden Sie YouTube-Musik und -Videos herunter, unabhängig davon, ob Sie Windows, Mac OS X, iOS oder Android verwenden."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                HOCHWERTIGE DOWNLOADS
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Unser leistungsstarkes Tool ermöglicht das Herunterladen von YouTube-Videos in HD 720p mit bester Tonqualität"
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                Keine DOWNLOAD-BESCHRÄNKUNGEN
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Laden Sie mit dem YouTube-MP3-Downloader so viele Videos herunter, wie Sie möchten, ohne Einschränkung und immer kostenlos."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                Mehrere Formate werden unterstützt
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Unterstützt die schnelle Konvertierung von YouTube-Videos in MP3 und hilft Ihnen, MP3-Musik sofort herunterzuladen, ohne wie bei anderen Tools warten zu müssen."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                100 % SICHERE UND SAUBERE DOWNLOADS
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Der YouTube Converter ist absolut sauber, ohne Viren und unterliegt einer intensiven Überwachung basierend auf der Sicherheitsdatenbank."
          }
        />
      </div>
    </section>
  );
};

export default Features;
