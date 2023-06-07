import React, { FC, ReactElement } from "react";
import Link from "next/link";
import {
  CurrencyRupee as CurrencyRupeeIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { Button, Typography, Grid, Paper, Container, Box } from "@mui/material";
import styles from "./cartlist.module.css";
import ShoppingBag from "../../components/Common/ShoppingBag";
import { Routes } from "../../routes/pageRoutes";
import useCart from "../../context/Cart/CartContext";
import { getCartTotal } from "../../util/PriceFormatter";

const CartList: FC = (): ReactElement => {
  const { cartItems, addToWishList, removeFromCart } = useCart();
  const totalAmount = getCartTotal(cartItems);

  return (
    <Container>
      {cartItems.length > 0 ? (
        <Grid container spacing={2} className="mt-2 mb-2">
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Paper
              className="p-1"
            >
              {cartItems.map((product) => (
                <Grid
                  container
                  spacing={2}
                  key={product.id}
                >
                  <Grid item xs={3} sm={4} md={4} lg={4} className="ta-c">
                    <Link href={`/productDetail/${product.id}`}>
                      <img
                        alt="complex"
                        src={product.image}
                        className={styles.image}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Typography className={styles.text}>
                      {product.title}
                    </Typography>
                    <Typography className={styles.text}>
                      {product.category}&nbsp;|&nbsp; The Bimba
                    </Typography>
                    <Typography color="text.secondary" className={styles.text}>
                      {product.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sm={2} md={2} lg={2} className="d-f jc-c">
                    <DeleteIcon onClick={() => removeFromCart(product.id)} cursor="pointer" className={styles.icon} />
                    &nbsp;&nbsp;
                    <FavoriteBorderIcon
                      cursor="pointer"
                      onClick={() => addToWishList(product)}
                      className={styles.icon}
                    />
                  </Grid>
                </Grid>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper
              className="p-1">
              <Box className="mb-1 d-f jc-sb">
                <Typography className={styles.text}>Subtotal:</Typography>
                <Box className="d-f">
                  <CurrencyRupeeIcon className={styles.text} />
                  <Typography className={styles.text}>{totalAmount.toFixed(2)}</Typography>
                </Box>
              </Box>
              <Typography className={styles.text}>
                Tax included and shipping calculated at checkout
              </Typography>
              <Link href='/checkout'><Button fullWidth variant="contained" className="mt-2">CheckOut</Button></Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Paper className="mt-2 mb-2">
              <Link href='/checkout'><Button fullWidth variant='contained'>CheckOut</Button></Link>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Box className="ta-c jc-c mt-2 mb-2 pt-2">
          <ShoppingBag />
          <Typography className={styles.icon}>CARTLIST IS EMPTY.</Typography>
          <Typography className={styles.text} sx={{ marginTop: 'var(--spacing-2)' }}>
            you dont have any products in the cartlist yet.
          </Typography>
          <Typography className={styles.text} sx={{ marginTop: 'var(--spacing-2)' }}>
            You will find a lot of interesting products on our {"Shop"} page.
          </Typography>
          <Button variant="contained" className="mt-1">
            <Link href={Routes.productlist} className="c-w">CONTINUE SHOPPING</Link>
          </Button>
        </Box>
      )
      }
    </Container>
  );
};

export default CartList;