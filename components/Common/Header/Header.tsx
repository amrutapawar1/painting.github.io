import React, { useState, ReactElement, FC } from "react";
import { AppBar, Grid, Box } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import styles from "./Header.module.css";
import Wishlist from "../../Wishlist";
import ShoppingBag from "../ShoppingBag";
import HeaderDesktopView from "./HeaderDesktopView";
import HeaderMobileView from "./HeaderMobileView";
import ProfileDropdown from "../Profile/ProfileDropdown";
import SearchBar from "../SearchBar";
import CommonDrawer from "../CommonDrawer";

const Header: FC = (): ReactElement => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const [drawer, setDrawer] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };

  const onCartWishlistClick = (value: string) => {
    handleChange();
    setDrawer(value);
  }

  return (
    <AppBar className={styles.appbar}>
      <Grid container spacing={2}>
        <Grid item xs={7} sm={7} md={6} lg={6} xl={6} className="as-c">
          <HeaderDesktopView authStatus={authStatus} />
          <HeaderMobileView authStatus={authStatus} />
        </Grid>
        <Grid
          item
          xs={5}
          sm={5}
          md={6}
          lg={6}
          xl={6}
          className={styles.btnStyle}
        >
          <Box className={styles.searchBoxStyle}>
            <SearchBar />
          </Box>
          <Box className="pr-1 d-f">
            <ProfileDropdown />
            <Wishlist onClick={() => onCartWishlistClick('wishlist')} fontSize={"small"} />
            <ShoppingBag onClick={() => onCartWishlistClick('cart')} fontSize={"small"} />
          </Box>
        </Grid>
        <CommonDrawer
          handleChange={handleChange}
          toggle={toggle}
          view={drawer}
        />
      </Grid>
    </AppBar>
  );
};

export default Header;
