import React, { useState } from 'react'
import {Grid, Paper, Avatar, Typography, TextField, Button} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { display } from '@mui/system';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Email } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';



const Demo=()=>{
    const [field, setField] = React.useState('');
// const [allEntry, setAllEntry]= useState([]);
// const submitForm = ()=> {
//   const newEntry = {name: Name, Email: Email,  field: field };
//   setAllEntry([...allEntry, newEntry]);
// }
const [setOpen] = React.useState(false);

const handleClose = () => {
  setOpen(false);
};
    const handleChange = (event) => {
        setField(event.target.value);
      };

    const paperStyle={padding: "10px 20px", width:350, margin:"0px auto"}
    return(
        <Grid align="center">
        <Paper elevation={0} style={paperStyle} >
           <Grid>
               <Avatar>

               </Avatar>
               <h2>Registration</h2>
               <Typography variant="caption">PLease Fill this form</Typography>
           </Grid>
            <div>
                <TextField fullWidth label="Name"  name="Name" placeholder="Enter your name" />
                <TextField fullWidth label="Email"/>
                <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" style={{display:'initial'}}>
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
  </RadioGroup>
</FormControl>
{/* 
<TextField fullWidth label="Address"/> */}


                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Field</InputLabel>
  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={field} label="Field" onChange={handleChange} >
    <MenuItem value={10}>Trainee</MenuItem>
    <MenuItem value={20}>Trainer</MenuItem>
    <MenuItem value={30}>Expert</MenuItem>
  </Select>
  {/* <Button type= "Submit" variant="contained" color="primary">Register</Button> */}
</FormControl>

<FormControl sx={{ width: '39ch' }}>
  <OutlinedInput placeholder="Please enter text" />
</FormControl>

                <Button type= "Submit" variant="contained" color="primary">Register</Button>
                {/* <br/> */}
                {/* <Button onClick={handleClose} variant="contained" color="primary">Cancel</Button> */}
                {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
        

               
            </div>

        </Paper>
        </Grid>
    )
}

export default Demo;