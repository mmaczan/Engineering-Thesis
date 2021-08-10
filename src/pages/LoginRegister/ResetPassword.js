import React, {useState, state,setState, useRef} from 'react'
import { Main, MainContainer } from '../../globalStyles';
import {MainContainerRight, MainContainerLeft,CtnLogReg,H3, RunnerImgCtn,InputLogReg,CtnBoxLogReg,BtnLogin,ImgRunner} from './LoginRegister.element';
import Runner from '../../Images/runner.png';



const ResetPassword = () => {

  

    return (
        <MainContainer>
            <Main>
                <MainContainerLeft>
                        <CtnLogReg>
                            <CtnBoxLogReg>
                                <H3>zmiana hasła</H3>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg >
                               <InputLogReg type="text" name="nowe hasło" placeholder="nowe hasło" id="newPassword"/>
                               <InputLogReg type="password" name="powtórz hasło" placeholder="powtórz hasło" id="password"/>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg>
                                <BtnLogin>
                                    zmień
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

export default ResetPassword
