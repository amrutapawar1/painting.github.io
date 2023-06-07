import React from 'react';
import { Button, Tooltip, styled, tooltipClasses, TooltipProps } from '@mui/material';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import theme from '../../../styles/theme/ThemeOptions';

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
        height: "300px",
        overflow: "scroll",
        overflowX: "hidden",
        maxWidth:"100%"
    },
});

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

const DropdownLinks = ({ title, children, icon }: IDropdownLinks) => {
    const IconRenderer = icon ? IconMap[icon] : null;
    return (
        <NoMaxWidthTooltip title={children} placement="top-start" enterTouchDelay={0}>
            <Button variant='text'>{title}</Button>
        </NoMaxWidthTooltip>
    )
}
export default DropdownLinks;