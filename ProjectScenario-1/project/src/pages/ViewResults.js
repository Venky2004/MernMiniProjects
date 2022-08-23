import React from 'react'
import { Card } from '@mui/material'

const ViewResults = (props) => {
    return (
        <div>
            <br />
            <br />
            <center>
                <Card style={{ textAlign: "left", width: "500px", border: "5px double orange", padding: "20px" }} >
                    <p><b>Name: </b>{props.name}</p>
                    <p><b>Age: </b>{props.age}
                        <br />
                        <b> Gender: </b> {props.gender}
                        <br />
                        <b>Job:</b> {props.job}
                        <br />
                        <b>Vaccination(more than or equal to 2): </b>
                        {props.vac}
                        <br />
                        <b>Phone Number: </b>{props.phone}
                        <br />
                        <b>Email: </b>{props.email}
                        <br />
                        <b>Address: </b>{props.address}
                    </p>
                </Card>
            </center>
        </div >
    )
}

export default ViewResults