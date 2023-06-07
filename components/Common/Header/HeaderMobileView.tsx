import * as React from 'react';
import styles from './Header.module.css';
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Drawer, Button, Divider } from '@mui/material';
import Link from 'next/link';
import { DRAWING_CATEGORY_LINKS, PAINTING_CATEGORY_LINKS, PRICE_LINKS } from './LinksData';
import SIGN_IN_LOGO from '../../HomePage/images/signin_logo.jpg';
import { Routes } from '../../../routes/pageRoutes';
import Image from 'next/image';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function HeaderMobileView({ authStatus }: any) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%' }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <AccordionSummary sx={{ background: "var(--light-gray)", minHeight: "43px" }}>
        <Typography className={styles.drawerHeading}>MENU</Typography>
      </AccordionSummary>
      <Divider sx={{ borderColor: "2px var(--primary)" }} />
      {/* <Accordion sx={{minHeight: "43px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.drawerTitle}>Paintings</Typography>
        </AccordionSummary> */}
      {
        PAINTING_CATEGORY_LINKS.map((linksData) => (
          <Accordion key={linksData.name}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              key={linksData.name}
              sx={{ minHeight: "43px" }}
            >
              <Typography className={styles.drawerTitle}>{linksData.name}</Typography>
            </AccordionSummary>
            {
              linksData.items.map((subLink) => (
                <>
                  <AccordionDetails key={subLink.name}>
                    <Link href={subLink.href} className={styles.drawerSubtitle}>{subLink.name}</Link>
                  </AccordionDetails>
                  <Divider />
                </>
              ))
            }
          </Accordion>
        ))
      }
      {/* </Accordion> */}
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.drawerTitle}>Drawings</Typography>
        </AccordionSummary> */}
      {
        DRAWING_CATEGORY_LINKS.map((linksData) => (
          <Accordion key={linksData.name}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.drawerTitle}>{linksData.name}</Typography>
            </AccordionSummary>
            {
              linksData.items.map((subLink) => (
                <>
                  <AccordionDetails key={subLink.name}>
                    <Link href={subLink.href} className={styles.drawerSubtitle}>{subLink.name}</Link>
                  </AccordionDetails>
                  <Divider />
                </>
              ))
            }
          </Accordion>
        ))
      }
      {/* </Accordion> */}
      {/* {
        PRICE_LINKS.map((linksData) => (
          <Accordion key={linksData.name}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.drawerTitle}>{linksData.name}</Typography>
            </AccordionSummary>
            {
              linksData.items.map((subLink) => (
                <>
                  <AccordionDetails>
                    <Link href={subLink.href} className={styles.drawerSubtitle}>{subLink.name}</Link>
                  </AccordionDetails>
                  <Divider />
                </>
              ))
            }
          </Accordion>
        ))
      } */}
    </Box >
  )
  return (
    <Box className={styles.mobileViewBox}>
      <Box className="as-c">
        {(['left'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <CloseIcon onClick={toggleDrawer(anchor, false)} className='as-fe' />
              <Box className="d-f jc-c ai-c">
                <Image src={SIGN_IN_LOGO} alt='signin' className={styles.signup_img} />
                <Box className="ta-c">
                  <Typography className={styles.drawerTitle}><b>Free Shipping</b><br />On First Order</Typography>
                  <Button variant="text" href={Routes.login} className={styles.drawerTitle}>SIGNUP.LOGIN</Button>
                </Box>
              </Box>
              {list(anchor)}
              <Divider sx={{ borderColor: "1px rgba(0, 0, 0, 0.12)" }} />
              <AccordionSummary
                onClick={toggleDrawer(anchor, false)}
              >
                <Link href={Routes.contact} className={styles.drawerTitle}>Contact Us</Link>
              </AccordionSummary>
              <Divider />
              <AccordionSummary
                onClick={toggleDrawer(anchor, false)}
              >
                <Link href={Routes.wishlist} className={styles.drawerTitle}>Wishlist</Link>
              </AccordionSummary>
              <Divider />
              <AccordionSummary
                onClick={toggleDrawer(anchor, false)}
              >
                <Link href={Routes.about} className={styles.drawerTitle}>About Us</Link>
              </AccordionSummary>
              <Divider />
              <AccordionSummary
                onClick={toggleDrawer(anchor, false)}
              >
                <Link href={Routes.productlist} className={styles.drawerTitle}>Products</Link>
              </AccordionSummary>
              <Divider />
              <AccordionSummary
                onClick={toggleDrawer(anchor, false)}
              >
                <Link href={Routes.login} className={styles.drawerTitle}>My Account</Link>
              </AccordionSummary>
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
      <Box className='ai-l' sx={{ marginLeft: "-0.8rem" }}>
        <a href={Routes.home}>
          <img
            src="/Logo.png"
            alt="logo-image"
            className={styles.logoStyling}
          />
        </a>
      </Box>
    </Box>
  )
};