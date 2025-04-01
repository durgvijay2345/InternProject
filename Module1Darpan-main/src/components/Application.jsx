import React, { useState } from 'react'
import searchImg from './icons8-search-64.png'
import CryptoJs from 'crypto-js'
import Loader from './Loader';
export default function Application() {
    const [applicationnum,setApplicationnum] = useState();
    const [applications, setApplications] = useState([]);
    const [loader, setLoader] = useState(false);
    const handlechange = (e)=>{
        setApplicationnum(e.target.value)
    }
    const fetchApplications = async () => {
        const reqnumber= CryptoJs.SHA256(applicationnum).toString();
        console.log(reqnumber);
        setLoader(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/studentapi/", {
                method: "GET"
            });
            // console.log(response);
            const result = await response.json();
            if (!response.ok) {
                console.log("problem in fetch");
            }
            else {
                setLoader(false);
                console.log(result)
                setApplications(result);
            }
        }
        catch (error) {
            setLoader(false);
            console.log(error);
        }
    }
    return (
        <>
            <div className="loader-screen">

            </div>
            <div className="application-body">
                <div className="application-banner">
                    Check your Application Status
                </div>
                <div className="application-block">
                    <input type="number" placeholder='enter your roll number' value={applicationnum} onChange={handlechange}/>
                    <button type="button" onClick={fetchApplications}>
                        <span>Search</span>
                        <img src={searchImg} alt="" /></button>
                </div>
            </div>
            <div className="loader-screen">

            {loader&&<Loader/>}
            </div>
            {!loader && (

            <div className="show-statuses">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Roll number</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                {
                    
                    applications?.map((e) => (
                        // <div key={e.id} className="application-bunch">
                        //     <div className="application-date application-text">13/05/2024</div>
                        //     <div className="application-name application-text">{e.name}</div>
                        //     <div className="application-status application-text">{`Status: Done`}</div>
                        // </div>
                        <tr key={e.id} className="">
                            <td className="faculty-application-td">13/05/2024</td>
                            <td className="faculty-application-td">{e.rollnumber}</td>
                            <td className="faculty-application-td">{e.studentName}</td>
                            <td className="faculty-application-td">{`Status: Done`}</td>
                        </tr>
                    ))
                }
                </table>
            </div>
            )}
        </>
    )
}
