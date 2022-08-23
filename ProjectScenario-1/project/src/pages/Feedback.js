import React from 'react'
import { Paper } from '@mui/material'
import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import FormLabel from '@mui/material/FormLabel'
import axios from 'axios'


const defaultValues = {
    name: "",
    age: 0,
    gender: "",
    job: "",
    email: "",
    address: "",
    vac: ""
};

const Feedback = (props) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };


    const handleSubmit = async event => {
        event.preventDefault();
        event.target.reset();
        await axios.post("http://localhost:5000/feedback", formValues);
        alert("Data Inserted");
        console.log(formValues);

    };


    return (
        <div>
            <br />
            <center>
                <Paper sx={{ width: 400, border: '5px solid black' }}>
                    FEED BACK FORM
                    <form onSubmit={handleSubmit}>
                        <Grid container alignItems="center" justify="center" direction="column">
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="name"
                                    label="Name"
                                    type="text"
                                    value={formValues.name}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <br />
                            <Grid item>
                                <TextField
                                    id="age-input"
                                    name="age"
                                    label="Age"
                                    type="number"
                                    value={formValues.age}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <br />
                            <Grid item>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup
                                        name="gender"
                                        value={formValues.gender}
                                        onChange={handleInputChange}
                                        row
                                    >
                                        <FormControlLabel
                                            key="male"
                                            value="male"
                                            control={<Radio size="small" />}
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            key="female"
                                            value="female"
                                            control={<Radio size="small" />}
                                            label="Female"
                                        />
                                        <FormControlLabel
                                            key="other"
                                            value="other"
                                            control={<Radio size="small" />}
                                            label="Other"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <br />
                            <Grid item>
                                <FormLabel>
                                    Occupation : </FormLabel>
                                <FormControl>
                                    <Select sx={{ width: 120 }}
                                        name="job"
                                        value={formValues.job}
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem key="faculty" value="faculty">
                                            Faculty
                                        </MenuItem>
                                        <MenuItem key="employee" value="employee">
                                            Employee
                                        </MenuItem>
                                        <MenuItem key="student" value="student">
                                            Student
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <br />
                            <Grid item>
                                <FormControl>
                                    <FormLabel>Vaccination(2-Doses or above)</FormLabel>
                                    <RadioGroup
                                        name="vac"
                                        value={formValues.vac}
                                        onChange={handleInputChange}
                                        row
                                    >
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        <FormControlLabel
                                            key="yes"
                                            value="yes"
                                            control={<Radio size="small" />}
                                            label="Yes"
                                        />
                                        <FormControlLabel
                                            key="no"
                                            value="no"
                                            control={<Radio size="small" />}
                                            label="No"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <br />
                            <Grid item>
                                <TextField
                                    id="phone-input"
                                    name="phone"
                                    label="Phone Number"
                                    type="number"
                                    value={formValues.phone}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <br />
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="email"
                                    label="Email"
                                    type="text"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <br />
                            <Grid item>
                                <TextField
                                    id="name-input"
                                    name="address"
                                    label="Address"
                                    type="text"
                                    value={formValues.address}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <br />
                            <Grid item>
                                <Button
                                    variant='contained'
                                    type="reset" color="primary">Reset</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                            <br />
                        </Grid>
                    </form>
                </Paper>
            </center>
        </div>
    )
}

export default Feedback