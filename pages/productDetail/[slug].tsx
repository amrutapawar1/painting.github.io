import { Grid, Typography, Box } from '@mui/material';
import ActionButtons from '../../components/ProductDetail/ActionButtons';
import ProductDescription from '../../components/ProductDetail/ProductDescription/index';
import ProductRecomendation from '../../components/ProductDetail/ProductRecomendation/index';
import { getApiData, getProductById } from "../api/getApiData";
import styles from './slug.module.css';
import BreadCrumbs from '../../components/common/BreadCrumbs/BreadCrumbs';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SocialIcon from '../../components/common/Icons/SocialIcon';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next'
import { IProduct } from '../../types/product';
import CustomTabs from '../../components/ui-components/CustomTabs';

type MyPost = {
  myPost: IProduct;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const myPost: string[] = await getApiData();
  const paths = myPost.map((item) => {
    return {
      params: {
        slug: item.id.toString()
      },
    };
  });

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.slug;
  const myPost = await getProductById(id);
  return {
    props: {
      myPost: myPost,
    },
  }
}

const Post = ({ myPost }: MyPost) => {
  const { image } = myPost;

  return (
    <>
      <BreadCrumbs title={myPost.title} />
      <Grid container spacing={0} className={styles.container}>
        <Grid item xs={12} sm={6} md={6} lg={6} className='ta-c'>
          <img
            src={image}
            alt="Elva dressed as a fairy"
            className={styles.image_Gallery_Style}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={styles.sticky_container}>
          <ProductDescription
            description={myPost.description}
            title={myPost.title}
            price={myPost.price}
            category={myPost.category}
            discount={myPost.discount}
            images={myPost.srcSet}
          />
          <ActionButtons product={myPost} />
          <Box className='mb-1 d-f ai-c'>
            <LocalPhoneIcon className={styles.phon_icon} />
            <Link href='/' className={styles.phnLink}> Ask about this product</Link>
          </Box>
          <Typography className={styles.text}>Share</Typography>
          <SocialIcon />
          {/* <CategorySelection label='Print On' initialvalue='Canvas' categories={[{ label: "Canvas", value: "canvas" }, { label: "Archival Paper", value: "archival_paper" }]} />
            <CategorySelection label='Frame Color' initialvalue='Black' categories={[{ label: "Black", value: "black" }, { label: "Brown", value: "brown" }, { label: "Gold", value: "gold" }, { label: "UnFramed", value: "unframed" }]} />
            <CategorySelection label='Size(In Inches)' initialvalue='Small' categories={[{ label: "Small", value: "small", tooltip: "14.5 X 14.5" }, { label: "Medium1", value: "medium1", tooltip: "17.5 X 17.5" }, { label: "Medium2", value: "medium2", tooltip: "19 X 19" }, { label: "Large", value: "large", tooltip: "24.5 X 24.5" }, { label: "E.Large", value: "e.large", tooltip: "27.5 X 27.5" }]} /> 
           */}
        </Grid>
      </Grid>
      <CustomTabs data={tabs} defaultValue={'description'} />
      <ProductRecomendation />
    </>
  )
}

export default Post;

const tabs = [
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