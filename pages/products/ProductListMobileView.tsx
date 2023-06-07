import * as React from 'react';
import Filters from '../../components/Filters/Filters';
import { Box, Button, Drawer } from '@mui/material';
import FilterBar from '../../components/Filters/FilterBar';
import styles from "./Productlist.module.css";
import useFilters from '../../context/Filter/FilterContext';
import Chips from '../../components/ui-components/Chips';

type SortArray = {
    label: string;
    value: string;
}
const SORT_OPTIONS: SortArray[] = [
    { label: "electronic", value: 'electronic' },
    { label: 'popularity', value: 'popularity' }
]


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function ProductListMobileView({ authStatus }: any) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const { price: { min, max }, brands, space, theme, setBrands, setSpace, setTheme, setPrice } = useFilters();

    const handleDelete = () => {
        setPrice();
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ height: "350px" }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Filters />
        </Box >
    )
    return (
        <Box className={styles.filter_tab}>
            {(['bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <>
                        <Button onClick={toggleDrawer(anchor, true)} className={styles.filter_title}>Filters</Button>
                        <FilterBar />
                    </>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{ height: "350px" }}
                    >
                        <Box className={styles.mobile_view_filter}>
                            {
                                (min > 500 || max < 50000) && (
                                    <Chips label={[min, '-', max]} variant="outlined" onDelete={handleDelete} size='small' />
                                )
                            }
                            {
                                brands.map((item, index) => (
                                    <Chips key={index} item={item} index={index} onDelete={setBrands} path={[...brands]} />
                                ))
                            }
                            {
                                space.map((item, index) => (
                                    <Chips key={index} item={item} index={index} onDelete={setSpace} path={[...space]} />
                                ))
                            }
                            {
                                theme.map((item, index) => (
                                    <Chips key={index} item={item} index={index} onDelete={setTheme} path={[...theme]} />
                                ))
                            }
                        </Box>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Box>
    )
};