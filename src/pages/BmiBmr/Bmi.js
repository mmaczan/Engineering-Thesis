import React, {useState} from 'react';
import { Main, MainContainer, H3 } from '../../globalStyles';
import {MainContainerRight, MainContainerLeft, RunnerImgCtn,H4,InputLogReg,CtnBoxBmiBmr,BtnLogin,CtnBmiBmr,ImgRunner, CtnBoxBmiBmrResult} from './BmiBmr.element';
import Runner from '../../Images/runner.png';



const Bmi = () => {
    const [showResult, setClick] = useState(false)

    const handleClick =() => setClick(!showResult)
    return (
        <MainContainer>
            <Main>
                <MainContainerLeft>
                        <CtnBmiBmr >
                            <CtnBoxBmiBmr>
                                <H3>Bmi</H3>
                            </CtnBoxBmiBmr>
                            <CtnBoxBmiBmr>
                               <InputLogReg type="number" name="weight" placeholder="waga"/>
                               <InputLogReg type="number" name="Increase" placeholder="wzrost"/>
                            </CtnBoxBmiBmr>
                            <CtnBoxBmiBmr>
                                <BtnLogin onClick={handleClick} click={showResult}>
                                    Oblicz
                                </BtnLogin>
                            </CtnBoxBmiBmr>
                            
                            {showResult && <CtnBoxBmiBmrResult  >
                                <H4>Twój wskaźnik masy ciała wynosi: <H3>25.25</H3></H4>
                                <H4>Twoje BMI wskazuje na: <H3>nadwaga</H3></H4>
                            </CtnBoxBmiBmrResult>}
                            
                        </CtnBmiBmr>
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

export default Bmi
