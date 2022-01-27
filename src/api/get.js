
import { useEffect, useState} from "react";
import * as React from 'react';
import  {DataGrid}  from '@mui/x-data-grid';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";


const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name', width: 100},
    {field: 'email', headerName: 'Email', width: 200},
    {field: 'phoneno', headerName: 'Phoneno', width:250},
    {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        width: 200,
        disableClickEventBubbling: true,
        renderCell: () => {
          return (
            <Button variant="contained" color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
          );
        }
      },
      {
        field: "delete",
        headerName: "Delete",
        sortable: false,
        width: 130,
        disableClickEventBubbling: true,
        renderCell: () => {
          return (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          );
        }
      }
    ];


const Get =()=>{

    const [tableData, setTableData]= useState([])
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    }, [])

console.log(tableData)



    return(
       
        <>
        <h1>MY DATA</h1>
          <div style={{ height: 300, width: '80%', margin: "50px" }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
      />
    </div>
        </>
    )
}

export default Get;