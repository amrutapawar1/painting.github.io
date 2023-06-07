import React, { FC, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";
import styles from "./GroupedButtons.module.css";
import useCart from "../../../context/Cart/CartContext";
import { IProduct } from "../../../types/product";
type Props = {
  product: IProduct,
  quantity: number
}
const GroupedButtons = ({ product, quantity }: Props) => {
  
  const { incrementQty,decrementQty } = useCart();

  const [count, setCount] = useState<number>(quantity);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  const incrementCount = () => {
    setCount(Number(count) + 1);
    incrementQty(product)
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      decrementQty(product)
    }
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      size="small"
      className={styles.button_group}
    >
      <Button onClick={decrementCount} className={styles.button}>
        -
      </Button>
      <Button>
        <input
          type="text"
          name="count"
          value={count}
          onChange={handleChange}
          className={styles.input}
        />
      </Button>
      <Button onClick={incrementCount} className={styles.button}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupedButtons;
