import styled from 'styled-components';
import { MainHalf, Button, Ctn,CtnBox, Main,Input } from '../../globalStyles';
import {Link} from 'react-router-dom';



export const MainMeasurement = styled(Main)`
 
    ${Main}
    @media screen and (max-width: 991px){
        
    }
`


export const MainContainerLeft = styled(MainHalf)`
    margin-bottom: 20px;
    ${MainHalf}
    @media screen and (max-width: 700px){
        width: 280px;
    }
`;

export const MainContainerRight = styled(MainHalf)`
    margin-bottom: 20px;
    ${MainHalf}
    @media screen and (max-width: 700px){
        
    }
    
`;

export const CtnResultList = styled(Ctn)`
    width: 400px;
    margin: 0 auto;
    padding: 10px;
    @media screen and (max-width: 600px){
        width: 280px;
    }
    ${Ctn}
`;
export const CtnBoxResult = styled(CtnBox)`
margin: 0;
    @media screen and (max-width: 600px){ 
    }
    ${CtnBox}
`;
export const InputLogReg = styled(Input)`
 
margin: 2px 0px !important;
@media screen and (max-width: 610px){
        
        width: auto;
        
    }
    @media screen and (max-width: 400px){
        
        width: 150px;
        
    }
${Input}  
`;
export const CtnBoxResultBtn = styled(CtnBox)`
    display: flex;
    justify-content: space-between;
    ${Ctn}
    @media screen and (max-width: 610px){
    }  
`;
export const BtnResult = styled(Button)`
    width: 150px;
    margin: 2px 34px;
    @media screen and (max-width: 610px){
      width: 100px;
      margin: auto;
    }
    ${Button}
`;

export const CtnImgbodyResult = styled.div`
text-align: center;
`;

export const ImgbodyResult = styled.img`
    width: 400px;
   
    @media screen and (max-width: 600px){
        width: 200px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top:0px;
    }
`;