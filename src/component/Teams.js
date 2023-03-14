import React from 'react'
import { Link } from "react-router-dom";

import "./Teams.css"
function Teams({ data }) {
    console.log(data)

    if(!data){
        return(<>Wait...</>)
    }
    return (
        <div className='admin_dashboard'>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>College Name</th>
                        <th>College Location</th>
                        <th>Sport</th>
                        <th>Captains name</th>
                        <th>Captains number</th>
                        <th>Captains Email</th>

                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((info, index) => {
                        return (<tr key={index}>
<td>{index + 1}</td>
                            <td>{info.team.college_name}</td>
                            <td>{info.team.college_location}</td>

                            <td>{info.team.sport}</td>
                            <td>{info.team.captains_name}</td>
                            <td>{info.team.captains_Phone_no}</td>
                            <td>{info.team.captains_email}</td>

                            <td><Link to={`/admin/images/${index}`} className='image'>view more...</Link></td>

                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Teams