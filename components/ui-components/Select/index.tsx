import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { OutlinedInput, MenuItem, Typography } from '@mui/material';
import styles from './Select.module.css'

interface IDropdownSelect {
  title: string;
  className?: string;
  options: {
    label: string;
    value: string;
  }[];
}
const DropdownSelect = ({ title, className, options }: IDropdownSelect) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  return (
    <Select
      value={value}
      onChange={handleChange}
      displayEmpty
      input={<OutlinedInput />}
      className={className}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <Typography className={styles.sort_by}>{title}</Typography>
        }
        return selected;
      }}
      sx={{
        fontSize: '13px',
        margin: '-10px 0',
        fontFamily: 'var(--ff-sans-serif)',
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": { border: 0 },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: 0 },
      }}
    >

      {
        options.map((item, index) => (
          <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
        ))
      }
    </Select>
  )
}

export default DropdownSelect;