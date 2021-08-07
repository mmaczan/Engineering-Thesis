import styled from 'styled-components';
import { } from '../../globalStyles';


export const Calendar = styled.div`
    display: grid;
    grid-template-columns: 7fr;
    grid-template-rows: 1fr 1fr 5fr;
    background-color: #343434;
    border-radius: 15px;
    border: solid;
    border-color: black;
    padding: 5px;
    column-gap: 10px;
    row-gap: 10px;
`;

export const CtnNavCalendar = styled.div`
    display: grid;
    grid-template-columns: 3fr 8fr 3fr;
    grid-template-rows: 2fr;
    background-color: #595959;
`;
export const CtnDaysOfWeekCalendar = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-template-rows: 1fr;
    background-color: #595959;
`;
export const CtnDaysCalendar = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
    grid-template-rows: 2fr 2fr 2fr 2fr 2fr;
    column-gap: 10px;
    row-gap: 10px;
    background: #343434;
`;








export const CtnNextLeft = styled.div`
    display: grid;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    justify-self: center;
    align-self: center;
`;
export const CtnNextRight = styled.div`
    display: grid;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    justify-self: center;
    align-self: center;
`;
export const BtnNext = styled.button`
    height: 40px;
    width: 120px;
    background: #FAE303;
    border-radius: 30px;
`;
export const CtnMonthYear = styled.div`
    display: grid;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    justify-self: center;
    align-self: center;
    color: #FAE303;
`;

export const CtnDayOfWeek = styled.div`
    display: grid;
    justify-self: center;
    align-self: center;
    padding: 5px;
    
`;
export const CtnDay = styled.div`
    display: grid;
    height: 60px;
    background: #595959;
    
    
`;
export const P = styled.p`
    margin-left: 10px;
    
`;


export const PDays = styled.p`
    margin-left: 10px;
    color: #B7B7B7;
`;

export const PPrevDays = styled.p`
    margin-left: 10px;
    
`;


/*export const MainContainerRight = styled(MainHalf)`
 
`;


export const BtnLogin = styled(Button)`

    width: 200px;
    cursor: pointer;
`;

export const Calendar = styled.div`
    text-align: center;
    margin:0 auto;
`;

*/