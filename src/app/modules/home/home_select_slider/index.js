import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "./style.module.css";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper/core";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/home/home_select_slider";
import LinearProgress from "@material-ui/core/LinearProgress";
import { CircularProgress } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Slider() {
  const stateReducer = useSelector(state => state.reducer_select_slider);
  const dispatch = useDispatch();

  let data = stateReducer.data[0]
    ? JSON.parse(stateReducer.data[0].body.content)
    : null;

  useEffect(() => {
    dispatch({ type: actionTypes.sliderAsync });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="rounded-lg mt-5"></div>

      <Swiper
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        className={styles.swipercontainer}
        loop={true}
      >
        {stateReducer.loading ? (
          <SwiperSlide style={{ width: "100%" }}>
            <a href={"#"}>
              <div
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    zIndex: "2"
                  }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <CircularProgress />
                </div>
                <img
                  style={{ position: "relative", zIndex: "1" }}
                  src={"/media/img/SliderDefault.png"}
                  alt={"mobin"}
                  className="w-100 h-100"
                />
              </div>
            </a>
          </SwiperSlide>
        ) : (
          data?.content.map(
            (item, ind) =>
              item.showSlider && (
                <SwiperSlide key={ind} className={styles.swiperslide}>
                  <a href={item.Link}>
                    <img
                      src={item.IMAGE_URI}
                      alt={item.Title}
                      className="img-fluid"
                    />
                  </a>
                </SwiperSlide>
              )
          )
        )}
      </Swiper>
    </div>
  );
}
