import React, {useState, useEffect} from 'react';
import './Countdown.css';
import {getRemainingTimeUnitlMsTimesTamp} from './Utils/CountdownTimerUtils'


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
const Countdown = ({CountdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    
    useEffect(() =>{
        const intervalId = setInterval(() =>{
            updateRemainingTime(CountdownTimestampMs)
        }, 1000);
        return () => clearTimeout(intervalId)
    },[CountdownTimestampMs])

    function updateRemainingTime(countdown){
        setRemainingTime(getRemainingTimeUnitlMsTimesTamp(countdown))
    }
    
    return (
        <div className='hidden lg:flex justify-center items-center px-2 mt-2'>
        <div className='countdown-timer'>
           <span>{remainingTime.days}</span>
           <span className='pl-2'>Days</span>
           <span className='pl-4'>{remainingTime.hours}</span>
           <span className='pl-2'>Hourse</span>
           <span className='pl-4'>{remainingTime.minutes}</span>
           <span className='pl-2'>Minutes</span>
           <span className='pl-4'>{remainingTime.seconds}</span>
           <span className='pl-2'>Seconds</span>
        </div>
        </div>
    );
};

export default Countdown;