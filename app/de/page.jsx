import SearchBox from "../../components/searchBox.jsx";
import Hero from "./Hero.jsx";
import Info from "./info.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`https://youtubemp3.io/`),
    title: "YouTube-zu-MP3-Konverter: YOUTUBEMP3",
    description:
      "YOUTUBEMP3 ist ein YouTube-zu-MP3-Konverter, mit dem Sie YouTube-Videos einfach online in MP3 und MP4 konvertieren und kostenlos herunterladen können.",
    alternates: {
      canonical: "https://youtubemp3.io/de",
      languages: {
        en: "https://youtubemp3.io/",
        tr: "https://youtubemp3.io/tr",
        fr: "https://youtubemp3.io/fr",
        id: "https://youtubemp3.io/id",
        es: "https://youtubemp3.io/es",
        pt: "https://youtubemp3.io/pt",
      },
    },
    openGraph: {
      title: "YouTube-zu-MP3-Konverter: YOUTUBEMP3",
    },
    manifest: "/manifest.json",
  };
}
export default async function Page() {
  return (
    <main className=" relative">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className=" text-sm h-auto transition-all overflow-x-hidden scroll-smooth relative">
        {" "}
        <Hero />
        <SearchBox mp3={true} />
        <Info />
      </div>
    </main>
  );
}
