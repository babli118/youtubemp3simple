"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return (
    <div className="my-26 text-6xl text-center text-text font-bold">
      Youtube To MP3
    </div>
  );
}
