import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Badge } from "@mui/material";
import useCart from "../../../context/Cart/CartContext";

type ShoppingBag={
  fontSize?: "small" | "inherit" | "large" | "medium" ;
   onClick?:()=>void | string;
}
const ShoppingBag = ({ fontSize, onClick }: ShoppingBag) => {
  const { cartItems }=useCart();
  return (
    <IconButton onClick={onClick} className="c-b">
      <Badge badgeContent={cartItems.length} color="secondary" showZero>
        <ShoppingCartOutlinedIcon cursor="pointer" fontSize={fontSize} />
      </Badge>
    </IconButton>
  );
};

export default ShoppingBag;
