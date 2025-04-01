import React from 'react'

export default function StudentForm() {
    return (
        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column" }}>
            <table style={{ "marginBottom": "30px" }}>
                <tr>
                    <td>Application</td>
                    <td>Duplicate</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Himanshu yadav</td>
                </tr>
                <tr>
                    <td>Father name</td>
                    <td>Suraj yadav</td>
                </tr>
                <tr>
                    <td>Roll no.</td>
                    <td>220104075</td>
                </tr>
                <tr>
                    <td>programme</td>
                    <td>B.tech</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>COE</td>
                </tr>
                <tr>
                    <td>Branch</td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td>8476076520</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>Duplicate@gmail.com</td>
                </tr>
                <tr>
                    <td>address</td>
                    <td>Duplicate efejdnkjlencec ewjckjen c b ewhcnewnck </td>
                </tr>
                <tr>
                    <td>aadharnumber</td>
                    <td>787042829211</td>
                </tr>
                <tr>
                    <td>marksheet</td>
                    <td>File.pdf</td>
                </tr>
                <tr>
                    <td>aadharcopy</td>
                    <td>aadhar.pdf</td>
                </tr>
            </table>
            <div className="teacher-action" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection": "column" }}>
                <button style={{ padding: "20px", fontSize: "1.3rem", borderRadius: "10px", margin: "10px", backgroundColor: "green", color: "white" }}>Approve</button>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <button style={{ padding: "20px", fontSize: "1.3rem", borderRadius: "10px", margin: "10px", backgroundColor: "red", color: "white" }}>Reject</button>
                    <textarea name="" id="" cols="20" rows="5" placeholder='any remark for rejection'></textarea>
                </div>
            </div>
        </div>
    )
}
