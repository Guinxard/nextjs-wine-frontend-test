import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleCartProduct } from '../redux/features/productsSlice';
import Button from './Button';
import { Product } from '../utils/types';
import { discountColor, imgResizer, numberToBRL } from './utils';
import { CardContainer } from './CardStyles';

export default function ProductCard(props: { key: number, dataCard: Product }) {
  const [inputValue, setInputValue] = useState(0);
  const { dataCard } = props;

  const dispatch = useDispatch();

  const handleIncrement = (e: any) => {
    e.preventDefault()
  
    const product = { ...dataCard, quantity: inputValue + 1 };

    dispatch(handleCartProduct(product));
    
    setInputValue(inputValue + 1);
    
  };

  return (
    <CardContainer>
      <img
        src={imgResizer(dataCard.image)}
        alt={dataCard.name}
        data-testid={`products_img-card-bg-image-${dataCard.id}`}
      />
      <span className= 'product-name' data-testid={`products_element-card-title-${dataCard.id}`}>
        {dataCard.name}
      </span>
      <div>
      <span className='no-discount-price'>R${numberToBRL(`${(dataCard.price).toFixed(2)}`)} </span>
      <span className='discount' style={{backgroundColor: `${discountColor(dataCard.discount)}`}}>{dataCard.discount}%OFF</span>
      </div>
      <span className='member-price' data-testid={`products_element-card-price-${dataCard.id}`}>
        SÓCIO WINE
        <span className='main-value'>R$ {numberToBRL(`${(dataCard.priceMember).toFixed(2)}`)}</span>
      </span>
      <div className='general-price'>
        NÃO SÓCIO R$ {numberToBRL(`${(dataCard.priceNonMember).toFixed(2)}`)}
      </div>
      <div className='add-button-container'>
        <Button
          text="ADICIONAR"
          value="+"
          type="button"
          disabled={false}
          onClick={handleIncrement}
          dataTestId={`products_button-card-add-item-${dataCard.id}`}
        />
      </div>
    </CardContainer>
  );
}