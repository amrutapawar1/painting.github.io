import React, { useState, useEffect, useMemo } from 'react';
import { Box, FormControl, Grid, InputLabel, Link, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './Homepage.module.css';
import { getApiData } from '../../pages/api/getApiData';
import { Routes } from '../../routes/pageRoutes';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProductCard from '../Common/ProductCard';

const options = [
  { label: 'Latest', value: "men's clothing" },
  { label: 'Bestsellers', value: 'electronics' },
  { label: 'Featured', value: 'Bestsellers' }]

export default function ProductSection() {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [active, setActive] = useState("men's clothing");

  const handleChangeCategory = (cat: string) => {
    setSelectedCategory(cat);
    setActive(cat);
  }
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const productsData = await getApiData();
    setProducts(productsData);
  };
  useEffect(() => {
    getData();
  }, [])

  const getFilteredList = () => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category === selectedCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, products]);
  return (
    <>
      <Box className={styles.productTitleBox}>
        <Link className={active === ("men's clothing") ? `${styles.productTitleLinkActive}` : `${styles.productTitleLink}`} onClick={() => { handleChangeCategory("men's clothing") }}>Latest&nbsp;</Link>
        <Link className={styles.productTitleLink}>/</Link>
        <Link className={active === ('electronics') ? `${styles.productTitleLinkActive}` : `${styles.productTitleLink}`} onClick={() => { handleChangeCategory('electronics') }}>Bestsellers&nbsp;</Link>
        <Link className={styles.productTitleLink}>/</Link>
        <Link className={active === ('Bestsellers') ? `${styles.productTitleLinkActive}` : `${styles.productTitleLink}`} onClick={() => { handleChangeCategory('Bestsellers') }}>Featured&nbsp;</Link>
      </Box>
      <Box className={styles.productTitleDropdown}>
        <FormControl sx={{ m: 1, width: "100%" }}>
          <Select
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <InputLabel>Select Category</InputLabel>
            {
              options.map((item, index) => (
                <MenuItem value={item.value} key={index}>{item.label}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={1} className={styles.product_section_container}>
        {filteredList.slice(0, 4).map((item, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <ProductCard product={item} key={index} />
          </Grid>
        ))}
      </Grid>
      <Box className='d-f mb-2 jc-c ai-c mt-1'>
        <Link href={Routes.productlist} className={styles.communityBtn}>Show More</Link>
        <ArrowRightAltIcon fontSize='medium' className={styles.right_icon} />
      </Box>
    </>
  );
};