import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col  mx-auto items-center justify-center text-start  mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        Frequently Asked Questions
      </h3>

      <div className="flex flex-col gap-2">
        <div className=" rounded-xl  pb-2">
          <h2 className="text-lg text-text font-semibold">
            What is Youtube To MP3 downloader?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Youtube To MP3 Downloader is a tool that allows you to covert and
            download Youtube videos to MP3 for free. Supports conversion of
            Youtube videos to MP3 with high quality.
          </p>
        </div>

        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Can I convert Youtube videos to mp3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Our Youtube video downloader in addition to supporting downloading
            Youtube videos to your device in many different formats.
            youtubemp3.io also has Youtube to mp3 feature that allows you to
            convert Youtube videos to high quality MP3, MP4: 328kbps
          </p>
        </div>

        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            How to download Youtube Videos in MP3?
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Step 1: Open the Youtube app on your phone or visit the
              Youtube.com website.
            </span>
            <span className="flex flex-col">
              Step 2: Find and open the video you want to download and click the
              Share button then press the Copy link button.
            </span>
            <span className="flex flex-col">
              Step 3: Go to youtubemp3.io, paste the copied Youtube link in the
              search box and press the Download button.
            </span>
          </div>
        </div>
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Where are downloaded Youtube videos saved?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Please check the &quot;Downloads&quot;folder in your phone or the
            &quot;download history&quot; section of your browser.
          </p>
        </div>
        <div className=" rounded-xl  py-2">
          <h2 className="text-lg text-text font-semibold">
            Is there any limit on amount videos you can convert?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            You can convert videos without any limit. However, we may restrict
            conversions in some situations, such as: Bot/scraping activity,
            abusive use, or insufficient resources to handle converts
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
