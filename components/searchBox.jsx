"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import getVideoInfo from "../utils/getVideoInfo";
import { regexYTvid, isLink } from "../utils";
import getSearch from "../utils/getSearch";
import VideoCard from "../containers/VideoCard";
import SkeletonContainer from "../containers/SkeletonContainer";
import SearchResults from "./SearchResults";
import { ThreeCircles } from "react-loader-spinner";
import ScrollToTop from "react-scroll-to-top";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { sendGAEvent } from "@next/third-parties/google";

const YOUTUBE_URLS = [
  "https://www.youtube.com/",
  "https://music.youtube.com/",
  "youtube.com/",
  "www.youtube.com/",
  "https://youtu.be",
  "youtu.be",
  "www.youtu.be",
];

const SearchBox = ({ mp3, dl, pholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [searchVideos, setSearchVideos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [showSkeletons, setShowSkeletons] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState(""); // Added videoUrl state
  const songRef = useRef(null);

  useEffect(() => {
    console.log("inputValue:", inputValue);
  }, [inputValue]);

  const isYouTubeUrl = (url) =>
    YOUTUBE_URLS.some((prefix) => url.startsWith(prefix));

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
    setVideoUrl(value); // Ensure videoUrl is updated

    setError(null);

    if (isYouTubeUrl(value)) {
      try {
        setLoading(true);
        setVideoInfo(null);
        setSearchVideos(null);
        document.activeElement.blur();
        const videoInfo = await getVideoInfo(value);
        const video = videoInfo.video;
        const id = regexYTvid(value);
        const url = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

        setThumbnailUrl(url);
        setVideoInfo(videoInfo);
        setVideoUrl(value); // Set the videoUrl state
        setInputValue("");
        scrollToSong();
      } catch (error) {
        console.error("Error downloading video information:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleInputPaste = async (e) => {
    e.preventDefault();
    const pastedContent = e.clipboardData.getData("text");
    setInputValue(pastedContent);
    handleInputChange({ target: { value: pastedContent } });
    document.activeElement.blur();
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();

    if (!inputValue) {
      setError("Input cannot be empty.");
      setLoading(false);
      return;
    }

    if (isYouTubeUrl(inputValue)) {
      handleInputChange({ target: { value: inputValue } });
    } else if (
      inputValue.startsWith("https://") ||
      inputValue.startsWith("www.")
    ) {
      toast.error(
        "Invalid YouTube Link. Please enter a valid YouTube link and try again."
      );
      setLoading(false);
    } else {
      setVideoInfo(null);
      setSearchVideos(null);
      document.activeElement.blur();
      setShowSkeletons(true);
      setKeywords(inputValue);
      try {
        const videos = await getSearch(inputValue);
        setSearchVideos(videos);
      } catch (error) {
        console.error("Error searching videos:", error);
      } finally {
        setShowSkeletons(false);
        setLoading(false);
      }
    }
  };

  const handleClickFromSearch = async (url) => {
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
      setVideoInfo("");
      setLoading(true);
      setSearchVideos("");
      document.activeElement.blur();
      const videoInfo = await getVideoInfo(url);
      const id = regexYTvid(url);
      const thumbUrl = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
      setThumbnailUrl(thumbUrl);

      setVideoInfo(videoInfo);
      setVideoUrl(url);
      setLoading(false);
      setInputValue("");
      scrollToSong();
    } catch (error) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
    }
  };

  const scrollToSong = () => {
    if (window.innerWidth < 640 && songRef.current) {
      window.scrollTo({
        top: songRef.current.offsetTop - 200,
        behavior: "smooth",
      });
    }
  };

  const resetState = () => {
    setVideoInfo(null);
    setInputValue("");
    setVideoUrl(""); // Reset videoUrl
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="  md:w-[70vw] xl:w-[50vw] w-[85vw]">
      <div className="transition-all">
        <ScrollToTop
          smooth
          color="#ffffff"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            background: "#FF0000",
          }}
        />
      </div>

      <div className="flex flex-col justify-center content-center w-screen mt-4  ">
        <div className="flex justify-center content-center">
          <div className="flex flex-col justify-center content-center">
            <div className=" flex flex-col mx-auto  ">
              <form onSubmit={handleSearchClick} className="flex flex-col   ">
                <div className="flex flex-col   sm:flex-row  mx-auto  relative md:w-[70vw] xl:w-[50vw] w-[90vw]">
                  <div className="relative w-full">
                    <input
                      className={`bg-white border-solid   border-4 transition-all duration-200  placeholder:text-text/70   border-[#CBD5E1] text-base outline-none focus:border-primary1 appearance-none text-text py-3 px-4 w-full rounded-md duration-50`}
                      type="text"
                      placeholder={"Search or Paste Youtube Link Here..."}
                      value={inputValue}
                      autoComplete="off"
                      onClick={handleInputChange}
                      onPaste={handleInputPaste}
                      onChange={handleInputChange}
                    />

                    {inputValue.length > 0 && (
                      <div
                        onClick={() => {
                          setInputValue("");
                        }}
                        className="absolute hover:scale-105 transition-all bg-grey right-0 top-3 text-text text-xl flex justify-center items-center cursor-pointer rounded-md mr-4 w-10 h-8"
                      >
                        <RxCross2 />
                      </div>
                    )}
                  </div>
                  <div className="flex">
                    <button
                      disabled={loading}
                      className="bg-primary1 w-full text-white relative mt-4
                      sm:mt-0 hover:scale-105 transition-all text-base
                      text-black font-semibold px-6 py-3 sm:ml-2 rounded-md disabled:bg-primary1/60 disabled:hover:scale "
                    >
                      {loading
                        ? "Hmm..." // Todo: Change loading text
                        : "Search"}{" "}
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex mx-[1.19rem] sm:mx-0 mt-2 mb-4">
                <p className="text-text  ">
                  By using our service you accept our{" "}
                  <Link className="text-accent1 underline" href={"/tos"}>
                    Terms of Service
                  </Link>{" "}
                  &{" "}
                  <Link
                    className="text-accent1 underline"
                    href={"/privacy-policy"}
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading === true ? (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10">
          <div className="flex content-center mx-auto justify-between">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#cf4a47"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div id={"song"} ref={songRef}>
        {videoInfo ? (
          <div className="flex flex-col justify-center content-center w-[100vw]  mt-10 sm:mt-6">
            <div className={"content-center mx-auto justify-between flex"}>
              <div className="mt-10 sm:hidden  "></div>

              <VideoCard
                videoInfo={videoInfo}
                resetState={resetState}
                url={videoUrl}
                mp3={mp3}
                thumbnailUrl={thumbnailUrl}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {searchVideos && (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10 ">
          <div className="flex content-center mx-auto justify-between  ">
            <div className="mt-16 sm:hidden bg-secondary1 "></div>
            <SearchResults
              videos={searchVideos}
              keywords={keywords}
              setVideo={handleClickFromSearch}
              scrollToSong={scrollToSong}
            />
          </div>
        </div>
      )}
      {showSkeletons && (
        <div className="flex flex-col justify-center content-center w-[100vw]  mt-10 ">
          <div className="flex content-center mx-auto justify-between  ">
            <div className="mt-16 sm:hidden bg-secondary1 "></div>

            <SkeletonContainer keywords={keywords} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
