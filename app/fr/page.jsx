import SearchBox from "../../components/searchBox.jsx";
import Hero from "./Hero.jsx";
import Info from "./info.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`https://youtubemp3.io/`),
    title: "Convertisseur YouTube en MP3 : YOUTUBEMP3",
    description:
      "YOUTUBEMP3 est un convertisseur YouTube en MP3 qui vous permet de convertir et de télécharger facilement des vidéos YouTube en MP3 et MP4 en ligne et gratuitement.",
    alternates: {
      canonical: "https://youtubemp3.io/fr",
      languages: {
        en: "https://youtubemp3.io/",
        de: "https://youtubemp3.io/de",
        tr: "https://youtubemp3.io/tr",
        id: "https://youtubemp3.io/id",
        es: "https://youtubemp3.io/es",
        pt: "https://youtubemp3.io/pt",
      },
    },
    openGraph: {
      title: "Convertisseur YouTube en MP3 : YOUTUBEMP3",
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
