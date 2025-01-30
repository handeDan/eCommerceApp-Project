import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

function Main() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // 2 saniye sonra slider değişecek
          disableOnInteraction: false, // Kullanıcı etkileşimiyle durmaz
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              backgroundImage: "url('/images/main-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              height: "100vh", // Ekranın tamamını kaplasın
            }}
          >
            <div className="flex flex-col items-center pt-20">
              <p className="logo text-5xl">FURNITURE STORE.</p>
              <br />
              <p>Discover our products</p>
              <button
                onClick={handleClick}
                className="bg-gray-950 hover:bg-gray-500 text-xl text-white font-bold py-3 px-6 rounded-full m-5"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              backgroundImage: "url('/images/main-bg4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh", // Ekranın tamamını kaplasın
            }}
          >
            <div className="flex flex-col items-center pt-20">
              <p className="logo text-5xl">THE BEST PRODUCTS EVER</p>
              <br />
              <p>Discover our best products</p>
              <button
                onClick={handleClick}
                className="bg-gray-950 hover:bg-gray-500 text-xl text-white font-bold py-3 px-6 rounded-full m-5"
              >
                CHECK NOW
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              backgroundImage: "url('/images/main-bg3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh", // Ekranın tamamını kaplasın
            }}
          >
            <div className="flex flex-col items-center pt-20">
              <p className="logo text-5xl">BEST SELLERS</p>
              <br />
              <p>Discover our best sellers</p>
              <button
                onClick={handleClick}
                className="bg-gray-950 hover:bg-gray-500 text-xl text-white font-bold py-3 px-6 rounded-full m-5"
              >
                DISCOVER NOW
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Main;
