import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
export const regexYTvid = (url) => {
  var p =
    /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.|music\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user|shorts)\/))([^\?&\"'>]+)/;
  return url.match(p) ? RegExp.$1 : false;
};
export const startDownload = (downloadLink) => {
  const link = document.createElement("a");
  link.href = downloadLink;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const isLink = (input) => {
  // Regular expression to match URLs
  var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  // Check if input matches the URL regex
  return urlRegex.test(input);
};

export const getKey = (str) => {
  return btoa(str.split("").reverse().join(""));
};
