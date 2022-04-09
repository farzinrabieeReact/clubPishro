import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export function ServisesHome() {
  return (
    <div className="mt-15 mb-15">
      <Swiper
        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // scrollbar={true}
        slidesPerView={"auto"}
        // centeredSlides={true}
        // freeMode={true}
        // freeModeSticky={true}
        grabCursor={true}
        loop={true}
      >
        {data.map((item, ind) => (
          <SwiperSlide
            key={ind}
            style={
              ind !== 0
                ? { marginRight: "30px", width: "auto" }
                : { width: "auto", marginRight: 30 }
            }
          >
            {item.option ? (
              <a target="_blank" href={item.link} className="shadow">
                <img
                  src={`/media/common/home/${item.src}.png`}
                  alt="pishro"
                  style={{
                    width: "auto",
                    height: 200,
                    borderRadius: "30px !important"
                  }}
                  className="img"
                />
              </a>
            ) : (
              <Link to={item.link} className="shadow">
                <img
                  src={`/media/common/home/${item.src}.png`}
                  alt="pishro"
                  style={{
                    width: "auto",
                    height: 200,
                    borderRadius: "30px !important"
                  }}
                  className="img"
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

let data = [
  { src: "Competition", link: "/competitions", option: false },
  { src: "Credit", link: "/creadit", option: false },
  // { src: "Heatmap", link: "#" },
  {
    src: "Onlien-Plus",
    link: "https://pishro.exirbroker.ir/exir/login?returnUrl=%2F/",
    option: true
  },
  { src: "Orders", link: "/stock", option: false },
  { src: "Score", link: "/about", option: false }
  // { src: "Competition", link: "#" },
  // { src: "Competition", link: "#" },
  // { src: "Competition", link: "#" },
  // { src: "service1", link: "#" },
  // { src: "service2", link: "#" },
  // { src: "service3", link: "#" },
  // { src: "service4", link: "#" },
];
