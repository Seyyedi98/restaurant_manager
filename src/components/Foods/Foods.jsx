/* eslint-disable no-unused-vars */
import FoodCard from "./FoodCard";
import styles from "./Foods.module.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid } from "swiper/modules";

import { foods } from "../../data/data";

function Foods() {
  return (
    <div className={styles.foods}>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {foods.map((food) => (
            <SwiperSlide key={food.id}>
              <FoodCard food={food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Foods;
