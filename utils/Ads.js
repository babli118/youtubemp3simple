import React, { useEffect } from "react";

const Ads = ({ showAds }) => {
  useEffect(() => {
    if (showAds) {
      // Define the scripts to be loaded
      const scripts = [
        {
          src: "https://hoomigri.com/tag.min.js",
          attributes: { "data-zone": "8566015" },
        },
        {
          src: "gh.oweltyagruif.com/fSuTBgzUgzz1c/112267",
          attributes: { "data-cfasync": "false", async: "true" },
        },
      ];

      // Append all scripts to the document
      const appendedScripts = scripts.map((scriptData) => {
        const script = document.createElement("script");
        script.src = scriptData.src;

        // Add additional attributes if specified
        Object.entries(scriptData.attributes || {}).forEach(([key, value]) => {
          script.setAttribute(key, value);
        });

        // Append script to the document
        const target = document.body || document.documentElement;
        target.appendChild(script);
        return script;
      });

      // Cleanup on unmount or showAds change
      return () => {
        appendedScripts.forEach((script) => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        });
      };
    }
  }, [showAds]); // Runs whenever showAds changes

  return null; // Does not render anything in JSX
};

export default Ads;
