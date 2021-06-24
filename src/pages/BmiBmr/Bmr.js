import React, {useState} from 'react';
import { Main, MainContainer, InputRadio, Select ,Option, H3 } from '../../globalStyles';
import {MainContainerRight, MainContainerLeftBmr, RunnerImgCtn,H4,CtnBoxBmiBmr,InputLogRegBmr,BtnLogin,CtnBmiBmr,ImgRunner, CtnBoxBmiBmrResult} from './BmiBmr.element';
import Runner from '../../Images/runner.png';



const Bmi = () => {
    const [click, setClick] = useState(false)

    const handleClick =() => setClick(!click)
    return (
        <MainContainer>
            <Main>
                <MainContainerLeftBmr >
                        <CtnBmiBmr>
                            <CtnBoxBmiBmr>
                                <H3>Bmr</H3>
                            </CtnBoxBmiBmr>
                            <CtnBoxBmiBmr>
                                <InputRadio type="radio" name="sex" value="f" data-icon="kobieta" />
                                <InputRadio type="radio" name="sex" value="m" data-icon="mężczyzna" />
                            </CtnBoxBmiBmr>
                            <CtnBoxBmiBmr>
                               <InputLogRegBmr type="number" name="weight" placeholder="waga"/>
                               <InputLogRegBmr type="number" name="Increase" placeholder="wzrost"/>
                               <InputLogRegBmr type="number" name="age" placeholder="wiek"/>
                            </CtnBoxBmiBmr>
                            <CtnBoxBmiBmr>
                                <H4>aktywność fizyczna</H4>
                                <Select>
                                    <Option value="0" selected="selected">Wybierz rodzaj aktywności fizycznej</Option>
                                    <Option value="1">Znikoma(brak ćwiczeń, praca siedząca, szkoła)</Option>
                                    <Option value="2">Bardzo mała(ćwiczenia raz na tydzień, praca lekka)</Option>
                                    <Option value="3">Umiarkowana(ćwiczenia 2 razy w tygodniu – średniej intensywności)</Option>
                                    <Option value="4">Duża(dość ciężki trening kilka razy w tygodniu)</Option>
                                    <Option value="5">Bardzo duża(przynajmniej 4 ciężkie treningi w tygodniu, praca fizyczna)</Option>
                                </Select>
                                <H4>planuje</H4>
                                 <Select>
                                    <Option value="0" selected="selected">wybierz co chcesz osiągnąć</Option>
                                    <Option value="1">chcę przytyć</Option>
                                    <Option value="2">chcę utrzymać wagę</Option>
                                    <Option value="3">chcę schudnąć</Option>
                                </Select>

                            </CtnBoxBmiBmr>
                            <CtnBoxBmiBmr>
                                <BtnLogin onClick={handleClick} click={click}>
                                    Oblicz
                                </BtnLogin>
                            </CtnBoxBmiBmr>
                            
                            {click ? <CtnBoxBmiBmrResult  >
                                <H4>Twoja podstawowa przemiana materii wynosi: <H3>1778</H3></H4>
                                <H4>Aby schudnąć, uwzględniając Twoje całkowite zapotrzebowanie kaloryczne, powinieneś dostarczać organizmowi*: <H3>2189 kcal</H3></H4>
                            </CtnBoxBmiBmrResult> : <CtnBoxBmiBmrResult></CtnBoxBmiBmrResult>}
                            
                        </CtnBmiBmr>
                </MainContainerLeftBmr>
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
