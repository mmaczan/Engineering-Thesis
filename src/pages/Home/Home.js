import React from 'react'
import { Main, MainContainer, P, H1, H2} from '../../globalStyles';
import {HomeContainerRight,HomeContainerLeft, HomeTextCtn, HomeH1Span, HomeButtonCtn, HomeButton, RunnerImgCtn, ImgRunner} from './Home.element';
import Runner from '../../Images/runner.png';
import firebase from 'firebase';


const Home = () => {
    
    return (
        <MainContainer>
            <Main>
                <HomeContainerLeft>
                        <HomeTextCtn>
                            <H2>To jest Twoja</H2>
                        </HomeTextCtn>
                        <HomeTextCtn>
                            <H1><HomeH1Span>M</HomeH1Span>iara <HomeH1Span>S</HomeH1Span>ukcesu</H1>
                        </HomeTextCtn>
                        <HomeTextCtn>
                            <P>Dzięki dziennikowi treningowemu można na bieżąco monitorować swoje postępy, bez problemów wrócić do początku swojej przygody i prześledzić progres siłowy</P>
                        </HomeTextCtn>
                        <HomeButtonCtn>
                            <HomeButton>Zaczynamy</HomeButton>
                        </HomeButtonCtn>
                </HomeContainerLeft>
                <HomeContainerRight>
                        <RunnerImgCtn>
                            <ImgRunner src={Runner}/>
                        </RunnerImgCtn>
                </HomeContainerRight>
            </Main>
        </MainContainer>
        
    )
}

export default Home
