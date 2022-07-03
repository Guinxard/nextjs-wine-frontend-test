import React, { useEffect, useState } from 'react';
import { Product } from '../utils/types';
import FilterList from './FilterList';
import ProductCard from './ProductCard';
import styled from "styled-components";
import Button from './Button';
import { priceFilter } from './utils';

export default function ProductList({ productList }: any) {
  const [products, setProducts] = useState(productList);
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [selectedFilters, setSelectedFilters] = useState(['']);
  const MAXPAGES = Math.ceil(products.length / productsPerPage);
  const FIRSTPAGEITEM = (productsPerPage * (page - 1));
  const LASTPAGEITEM = (productsPerPage * page);
  const [membership, setMembership] = useState(false);
  const [sessionUser, setSessionUser] = useState('');
  // const totalValue = useSelector((state: any) => state.productsReducer.totalPrice);
  // const cartProducts = useSelector((state: any) => state.productsReducer.cart);

  const pageSelector = () => {
    const pageNum = [];
    for (let i = 1; 0 <= i && i <= MAXPAGES; i++) {
      if (Math.abs(page - i) <= 2) pageNum.push(`${i}`);
      if (Math.abs(page - i) === 3) pageNum.push('...')
    }
    return pageNum;
  };

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (!userStorage) {
      localStorage.setItem('user', JSON.stringify({ 'name': 'John Doe' }))
      setMembership(false)
    }
    setSessionUser(JSON.parse(localStorage.getItem('user') || ''));
  }, []);

  const priceFilterHandle = (filteredProducts:Product[], filter: string) => {
    if (!selectedFilters.includes(filter) ) {
    setSelectedFilters([...selectedFilters, filter]);
    if (selectedFilters.length === 1) {setProducts(filteredProducts);
    } else { setProducts(products.concat(filteredProducts));
    }
    } else {
    setProducts(products.filter((product: Product) => !filteredProducts.includes(product)))
    setSelectedFilters(selectedFilters.filter((item) => item != filter))
    if (selectedFilters.length === 2) setProducts(productList)
    }
  }

  const ProductListMain = styled.main`
    display: flex;
    flexdirection:row;
  `

  const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  width: 74%;
  gap: 32px;

  /* @media
  width: 90,5%
  gap: 24ps;
  */
  `;

  const ProductListHeader = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
      .products-count {
        display: inline;
    }
  `;
  console.log(products.slice(FIRSTPAGEITEM, LASTPAGEITEM));
  
  return (
    <ProductListMain>
      <FilterList productList={productList} priceFilterHandle={ priceFilterHandle } selectedFilters={selectedFilters}/>
      <div>
        <ProductListHeader>
          <h3 className='products-count'>{products.length} produtos encontrados</h3>
          <span>Ordenar:</span>
        </ProductListHeader>
        <ProductListContainer>
          {
            (products) && products.slice(FIRSTPAGEITEM, LASTPAGEITEM).map((product: Product, index: number) => (
              <ProductCard key={index} dataCard={product} />
            ))
          }
        </ProductListContainer>
        {page === 1 ? null : <Button text='<< Anterior' onClick={() => setPage(page - 1)} dataTestId={'previous_page_button'} disabled={false}></Button>}
        {pageSelector().map((i) => (
          i !== '...'
            ? <Button text={i} key={i} onClick={() => setPage(+i)} dataTestId={`${i}_page_button`} disabled={false} className="page-selector-button" />
            : <span key={i}>. . .</span>)
        )}
        {page === MAXPAGES ? null : <Button text='Próxima >>' onClick={() => setPage(page + 1)} dataTestId={'next_page_button'} disabled={false}></Button>}
      </div>
    </ProductListMain>
  );
}
