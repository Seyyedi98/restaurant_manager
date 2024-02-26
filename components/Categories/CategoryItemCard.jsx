/* eslint-disable react/prop-types */
import styles from "./CategoryItemCard.module.css";
import Arrow from "../../ui/Buttons/Arrow";

function CategoryItemCard({ item, active, setCurrentFilter }) {
  return (
    <div
      className={`${styles.card} ${active ? styles.card_active : null}`}
      onClick={() => setCurrentFilter(item.title)}
    >
      <img className={styles.image} src={item.image} alt="food image" />
      <h6 className={`${styles.title} ${active ? styles.title_active : null} `}>
        {item.title}
      </h6>
      <div className={`${styles.line} ${active ? styles.line_active : null}`} />
      <div
        className={`${styles.arrow_icon} ${
          active ? styles.arrow_icon_active : null
        }`}
      >
        <Arrow />
      </div>
    </div>
  );
}

export default CategoryItemCard;
