/* eslint-disable no-unused-vars */
import styles from "./Categories.module.css";
import "swiper/css";

import CategoryItemCard from "./CategoryItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import pizza from "../../assets/images/categories/pizza.png";
import burger from "../../assets/images/categories/burger.png";
import drink from "../../assets/images/categories/drink.png";
import fruits from "../../assets/images/categories/fruits.png";
import hotdog from "../../assets/images/categories/hotdog.png";
import snacks from "../../assets/images/categories/snacks.png";
import veggie from "../../assets/images/categories/veggie.png";
import arrow_right from "../../assets/icons/Arrow-Right.svg";
import { useState } from "react";

const categories = [
  {
    title: "Pizza",
    image: pizza,
  },
  {
    title: "Fruits",
    image: fruits,
  },
  {
    title: "Snacks",
    image: snacks,
  },
  {
    title: "Veggie",
    image: veggie,
  },
  {
    title: "Hotdog",
    image: hotdog,
  },
  {
    title: "Burger",
    image: burger,
  },
  {
    title: "Drinks",
    image: drink,
  },
];

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
