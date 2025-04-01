import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function FacultyApplication() {
    const [apps,setApps] = useState([]);
    const loadapps = async()=>{
        const response = await fetch('http://127.0.0.1:8000/studentapi/',{
            method:"GET"
        });
        const result = await response.json();
        if(!response.ok){
            console.log("problem in fetch");
            return
        }
        console.log(result);
        const data = [...result].reverse();
        setApps(data);
    }
    
    useEffect(()=>{
        loadapps();
    },[])
  return (
    <div className='faculty-application-main-body'>
        
      <div className="faculty-inner-main-body">
        <table className="faculty-application-table " >
            <tr className="faculty-application-tr">
                <th className="faculty-application-th">Date</th>
                <th className="faculty-application-th">Roll no.</th>
                <th className="faculty-application-th">Application type</th>
                <th className="faculty-application-th">Status</th>
            </tr>
            
            {
                apps?.map((e)=>(
                    <tr className='faculty-application-tr' key={e.rollnumber}>
                        <td className='faculty-application-td'>{e.created_at}</td>
                        <td className='faculty-application-td td-cursor' >
                            <Link to={`/candidate-page?propName=${e.rollnumber}`}>
                            {e.rollnumber}
                            </Link>
                            </td>
                        <td className='faculty-application-td'>{e.studentName}</td>
                        <td className='faculty-application-td'>{e.status}</td>
                    </tr>
                ))
            }
            
        </table>
      </div>
    </div>
  )
}
