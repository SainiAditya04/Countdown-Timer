import React, { useEffect, useState } from 'react'

const App = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [sec, setSec] = useState(0);
    const [countdownStart, setCountdownStart] = useState(false);

    useEffect(() => {
        let id;
        if(countdownStart){
            id = setInterval(() => {
                runTimer();
            }, 1000);
        }

        return () => {
            clearInterval(id);
        }

    }, [hours, minutes, sec, countdownStart]);

    function runTimer(){
        if(sec){
            setSec(sec - 1);
        }
        else if(minutes){
            setMinutes(minutes - 1);
            setSec(59);
        }
        else if(hours){
            setHours(hours - 1);
            setMinutes(59);
            setSec(59);
        }

        if(sec === 0 && hours === 0 && minutes === 0){
            setHours(0);
            setMinutes(0);
            setSec(0);
            setCountdownStart(false);
            alert("countdown is completed");
        }
    }

    function handleCountdown() {
        setCountdownStart(true);
    }

    function handleCurrentTime() {
        const currentTime = new Date();
        const curH = currentTime.getHours();
        const curM = currentTime.getMinutes();
        const curS = currentTime.getSeconds();

        setHours(curH);
        setMinutes(curM);
        setSec(curS);
        setCountdownStart(false);
    }
    return (
        <div className='flex flex-col gap-5 bg-[#191919] h-screen w-screen items-center justify-center'>
            <div className='flex gap-6 text-3xl text-white items-center'>
                <div>{hours}</div>
                <p>:</p>
                <div>{minutes}</div>
                <p>:</p>
                <div>{sec}</div>
            </div>
            <button
                onClick={handleCurrentTime}
                className='bg-red-600 p-3 rounded-md hover:bg-red-500'
            >Fetch current time</button>
            <button
            onClick={handleCountdown}
                className='bg-red-500 p-3 rounded-md hover:bg-red-400'
            >Start count down</button>
        </div>
    )
}

export default App
