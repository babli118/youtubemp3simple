import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center justify-center">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3 é o conversor e downloader de YouTube para MP3 mais rápido
        que permite converter facilmente youtube para MP3 e MP4 do youtube
        gratuitamente e com a melhor qualidade de áudio disponível. YOUTUBEMP3 é
        a ferramenta definitiva para baixar MP3 ilimitados do YouTube sem
        necessidade de registro. Você pode converter e baixar rapidamente
        centenas de arquivos de música diretamente do YouTube de forma
        totalmente gratuita.
      </p>
    </div>
  );
};

export default YtDlInfo;
