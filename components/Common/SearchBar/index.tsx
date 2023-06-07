import * as React from 'react';
import { styled, alpha, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('xs')]: {
        marginLeft: theme.spacing(1),
        width: '100%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            width: '0.01rem',
            '&:focus': {
                width: '10rem',
            },
        },
    },
}));

const SearchBar = () => {
    const [value, setValue] = React.useState("");
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: "var(--black)", margin: 0 }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Search>
    );
}
export default SearchBar;