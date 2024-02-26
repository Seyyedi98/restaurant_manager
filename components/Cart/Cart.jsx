import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import food1 from "../../assets/images/foods/Trending image 1-1.png";
import food2 from "../../assets/images/foods/Trending image 2-1.png";
import food3 from "../../assets/images/foods/Trending image 3-1.png";
import Button from "../../ui/Buttons/Button";

const cartItems = [
  {
    productId: 1,
    productName: "Pizza",
    quantity: 2,
    price: 29,
    image: food1,
  },
  {
    productId: 2,
    productName: "Humberger",
    quantity: 2,
    price: 19,
    image: food2,
  },
  {
    productId: 3,
    productName: "Soda",
    quantity: 2,
    price: 9,
    image: food3,
  },
];

function Cart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Cart</h2>
      <div className={styles.line}></div>
      <div className={styles.items}>
        {cartItems.map((item) => (
          <CartItem key={item.productName} item={item} />
        ))}
      </div>
      <div className={styles.button}>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;
