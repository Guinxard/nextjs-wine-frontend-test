import styled from "styled-components";

export const ProductControlContainer = styled.div`
  display:flex;
  button {
      background: #7EBC43;
      border-radius: 50%;
      box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
      color: #FFFFFF;
      margin-top: 5px;
      border-width: 0;
      padding: 30px;
  }
  button:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(2px);
  } 
`