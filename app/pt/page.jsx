import SearchBox from "../../components/searchBox.jsx";
import Hero from "./Hero.jsx";
import Info from "./Info.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`https://youtubemp3.io/`),
    title: "Conversor de YouTube para MP3: YOUTUBEMP3",
    description:
      "O YOUTUBEMP3 é um conversor de YouTube para MP3 que permite converter e baixar vídeos do YouTube para MP3 e MP4 online e gratuitamente.",
    alternates: {
      canonical: "https://youtubemp3.io/pt",
      languages: {
        en: "https://youtubemp3.io/",
        de: "https://youtubemp3.io/de",
        fr: "https://youtubemp3.io/fr",
        id: "https://youtubemp3.io/id",
        es: "https://youtubemp3.io/es",
        tr: "https://youtubemp3.io/tr",
      },
    },
    openGraph: {
      title: "Conversor de YouTube para MP3: YOUTUBEMP3",
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
