export async function genToken() {
  const response = await fetch("https://api.mp3youtube.cc/v2/sanity/token");
  const responseJson = await response.json();
  const key = responseJson.key;
  return key;
}
