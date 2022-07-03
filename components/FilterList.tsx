import { useState } from "react";
import { priceFilter } from "./utils"
import styled from 'styled-components';

// priceFilter(products, productFilter[0], productFilter[1], membership)

export default function FilterList({ productList, priceFilterHandle, selectedFilters }: any) {
  
  const priceRange = {
    'Até R$100': priceFilter(productList, 0, 100),
    'de R$100 a R$200': priceFilter(productList, 100, 200),
    'de R$200 a R$300': priceFilter(productList, 200, 300),
    'de R$300 a R$500': priceFilter(productList, 300, 500),
    'Acima de R$500': priceFilter(productList, 500, 0),
  }
  const nullHandler = priceFilter(productList, 0, 0);
  const FilterListContainer = styled.aside`
    margin-inline: 30px;
    min-width: max-content;
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
          onClick={()=> (priceFilterHandle(key[1], key[0]))} 
          checked={selectedFilters.includes(key[0])}
          />
            {key[0]}
      </label>
    ))}
    </FilterListContainer>
  )
}