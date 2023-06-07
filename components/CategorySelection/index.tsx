import React, { useState } from 'react';
import { Typography, Button, Stack, Tooltip } from '@mui/material';
import styles from './CategorySelection.module.css';
import SelectCategory from '../ui-components/SelectCategory';

const CategorySelection = (props:any) => {
    const { label, initialvalue, categories } = props;
    const [category, setCategory] = useState(initialvalue);

    return (
        <>
            <Typography className={styles.text}>{label} : <span className={styles.print}>{category}</span></Typography>
            <Stack spacing={2} display={{ xs: 'none', sm: 'block' }} direction={{ sm: 'row' }} className='mb-1'>
                {
                    categories.map((item: string, index: number) => (
                        <Tooltip title={item.tooltip} placement="top" key={index}>
                            <Button size='small' variant="outlined" value={item.value} key={index} onClick={() => setCategory(item.label)} className={styles.button}>{item.label}</Button>
                        </Tooltip>
                    ))
                }
            </Stack>
            <SelectCategory categories={categories} category={category} setCategory={setCategory} />
        </>
    )
}

export default CategorySelection