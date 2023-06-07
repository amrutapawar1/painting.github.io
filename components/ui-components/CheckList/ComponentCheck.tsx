import React from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';
import styles from './CheckList.module.css';

const ComponentCheck = ({ item, index, onChange, name, checked }: any) => {
  return (
    <FormControlLabel key={index} control={
      <Checkbox
        checked={checked}
        name={name}
        value={item.code || item.label}
        onChange={onChange}
        inputProps={{ 'aria-label': 'controlled' }}
        size='small'
        sx={{
          padding: '3px',
          '&.Mui-checked': {
            color: 'var(--primary)',
          },
        }}
      />
    } label={<Typography className={styles.checklist_label}>{item.label}</Typography>}
    />
  )
}
export default ComponentCheck;