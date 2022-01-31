import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../api/get';
import React from 'react'
const initialValue = {
name: '',
username: '',
email: '',
phone: ''
}

const useStyles = makeStyles({
container: {
width: '50%',
margin: '5% 0 0 25%',
'& > *': {
marginTop: 20
}
}
})

const Try = () => {
const [user, setUser] = useState(initialValue);
const { name, username, email, phone } = user;
const { id } = useParams();
const classes = useStyles();
let history = useNavigate();

useEffect(() => {
loadUserDetails();
}, []);

const loadUserDetails = async() => {
const response = await getUsers(id);
setUser(response.data);
}
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
const editUserDetails = async() => {
const response = await editUser(id, user);
history.push('/all');
}

const onValueChange = (e) => {
console.log(e.target.value);
setUser({...user, [e.target.name]: e.target.value})
}

return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen}>
        Try
      </Button>
      <Dialog open={open} onClose={handleClose}>
<FormGroup className={classes.container}>
<Typography variant="h4">Edit Information</Typography>
<FormControl>
<InputLabel htmlFor="my-input">Name</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<FormControl>
<InputLabel htmlFor="my-input">Username</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<FormControl>
<InputLabel htmlFor="my-input">Email</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<FormControl>
<InputLabel htmlFor="my-input">Phone</InputLabel>
<Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<FormControl>
<Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
</FormControl>
</FormGroup>
</Dialog>

</div>
)
}

export default Try;
