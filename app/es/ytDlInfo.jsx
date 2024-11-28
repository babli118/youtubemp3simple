import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center justify-center ">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3 es el convertidor y descargador de Youtube a Mp3 más rápido
        que te permite convertir fácilmente youtube a MP3 y MP4 desde youtube de
        forma gratuita y con la mejor calidad de audio disponible. YOUTUBEMP3 es
        la herramienta definitiva para descargar Mp3 ilimitados desde youtube
        sin necesidad de registrarse. Puede convertir y descargar rápidamente
        cientos de archivos de música directamente desde youtube de forma
        completamente gratuita.
      </p>
    </div>
  );
};

export default YtDlInfo;
