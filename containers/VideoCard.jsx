"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation.js";
import Image from "next/image";
import getVideoDlLink from "../utils/getVideoDlLink.js";
import getAudioDlLink from "../utils/getAudioDlLink.js";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import DisplayDuration from "../utils/DurationDisplay.js";
import { TailSpin } from "react-loader-spinner";
import { genToken } from "../app/token.js";
import { startDownload, getKey } from "../utils.jsx";

const VideoCard = ({ videoInfo, url, mp3, thumbnailUrl }) => {
  const video = videoInfo;

  const videoId = video.videoId;
  const [loadingMp3, setLoadingMp3] = useState(false);
  const [data, setData] = useState(false);
  const [loadingMp4, setLoadingMp4] = useState(false);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  function truncateTitle(title, maxWords) {
    const words = title.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return title;
    }
  }
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const result = await genToken();
      setToken(getKey(result));
    };

    getToken();
  }, []);
  // console.log(token);
  const getDownloadLink = async (videoId, format) => {
    try {
      const res = await fetch(`https://api.mp3youtube.cc/v2/converter`, {
        cache: "no-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "*/*",
          key: token,
        },
        body: `link=https://www.youtube.com/watch?v=${videoId}&format=${format}&audioBitrate=320&videoQuality=1080&vCodec=h264`,
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
        showToast("Something went wrong");
      }

      const data = await res.json();
      setData(data);
      startDownload(data.url);
    } catch (e) {
      showToast("Something went wrong");
      console.log(e);
    }
  };
  const showToast = (msg) => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center   ">
      <div
        style={{
          width: "360px",
          borderWidth: "2px",
          borderColor: "#E5E7EB",
          borderStyle: "solid",
        }}
        className="bg-white  thumbnail justify-center items-center  border-solid flex flex-row rounded-md shadow-sm "
      >
        <div className="flex flex-col ">
          <div className="flex justify-center items-center relative transition-all">
            <div
              style={{
                width: "357.5px",
                height: "200px",
                position: "relative",
              }}
            >
              <Image
                alt="thumbnail of video"
                src={thumbnailUrl}
                fill
                priority
                className={`rounded-md transition-all ${
                  isThumbnailLoaded ? "opacity-100" : "opacity-0"
                }`} // Apply opacity based on loaded state
                onLoad={() => setIsThumbnailLoaded(true)} // Set loaded state to true when the image is loaded
              />
            </div>

            <div
              style={{
                position: "absolute",
                right: "10px",
                bottom: "4px",
                background: "#080B0D",
                opacity: 0.9,
                padding: "0 8px",
              }}
              className="font-medium  bg-[#080B0D] text-white rounded-md "
            >
              <DisplayDuration durationInSeconds={video.duration} />
            </div>
          </div>
          <div className="flex  mb-2 min-[1281px]:mb-4">
            <div>
              <div className="my-2">
                <p
                  style={{ margin: "0.3rem 1rem" }}
                  className="text-base text-text font-bold  "
                >
                  {truncateTitle(video.title, 8)}
                </p>
                <div
                  style={{ marginTop: "" }}
                  className="ml-8  flex mb-2 items-center"
                >
                  {/* <Image
                    className="mx-2"
                    style={{ borderRadius: "999px" }}
                    alt="channel logo"
                    width={25}
                    height={20}
                    src={video.channelThumbnails}
                  /> */}
                  <p
                    style={{ color: "rgb(22 19 19 / 0.7)" }}
                    className="text-sm font-semibold t"
                  >
                    {video.channelTitle}
                  </p>
                </div>
              </div>

              <div style={{ color: "rgb(22 19 19 / 0.7)" }}>
                <div style={{ margin: "0 1rem" }} className="flex gap-2 ">
                  <p>Audio Quality</p>
                  <p className="font-semibold ">328kbps</p>
                </div>
                <div style={{ margin: "0 1rem" }} className="flex gap-2 mx-4">
                  <p>Video Quality</p>
                  <p className="font-semibold ">1080p</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button
          style={{
            height: "50px",
            width: "160px",
            fontWeight: "500",
          }}
          onClick={async () => {
            setLoadingMp3(true);
            await getDownloadLink(videoId, "mp3");
            setLoadingMp3(false);
          }}
          className="bg-primary1 flex mt-2 w-[300px]  justify-center items-center gap-2 text-white text-center relative hover:scale-105 px-4  py-3 transition-all text-base font-semibold   rounded-md"
        >
          {loadingMp3 ? (
            <TailSpin color="#fff" height={30} width={30} />
          ) : (
            <>
              <span>Download</span> <span>MP3</span>
            </>
          )}
        </button>
        <button
          style={{
            height: "50px",
            width: "160px",
            fontWeight: "500",
            backgroundColor: "#3F83F8",
          }}
          onClick={async () => {
            setLoadingMp4(true);
            await getDownloadLink(videoId, "mp4");
            setLoadingMp4(false);
          }}
          className=" flex mt-2 justify-center items-center gap-2 text-white text-center relative hover:scale-105 px-4  py-3 transition-all text-base font-semibold    rounded-md"
        >
          {loadingMp4 ? (
            <TailSpin color="#fff" height={30} width={30} />
          ) : (
            <>
              <span>Download</span> <span>MP4</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
