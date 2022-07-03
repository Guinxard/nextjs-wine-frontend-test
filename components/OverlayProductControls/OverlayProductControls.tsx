import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleCartProduct } from "../../redux/features/productsSlice";
import Button from "../Button";
import { ProductControlContainer } from "./ProductControlsStyles";


export default function ProductCard({ dataCard }: any) {
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    const product = { ...dataCard, quantity: inputValue + 1 };

    dispatch(handleCartProduct(product));

    setInputValue(inputValue + 1);
  };

  const handleChange = (quantity: number) => {
    const product = { ...dataCard, quantity };

    dispatch(handleCartProduct(product));

    setInputValue(quantity);
  };

  const handleDecrement = () => {
    if (inputValue > 0) {
      const product = { ...dataCard, quantity: inputValue - 1 };

      dispatch(handleCartProduct(product));

      setInputValue(inputValue - 1);
    }
  };

  return (
    <ProductControlContainer>

      <Button
        text="-"
        value="-"
        type="button"
        disabled={false}
        onClick={handleDecrement}
        dataTestId={`customer_products__button-card-rm-item-${dataCard.id}`}
      />

      <input
        type="text"
        value={inputValue}
        placeholder="0"
        onChange={(e) => handleChange(+e.target.value)}
        data-testid={`customer_products__input-card-quantity-${dataCard.id}`}
      />

      <Button
        text="+"
        value="+"
        type="button"
        disabled={false}
        onClick={handleIncrement}
        dataTestId={`customer_products__button-card-add-item-${dataCard.id}`}
      />

    </ProductControlContainer>)
}