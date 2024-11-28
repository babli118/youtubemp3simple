import React from "react";
import YtDlInfo from "./ytDlInfo";
import FAQ from "./FAQ";
import Features from "./Features";
import { FaCopy } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import BestDownloader from "./BestDownloader";
import CurrentTime from "../../utils/CurrentTime";

const Info = () => {
  return (
    <div className=" mt-8 flex flex-col gap-4 overflow-x-hidden items-center justify-center  ">
      <div className=" md:w-[70vw] mb-6 xl:w-[50vw] w-[90vw]">
        <YtDlInfo />
        <CurrentTime />
      </div>
      <h2 className="text-3xl font-semibold text-center mb-4 text-text">
        Comment télécharger des vidéos Youtube en MP3
      </h2>
      <div className="text-base grid gap-y-4 sm:gap-y-0 sm:grid-cols-3 gap-x-4 mx-10 md:w-[70vw] xl:w-[50vw] w-[90vw]">
        <div className="px-8 rounded-xl py-2 bg-white shadow-sm mx-10 sm:mx-0">
          <div className="flex flex-col gap-1 mb-2 justify-center items-center">
            <FaCopy style={{ width: "50px", height: "30px", color: "red" }} />
            <span className="text-text/90 font-semibold text-base flex flex-col text-center">
              Coller la vidéo
            </span>{" "}
          </div>
          <span className="text-center text-sm sm:text-base">
            Collez le lien YouTube ou saisissez un mot-clé dans le champ de
            recherche.
          </span>
        </div>
        <div className="px-8 rounded-xl py-2 bg-white shadow-sm mx-10 sm:mx-0">
          <div className="flex flex-col gap-1 mb-2 justify-center items-center">
            <MdVideoLibrary
              style={{ width: "50px", height: "30px", color: "red" }}
            />
            <span className="text-text/90 font-semibold text-base flex flex-col text-center">
              Sélectionnez la vidéo
            </span>{" "}
          </div>
          <span className="text-center text-sm sm:text-base">
            Sélectionnez le format MP4 ou MP3 que vous souhaitez télécharger.
          </span>
        </div>
        <div className="px-8 rounded-xl py-2 bg-white shadow-sm mx-10 sm:mx-0">
          <div className="flex flex-col gap-1 mb-2 justify-center items-center">
            <FaDownload
              style={{ width: "50px", height: "30px", color: "red" }}
            />
            <span className="text-text/90 font-semibold text-base flex flex-col text-center">
              Télécharger
            </span>{" "}
          </div>
          <span className="text-center text-sm sm:text-base">
            Cliquez sur le bouton Télécharger pour télécharger le fichier sur
            votre appareil.
          </span>
        </div>
      </div>
      <div className="md:w-[70vw] xl:w-[50vw] w-[90vw]">
        <BestDownloader />
      </div>
      <div className="md:w-[70vw] xl:w-[50vw] w-[90vw]">
        <Features />
      </div>
      <div className="md:w-[70vw] xl:w-[50vw] w-[90vw]">
        <FAQ />
      </div>
    </div>
  );
};

export default Info;
