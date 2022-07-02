import React, { useState } from 'react';
import { Product } from '../utils/types';
import ProductCard from './ProductCard';
import styled from "styled-components";



export default function ProductList( { productList }:any ) {
  const [products, setProducts] = useState(productList);

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


  return (
      <main>
        <ProductListHeader>
        <h3 className='products-count'>{products.length} produtos encontrados</h3>
        <span>Ordenar:</span>
        </ProductListHeader>
        <ProductListContainer>
          {
            (products) && products.map((product:Product, index:number) => (
              <ProductCard key={ index } dataCard={ product } />
            ))
          }
        </ProductListContainer>
      </main>
  );
}
