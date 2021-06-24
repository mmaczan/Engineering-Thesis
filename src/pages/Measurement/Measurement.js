import React from 'react'
import { MainContainer, P, H3, H4 } from '../../globalStyles';
import {MainMeasurement, MeasurementContainerLeft,CtnResultsBody,MeasurementContainerRight, CtnResultList,CtnPartBodP,CtnResultsPartsOfBody,CtnBoxResultBtn, CtnBoxResult,Result,BtnResult, CtnPartBody} from './Measurement.element';




const Measurement = () => {
    return (
        <MainContainer>
            <MainMeasurement>
                <MeasurementContainerLeft>
                     <CtnResultList>
                        <CtnBoxResult>
                            <H3>Pomiary</H3>
                        </CtnBoxResult>
                        <CtnBoxResult>
                            <Result>
                                <H4>2021-02-21</H4>
                            </Result>
                            <Result>
                                <H4>2021-02-21</H4>
                            </Result>
                            <Result>
                                <H4>2021-02-21</H4>
                            </Result>
                        </CtnBoxResult>
                        <CtnBoxResultBtn>
                            <BtnResult>nowy wpis</BtnResult>
                            <BtnResult>usuń wpis</BtnResult>
                        </CtnBoxResultBtn>
                    </CtnResultList>   
                </MeasurementContainerLeft>
                <MeasurementContainerRight>
                    <CtnResultsPartsOfBody>
                            <CtnBoxResult>
                            <H3>Wyniki</H3>
                            </CtnBoxResult>
                            <CtnResultsBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody><CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                                <CtnPartBody>
                                    <H4>przedramię </H4><H4>45 </H4><H4>cm</H4>
                                </CtnPartBody>
                            </CtnResultsBody>
                            
                        </CtnResultsPartsOfBody>    

                </MeasurementContainerRight>
            </MainMeasurement>
        </MainContainer>
        
    )
}

export default Measurement
