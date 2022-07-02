import React, { useState } from 'react';
import Button from './Button';
import { Product } from '../utils/types';
import styled from 'styled-components';

export default function ProductCard(props: { key: number, dataCard: Product }) {
  const [inputValue, setInputValue] = useState(0);
  const { dataCard } = props;

  const handleIncrement = (e: any) => {
    e.preventDefault()

    setInputValue(inputValue + 1);
  };

  const numberToBRL = (value: string) => {
    return (value.replace(/\./, ','))
  }

  const CardContainer = styled.div`
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  color: #1D1D1B;
  display:flex;
  flex-direction: column;
  font-family: 'Lato';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 333px;
  letter-spacing: -0.222488px;
  line-height: 19px;
  margin-block: 4px;
  height: 333px;
  text-align: center;
  width: 31%;

  img {
    max-width: fit-content; 
  }

  .product-name {
    padding: auto;
    min-height: 38px;
    width: 91%;
  }

  .member-price {
    font-size: 11px;

    .main-value {
      color: #B6116E;
      font-size: 23px;
      line-height: 27px;
      margin-inline: 5px;
  }

  .real-price {
    display: flex;
    flex-direction: row;

    .no-discount-price {
      display: flex;
      color: #888888;
      font-size: 11px;
      line-height: 16px;
      text-align: center;
      text-decoration-line: line-through;
      margin-inline: 5px;
    }

    .discount {
      color: #FFFFFF;
      font-size: 10px;
      line-height: 12px;
      display: inline;
    }
  }
  .general-price {
    font-size: 12px;
    line-height: 14px;
  }`;

  const AddButtonContainer = styled.div`
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    button {
      background: #7EBC43;
      border-radius: 3.89354px;
      box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
      color: #FFFFFF;
      height: 100%;
      margin-top: 5px;
      width: 100%;
      border-width: 0;
  }
  `;

  return (
    <CardContainer>
      <img
        src={dataCard.image}
        alt={dataCard.name}
        data-testid={`products_img-card-bg-image-${dataCard.id}`}
      />
      <span className= 'product-name' data-testid={`products_element-card-title-${dataCard.id}`}>
        {dataCard.name}
      </span>
      <span className='real-price'>
      <span className='no-discount-price'>R${numberToBRL(`${(dataCard.price).toFixed(2)}`)}</span>
      <span className='discount'>{dataCard.discount}%OFF</span>
      </span>
      <span className='member-price' data-testid={`products_element-card-price-${dataCard.id}`}>
        SÓCIO WINE
        <span className='main-value'>R$ {numberToBRL(`${(dataCard.priceMember).toFixed(2)}`)}</span>
      </span>
      <div className='general-price'>
        NÃO SÓCIO R$ {numberToBRL(`${(dataCard.priceNonMember).toFixed(2)}`)}
      </div>
      <AddButtonContainer>
        <Button
          text="ADICIONAR"
          value="+"
          type="button"
          disabled={false}
          onClick={handleIncrement}
          dataTestId={`products_button-card-add-item-${dataCard.id}`}
        />
      </AddButtonContainer>
    </CardContainer>
  );
}