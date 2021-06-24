import React from 'react'
import { Main, MainContainer, H3} from '../../globalStyles';
import {MainContainerRight,MainContainerLeft,CtnResultList,CtnBoxResult,InputLogReg,CtnBoxResultBtn,BtnResult, CtnImgbodyResult, ImgbodyResult} from './NewResult.element';
import bodyResult from '../../Images/bodyResult.svg';



const NewResult = () => {
    return (
        <MainContainer>
            <Main>
            <MainContainerLeft>
            <CtnResultList>
                        <CtnBoxResult>
                            <H3>Pomiary</H3>
                        </CtnBoxResult>
                        <CtnBoxResult>
                        <InputLogReg type="text" name="" placeholder="kark"/>
                        <InputLogReg type="text" name="" placeholder="klatka"/>
                        <InputLogReg type="text" name="" placeholder="biceps"/>
                        <InputLogReg type="text" name="" placeholder="triceps"/>
                        <InputLogReg type="text" name="" placeholder="przedramię"/>
                        <InputLogReg type="text" name="" placeholder="pas"/>
                        <InputLogReg type="text" name="" placeholder="biodra"/>
                        <InputLogReg type="text" name="" placeholder="udo"/>
                        <InputLogReg type="text" name="" placeholder="łydka"/>
                        </CtnBoxResult>
                        <CtnBoxResultBtn>
                            <BtnResult>zapisz</BtnResult>
                            <BtnResult>anuluj</BtnResult>
                        </CtnBoxResultBtn>
                    </CtnResultList>  
            </MainContainerLeft>
                <MainContainerRight>
                        <CtnImgbodyResult>
                            <ImgbodyResult src={bodyResult}/>
                        </CtnImgbodyResult>
                </MainContainerRight>
            </Main>
        </MainContainer>
        
    )
}

export default NewResult
