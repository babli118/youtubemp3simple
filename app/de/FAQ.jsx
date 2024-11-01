import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center text-start mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        Häufig gestellte Fragen
      </h3>

      <div className="flex flex-col gap-2">
        <div className="rounded-xl pb-2">
          <h2 className="text-lg text-text font-semibold">
            Was ist der YouTube-zu-MP3-Downloader?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            YouTube-zu-MP3-Downloader ist ein Tool, mit dem Sie Youtube-Videos
            kostenlos in MP3 umwandeln und herunterladen können. Unterstützt die
            Konvertierung von YouTube-Videos in MP3 mit hoher Qualität.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Wie lade ich YouTube-Videos im MP3-Format herunter?
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Schritt 1: Öffnen Sie die Youtube-App auf Ihrem Telefon oder
              besuchen Sie die Website Youtube.com.
            </span>
            <span className="flex flex-col">
              Schritt 2: Suchen und öffnen Sie das Video, das Sie herunterladen
              möchten, klicken Sie auf die Schaltfläche „Teilen“ und dann auf
              die Schaltfläche „Link kopieren“.
            </span>
            <span className="flex flex-col">
              Schritt 3: Gehen Sie zu youtubemp3.io, fügen Sie den kopierten
              Youtube-Link in das Suchfeld ein und klicken Sie auf die
              Schaltfläche „Herunterladen“.
            </span>
          </div>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Kann ich YouTube-Videos in MP3 konvertieren?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Unser YouTube-Video-Downloader unterstützt nicht nur das
            Herunterladen von YouTube-Videos auf Ihr Gerät in vielen
            verschiedenen Formaten. youtubemp3.io verfügt außerdem über die
            YouTube-zu-MP3-Funktion, mit der Sie YouTube-Videos in hochwertige
            MP3- und MP4-Dateien mit 192 Kbit/s konvertieren können.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Wo werden heruntergeladene YouTube-Audios gespeichert?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Bitte überprüfen Sie den Ordner „Downloads“ auf Ihrem Telefon oder
            den Abschnitt „Download-Verlauf“ Ihres Browsers.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Gibt es eine Begrenzung für die Anzahl der Videos, die Sie
            konvertieren können?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Sie können Videos unbegrenzt konvertieren. Allerdings können wir
            Konvertierungen in bestimmten Situationen einschränken, z. B. bei
            Bot-/Scraping-Aktivitäten, missbräuchlicher Nutzung oder
            unzureichenden Ressourcen zur Bearbeitung von Konvertierungen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
