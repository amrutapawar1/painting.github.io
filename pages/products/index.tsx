import { Grid, Box } from "@mui/material";
import React, { FC, ReactElement } from "react";
import BreadCrumbs from "../../components/common/BreadCrumbs/BreadCrumbs";
import Filters from "../../components/Filters/Filters";
import FilterBar from "../../components/Filters/FilterBar";
import styles from "./Productlist.module.css";
import ProductList from "../../components/common/ProductList";
import ProductListMobileView from "./ProductListMobileView";

const Products: FC = (): ReactElement => {
  return (
    <>
      <BreadCrumbs title={"Products"} />
      <Grid container spacing={0} className={styles.product_list_desktop_view}>
        <Grid item sm={3} md={2} lg={2}>
          <Filters />
        </Grid>
        <Grid item sm={9} md={10} lg={10} className={styles.product_list}>
          <FilterBar />
          <ProductList />
        </Grid>
      </Grid>
      <Box className={styles.product_list_mobile_view}>
        <ProductList/>
        <ProductListMobileView />
      </Box>
    </>
  );
};

export default Products;
