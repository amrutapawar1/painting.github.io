import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getApiData } from "../../../pages/api/getApiData";
import Link from "next/link";
import styles from "./ProductList.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Routes } from "../../../routes/pageRoutes";
import CustomPagination from "../../ui-components/Pagination";
import { usePagination } from "../../../hooks/usePagination";
import ProductCard from "../ProductCard";
import { IProduct } from "../../../types/product";

type Props = {
  maxLength?: number;
};

const PER_PAGE = 12;

const ProductList = ({ maxLength }: Props) => {
  const [products, setProducts] = useState([]);
  const totalItems = products.length;

  const {
    currentPage,
    handlePageChange,
    startIndex,
    endIndex,
    handlePrevClick,
    handleNextClick,
    totalPages,
  } = usePagination({
    total: totalItems,
    perPage: PER_PAGE,
  });

  const getData = async () => {
    const productsData = await getApiData();
    setProducts(productsData);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Grid container spacing={0}>
        {displayedProducts.map((post: IProduct) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            key={post.id}
            sx={{ padding: "var(--spacing-2)" }}
          >
            <ProductCard product={post} />
          </Grid>
        ))}
      </Grid>
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handlePageChange}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        size="small"
        shape="circular"
      />
      <Grid className="d-f jc-c">
        {maxLength && (
          <>
            <Link href={Routes.productlist} className={styles.communityBtn}>
              Show More
            </Link>
            <ArrowRightAltIcon
              fontSize="medium"
              className={styles.right_icon}
            />
          </>
        )}
      </Grid>
    </>
  );
};

export default ProductList;
