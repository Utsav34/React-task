import React from 'react';
import { useState, useEffect } from 'react';
import {  useParams, useNavigate} from 'react-router-dom';
import { FormGroup,  InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { getUsers, editUser } from '../api/get';

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
const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id} = useParams();
    const classes = useStyles();
    let navigator = useNavigate();
    useEffect(() => {
    loadUserDetails();
    }, []);
    const loadUserDetails = async() => {
    const response = await getUsers(id);
    setUser(response.data);
    }
    const editUserDetails = async() => {
    const response = await editUser(id, user);
    navigator('/dashboard'); 
    }
    const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
        </FormGroup>
    )
}
export default EditUser;