import { GetStaticProps } from 'next'
import { fetchProducts } from '../utils/services'
import { IHomePageProps } from '../utils/types';
import ProductList from '../components/ProductList'
import styled from "styled-components";

export default function Home({ products }: IHomePageProps) {
  console.log(products);

  const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
  
  return (
    <MainContainer>
       <ProductList productList={ products }/>
    </MainContainer>
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
    },
    revalidate: 5,
  }
}