import React, { useState, useEffect } from "react"


function DigitalClock() {

    const [time, setTime] = useState(new Date());   
    

    useEffect(() => {

        //when we mount, create an interval that updates every 1 sec
        const intervalId = setInterval( () => {
            setTime(new Date());
        }, 1000);

        //when we unmount the component, clear that interval
        return () => {
            clearInterval(intervalId);
        }

    }, []);


    //formatting the time
    function formatTime() {
        const hours = time.getHours();
        const minutes =  time.getMinutes();
        const seconds = time.getSeconds();
        const afternoon = hours >= 12 ? "PM" : "AM";

        return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}   ${afternoon}`
    }

    function padZero(number) {
        return ( number < 10 ? "0" : "") + number;
    }

    return(
        < div className="background">
          <div className="clock-container">
            <span>{formatTime()}</span>
          </div>
        </div>
    )
}

export default DigitalClock