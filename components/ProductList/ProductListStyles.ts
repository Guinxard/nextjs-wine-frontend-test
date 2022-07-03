import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

export const ProductListMain = styled.main`
display: flex;
flex-direction:row;
max-width:74%;
.product-list-liner {
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.bottom-liner{
  align-items: center;
  display:flex;
  justify-content: center;
  margin: 20px;
  button {
    margin: 10px;
  }
  .selected-page {
      color: #FFFFFF;
      background-color:#ae1586;
      border: none;
      border-radius: 17.5%;
      box-shadow: 0px 0.973384px 1.94677px rgba(0,0,0,0.2);
      padding: 20px;
    }
    .page-selector-button {
      color: #ae1586;
      border-color: #ae1586;
      border: none;
      outline-style: outset;
      padding: 15px;
      border-radius: 6.5%;
      box-shadow: 0px 0.973384px 1.94677px rgba(0,0,0,0.2);
      min-width: fit-content;
    }
}
`

export const ProductListContainer = styled.div`
align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 32px;
justify-content: center;
padding: 0px;
width: 100%;
/* @media
width: 90,5%
gap: 24ps;
*/
`;

export const ProductListHeader = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
  .products-count {
    display: inline;
}
`;