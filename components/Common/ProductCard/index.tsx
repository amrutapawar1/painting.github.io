import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Fab,
  Box,
} from "@mui/material";
import { IProduct } from "../../../types/product";
import { formatPrice, getDiscountedPrice } from "../../../util/PriceFormatter";
import styles from "./ProductCard.module.css";
import {
  FavoriteBorder as FavoriteBorderIcon,
  ShoppingCart as ShoppingCartIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import useCart from "../../../context/Cart/CartContext";
import { showSuccessMessage } from "../Alerts";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProductCardProps {
  product: IProduct;
  category?: string;
}

const ProductCard = (props: IProductCardProps) => {
  const [isShown, setIsShown] = useState(false);
  const { product, category } = props;
  const router = useRouter();
  const { addToCart, addToWishList, removeFromCart, removeFromWishList } =  useCart();

  const onCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    router.push(`/productDetail/${product.id}`);
  };
  return (
    <Card
      className={styles.card}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={onCardClick}
    >
      <CardMedia
        className={styles.card_media}
        component="img"
        image={product.image}
        alt={product.alt}
      />
      <Box className={"d-f jc-sb"} height={0}>
        <Button className={styles.badge_button}>
          -{`${product.discount}%`}
        </Button>
        {isShown && (
          <Box className={styles.action_buttons_container}>
            <Fab
              aria-label="like"
              size="small"
              className={styles.action_buttons}
            >
              <FavoriteBorderIcon
                cursor="pointer"
                onClick={() => {
                  addToWishList(product);
                  showSuccessMessage("Added to Wishlist");
                }}
                className="fs-15"
              />
            </Fab>
            <Fab
              aria-label="like"
              size="small"
              className={styles.action_buttons}
            >
              <ShoppingCartIcon
                onClick={() => {
                  addToCart(product);
                  showSuccessMessage("Added to Cart");
                }}
                cursor="pointer"
                className="fs-15"
              />
            </Fab>
          </Box>
        )}
      </Box>
      <CardContent>
        <Box className={"d-f ai-c"}>
          <Typography className={styles.product_price}>
            {formatPrice(
              getDiscountedPrice({
                price: product.price,
                discount: product.discount,
              })
            )}
          </Typography>
          <Typography className={styles.old_price}>
            {formatPrice(product.price)}
          </Typography>
        </Box>
        <Link href={`/productDetail/${product.id}`}>
          <Typography
            gutterBottom
            component="div"
            className={styles.product_title}
          >
            {product.title}
          </Typography>
        </Link>
      </CardContent>
      {category === "ViewCart" && (
        <>
          <ShoppingCartIcon
            onClick={() => {
              addToCart(product);
              showSuccessMessage("Added to Cart");
            }}
            cursor="pointer"
          />
          &nbsp;&nbsp;
          <DeleteIcon
            onClick={() => removeFromCart(product.id)}
            cursor="pointer"
          />
        </>
      )}
      {category === "WishList" && (
        <>
          <FavoriteBorderIcon
            onClick={() => {
              addToWishList(product);
              showSuccessMessage("Added to Wishlist");
            }}
            cursor="pointer"
          />
          &nbsp;&nbsp;
          <DeleteIcon
            onClick={() => removeFromWishList(product.id)}
            cursor="pointer"
          />
        </>
      )}
    </Card>
  );
};

export default ProductCard;
