import styled from 'styled-components';

export const CardContainer = styled.div`
  align-items: center;
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
    background: #FFFFFF;
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
  }

  .no-discount-price {
    display: inline;
    color: #888888;
    font-size: 11px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: line-through;
    padding: 3px;
  }
  
  .discount {
    color: #FFFFFF;
    border-radius: 6.25%;
    display: inline;
    font-size: 10px;
    line-height: 12px;
    padding: 3px
  }

  .general-price {
    color: #888888;
    font-size: 12px;
    line-height: 14px;
  };

  .add-button-container {
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