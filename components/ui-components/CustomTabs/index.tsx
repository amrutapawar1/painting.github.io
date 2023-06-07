import React, { useState } from 'react';
import { Tab, Box, Tabs } from '@mui/material';
import { TabsViewMap } from './TabUtils';
import { TabsParams } from './types';
import styles from './Tab.module.css';

type TabsProps = {
  defaultValue: string;
  data: TabsParams[];
};

const CustomTabs = ({ data, defaultValue }: TabsProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const Renderer = TabsViewMap[value];

  return (
    <Box className={styles.tab_container}>
      <Tabs onChange={handleChange} aria-label="tabs" value={value} className={styles.tab_box}>
        {
          data.map((item) => (
            <Tab key={item.id}
              className={styles.tab_title}
              label={item.title}
              value={item.renderer}
            />
          ))
        }
      </Tabs>
      <Renderer />
    </Box>
  );
}

export default CustomTabs;