import { Bounce, toast } from "react-toastify";

const getVideoInfo = async (inputValue) => {
  try {
    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", // Set the content type to JSON
    //   },
    //   body: JSON.stringify({ url: inputValue }),
    // };

    // const url = `${process.env.NEXT_PUBLIC_API_SERVER_URl}/videoInfo`;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
      },
      body: `link=${inputValue}`,
    };

    const url = `https://api.mp3youtube.cc/v2/getVideoInfo`;
    const videoFetch = await fetch(url, options);
    const videoInfo = await videoFetch.json();
    console.log(videoInfo);

    if (videoInfo.videoTime < 0) {
      toast.error("Live videos can't be downloaded", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    if (videoInfo.duration > 10800) {
      toast.error("Youtube Videos Above 3 Hours Length Cant Be Downloaded", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    return videoInfo;
  } catch (error) {
    toast.error(
      "Unable to find your video, Please enter a valid Youtube link and try again.",
      {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  }
};

export default getVideoInfo;
