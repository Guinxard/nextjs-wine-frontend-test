import styled from "styled-components"

export const Container = styled.body`
align-self: center;
display: flex;
flex-direction: column;
max-width:1440px;
max-height:1516px;
`;

export const HeaderContainer = styled.nav`

  align-items: center;
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height:6%;
  justify-content: space-around;
  line-height: 24px;
  margin: 10px;
  padding-inline: 15px;
  a {
    align-items: stretch;
    box-sizing:border-box;
    color: #555555;
    display: flex;
    height: 100%;
    padding-block: 20px;
    padding-inline: 20px;
    border-bottom: 4px solid rgba(0,0,0,0);
  }
  a:hover {
    border-bottom: 4px solid #b6116e;
    color: #b6116e;
  }
  div {
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    width: 70%;
  }
  button {
    background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;
  }
`;