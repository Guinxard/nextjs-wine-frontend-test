import { GetStaticProps } from 'next'
import { fetchProducts } from '../utils/services'
import { IHomePageProps } from '../utils/types';
import ProductList from '../components/ProductList/ProductList'
import Link from 'next/link';
import { HeaderContainer, Container } from './HeaderStyles';
import { myProfile, searchIcon } from '../assets/HeaderIcons'
import Button from '../components/Button';
import { SVGComponent } from '../assets/svgviewer-react-output'

import { useState } from 'react';

export default function Home({ products }: IHomePageProps) {
  const [searchText, setSearchText] = useState('')
  const [showSearchBar, setShowSearchBar] = useState(false);
  console.log(products);

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