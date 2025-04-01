import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

// import f1 from '../Arnavgarg_resume.pdf';
// import f2 from '../Final_IOT.pdf';
// import { useParams } from 'react-router-dom';
{/* Students name
Fathers name
roll number
Programme Name
Department
Branch
Mobile number
Email id
Address with pin code
Aadhar ID
*/}
// type FormValues = {
//     studentName:string
//     fatherName:string
//     rollnumber:number
//     programme:string
//     department:string
//     branch:string
//     mobilenumber:number
//     email:string
//     address:string
//     nodues_copy:file
//     aadharnumber:number
//     marksheetcopy:file
//     aadharcopy:file
//     Certificate:string
//     studentName:string

// }
export default function InputPage(props) {
    // const {appointment} = useParams();
    // console.log(appointment);
    const form = useForm();
    const {register,handleSubmit} = form;
    let conditionalInputs = [];
    const navigate=useNavigate();
    const t = props
    const [formdata,setFormdata] = useState({
        'studentName':'Shivam',
        'fatherName':'',
        'rollnumber':'',
        'programme':'',
        'department':'',
        'branch':'',
        'mobilenumber':'',
        'email':'',
        'address':'',
        'nodues_copy':'',
        'aadharnumber':'',
        'marksheetcopy':null,
        'aadharcopy':null,
    });
    const handleChange=(e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setFormdata({
            ...formdata,
            [name]:value,
        })
    }
    // const handleChangeOptions=(e)=>{
    //     console.log(e.target.value);
    //     const {name,value} = e.target;
    //     setFormdata({
    //         ...formdata,
    //         [name]:value,
    //     })
    // }
    
    const handleupload=(e)=>{
        const file = e.target.files[0];
        console.log(file)
        // if (file && file.size>(5000*1024)) {
        //     console.log("exceeds file size");
        //     return
        // }
        const reader = new FileReader();
        reader.onloadend=()=>{
            setFormdata({
                ...formdata,
                [e.target.name]:file,
            })
        }
        reader.readAsDataURL(file);
        if(!file){
            console.log('no file uploaded')
            return
        }
        setFormdata({
            ...formdata,
            [e.target.name]:file,
        })
        console.log(formdata);
    }
    const handleSubmitown=async(data)=>{

       
        const fd = new FormData();
        data={...data,"Certificate":props.title}
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
              // If the field is a file, append it to FormData directly
              if (key === 'aadharcopy' || key === 'nodues_copy') {
                fd.append(key, data[key][0]);
              } else {
                // Otherwise, append other fields normally
                fd.append(key, data[key]);
              }
            }
          }
        // fd.append('studentName',formdata.studentName);
        // fd.append('fatherName',formdata.fatherName);
        // fd.append('rollnumber',formdata.rollnumber);
        // fd.append('programme',formdata.programme);
        // fd.append('department',formdata.department);
        // fd.append('branch',formdata.branch);
        // fd.append('mobilenumber',formdata.mobilenumber);
        // fd.append('email',formdata.email);
        // fd.append('address',formdata.address);
        // fd.append('nodues_copy',formdata.nodues_copy);
        // fd.append('aadharnumber',formdata.aadharnumber);
        // fd.append('marksheetcopy',formdata.marksheetcopy);
        // fd.append('aadharcopy',formdata.aadharcopy);
        console.log(fd)
        // fd.append('Certificate',formdata.Certificate);
        const response = await fetch("http://127.0.0.1:8000/studentapi/",{
            method:"POST",
            body:fd
        })
        const result = await response.json();
        console.log(JSON.stringify(data))
        if(!response.ok){
            console.log("error in posting");
            console.log(result)
            return;
        }
        alert("ho gya post");
        navigate('/');
    }
    
    if(props.title==="duplicate marksheet"){
        conditionalInputs.push(
        <>
        <label htmlFor="fircopy" className='InputPage-Labels'>FIR copy pdf:</label>
        <input type="file" id='fircopy' accept="application/pdf" className="InputPage-field" name="fircopy" onChange={handleupload}/>
        <label htmlFor="newscopy" className='InputPage-Labels'>News Advertisement copy pdf:</label>
        <input type="file" id='newscopy' accept="application/pdf" className="InputPage-field" name="newscopy" onChange={handleupload}/>
        <label htmlFor="paymentcopy" className='InputPage-Labels'>Payment screenshot pdf:</label>
        <input type="file" id='paymentcopy' accept="application/pdf" className="InputPage-field" name="paymentcopy" onChange={handleupload}/>
        </>)
    }
    return (
            <>
            <form onSubmit={handleSubmit(handleSubmitown)} encType="multipart/form-data">
            
            <h1>{props.title}</h1>
            <div className='InputPage-main'>
            <label htmlFor="studentName"  className='InputPage-Labels' >Student's name:</label>
            <input type="text" id='studentName' autoFocus className="InputPage-field" value={formdata.studentName} placeholder='Student name'name="studentName" onChange={handleChange} {...register("studentName")}/>
            <label htmlFor="fatherName" className='InputPage-Labels'>Father's name:</label>
            <input type="text" id='fatherName' className="InputPage-field" placeholder='Father name'name="fatherName" onChange={handleChange} {...register("fatherName")}/>
            <label htmlFor="rollNumber" className='InputPage-Labels'>Roll number:</label>
            <input type="text" id='rollNumber' className="InputPage-field" placeholder='Roll number'name="rollnumber" onChange={handleChange} {...register("rollnumber")}/>
            <label htmlFor="programmeName" className='InputPage-Labels'>Programme name:</label>
            {/* <input type="text" id='programmeName' className="InputPage-field" placeholder='Programme name'name="programme" onChange={handleChange}/> */}
            <select name="programme" id="programmeName" className="InputPage-field" onChange={handleChange} {...register("programme")}>
                <option value="">Select</option>
                <option value="B.tech">B.tech</option>
                <option value="M.tech">M.tech</option>
                <option value="MCA">MCA</option>
            </select>
            <label htmlFor="department" className='InputPage-Labels'>Department:</label>
            <input type="" id='department' className="InputPage-field" placeholder='Department'name="department" onChange={handleChange} {...register("department")}/>
            {/* <select name="department" id="department" className="InputPage-field" onChange={handleChange}>
                <option value="">csss</option>
                <option value="">iit</option>
                <option value="">papapa</option>
                <option value="">gpgp</option>
            </select> */}
            <label htmlFor="branch" className='InputPage-Labels'>Branch:</label>
            <input type="text" id='branch' className="InputPage-field" placeholder='Branch name'name="branch"  {...register("branch")}/>
            <label htmlFor="mobileNumber" className='InputPage-Labels'>Mobile number:</label>
            <input type="tel" pattern="[0-9]*" title="enter only numberic values"id='mobileNumber' className="InputPage-field" placeholder='Mobile number'name="mobilenumber" onChange={handleChange} {...register("mobilenumber")}/>
            <label htmlFor="emailId" className='InputPage-Labels'>Email Id:</label>
            <input type="email" id='emailId' className="InputPage-field" placeholder='Email id'name="email" onChange={handleChange} {...register("email")}/>
            <label htmlFor="address" className='InputPage-Labels'>Address:</label>
            <input type="text" id='address' className="InputPage-field" placeholder='Address'name="address" onChange={handleChange} {...register("address")}/>
            <label htmlFor="aadhar" className='InputPage-Labels'>Aadhar number:</label>
            <input type="text" id='aadhar' className="InputPage-field" placeholder='Aadhar number'name="aadharnumber" onChange={handleChange} {...register("aadharnumber")}/>
            <label htmlFor="marksheet" className='InputPage-Labels'>Marksheet: </label>
            <input type="file" id='marksheet' accept="application/pdf" className="InputPage-field" name="marksheetcopy" onChange={handleupload} {...register("nodues_copy")}/>
            <label htmlFor="aadharcopy" className='InputPage-Labels'>Aadhar copy pdf:</label>
            <input type="file" id='aadharcopy' accept="application/pdf" className="InputPage-field" name="aadharcopy" onChange={handleupload} {...register("aadharcopy")}/>
            {conditionalInputs}
            </div>
            
            <button type='submit' className="submitButton">Submit</button>
            
            </form>
            </>
    )
}
