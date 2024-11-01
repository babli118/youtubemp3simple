import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center mb-6 justify-center md:w-[77vw] xl:w-[50vw] w-[90vw] ">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3 est le convertisseur et téléchargeur Youtube vers Mp3 le plus
        rapide qui vous permet de convertir facilement YouTube en MP3 et MP4 à
        partir de YouTube gratuitement et dans la meilleure qualité audio
        disponible. YOUTUBEMP3 est l&apos;outil ultime pour télécharger des Mp3
        illimités depuis YouTube sans aucune inscription. Vous pouvez rapidement
        convertir et télécharger des centaines de fichiers musicaux directement
        depuis YouTube et gratuitement.
      </p>
      <span className="text-sm">Last updated: {currentDateTime}</span>
    </div>
  );
};

export default YtDlInfo;
