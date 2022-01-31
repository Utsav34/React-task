import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from './get';
import Dialog from '@mui/material/Dialog';
import {Try} from '../components/try'
import React from 'react'
import {EditUser} from '../page/index';
import { Link } from 'react-router-dom';
// import { Modal} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = (user) => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }


    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    

    return (
        <div>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            
                            <Button color="primary"  onClick={ handleClickOpen}  variant="contained" data-toggle="modal" style={{marginRight:10}} >Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button> 
                      
                       


                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

<Modal show={open} onHide={handleClose}>
<Modal.Body>
    <EditUser initialValue={user} />
</Modal.Body>
<Modal.Footer>
        <Button  color="secondary" variant="contained"  onClick={handleClose}>
            Close Button
        </Button>
</Modal.Footer>
</Modal>

</div>
    )
}

export default AllUsers;