/* eslint-disable no-unused-vars */
import styles from "./FoodCard.module.css";

import food from "../../assets/images/foods/Spaghetti.png";

function FoodCard() {
  return (
    <div className={styles.card}>
      <div className={styles.text_col}>
        <h2 className={styles.food_name}>Italian Salad</h2>
        <p className={styles.food_calories}>70 Caories</p>
        <div className={styles.line} />
        <p className={styles.for_persons}>4 persons</p>
        <p className={styles.price}>
          <span className={styles.price_text}>$7.49</span>
          <button>+</button>
        </p>
      </div>
      <div className={styles.image}>
        <img src={food} alt="food image" />
      </div>
    </div>
  );
}

export default FoodCard;