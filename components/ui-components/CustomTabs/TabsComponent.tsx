import React from 'react';
import CustomTabs from '.';
import { TabsParams } from './types';

const tabs: TabsParams[]= [
    {
        id: 1,
        title: 'Description',
        renderer: 'description',
    },
    {
        id: 2,
        title: 'Reviews',
        renderer: 'reviews'
    },
    {
        id: 3,
        title: 'Customization',
        renderer: 'customization',
    }
];

const TabsComponent = () => {
    return (
        <div style={{ display: "flex" }}>
            <CustomTabs data={tabs} defaultValue = {'description'}/>
        </div>
    )
} 
export default TabsComponent;