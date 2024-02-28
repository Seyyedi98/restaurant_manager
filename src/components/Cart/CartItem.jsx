/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";
import Trash from "../../ui/Buttons/Trash";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";
import ItemQuantity from "./ItemQuantity";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={item.image} alt="food image" />
      </div>
      <div className={styles.item_leftCol}>
        <p className={styles.name}>{item.name}</p>
        <ItemQuantity item={item} />
      </div>
      <div className={styles.item_rightCol}>
        <div
          className={styles.trash}
          onClick={() => dispatch(removeFromCart({ id: item.id }))}
        >
          {<Trash />}
        </div>
        <div className={styles.price}>${item.quantity * item.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
