import { getUrl, PRODUCTS } from "./restUrls";

export async function getApiData() {
  const response = await fetch(getUrl(PRODUCTS));
  const data = await response.json();
  return data.map((item: any, index: number) => {
    if (index % 7 === 0) {
      return {
        ...item,
        qty:1,
        discount: 20,
        images: [{
          id: 1,
          src: "/pro1.jpg",
          alt: "Test"
        },
        {
          id: 2,
          src: "/pro2.webp",
          alt: "Test"
        },
        {
          id: 3,
          src: "/pro5.webp",
          alt: "Test"
        }, 5
        ]
      }
    }
    return {
      ...item,
      qty:1,
      discount: 20,
      images: [{
        id: 1,
        src: "/pro1.jpg",
        alt: "Test"
      },
      {
        id: 2,
        src: "/pro2.webp",
        alt: "Test"
      },
      {
        id: 3,
        src: "/pro5.webp",
        alt: "Test"
      },
      ]
    }
  });
};

export const getProductById = async (id: number) => {
  const res = await fetch(`${getUrl(PRODUCTS)}/${id}`)
  const myPost = await res.json();
  return {
    ...myPost,
    qty:1,
    discount: 20,
    images: [{
      id: 1,
      src: "/pro1.jpg",
      alt: "Test"
    },
    {
      id: 2,
      src: "/pro2.webp",
      alt: "Test"
    },
    {
      id: 3,
      src: "/pro5.webp",
      alt: "Test"
    },
    ]
  }
}