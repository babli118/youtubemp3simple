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
        Principales características del convertidor de Youtube a MP3
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                CONVERSIÓN RÁPIDA Y FÁCIL
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Con una simple conversión con un solo clic, puedes convertir y descargar tu música y vídeos favoritos a formato mp3 y mp4 en muy poco tiempo."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                RÁPIDO, GRATIS Y FÁCIL DE USAR
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Descargue música y vídeos de YouTube independientemente de si utiliza Windows, Mac OS X, iOS o Android."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                DESCARGAS DE ALTA CALIDAD
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Nuestra poderosa herramienta permite descargar videos de Youtube a HD 720p con la mejor calidad de sonido."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                SIN LIMITACIONES DE DESCARGA
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Descarga tantos videos como quieras usando el descargador de youtube a mp3 sin limitaciones y siempre gratis."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                Múltiples formatos compatibles
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Admite la conversión rápida de videos de Youtube a mp3, lo que te ayuda a descargar música mp3 inmediatamente sin esperar como otras herramientas."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                DESCARGAS 100% SEGURAS Y LIMPIAS
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Youtube Converter está totalmente limpio, sin virus, bajo una intensa supervisión basada en una base de datos de seguridad."
          }
        />
      </div>
    </section>
  );
};

export default Features;
