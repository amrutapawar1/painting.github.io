import React from 'react';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './SelectCategory.module.css';

const SelectCategory = (props: any) => {
  const { categories, category, setCategory } = props;
  const [categoryName, setCategoryName] = React.useState(category);

  const handleChange = (event: SelectChangeEvent) => {
    setCategoryName(event.target.value as string);
  };

  return (
    <FormControl variant="standard" fullWidth className={styles.FormControl}>
      <InputLabel id="demo-simple-select-label">{categoryName}</InputLabel>
      <Select
        value={categoryName}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={handleChange}
        fullWidth
        label={categoryName}
      >
        {
          categories.map((item: any, index: any) => (
            <MenuItem value={item.value} onClick={() => setCategory(item.label)} key={index}>{item.label}&nbsp;<i>{item.tooltip}</i></MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default SelectCategory;