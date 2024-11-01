import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center text-start mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        Questions fréquemment posées
      </h3>

      <div className="flex flex-col gap-2">
        <div className="rounded-xl pb-2">
          <h2 className="text-lg text-text font-semibold">
            Qu&apos;est-ce qu&apos;un téléchargeur YouTube en MP3 ?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Le téléchargeur YouTube en MP3 est un outil qui vous permet de
            convertir et de télécharger gratuitement des vidéos YouTube en MP3.
            Il prend en charge la conversion de vidéos YouTube en MP3 de haute
            qualité.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Puis-je convertir des vidéos YouTube en MP3 ?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Notre téléchargeur de vidéos YouTube, en plus de prendre en charge
            le téléchargement de vidéos YouTube sur votre appareil dans divers
            formats, dispose également d&apos;une fonction YouTube en MP3 qui
            permet de convertir des vidéos YouTube en MP3 de haute qualité, MP4
            : 328kbps.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Comment télécharger des vidéos YouTube en MP3 ?
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Étape 1 : Ouvrez l&apos;application YouTube sur votre téléphone ou
              visitez le site Web YouTube.com.
            </span>
            <span className="flex flex-col">
              Étape 2 : Recherchez et ouvrez la vidéo que vous souhaitez
              télécharger, cliquez sur le bouton Partager, puis appuyez sur le
              bouton Copier le lien.
            </span>
            <span className="flex flex-col">
              Étape 3 : Allez sur youtubemp3.io, collez le lien YouTube que vous
              avez copié dans la barre de recherche et appuyez sur le bouton
              Télécharger.
            </span>
          </div>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Où sont enregistrées les vidéos téléchargées depuis YouTube ?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Veuillez vérifier le dossier &quot;Téléchargements&quot; de votre
            téléphone ou dans la section &quot;historique des
            téléchargements&quot; de votre navigateur.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Y a-t-il une limite au nombre de vidéos que je peux convertir ?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Vous pouvez convertir des vidéos sans limitation. Cependant, nous
            pouvons restreindre les conversions dans certaines situations,
            telles que les activités de bot, une utilisation excessive ou des
            ressources insuffisantes pour gérer les conversions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
