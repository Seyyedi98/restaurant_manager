import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Button from "../../ui/Buttons/Button";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../features/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        My Cart <span>Total price: ${totalPrice}</span>
      </h2>

      <div className={styles.line}></div>
      {cart.length > 0 ? (
        <div className={styles.items}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className={styles.button}>
            <Button>Checkout</Button>
          </div>
        </div>
      ) : (
        "Start adding foods to your cart"
      )}
    </div>
  );
}

export default Cart;
