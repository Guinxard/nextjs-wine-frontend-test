import styled from "styled-components";

export const ProductControlContainer = styled.div`
  align-self: center;
  display:flex;
  justify-content: center;

  button {
      align-items: center;
      background: #7EBC43;
      border-radius: 50%;
      border-width: 0;
      box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
      color: #FFFFFF;
      display:flex;
      font-size: 30px;
      height: 30px;
      justify-content: center;
      width: 30px;
      margin-top: 5px;
      padding: 30px;
  }
  button:active {
    background-color: #3e8e41;
    box-shadow: 0 2px #666;
    transform: translateY(2px);
  } 
  input{
    border: 5px groove #3e8e41;
    border-radius: 7.5%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 5px;
    max-width: fit-content;
  }
`