import { Product } from "../utils/types";

export interface CartProduct extends Product {
  quantity: number,
};

export const discountColor = (discount: number) => {
  const discountColors: Object = {
    '10': '#796918',
    '20': '#00f9cc',
    '30': '#f68b2c',
    '40': '#ff2100',
    '50': '#ff0072',
    '60': '#ae1586',
  }
  const filteredColor = Object.entries(discountColors).filter((key) => 
    (Math.abs(+key[0] - discount) >= 0 && Math.abs(+key[0] - discount) < 10) ? key[1] : null
  )[0]

  return (filteredColor[1])
};

export const wineColor: any =  {
  "Branco": '##e0d291',
  "Espumante": '##e0d291',
  "Frisante": '#75194f',
  "Licoroso": 'transparent',
  "Rosé": '#f08c6f',
  "Tinto": '#75194f',
};

export const imgResizer = (url: string, height:number) => {
  return (url.replace("h=515,", `h=${height},`))
};

export const numberToBRL = (value: string) => {
  return (value.replace(/\./, ','))
};

export const classPageSelector = (page:number, index:number) => {
  if (page === index) return 'selected-page'
  return 'page-selector-button'
};

export const priceFilter = (products: Product[], lowValue: number = 0, topValue: number = 0, membership: boolean = false) => {
  if (topValue === 0) return (products.filter((item) => lowValue <= item.priceMember));
  return products.filter((item) => (lowValue <= item.priceMember && item.priceMember < topValue));
}
