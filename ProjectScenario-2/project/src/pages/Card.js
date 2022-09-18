import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import Cards from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material/Typography'
import wave from './wave.svg'

export const Card = (props) => {
    return (
        <Cards sx={{ maxHeight: 300, maxWidth: 280, margin: 2, textAlign: "left", backgroundImage: `url(${wave})`, backgroundRepeat: "no-repeat" }}>
            <CardContent>
                <b><i>Event ID: </i></b>{props.eventid}
                <br />
                <b><i>Type: </i></b>{props.type}
                <br />
                <b><i>Rj Name: </i></b>{props.rjname}
                <br />
                <b><i>Timing: </i></b>{props.timing}
                <br />
                <b><i>Duration: </i></b>{props.duration}
                <br />
                <b><i>Participation: </i></b>{props.participation}
            </CardContent>
            <CardMedia
                component="img"
                alt={props.login}
                src={props.pic}
            />
        </Cards>
    )
}
export default Card