import React, { useState } from 'react';
import { Typography, Slider } from '@mui/material';
import { formatPrice } from '../../../util/PriceFormatter';
import styles from './RangeSlider.module.css';

const RangeSlider = ({ onChange, value }: any) => {
  const { min, max } = value;
  const [range, setRange] = useState<number[]>([min, max]);

  const handleSlider = (event: Event, newValue: number | number[]) => {
    const sliderValue = newValue as number[]
    onChange({
      min: sliderValue[0],
      max: sliderValue[1]
    });
    setRange(sliderValue);
  };

  return (
    <section className={styles.container}>
      <Slider
        value={[value.min, value.max]}
        onChange={handleSlider}
        valueLabelDisplay="auto"
        min={500}
        max={50000}
        step={50}
        className={styles.slider}
      />
      <Typography className={styles.price_Style}>&nbsp;<b>{formatPrice(value.min)}-{formatPrice(value.max)}</b></Typography>
    </section>
  )
}

export default RangeSlider;