import React, { useState } from 'react';
import { Button, IconButton, Menu } from '@mui/material';
import Link from 'next/link';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export interface IDropdownLinks {
    title?: string;
    children: React.ReactNode;
    href: string;
    className?: string;
    icon?: string;
}

const IconMap: any = {
    'personOutlined': PersonOutlinedIcon,
}

const DropdownLinks = ({ title, children, href, className, icon }: IDropdownLinks) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const IconRenderer = icon ? IconMap[icon] : null;
    return (
        <>
            {/* We will modify this implementation when needed */}
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick}
                className={className}
            >
                <Link href={href}>{title}</Link>
            </Button>
            {
                IconRenderer && <IconButton onMouseOver={handleClick}><IconRenderer /></IconButton>
            }
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: () => {
                        setAnchorEl(null);
                    }
                }}
            >
                {children}
            </Menu>
        </>
    )
}

export default DropdownLinks;