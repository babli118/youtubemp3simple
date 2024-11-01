import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center text-start mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        Pertanyaan yang Sering Diajukan
      </h3>

      <div className="flex flex-col gap-2">
        <div className="rounded-xl pb-2">
          <h2 className="text-lg text-text font-semibold">
            Apa itu pengunduh YouTube ke MP3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Pengunduh YouTube ke MP3 adalah alat yang memungkinkan Anda
            mengonversi dan mengunduh video YouTube ke MP3 secara gratis.
            Mendukung konversi video YouTube ke MP3 dengan kualitas tinggi.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Bisakah saya mengonversi video YouTube ke MP3?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Pengunduh video YouTube kami, selain mendukung pengunduhan video
            YouTube ke perangkat Anda dalam berbagai format, juga memiliki fitur
            YouTube ke MP3 yang memungkinkan konversi video YouTube ke MP3
            berkualitas tinggi, MP4: 328kbps.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Bagaimana cara mengunduh video YouTube ke MP3?
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Langkah 1: Buka aplikasi YouTube di ponsel Anda atau kunjungi
              situs web YouTube.com.
            </span>
            <span className="flex flex-col">
              Langkah 2: Temukan dan buka video yang ingin Anda unduh, klik
              tombol Bagikan lalu tekan tombol Salin Tautan.
            </span>
            <span className="flex flex-col">
              Langkah 3: Pergi ke youtubemp3.io, tempel tautan YouTube yang
              telah Anda salin ke dalam kotak pencarian, dan tekan tombol Unduh.
            </span>
          </div>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Di mana video yang diunduh dari YouTube disimpan?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Silakan periksa folder &quot;Unduhan&quot; di ponsel Anda atau di
            bagian &quot;riwayat unduhan&quot; di browser Anda.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Apakah ada batasan jumlah video yang dapat dikonversi?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Anda dapat mengonversi video tanpa batasan. Namun, kami dapat
            membatasi konversi dalam situasi tertentu, seperti aktivitas bot,
            penggunaan berlebihan, atau sumber daya yang tidak mencukupi untuk
            menangani konversi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
