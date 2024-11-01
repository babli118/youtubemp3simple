import SearchBox from "../../components/searchBox.jsx";
import Hero from "./Hero.jsx";
import Info from "./info.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`https://youtubemp3.io/`),
    title: "YouTube'dan MP3 Dönüştürücü: YOUTUBEMP3",
    description:
      "YOUTUBEMP3, YouTube videolarını kolayca çevrimiçi olarak MP3 ve MP4'e dönüştürmenizi ve ücretsiz olarak indirmenizi sağlayan bir YouTube'dan MP3 dönüştürücüsüdür.",
    alternates: {
      canonical: "https://youtubemp3.io/tr",
      languages: {
        en: "https://youtubemp3.io/",
        de: "https://youtubemp3.io/de",
        fr: "https://youtubemp3.io/fr",
        id: "https://youtubemp3.io/id",
        es: "https://youtubemp3.io/es",
        pt: "https://youtubemp3.io/pt",
      },
    },
    openGraph: {
      title: "YouTube'dan MP3 Dönüştürücü: YOUTUBEMP3",
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
