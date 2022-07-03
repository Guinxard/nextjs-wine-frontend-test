import styled from 'styled-components';
import { wineColor } from '../utils';

export const OverlayCardContainer = styled.div`
  align-items: center;
  box-sizing:border-box;
  color: #1D1D1B;
  display:flex;
  flex-direction: column;
  font-family: 'Lato';
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.222488px;
  line-height: 48px;
  margin-block: 4px;
  text-align: center;
  
  .details-side-area{
    align-items: flex-start;
    border-radius: 17,5px;
    box-shadow: 0px 15.73384px 64.6008px rgba(182, 17, 110, 0.20);
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: end;
  }

  img {
    background: #FFFFFF;
    display:inline;
    max-width: fit-content; 
    margin: auto;
  }

  .product-name {
    text-align: end;
    padding-left: 50px;
    min-height: 95.97px;
    min-width: 641px;
  }
  .amount {
    align-self: end;
  }

  .main-value-1 {
    align-self: end;
    color: #B6116E;
    font-weight: 900;
    font-size: 36px;
    line-height: 44px;
    margin-inline: 5px;
    margin-top: 15px;
  }
  .main-value-2 {
    color: #B6116E;
    font-weight: 900;
    font-size: 52px;
    line-height: 44px;
    margin-inline: 5px;
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
    font-size: 22px;
    line-height: 36px;
    padding: 3px;
    margin-block: 10px;
    margin-right: 15px;
    height: 150px;
  }

  .general-price {
    align-self: end;
    color: #888888;
    font-size: 24px;
    line-height: 36px;
  };
  .demo {
    border: 1px;
    border-radius: 50%;
    line-height: 16px;
    margin-inline: 15px;
    width: 28px;
    height:28px;
    padding-inline: 16px;
  }
  .demo-flag{
      padding-inline: 0px;
      margin-inline: 10px;
      max-width: 28px;
      max-height:28px;
    }

  .specialist-comment {
    display: flex;
    flex-direction: column;
    font-size: 26px;
    font-weight: 350;
    line-height: 32px;
    text-align: start;

    h5 {
      font-size: 26px;
      font-weight: 600;
      margin-block: 15px;
    }
  }

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  height: 80%;
  width: 80%;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #b6116e;
}
.popup .content {
  overflow: auto;
}

.wine-type {
  display: flex;
  font-size:28px;
  line-height: 28px;
  margin-inline: 15px;
}

.wine-information {
  justify-self: end;
  display:flex;
  width: 100%;
  align-items: center; 
}

.type-info{
  justify-self: end;
  display:flex;
  width: 100%;
  align-items: center; 
}
.classification-info{
  padding-right: 15px;
}

@media screen and (max-width: 700px){
  .box{
    width: 70%;
  }
  .popup{
    width: 70%;
  }
}`