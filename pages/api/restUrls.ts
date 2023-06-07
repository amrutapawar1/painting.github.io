export const PRODUCTS = '/products';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

export const getUrl = (url: string) => {
    return `${API_ENDPOINT}${url}`
};