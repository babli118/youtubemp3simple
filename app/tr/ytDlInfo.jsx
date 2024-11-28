import React from "react";

const YtDlInfo = () => {
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <div className="text-text text-start mx-auto  items-center justify-center  ">
      <p className=" mt-4 text-sm sm:text-base text-text leading-7 sm:leading-7">
        YOUTUBEMP3, youtube&apos;u ücretsiz olarak ve mümkün olan en iyi ses
        kalitesinde kolayca youtube&apos;dan MP3 ve MP4&apos;e dönüştürmenize
        olanak tanıyan en hızlı Youtube&apos;dan Mp3&apos;e Dönüştürücü ve
        İndiricidir. YOUTUBEMP3, herhangi bir kayıt işlemine gerek kalmadan
        youtube&apos;dan sınırsız Mp3 indirmek için mükemmel bir araçtır.
        Yüzlerce müzik dosyasını doğrudan youtube&apos;dan tamamen ücretsiz
        olarak hızlı bir şekilde dönüştürebilir ve indirebilirsiniz.
      </p>
    </div>
  );
};

export default YtDlInfo;
