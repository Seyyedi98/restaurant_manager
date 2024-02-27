/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";

import Xmark from "../../ui/Buttons/Xmark";
import Trash from "../../ui/Buttons/Trash";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={item.image} alt="food image" />
      </div>
      <div className={styles.item_leftCol}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.quantity}>
          <span>{<Xmark />}</span>2
        </p>
      </div>
      <div className={styles.item_rightCol}>
        <div
          className={styles.trash}
          onClick={() => dispatch(removeFromCart({ id: item.id }))}
        >
          {<Trash />}
        </div>
        {/* <div className={styles.price}>${item.quantity * item.price}</div> */}
        <div className={styles.price}>${item.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
