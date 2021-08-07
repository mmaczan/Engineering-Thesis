import React, {useState} from 'react';
import { Main, MainContainer,} from '../../globalStyles';
import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';
import {Calendar,CtnNavCalendar, CtnDaysOfWeekCalendar,CtnDaysCalendar,CtnDayOfWeek,P, CtnNextLeft,BtnNext,CtnNextRight, CtnMonthYear, CtnDay,PPrevDays, PDays} from './MyCalendar.element';
import Runner from '../../Images/runner.png';



const MyCalendar = () => {
    

  
   const date = new Date();
   var zmienna = date.getMonth();
   const [count, setCount] = useState(zmienna);

    var nextmonth = () => {
    setCount(count+1);
    }
    const backmonth =()=> {
        setCount(count-1);
    }



    date.setMonth(count)

   
   const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
   const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
   const firstDayIndex = date.getDay();
   const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();
   const nextDays = 7 - lastDayIndex;
   
  
   
    const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    

    

    
   
    

      var days = () => { 
    
        var daysOfMonth = [];

        for (let x = firstDayIndex; x > 0; x--){
             daysOfMonth.push(<CtnDay>{<PPrevDays>{[prevLastDay-x]}</PPrevDays>}</CtnDay>);
         }

         for (let i = 1; i <= lastDay; i++){
             daysOfMonth.push(<CtnDay>{<PDays>{[i]}</PDays>}</CtnDay>);
         }

         for (let j = 1; j <= nextDays; j++){
            daysOfMonth.push(<CtnDay>{<PPrevDays>{[j]}</PPrevDays>}</CtnDay>);
        }
         
         return daysOfMonth;
      };


 

    const daysOfWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]; 

   function dayOfWeek(){ 
        var daysOfWeekRows = [];
        for(var i=0; i < daysOfWeek.length; i++){
            daysOfWeekRows.push(<CtnDayOfWeek>{daysOfWeek[i]}</CtnDayOfWeek>);
        }
    return daysOfWeekRows;
    }

   return (
        
        <MainContainer>
            <Main>
                <Calendar>
                    <CtnNavCalendar> 
                            <CtnNextLeft>
                               <BtnNext onClick={backmonth}><FaAngleDoubleLeft/></BtnNext> 
                            </CtnNextLeft>
                            <CtnMonthYear>
                            {months[date.getMonth()] +" "+ date.getFullYear()}
                            </CtnMonthYear>
                            <CtnNextRight>
                            <BtnNext onClick={nextmonth} ><FaAngleDoubleRight /></BtnNext> 
                            </CtnNextRight>
                    </CtnNavCalendar>
                    <CtnDaysOfWeekCalendar>
                       {dayOfWeek()}
                    </CtnDaysOfWeekCalendar>
                    <CtnDaysCalendar>
                    {days()}
                    </CtnDaysCalendar>
                </Calendar>
            </Main>
        </MainContainer>
    )
}

export default MyCalendar
