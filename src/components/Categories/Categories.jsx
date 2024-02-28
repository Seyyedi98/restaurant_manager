/* eslint-disable no-unused-vars */
import styles from "./Categories.module.css";
import "swiper/css";

import CategoryItemCard from "./CategoryItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";

import arrow_right from "../../assets/icons/Arrow-Right.svg";
import { categories } from "../../data/data";

function Categories() {
  const [currentFilter, setCurrentFilter] = useState("Pizza");

  return (
    <div className={styles.categories}>
      <div className={styles.header}>
        <h2 className={styles.title}>Menu Categories</h2>
        <div className={styles.view_all}>
          <h4>View All</h4>
          <img
            src={arrow_right}
            alt="open menu icon"
            className={styles.show_menu}
          />
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          spaceBetween={35}
          slidesPerView={2}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            620: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1600: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          // loop={true}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.title}>
              <CategoryItemCard
                active={category.title === currentFilter}
                setCurrentFilter={setCurrentFilter}
                item={category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Categories;
