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
        Principais recursos do conversor de YouTube para MP3
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text  ">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                CONVERSÃO RÁPIDA E FÁCIL
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Com uma conversão simples de um clique, você pode converter e baixar suas músicas e vídeos favoritos para o formato mp3 e mp4 rapidamente."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                RÁPIDO, GRATUITO E FÁCIL DE USAR
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Baixe músicas e vídeos do YouTube independentemente de você estar usando Windows, Mac OS X, iOS ou Android."
          }
        />

        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                DOWNLOADS DE ALTA QUALIDADE
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Nossa poderosa ferramenta permite baixar vídeos do Youtube em HD 720p com a melhor qualidade de som"
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                Sem LIMITAÇÕES DE DOWNLOAD
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Baixe quantos vídeos quiser usando o downloader do youtube para mp3 sem limitação e sempre gratuito."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                Vários formatos suportados
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Suporta a conversão rápida de vídeos do Youtube para mp3, ajudando você a baixar músicas mp3 imediatamente, sem esperar como outras ferramentas."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90  font-semibold text-base flex flex-col text-center ">
                DOWNLOADS 100% SEGUROS E LIMPOS
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "O Youtube Converter é totalmente limpo, sem vírus, sob intensa supervisão baseada em banco de dados de segurança."
          }
        />
      </div>
    </section>
  );
};

export default Features;
