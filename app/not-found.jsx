"use client";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    // Redirect to the home page after a slight delay to ensure rendering
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10); // 100 ms delay

    return () => clearTimeout(timer); // Clean up timer if the component unmounts
  }, []);

  return (
    <div className="my-36 text-text text-8xl text-center my-  font-bold">
      404
    </div>
  ); // No need to render anything
};

export default NotFound;
