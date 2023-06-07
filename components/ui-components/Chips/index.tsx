import React from 'react';
import { Chip, Stack } from '@mui/material';

const Chips = ({ item, index, onDelete,label,path }:any) => {

  const handleRemove = () => {
    let updatedList = path;
    updatedList.splice(index, 1)
    onDelete(updatedList);
  }
  return (
    <Stack direction="row" spacing={1} key={index} >
      <Chip label={item || label} variant="outlined" onDelete={handleRemove} size='small' />
    </Stack>
  );
}
export default Chips;