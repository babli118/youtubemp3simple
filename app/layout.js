import "./globals.css";
require("dotenv").config();
import { GoogleTagManager } from "@next/third-parties/google";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import TaskBar from ".././components/taskBar";
import Footer from ".././components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`https://youtubemp3.io/`),
    title: "YouTube To MP3 Converter: YOUTUBEMP3",
    description:
      "YOUTUBEMP3 is a Youtube to MP3 converter that allows you to easily convert and download Youtube videos in MP3 and MP4 online for free.",
    alternates: {
      canonical: "https://youtubemp3.io/",
    },
    openGraph: {
      title: "YouTube To MP3 Converter: YOUTUBEMP3",
    },
  };
}
export default async function RootLayout({ children, params }) {
  return (
    <html>
      {/* <GoogleTagManager gtmId="GTM-NRP8VP5J" /> */}
      <body
        className={
          poppins.className +
          "bg-background1 flex flex-col h-auto overflow-x-hidden scroll-smooth text-black relative"
        }
      >
        <div
          className={poppins.className + " overflow-x-hidden bg-background1"}
        >
          <TaskBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
