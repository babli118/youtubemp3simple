import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col  mx-auto items-center justify-center text-start  mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        perguntas frequentes
      </h3>

      <div className="flex flex-col gap-2">
        <div className=" rounded-xl  pb-2">
          <h2 className="text-lg text-text font-semibold">
            O que é o downloader do YouTube para MP3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Youtube To MP3 Downloader é uma ferramenta que permite converter e
            baixar vídeos do Youtube para MP3 gratuitamente. Suporta conversão
            de vídeos do Youtube para MP3 com alta qualidade.
          </p>
        </div>

        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Posso converter vídeos do Youtube para mp3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Nosso downloader de vídeos do Youtube, além de suportar o download
            de vídeos do Youtube para o seu dispositivo em diversos formatos.
            youtubemp3.io também possui o recurso Youtube para mp3 que permite
            converter vídeos do Youtube em MP3 de alta qualidade, MP4: 192kbps
          </p>
        </div>

        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Como baixar vídeos do Youtube em MP3
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Passo 1: Abra o aplicativo Youtube em seu telefone ou visite o
              site Youtube.com
            </span>
            <span className="flex flex-col">
              Passo 2: Encontre e abra o vídeo que deseja baixar e clique no
              botão Compartilhar e pressione o botão Copiar link.
            </span>
            <span className="flex flex-col">
              Passo 3: Acesse youtubemp3.io, cole o link copiado do YouTube na
              caixa de pesquisa e pressione o botão Download.
            </span>
          </div>
        </div>
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Onde os áudios baixados do YouTube são salvos?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Verifique a pasta Downloads do seu telefone ou a seção histórico de
            downloads do seu navegador.
          </p>
        </div>
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Existe algum limite para a quantidade de vídeos que você pode
            converter?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Você pode converter vídeos sem qualquer limite. No entanto, podemos
            restringir as conversões em algumas situações, como: atividade de
            bot/scraping, uso abusivo ou recursos insuficientes para lidar com
            as conversões.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
