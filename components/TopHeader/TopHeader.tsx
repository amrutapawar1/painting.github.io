import React, { useState, ReactElement, FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Grid, Toolbar, InputBase, Button } from '@mui/material';
import styles from './TopHeader.module.css';
import Wishlist from '../Wishlist';
import ShoppingBag from '../common/ShoppingBag';
import CommonDrawer from '../common/CommonDrawer';

const TopHeader: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [drawer, setDrawer] = useState('');

  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  }
  const handleCartDrawer = () => {
    handleChange();
    setDrawer('cart');
  }
  const handleWishlistDrawer = () => {
    handleChange();
    setDrawer('wishlist');
  }

  return (
    <AppBar position="static" className={styles.appbarStyle}>
      <Toolbar disableGutters>
        <Grid container spacing={0} className={styles.gridContainer}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className={styles.btn} sx={{ display: "flex" }}>
            <InputBase
              placeholder="Search our store"
              inputProps={{ 'aria-label': 'search' }}
              className={styles.searchInputStyle}
            />
            <SearchIcon />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
            <Button className={styles.btn}>Our Brands</Button>
          </Grid>
          <Grid item xs={0} sm={0} md={5} lg={5} xl={5}></Grid>
          <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
            <Button
              onClick={handleCloseNavMenu}
              className={styles.btn}
            >
              <Wishlist onClick={handleWishlistDrawer} fontSize={'small'} />
            </Button>
          </Grid>
          <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
            <Button
              onClick={handleCloseNavMenu}
              className={styles.btn}
            >
              <ShoppingBag onClick={handleCartDrawer} fontSize={'small'} />
            </Button>
          </Grid>
          <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
            <Button className={styles.btn}>Login</Button>
          </Grid>
        </Grid>
      </Toolbar>
      <CommonDrawer handleChange={handleChange} toggle={toggle} view={drawer} />
    </AppBar>
  );
}
export default TopHeader;