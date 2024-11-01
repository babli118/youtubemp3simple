import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center text-start mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        Preguntas Frecuentes
      </h3>

      <div className="flex flex-col gap-2">
        <div className="rounded-xl pb-2">
          <h2 className="text-lg text-text font-semibold">
            ¿Qué es el descargador de YouTube a MP3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            El descargador de YouTube a MP3 es una herramienta que permite
            convertir y descargar videos de YouTube a MP3 de forma gratuita.
            Admite la conversión de videos de YouTube a MP3 con alta calidad.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            ¿Puedo convertir videos de YouTube a mp3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Nuestro descargador de videos de YouTube, además de admitir la
            descarga de videos de YouTube en su dispositivo en varios formatos,
            también tiene una función de YouTube a mp3 que permite convertir
            videos de YouTube a MP3 de alta calidad, MP4: 328kbps.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            ¿Cómo descargar videos de YouTube en MP3?
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Paso 1: Abra la aplicación de YouTube en su teléfono o visite el
              sitio web YouTube.com.
            </span>
            <span className="flex flex-col">
              Paso 2: Encuentre y abra el video que desea descargar, haga clic
              en el botón de Compartir y luego presione el botón de Copiar
              enlace.
            </span>
            <span className="flex flex-col">
              Paso 3: Vaya a youtubemp3.io, pegue el enlace copiado de YouTube
              en el cuadro de búsqueda y presione el botón de Descargar.
            </span>
          </div>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            ¿Dónde se guardan los videos descargados de YouTube?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Por favor, verifique la carpeta de &quot;Descargas&quot; en su
            teléfono o en la sección de &quot;historial de descargas&quot; de su
            navegador.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            ¿Existe algún límite en la cantidad de videos que puede convertir?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Puede convertir videos sin ningún límite. Sin embargo, podemos
            restringir las conversiones en algunas situaciones, como actividad
            de bots, uso abusivo o recursos insuficientes para manejar las
            conversiones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
