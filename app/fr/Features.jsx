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
        Principales fonctionnalités du convertisseur Youtube en MP3
      </h2>
      <div className="grid mx-12 sm:mx-0 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 sm:gap-x-4 gap-y-6 sm:gap-y-10 text-text">
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                CONVERSION RAPIDE ET FACILE
              </span>
              <SiConvertio
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Avec une simple conversion en un clic, vous pouvez convertir et télécharger votre musique et vos vidéos préférées au format mp3 et mp4 en un rien de temps."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                RAPIDE, GRATUIT ET FACILE À UTILISER
              </span>
              <HiOutlineFastForward
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Téléchargez de la musique et des vidéos YouTube, que vous utilisiez Windows, Mac OS X, iOS ou Android."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                TÉLÉCHARGEMENTS DE HAUTE QUALITÉ
              </span>
              <MdHighQuality
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Notre outil puissant permet de télécharger des vidéos Youtube en HD 720p avec la meilleure qualité sonore."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                Aucune LIMITE DE TÉLÉCHARGEMENT
              </span>
              <IoCloudDownloadSharp
                style={{ width: "35px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Téléchargez autant de vidéos que vous le souhaitez en utilisant le téléchargeur YouTube vers mp3 sans limitation et toujours gratuitement."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                Plusieurs formats pris en charge
              </span>
              <MdDevices
                style={{ width: "37px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Prend en charge la conversion rapide des vidéos Youtube en mp3, vous aidant à télécharger de la musique mp3 immédiatement sans attendre comme d'autres outils."
          }
        />
        <FeaturesCard
          heading={
            <div className="flex flex-col justify-center items-center">
              <span className="text-text/90 font-semibold text-base flex flex-col text-center">
                TÉLÉCHARGEMENTS 100% SÉCURISÉS ET PROPRES
              </span>
              <MdHealthAndSafety
                style={{ width: "40px", height: "40px", color: "red" }}
              />
            </div>
          }
          text={
            "Youtube Converter est totalement propre, sans virus, sous une surveillance intense basée sur une base de données de sécurité."
          }
        />
      </div>
    </section>
  );
};

export default Features;
