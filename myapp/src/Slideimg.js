// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FoodSlider.css";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slideimg() {
  const foodItems = [
    { title: "Biryani", desc: "Authentic taste of tradition!", img: "/pictures/bir1.png" },
    { title: "Spicy Noodles", desc: "Taste the hot and spicy flavors!", img: "/pictures/chickennoodles.png" },
    { title: "Ice Cream", desc: "Cool down with creamy delights!", img: "/pictures/pngwing.com.png" },
    { title: "Tiffins", desc: "Delicious South Indian breakfast", img: "/pictures/idli.png" },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true} // Enables infinite loop
      pagination={{
        clickable: true, // Allow pagination indicators to be clicked
      }}
      navigation={true} // Enable navigation buttons if needed
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {foodItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <h1 className="slide-name">{item.title}</h1>
            <p className="slide-disp">{item.desc}</p>
            <button>Order now</button>
          </div>
          <img src={item.img} alt={item.title} className="slide-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
