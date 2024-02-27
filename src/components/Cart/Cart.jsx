import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Button from "../../ui/Buttons/Button";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Cart</h2>
      <div className={styles.line}></div>
      {cart.length > 0 ? (
        <div className={styles.items}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        // <div className={styles.items}>
        //   {cartItems.map((item) => (
        //     <CartItem key={item.productName} item={item} />
        //   ))}
        // </div>
        "Start adding foods to your cart"
      )}
      <div className={styles.button}>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;
