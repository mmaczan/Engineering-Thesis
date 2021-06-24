import React from 'react'
import { Main, MainContainer } from '../../globalStyles';
import {MainContainerRight, MainContainerLeft,CtnLogReg, RunnerImgCtn,H3,InputLogReg,CtnBoxLogReg,BtnLogin,ImgRunner} from './LoginRegister.element';
import Runner from '../../Images/runner.png';



const LoginRegister = () => {
    return (
        <MainContainer>
            <Main>
                <MainContainerLeft>
                        <CtnLogReg>
                            <CtnBoxLogReg>
                                <H3>Rejestracja</H3>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg>
                               <InputLogReg type="text" name="Login" placeholder="Login"/>
                               <InputLogReg type="password" name="hasło" placeholder="hasło"/>
                               <InputLogReg type="password" name="hasło" placeholder="powtórz hasło"/>
                            </CtnBoxLogReg>
                            <CtnBoxLogReg>
                                <BtnLogin>
                                    Zarejestruj
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
