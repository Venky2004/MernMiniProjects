import React from 'react'
import Moment from 'moment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import mypic from './Images/naru.jpg'
import bg from './Images/bg.gif'

const formatDate = Moment().format('Do-MMM-YYYY');

function Skill1() {
    return (
        <div>Skill1
            <p>{formatDate}</p>
            <center>
                <div> <Card sx={{ maxWidth: 400, minHeight: 600, margin: 8, border: '5px outset aqua', borderRadius: 5, backgroundImage: `url(${bg})` }}>
                    <center>
                        <CardMedia sx={{ maxWidth: 250, borderRadius: 100, border: '5px inset white', margin: 4, marginLeft: 5 }}
                            component="img"
                            alt="Venkat"
                            height="250"
                            image={mypic}
                        />
                    </center>
                    <CardContent>
                        <Typography color="white" gutterBottom variant="h3" component="div" fontFamily={'serif'}>
                            Venkata Sai Ram Reddy
                        </Typography>
                        <Typography variant="body2" color="white">
                            <p>Front End Enthusiastic</p>
                            <p>CSE Department, KL University</p>
                            <p>From Vijayawada</p>
                        </Typography>
                    </CardContent>
                </Card></div>
            </center>
        </div>
    )
}

export default Skill1