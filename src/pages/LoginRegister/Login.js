import React, {useState, state,setState, useRef} from 'react'
import { Main, MainContainer } from '../../globalStyles';
import {MainContainerRight, MainContainerLeft,CtnLogReg,H3, RunnerImgCtn,InputLogReg,CtnBoxLogReg,BtnLogin,ImgRunner, PLink} from './LoginRegister.element';
import Runner from '../../Images/runner.png';
import { Link } from 'react-router-dom';



const LoginRegister = () => {

  

    return (
        <MainContainer>
            <Main>
                <MainContainerLeft>
                        <CtnLogReg>
                            <CtnBoxLogReg>
                                <H3>Logowanie</H3>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg >
                               <InputLogReg type="text" name="Login" placeholder="Login" id="login"/>
                               <InputLogReg type="password" name="hasło" placeholder="hasło" id="password"/>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg >
                               <PLink>nie pamietasz hasła?</PLink>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg>
                                <BtnLogin>
                                    Logowanie
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

export default LoginRegister
