import { GetStaticProps } from 'next'
import { fetchProducts } from '../utils/services'
import { IHomePageProps } from '../utils/types';
import ProductList from '../components/ProductList'

export default function Home({ products }: IHomePageProps) {
  console.log(products);
  
  return (
    <div>
       {/* <ProductList productList={ products }/> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: "follow"
  };
 
  const products = await fetchProducts(requestOptions)
  
  return {
    props: {
      products
    }
  }
}