import { GetStaticProps } from 'next'
import { fetchProducts } from '../utils/services'
import { IHomePageProps } from '../utils/types';
import ProductList from '../components/ProductList/ProductList'
import Link from 'next/link';
import styled from 'styled-components';
import { myProfile, searchIcon } from '../assets/HeaderIcons'
import Button from '../components/Button';
import { SVGComponent } from '../assets/svgviewer-react-output'

import { useState } from 'react';

export const Container = styled.body`
align-self: center;
display: flex;
flex-direction: column;
max-width:1440px;
max-height:1516px;
`;

export const HeaderContainer = styled.nav`

  align-items: center;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height:6%;
  justify-content: space-around;
  line-height: 24px;
  margin: 10px;
  padding-inline: 15px;
  a {
    align-items: stretch;
    box-sizing:border-box;
    color: #555555;
    display: flex;
    height: 100%;
    padding-block: 20px;
    padding-inline: 20px;
    border-bottom: 4px solid rgba(0,0,0,0);
  }
  a:hover {
    border-bottom: 4px solid #b6116e;
    color: #b6116e;
  }
  div {
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    width: 70%;
  }
  button {
    background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;
  }
`;

export default function Home({ products }: IHomePageProps) {
  const [searchText, setSearchText] = useState('')
  const [showSearchBar, setShowSearchBar] = useState(false);
  

  return (
    <Container>
      <HeaderContainer>
        <div>
          <img
            src="https://img.wine.com.br/logo/wine/black/wine.svg"
            alt="Wine Logo"
          />
          <Link href='https://www.wine.com.br/clubewine/'>Clube</Link>
          <Link href='https://www.wine.com.br/clubewine/'>Loja</Link>
          <Link href='https://www.wine.com.br/produtor/'>Produtores</Link>
          <Link href='https://www.wine.com.br/vinhos-promocao/'>Ofertas</Link>
          <Link href='https://we.wine.com.br/'>Eventos</Link>
        </div>
        <Button text={searchIcon} onClick={() => setShowSearchBar(!showSearchBar)} />

        {showSearchBar &&
          <input
            type="text"
            value={searchText}
            data-testid="search-text-filter"
            onChange={({ target: { value } }) => setSearchText(value)}
            placeholder="Seu Vinho Favorito"
          />
        }
        <Link href='https://www.wine.com.br/sign-in.ep#/'>{myProfile}</Link>
        {SVGComponent()}
      </HeaderContainer>
      <ProductList productList={products} searchText={searchText} />
    </Container>
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