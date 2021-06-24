import styled, {createGlobalStyle} from 'styled-components';

import WebFont from 'webfontloader';
WebFont.load({
    google: {
      families: ['Poppins Web:300,400,500,700', 'Monoton'],
    }
  });
//DIV//
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins";
    font-weight: 400;
    color:#343434;
}
`;
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 50px;
    padding-left: 50px;
        @media screen and (max-width: 991px){
            padding-left: 30px;
            padding-right: 30px;
        }
`;
export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    background: transparent;
    padding-top: 100px;
        @media screen and (max-width: 1299px){
            display: flex;
            flex-direction: column;
            }
    ${Container}
`;
export const MainContainer = styled.div`
    background: transparent;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    z-index: 2;
        @media screen and (max-width: 960px){
            background: #343434;
            display: flex;
            flex-direction: column;
        }
`;
export const MainHalf = styled.div`
    width: 650px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
        @media screen and (max-width: 1299px){
            width: auto;
            padding: 0 !important;
        }
        @media screen and (max-width: 610px){
            width: auto;
            padding: 0 !important;
            margin: 10px;
        }
`;
export const Ctn = styled.div`
    background-color: #343434;
    width: 500px;
    border-radius: 30px;
    position: relative;
    border: solid;
    border-color: #Fae303;
        @media screen and (max-width: 610px){
            margin-top: 20px;
            width: 250px; 
        }
`;
export const CtnBox = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #FAE303;
    @media screen and (max-width: 610px){
        margin: 10px;
        width: auto;
    }
`;
//BUTTONS//
export const Button = styled.button`
    padding: 10px;
    border-radius: 30px;
    background-color: #343434;
    color: #FAE303;
    box-shadow: 5px 7px 5px rgba(34, 34, 34, 0.45);
    border: 3px solid #343434;
    border-color: #FAE303;
    width: 100px;
        &:focus{
        outline: none;
        }
        &:hover{
        background-color: #FAE303;
        color: #343434;
        border-color: #343434;
        transition: 0.5s ease-in-out;
        }
`;

//FONTS//

export const P = styled.p`
    font-weight: 300;
    
    @media screen and (max-width: 1299px){
        color: #FAE303;
    }
    @media screen and (max-width: 600px){
        font-size: 16px;
    }
  
`;
export const H1 = styled.h1`
    font-weight: 700;
    font-size: 64px;
        @media screen and (max-width: 1299px){
            color: #FAE303;
        }
        @media screen and (max-width: 991px){
            font-size: 44px;
        }
        @media screen and (max-width: 600px){
            font-size: 34px;
        }
`;
export const H2 = styled.h2`
  font-weight: 500;
  font-size: 46px;
  @media screen and (max-width: 1299px){
        color: #FAE303;
    }
    @media screen and (max-width: 991px){
        font-size: 36px;
    }
    @media screen and (max-width: 991px){
        font-size: 26px;
    }
`;
export const H3 = styled.h3`
    color: #FAE303;
`;
export const H4 = styled.h4`
    color: #FAE303;
`;

//INPUTS//
export const Select = styled.select`
    margin: 10px 10px;
    background-color: #FAE303;
    border-radius: 30px;
    font-size: 16px;
    width: 400px;
    @media screen and (max-width: 610px){
        width: 200px;
    }
`;
export const Option = styled.option`
    width: 300px;
    font-size: 10px;
    &:hover {
        color: white;
        background-color: #FAE303;
        border: solid;
    }
`;
export const Input = styled.input`
    width: 300px;
	padding: 5px 0;
	margin: 20px 7.5%;
	border-left: 0;
	border-top: 0;
	border-right: 0;
	border-bottom: 1px solid #FAE303;
	outline: none;
	background: transparent;
	color:#FAE303;
	font-size:18px;
        &::placeholder{
            font-size: 16px;
            color: #FAE303;
            opacity: 2;
        }
        &:required {
        box-shadow: none;
        }
  `
export const InputRadio = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: none;
    
        &:after {
            margin-top: 10px;
            cursor: pointer;
            width: 120px;
            display: inline-block;
            text-align: center;
            font-size: 16px;
            content: attr(data-icon);
            padding: 5px;
            border-radius: 15px;
            color: #FAE303;
            transition: box-shadow 1s, color 1s;
        }
        
        &:checked {
            &:after {
                background-color: #FAE303;
                box-shadow: 2px 2px 14px rgba(0,0,0,.4);
                color: rgba(41, 41, 41, 0.753);
                border-radius: 15px;
            }
        }

`
export default GlobalStyle