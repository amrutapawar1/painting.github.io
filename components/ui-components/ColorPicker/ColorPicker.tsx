import React, { useState } from 'react';
import { HuePicker } from 'react-color';

type ColorPickerProps = {
  color: string;
  onChange: (color: string) => void;
  width?: string;
  height?: number;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, width, height }) => {
  const [currentColor, setCurrentColor] = useState<string>(color);

  const handleColorChange = (color: any) => {
    const newColor = color.hex;
    setCurrentColor(newColor);
    onChange(newColor);
  };

  return (
    <HuePicker
      color={currentColor}
      onChange={handleColorChange}
      width={width}
    />
  );
};

export default ColorPicker;