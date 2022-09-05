import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative">
          <img loading="lazy" src="/images/slider-1.jpg" alt="" />
          <div className="absolute top-10 left-10 md:top-1/3  ">
            <p className=" md:text-3xl md:text-start">Onward</p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              1 jam 42 Menit
            </p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              Berlokasi di tepian dunia fantasi, Onward memperkenalkan dua peri
              remaja bersaudara yang memulai pencarian luar biasa untuk
              mengetahui apakah masih ada sedikit keajaiban yang tersisa di
              sana.
            </p>
          </div>
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
          <div className="absolute top-10 left-10 md:top-1/3  ">
            <p className="md:text-3xl md:text-start">Rabbitz</p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              30 Menit
            </p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              Setelah hancurnya Kekaisaran Galaksi, kekacauan tersebar di
              seluruh galaksi. Seorang penembak penyendiri berusaha menjelajahi
              wilayah terluar, mendapatkan penghasilannya sebagai pemburu
              hadiah.
            </p>
          </div>
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
          <div className="absolute top-10 left-10 md:top-1/3  ">
            <p className="md:text-3xl md:text-start">WandaVision</p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              1 Season
            </p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              Wanda Maximoff dan Vision, dua makhluk super yang menjalani
              kehidupan pinggiran kota yang ideal, mulai curiga semuanya tidak
              seperti yang terlihat.
            </p>
          </div>
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
          <div className="absolute top-10 left-10 md:top-1/3  ">
            <p className="md:text-3xl md:text-start">The Mandalorian</p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              3 Season
            </p>
            <p className="hidden md:flex text-sm max-w-md text-start mt-3 text-gray-300">
              Setelah hancurnya Kekaisaran Galaksi, kekacauan tersebar di
              seluruh galaksi. Seorang penembak penyendiri berusaha menjelajahi
              wilayah terluar, mendapatkan penghasilannya sebagai pemburu
              hadiah.
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
