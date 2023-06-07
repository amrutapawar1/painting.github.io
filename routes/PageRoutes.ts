import Home from "../components/HomePage";
import login from '../pages/login';
import signup from '../pages/signup';
import wishlist from '../pages/wishlist';
import Contact from "../pages/contact/index";
import About from "../pages/about";
import cartlist from "../pages/cartlist";
import Products from "../pages/products";
import Checkout from "../pages/checkout";
import LegalNotice from "../pages/legalNotice";
import Delivery from "../pages/delivery";

export const Routes = {
    home: "/",
    login: "/login",
    signup: '/signup',
    wishlist: '/wishlist',
    about: '/about',
    contact: '/contact',
    productlist: '/products',
    cartlist: '/cart',
    checkout: '/checkout',
    legalNotice: '/legalNotice',
    delivery: '/Delivery'
}

export const RoutePaths = [
    {
        component: Home,
        path: Routes.home
    },
    {
        component: About,
        path: Routes.about,
    },
    {
        component: Contact,
        path: Routes.contact,
    },
    {
        component: login,
        path: Routes.login,
    },
    {
        component: signup,
        path: Routes.signup,
    },
    {
        component: wishlist,
        path: Routes.wishlist
    },
    {
        component: Products,
        path: Routes.productlist
    },
    {
        component: cartlist,
        path: Routes.cartlist
    },
    {
        component: Checkout,
        path: Routes.checkout
    },
    {
        component: LegalNotice,
        path: Routes.legalNotice
    },
    {
        component: Delivery,
        path: Routes.delivery
    }
];