import styled from 'styled-components';
import {Main, MainHalf, Ctn, Button, P ,CtnBox, H4} from '../../globalStyles';
import {Link} from 'react-router-dom';


export const MainMeasurement = styled(Main)`
 
    ${Main}
    @media screen and (max-width: 991px){
        
    }
`


export const MeasurementContainerLeft = styled(MainHalf)`
    
    ${MainHalf}
    @media screen and (max-width: 700px){
        width: 280px;
    }
`;

export const MeasurementContainerRight = styled(MainHalf)`
    
    ${MainHalf}
    @media screen and (max-width: 700px){
        
    }
    
`;

export const CtnResultList = styled(Ctn)`
    margin: auto;
    padding: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 600px){
        width: 280px;
    }
    ${Ctn}
`;

export const CtnResultsPartsOfBody = styled(Ctn)`
        margin: 0 auto;
        width: auto;
        padding: 10px ;
 ${Ctn}
`;
export const CtnBoxResult = styled(CtnBox)`

    @media screen and (max-width: 600px){ 
    }
    ${CtnBox}
`;
export const CtnBoxResultBtn = styled(CtnBox)`
    display: flex;
    justify-content: space-between;
    ${Ctn}
    @media screen and (max-width: 610px){
    }  
`;



export const CtnResultDataList = styled(Ctn)`
    padding: 10px;
    width: 400px;
    margin: auto;
    ${Ctn}
    @media screen and (max-width: 700px){
      width:250px;  
    }
    
`;

export const Result = styled.div`
    border-radius: 30px;
    padding: 10px 0px;
    background-color: #595959;
    cursor: pointer;
    margin-top: 8px;
    &:active {
        transform: scale(0.95);
      }
    &:hover {

        background-color: #Fae303;
        
        border-radius: 30px;
            @media screen and (max-width: 1299px){
            border: solid #Fae303;
            background-color: #343434;
        }
    }
  
`;

export const BtnResult = styled(Button)`
    width: 150px;
    @media screen and (max-width: 610px){
      width: 100px;
    }
    ${Button}
`;

export const CtnPartBody = styled.div`
    display: flex;
    width: 250px;
    height: 35px;
    background-color: #595959;
    border-radius: 30px;
    justify-content: space-between;
    padding: 0px 10px;
    @media screen and (max-width: 1299px){
        width: 230px;
    }
    @media screen and (max-width: 610px){
        width: 250px;
    }
    
    
`;

export const CtnResultsBody = styled.div`
 display: grid;
    grid-template-columns: 250px 250px ;
    grid-template-rows: 35px 35px 35px;
    column-gap: 14px;
    row-gap: 14px;
    @media screen and (max-width: 1299px){
        grid-template-columns: 230px 230px;
        grid-template-rows: 35px 35px 35px;
        column-gap: 14px;
        row-gap: 14px;
    }
    @media screen and (max-width: 610px){
        grid-template-columns: 250px ;
        grid-template-rows: 35px 35px 35px;
        column-gap: 14px;
        row-gap: 14px;
    }
`;

export const CtnPartBodP = styled(P)`
    color: #fff;
    @media screen and (max-width: 500px){
    font-size: 24px;
    }
    ${P}
`;