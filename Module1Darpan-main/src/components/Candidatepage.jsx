import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Candidatepage(props) {
    const location = useLocation();
    const [candata,setcandata] = useState([]);
    // const data = {
    //     name:"Arnav garg",
    //     rollnumber:new URLSearchParams(location.search).get('propName'),
    //     branch:"CSE",
    //     school:"STEMS",
    //     college:"HBTU"
    // };
    const loadcandidate = async()=>{
        const response = await fetch(`http://127.0.0.1:8000/studentapi/${new URLSearchParams(location.search).get('propName')}`);
        const result = await response.json();
        if(!response.ok){
            console.log("error in candiate fetch");
            return;
        }
        // console.log(result[0]);
        const data = Object.entries(result[0]);
        setcandata(data)

    }
    async function handleapproval(e){
        console.log(props);
        const response = await fetch(`${candata.rollnumber}?${e===1?"approved":"rejected"}`,{
            method:"GET"
        })
        const result = await response.json();
        if(!response.ok){
            console.log("error in sending approval",response.error);
            return;
        }
        alert("application response recorded");
        console.log("alert hona h");
    }
    useEffect(()=>{
        loadcandidate();
    },[]);
  return (
    <div className='candidate-main-body'>
      <div className="candidate-inner-body">
        <table className='candidate-table'>
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            {
                candata.map(([k,v])=>(
                    <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                    </tr>
                ))
            }
        </table>
        <div className="candidate-buttons-div">
        <button className="candidate-button" id='candidate-button-1' onClick={()=>handleapproval(1)} >
            
            <Link to={'/faculty-applications'} style={{color:"white"}}>
            Accept
            </Link>
            </button>
        <button className="candidate-button" id='candidate-button-2'onClick={()=>handleapproval(0)}>
        <Link to={'/faculty-applications'} style={{color:"white"}}>
            Reject
            </Link>
        </button>
        </div>
      </div>
    </div>
  )
}
