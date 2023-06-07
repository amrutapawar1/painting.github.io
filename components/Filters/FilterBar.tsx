import { Grid, Chip, Typography, Box, Button } from '@mui/material';
import React from 'react';
import styles from './Filters.module.css';
import DropdownSelect from '../ui-components/Select';
import Chips from '../ui-components/Chips';
import useFilters from '../../context/Filter/FilterContext';

type SortArray = {
    label: string;
    value: string;
}
const SORT_OPTIONS: SortArray[] = [
    { label: "electronic", value: 'electronic' },
    { label: 'popularity', value: 'popularity' }
]

const FilterBar = () => {
    const { price: { min, max }, brands, space, theme, setBrands, setSpace, setTheme, setPrice } = useFilters();

    const handleDelete = () => {
        setPrice();
    };

    return (
        <Grid container spacing={0} className={styles.horizontal_filter}>
            <Grid item xs={2} sm={2} md={9} lg={9} className={styles.h_filter}>
                {
                    (min > 500 || max < 50000) && (
                        <Chip label={[min, '-', max]} variant="outlined" onDelete={handleDelete} size='small' />
                    )
                }
                {
                    brands.map((item, index) => (
                        <Chips key={index} item={item} index={index} onDelete={setBrands} path={[...brands]} />
                    ))
                }
                {
                    space.map((item, index) => (
                        <Chips key={index} item={item} index={index} onDelete={setSpace} path={[...space]} />
                    ))
                }
                {
                    theme.map((item, index) => (
                        <Chips key={index} item={item} index={index} onDelete={setTheme} path={[...theme]} />
                    ))
                }
            </Grid>
            <Grid item xs={10} sm={10} md={3} lg={3} className={styles.sort_container}>
                <Button variant='outlined' className={styles.sort_by_btn}>
                    <Typography className={styles.sort_by}>sort by:</Typography>
                    <DropdownSelect
                        title={'Featured'}
                        options={SORT_OPTIONS}
                    />
                </Button>
            </Grid>
        </Grid>
    )
}
export default FilterBar;
