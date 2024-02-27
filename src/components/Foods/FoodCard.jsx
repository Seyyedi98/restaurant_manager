/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./FoodCard.module.css";

import AddButton from "../../ui/Buttons/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

function FoodCard({ food }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const { id, name, calories, price, image, persons } = food;

  return (
    <div className={styles.card}>
      <div className={styles.text_col}>
        <h2 className={styles.food_name}>{name}</h2>
        <p className={styles.food_calories}>{calories} Caories</p>
        <div className={styles.line} />
        <p className={styles.for_persons}>{persons} persons</p>
        <div className={styles.price}>
          <span className={styles.price_text}>${price}</span>
          <div
            className={styles.addButton}
            onClick={() =>
              dispatch(addToCart({ id, name, calories, price, image, persons }))
            }
          >
            <AddButton />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt="food image" />
      </div>
    </div>
  );
}

export default FoodCard;
