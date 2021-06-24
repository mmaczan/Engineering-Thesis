import styled from 'styled-components';
import { MainHalf, Button, Input, Ctn, CtnBox} from '../../globalStyles';
import {Link} from 'react-router-dom';



export const MainContainerRight = styled(MainHalf)`
   
    @media screen and (max-width: 1299px){
    }
    ${MainHalf}
`;
export const MainContainerLeft = styled(MainHalf)`
    
    @media screen and (max-width: 1299px){
    }
    ${MainHalf}
`;
export const MainContainerLeftBmr = styled(MainHalf)`
    
    @media screen and (max-width: 1299px){
    }
    ${MainHalf}
`;
export const CtnBmiBmr = styled(Ctn)`
margin: 0 auto;
${Ctn}  
`;
export const CtnBoxBmiBmr = styled(CtnBox)`
margin: 20px;
${CtnBox}  
`;
export const CtnBoxBmiBmrResult = styled(CtnBox)`
`;

export const H3 = styled.h3`
    color: #FAE303;
`;
export const H4 = styled.h4`
    font-size: 14px;
    color: #FAE303;
`;
export const InputLogRegBmr = styled(Input)`
margin: 5px;

@media screen and (max-width: 610px){
        width: 150px;
    }
${Input}    
`;
export const InputLogReg = styled(Input)`
margin: 20px;

@media screen and (max-width: 610px){
        width: 150px;
    }
${Input}    
`;

export const BtnLogin = styled(Button)`

    width: 200px;
    cursor: pointer;
`;

export const RunnerImgCtn = styled.div`
    text-align: center;
    margin:0 auto;
`;

export const ImgRunner = styled.img`
    width: 550px;
    @media screen and (max-width: 900px){
        width: 350px;
        
    }
    @media screen and (max-width: 600px){
        width: 200px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top:0px;
    }
`;