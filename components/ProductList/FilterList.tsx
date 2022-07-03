import { useState } from "react";
import { priceFilter } from "../utils"
import styled from 'styled-components';

export default function FilterList({ products, productList, priceFilterHandle, selectedFilters }: any) {

  const priceRange = {
    'Até R$100': priceFilter(productList, 0, 100),
    'de R$100 a R$200': priceFilter(productList, 100, 200),
    'de R$200 a R$300': priceFilter(productList, 200, 300),
    'de R$300 a R$500': priceFilter(productList, 300, 500),
    'Acima de R$500': priceFilter(productList, 500, 0),
  }
  const nullHandler = priceFilter(productList, 0, 0);
  const FilterListContainer = styled.aside`
    align-items: center;
    color: #1D1D1B;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding-inline: 30px;
    min-width: max-content;
    width: 18%;
    label {
      display: block;
    }
  `

  return (
    <FilterListContainer>
      <h2>Refinar Busca</h2>
      <h3>Por preço:</h3>
      {Object.entries(priceRange).map((key) => (
        <label
          key={key[0]}
          htmlFor={key[0]}>
          <input
            type='radio'
            name={key[0]}
            value={key[0]}
            onClick={() => (priceFilterHandle(key[1], key[0]))}
            checked={selectedFilters.includes(key[0])}
          />
          {key[0]}
        </label>
      ))}
    </FilterListContainer>
  )
}