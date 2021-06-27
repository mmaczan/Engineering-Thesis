import React from 'react'
import { Main, MainContainer, P, H1, H2} from '../../globalStyles';
import {HomeContainerRight,HomeContainerLeft, HomeTextCtn, HomeH1Span, HomeButtonCtn, HomeButton, RunnerImgCtn, ImgRunner} from './Home.element';
import Runner from '../../Images/runner.png';
import firebase from 'firebase';


const Home = ({ data }) => {
    console.log(data);
    const updateUser = () => {
        /// [1,3, 4]; push(5)
        // const updatedData = data.slice(0) === ...data;
        // updatedData.push(5);
        const updatedData = [...data, { email: 'dupa787@wp.pl', status: 'anoreksja' }];
        
        // handler to set data;
        //firebase.database().ref('users').set(updatedData);
        //firebase.database().ref('users').child(0).child('status').set('grubas');
    }

    return (
        <MainContainer>
            <Main>
                <button onClick={updateUser}>Add user</button>
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
