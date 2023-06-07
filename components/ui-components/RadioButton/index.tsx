import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const RadioButton = ({ title, types }) => {
  return (
    <FormControl >
      <label style={{ cursor: 'pointer', color: 'var(--heading-color)', fontWeight: 'var(--fw-bold)', position: 'relative', verticalAlign: 'middle' }}>{title}</label>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue='male'
        name="radio-buttons-group"
      >
        {
          types.map((item, index) => (
            <FormControlLabel key={index} value={item.value} control={<Radio size='small' sx={{
              '&.Mui-checked': {
                color: 'var(--primary)',
              },
            }} />} label={item.label} />
          ))
        }
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButton;