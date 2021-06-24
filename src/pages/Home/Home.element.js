import styled from 'styled-components';
import { MainHalf, Button } from '../../globalStyles';
import {Link} from 'react-router-dom';



export const HomeContainerRight = styled(MainHalf)`
    padding-left: 50px;
    
    @media screen and (max-width: 991px){
        padding-left: 0px;
    }
    ${MainHalf}
`;
export const HomeContainerLeft = styled(MainHalf)`
    padding-right: 50px;
    width: 600px;
    @media screen and (max-width: 991px){
        margin: 0 100px;
        width: auto;
    }
    @media screen and (max-width: 610px){
        margin: 0 30px;
        width: auto;
    }
    ${MainHalf}
   
    
`;
export const HomeTextCtn = styled.div`
    text-align: right;
    margin-top: 20px;
    vertical-align: text-bottom;
`;



export const HomeH1Span = styled.span`
    font-family: "Monoton";
    font-size: 72px;
    @media screen and (max-width: 1299px){
        color: #FAE303;
    }
    @media screen and (max-width: 991px){
        font-size: 56px;
    }
    @media screen and (max-width: 600px){
        font-size: 36px;
    }
`;



export const HomeButtonCtn = styled.div`
    text-align: right;
    margin-top: 20px;
`;

export const HomeButton = styled(Button)`
width: 250px;
font-size: 24px;

    @media screen and (max-width: 991px){
        font-size: 16px;
        width: 180px;
    }
    @media screen and (max-width: 991px){
        font-size: 12px;
        width: 120px;
    }

${Button}

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