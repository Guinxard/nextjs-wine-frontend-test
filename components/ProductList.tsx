import React, { useEffect, useState } from 'react';
import { Product } from '../utils/types';
import FilterList from './FilterList';
import ProductCard from './ProductCard';
import { Container, ProductListContainer, ProductListHeader, ProductListMain } from './ProductListStyles'
import Button from './Button';
import {classPageSelector} from './utils'

export default function ProductList({ productList, searchText }: any) {
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

  const pageSelector = () => {
    const pageNum = [];
    for (let i = 1; 0 <= i && i <= MAXPAGES; i++) {
      if (Math.abs(page - i) <= 2) pageNum.push(`${i}`);
      if (Math.abs(page - i) === 3) pageNum.push('...')
    }
    return pageNum;
  };

  const handleSearch = () => {
    const results = products.filter((product: Product) => product
    .name.toLowerCase().includes(searchText.toLowerCase()))
    setProducts(results);
  }

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    if (!userStorage) {
      localStorage.setItem('user', JSON.stringify({ 'name': 'John Doe' }))
      setMembership(false)
    }
    setSessionUser(JSON.parse(localStorage.getItem('user') || ''));
  }, []);

  const priceFilterHandle = (filteredProducts: Product[], filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
      if (selectedFilters.length === 1) {
        setProducts(filteredProducts);
      } else {
        setProducts(products.concat(filteredProducts));
      }
    } else {
      setProducts(products.filter((product: Product) => !filteredProducts.includes(product)))
      setSelectedFilters(selectedFilters.filter((item) => item != filter))
      if (selectedFilters.length === 2) setProducts(productList)
    }
  }

  console.log(products.slice(FIRSTPAGEITEM, LASTPAGEITEM));

  return (
    <Container>
      <ProductListMain>
        <FilterList productList={productList} priceFilterHandle={priceFilterHandle} selectedFilters={selectedFilters} />
        <div className='product-list-liner'>
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
          <div className='bottom-liner'>
            {page === 1 ? null : <Button text='<< Anterior' onClick={() => setPage(page - 1)} dataTestId={'previous_page_button'} disabled={false}></Button>}
            {pageSelector().map((i) => (
              i !== '...'
                ? <Button className={classPageSelector(page,+i)} text={i} key={i} onClick={() => setPage(+i)} dataTestId={`${i}_page_button`} disabled={false}/>
                : <span key={i}>. . .</span>)
            )}
            {page === MAXPAGES ? null : <Button text='Próxima >>' onClick={() => setPage(page + 1)} dataTestId={'next_page_button'} disabled={false}></Button>}
          </div>
        </div>
      </ProductListMain>
    </Container>
  );
}
