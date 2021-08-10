import styled from 'styled-components';
import { MainHalf, Button, Input, Ctn ,CtnBox} from '../../globalStyles';
import {Link} from 'react-router-dom';



export const MainContainerRight = styled(MainHalf)`
    padding-left: 80px;
    ${MainHalf}
    @media screen and (max-width: 1299px){
        padding-top: 20 !important;
    }
    
`;
export const MainContainerLeft = styled(MainHalf)`
    
    padding-right: 50px;
    ${MainHalf}
    @media screen and (max-width: 1299px){
        margin-top: 20px;
    }
`;
export const CtnLogReg = styled(Ctn)`
     
    ${Ctn}
   
`;
export const CtnBoxLogReg = styled(CtnBox)`
${CtnBox}
`;
export const H3 = styled.h3`
    color: #FAE303;
    width: auto;
    margin: auto;
`;
export const PLink = styled(Link)`
    color: #FAE303;
    font-size: 12px;
    
`;
export const InputLogReg = styled(Input)`
@media screen and (max-width: 610px){
        
        width: auto;
        
    }
    @media screen and (max-width: 400px){
        
        width: 150px;
        
    }
${Input}    
`;

export const BtnLogin = styled(Button)`
    width: 200px;
    @media screen and (max-width: 610px){
        width: 100px;
    }
`;

export const RunnerImgCtn = styled.div`
text-align: center;
margin-top:20px;
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