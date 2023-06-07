import React, { useMemo } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import styles from './Filters.module.css';
import CheckList from '../ui-components/CheckList';
import Brands from '../../data/FiltersMockData/shopByBrands.json';
import Space from '../../data/FiltersMockData/shopBySpace.json';
import Theme from '../../data/FiltersMockData/shopByTheme.json';
import RangeSlider from '../ui-components/RangeSlider';
import ColorPicker from '../ui-components/ColorPicker/ColorPicker';
import useFilters from '../../context/Filter/FilterContext';

type Target = {
  target: HTMLInputElement;
  checked: string;
  value: string;
}
const Filters = () => {
  const { brands, space, price, color, theme, clearAll, setColor, setBrands, setSpace, setPrice, setTheme } = useFilters();

  const filterState = useMemo(() => {
    return {
      brands,
      space,
      theme
    }
  }, [brands,
    space,
    theme]);

  const handleClear = () => {
    clearAll();
  }
  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };
  const handleByBrands = (e: Target) => {
    const { checked, value } = e.target;
    let updatedList = [...brands];
    if (checked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter(item => item !== value);
    }
    setBrands(updatedList);
  }
  const handleBySpace = (e: Target) => {
    const { checked, value } = e.target;
    let updatedList = [...space];
    if (checked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter(item => item !== value);
    }
    setSpace(updatedList);
  }
  const handleByTheme = (e: Target) => {
    const { checked, value } = e.target;
    let updatedList = [...theme];
    if (checked) {
      updatedList.push(value);
    } else {
      updatedList = updatedList.filter(item => item !== value);
    }
    setTheme(updatedList);
  }
  const FilterList = [
    { name: 'brands', label: 'Brands', checkList: Brands, onChange: handleByBrands },
    { name: 'space', label: 'Space', checkList: Space, onChange: handleBySpace },
    { name: 'theme', label: 'Theme', checkList: Theme, onChange: handleByTheme }
  ]

  return (
    <section >
      <Box className={styles.vertical_Filters_container}>
        <Typography className={styles.filter_title}>Filters</Typography>
        <Button className={styles.filter_clearAllBtn} onClick={handleClear} size='small' variant="text">Clear All</Button>
      </Box>
      <Box className={styles.filter_scroll_container}>
        <Box>
          <Typography className={styles.vertical_filters_header}>Price</Typography>
          <RangeSlider onChange={setPrice} value={price} />
        </Box>
        <Divider />
        {
          FilterList.map((item) => (
            <>
              <Box className={styles.vertical_filters_category_container} key={item.name}>
                <CheckList
                  label={item.label}
                  name={item.name}
                  checkList={item.checkList}
                  onChange={item.onChange}
                  className={styles.vertical_filters_filters}
                  selected={filterState[item.name]}
                />
              </Box>
              <Divider />
            </>
          ))
        }
        <Box className={styles.vertical_filters_category_container}>
          <Typography className={styles.vertical_filters_header}>Color</Typography>
          <ColorPicker color={color} onChange={handleColorChange} width={'160px'} />
          <Typography className={styles.vertical_filters_title}>color: {color}</Typography>
        </Box>
      </Box>
    </section>
  )
}
export default Filters;