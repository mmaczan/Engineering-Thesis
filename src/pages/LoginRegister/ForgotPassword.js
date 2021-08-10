import React, {useState, state,setState, useRef} from 'react'
import { Main, MainContainer } from '../../globalStyles';
import {MainContainerRight, MainContainerLeft,CtnLogReg,H3, RunnerImgCtn,InputLogReg,CtnBoxLogReg,BtnLogin,ImgRunner} from './LoginRegister.element';
import Runner from '../../Images/runner.png';



const ForgotPassword = () => {

  

    return (
        <MainContainer>
            <Main>
                <MainContainerLeft>
                        <CtnLogReg>
                            <CtnBoxLogReg>
                                <H3>zapomniałes hasła?</H3>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg >
                               <InputLogReg type="email" name="email" placeholder="email" id="email"/>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg>
                                <BtnLogin>
                                    wyslij
                                </BtnLogin>
                            </CtnBoxLogReg>
                        </CtnLogReg>
                </MainContainerLeft>
                <MainContainerRight>
                        <RunnerImgCtn>
                            <ImgRunner src={Runner}/>
                        </RunnerImgCtn>
                </MainContainerRight>
            </Main>
        </MainContainer>
        
    )
}

export default ForgotPassword
