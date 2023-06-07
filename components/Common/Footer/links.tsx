import React from 'react';
import { FooterLinksType } from './types';
import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    YouTube as YouTubeIcon,
    LinkedIn as LinkedInIcon,
    Pinterest as PinterestIcon
} from '@mui/icons-material';


export const footerLinks: FooterLinksType[] = [
    {
        name: 'My Account',
        href: '/',
        items: [
            {
                name: 'My Account',
                href: '/login',
            },
            {
                name: 'Register',
                href: '/login',
            },
            {
                name: 'Login',
                href: '/login',
            },
            {
                name: 'Wishlist',
                href: '/wishlist',
            },
        ],
    },
    {
        name: 'Services',
        href: '/',
        items: [
            {
                name: 'Buy Paintiong',
                href: '/products',
            },
            {
                name: 'Help & contact',
                href: '/contact',
            },
            {
                name: 'About Us',
                href: '/about',
            },
            {
                name: 'Contact Us',
                href: '/contact',
            },
        ],
    },
    {
        name: 'Information',
        href: '/',
        items: [
            {
                name: 'Terms and Conditions',
                href: '/',
            },
            {
                name: 'Legal Notice',
                href: '/legalNotice',
            },
            {
                name: 'Delivery',
                href: '/delivery',
            },
            {
                name: 'New Products',
                href: '/products',
            },
            {
                name: 'Top Sellers',
                href: '/',
            },
        ],
    },
    {
        name: 'Contact Details',
        href: '/discover-menswearhouse',
        items: [
            {
                name: (
                    <b>
                        9876543210
                    </b>
                ),
                href: 'tel:9876543210',
            },
            {
                name: (
                    <>
                        Need help? Call us for any
                        assistance required.
                    </>
                ),
                href: 'tel:9209140225',
            },
        ],
    },
];

export const socialLink = [
    {
        id: 1,
        icon: <FacebookIcon />
    },
    {
        id: 2,
        icon: <TwitterIcon />
    },
    {
        id: 3,
        icon: <InstagramIcon />
    },
    {
        id: 4,
        icon: <LinkedInIcon />
    },
    {
        id: 5,
        icon: <PinterestIcon />
    },
    {
        id: 6,
        icon: <YouTubeIcon />
    },
]