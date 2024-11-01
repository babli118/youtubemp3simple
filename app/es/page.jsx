import SearchBox from "../../components/searchBox.jsx";
import Hero from "./Hero.jsx";
import Info from "./Info.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`https://youtubemp3.io/`),
    title: "Conversor de YouTube a MP3: YOUTUBEMP3",
    description:
      "YOUTUBEMP3 es un conversor de YouTube a MP3 que te permite convertir y descargar videos de YouTube a MP3 y MP4 en línea y de forma gratuita.",
    alternates: {
      canonical: "https://youtubemp3.io/es",
      languages: {
        en: "https://youtubemp3.io/",
        de: "https://youtubemp3.io/de",
        tr: "https://youtubemp3.io/tr",
        fr: "https://youtubemp3.io/fr",
        id: "https://youtubemp3.io/id",
        pt: "https://youtubemp3.io/pt",
      },
    },
    openGraph: {
      title: "Conversor de YouTube a MP3: YOUTUBEMP3",
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
