/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import styles from "./ItemQuantity.module.css";

import {
  IncItem,
  decItem,
  removeFromCart,
} from "../../features/slices/cartSlice";

import AddButton from "../../ui/Buttons/AddButton";
import DecButton from "../../ui/Buttons/DecButton copy";
import Xmark from "../../ui/Buttons/Xmark";
import DeleteButton from "../../ui/Buttons/DeleteButton";

function ItemQuantity({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.qunatityRow}>
      {item.quantity > 1 ? (
        <div
          className={styles.incButton}
          onClick={() => dispatch(decItem(item.id))}
        >
          <DecButton />
        </div>
      ) : (
        <p
          className={styles.delButton}
          onClick={() => dispatch(removeFromCart(item))}
        >
          <DeleteButton />
        </p>
      )}

      <p className={styles.quantity}>
        <span>{<Xmark />}</span>
        {item.quantity}
      </p>

      <div
        className={styles.decButton}
        onClick={() => dispatch(IncItem(item.id))}
      >
        <AddButton />
      </div>
    </div>
  );
}

export default ItemQuantity;
