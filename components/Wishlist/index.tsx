import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Badge } from "@mui/material";
import useCart from "../../context/Cart/CartContext";

const Wishlist = ({ fontSize, onClick }: any) => {
const {wishlistItems}= useCart();
  return (
    <IconButton onClick={onClick} className="c-b">
      <Badge badgeContent={wishlistItems.length} color="secondary" showZero >
        <FavoriteBorderIcon
          cursor="pointer"
          fontSize={fontSize}
        />
      </Badge>
    </IconButton>
  );
};

export default Wishlist;
