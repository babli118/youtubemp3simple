import React from "react";

const FAQ = () => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center text-start mb-10 mt-8">
      <h3 className="text-3xl font-semibold text-text mb-6">
        Sıkça Sorulan Sorular
      </h3>

      <div className="flex flex-col gap-2">
        <div className="rounded-xl pb-2">
          <h2 className="text-lg text-text font-semibold">
            YouTube&apos;dan MP3&apos;e dönüştürücü nedir?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            YouTube&apos;dan MP3&apos;e dönüştürücü, YouTube videolarını
            ücretsiz olarak MP3&apos;e dönüştürmenize ve indirmenize olanak
            tanıyan bir araçtır. Yüksek kaliteli YouTube video to MP3
            conversion.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            YouTube videolarını MP3 formatında nasıl indirebilirim?
          </h2>
          <div className="text-sm sm:text-base font-normal mt-2 text-text flex flex-col gap-2">
            <span className="flex flex-col">
              Adım 1: Telefonunuzda YouTube uygulamasını açın veya YouTube.com
              web sitesini ziyaret edin.
            </span>
            <span className="flex flex-col">
              Adım 2: İndirmek istediğiniz videoyu bulun ve açın, Paylaş
              düğmesine tıklayın, ardından Bağlantıyı kopyala düğmesine basın.
            </span>
            <span className="flex flex-col">
              Adım 3: youtubemp3.io adresine gidin, kopyalanan YouTube
              bağlantısını arama kutusuna yapıştırın ve İndir düğmesine basın.
            </span>
          </div>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            YouTube videolarını MP3&apos;e dönüştürebilir miyim?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            YouTube video indiricimiz, YouTube videolarını cihazınıza birçok
            farklı formatta indirmeyi desteklemenin yanı sıra, youtubemp3.io
            ayrıca YouTube videolarını yüksek kaliteli MP3, MP4: 328kbps&apos;ye
            dönüştürmenize olanak tanıyan YouTube&apos;dan MP3&apos;e özelliğine
            sahiptir.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            İndirilen YouTube sesleri nereye kaydedilir?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Lütfen telefonunuzdaki &quot;İndirilenler&quot; klasörünü veya
            tarayıcınızın &quot;indirme geçmişi&quot; bölümünü kontrol edin.
          </p>
        </div>

        <div className="rounded-xl py-2">
          <h2 className="text-lg text-text font-semibold">
            Dönüştürebileceğiniz video miktarında herhangi bir sınırlama var mı?
          </h2>
          <p className="text-sm sm:text-base font-normal mt-2 text-text">
            Videoları sınırsız olarak dönüştürebilirsiniz. Ancak, aşağıdaki gibi
            bazı durumlarda dönüşümleri kısıtlayabiliriz: Bot/kazıma etkinliği,
            kötü amaçlı kullanım veya dönüşümleri işlemek için kaynakların
            yetersiz olması.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
