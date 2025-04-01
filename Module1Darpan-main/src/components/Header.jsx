import React, { useState } from 'react'
import logo from '../components/id4Gf3Mm0m-removebg-preview.png'
export default function Header() {
    // const daty = ()=>
    // {

    var currentdate = new Date();
    let currentsecounds = currentdate.getSeconds();
    let [currDate, setCurrDate] = useState(`${currentdate.getHours()<10?`0${currentdate.getHours()}`:currentdate.getHours()}:${currentdate.getMinutes() < 10 ? `0${currentdate.getMinutes()}` : currentdate.getMinutes()}:${currentdate.getSeconds() < 10 ? `0${currentdate.getSeconds()}` : currentdate.getSeconds()}`);
    setInterval(() => {
        currentdate = new Date()
        currentsecounds = currentdate.getSeconds();
        setCurrDate(`${currentdate.getHours()<10?`0${currentdate.getHours()}`:currentdate.getHours()}:${currentdate.getMinutes() < 10 ? `0${currentdate.getMinutes()}` : currentdate.getMinutes()}:${currentsecounds < 10 ? `0${currentsecounds}` : currentsecounds}`)
    }, 1000)
    // };
    return (
        <>
            <div className='Header-main'>
                <img src={logo} alt="" />
                <p className='University-name'>Harcourt Butler Technical University</p>
                <p className='Header-time'>Date:{currentdate.getDay()<10?`0${currentdate.getDay()}`:currentdate.getDay()}/{currentdate.getMonth()<10?`0${currentdate.getMonth()}`:currentdate.getMonth()}/{currentdate.getFullYear()}<br/>Time : [{currDate}]</p>
            </div>
            <div className="field-fill">Documents Request Section</div>
        </>
    )
}
