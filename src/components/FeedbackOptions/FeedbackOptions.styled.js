import styled from '@emotion/styled';

export const Button = styled.button`
  width: 130px;
  height: 40px;
  position: relative;
  background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); 
  border: none;
  border-radius: 5px;
  border-bottom: 4px solid #2b8bc6;
  color: #fbfbfb;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 1px 1px 1px rgba(0,0,0,.4);
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
  cursor: pointer; 
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;

  :hover, 
  :focus {
  color: red;
  scale: 0.9; 
  transition: transform .2s;
}

:active {
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
  top: 1px;
}

:after {
  content: "";
  width: 0;
  height: 0;
  display: block;
  border-top: 20px solid #187dbc;
  border-bottom: 20px solid #187dbc;
  border-left: 16px solid transparent;
  border-right: 20px solid #187dbc;
  position: absolute;
  opacity: 0.6; 
  right: 0;
  top: 0;
  border-radius: 0 5px 5px 0;  
}
`;

export const BtnContainer = styled.div`
display: flex;
justify-content:center;
gap: 5px;
margin-right: 10px;
margin-left: 10px;
`;