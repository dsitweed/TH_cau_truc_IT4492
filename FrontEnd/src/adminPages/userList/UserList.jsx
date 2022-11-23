import React, { useState } from "react";
import { DataGrid  } from "@mui/x-data-grid";

import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { Delete, DeleteOutline } from "@mui/icons-material";
import "./userList.css";

export const UserList = () => {
  const [rowData, setRowData] = useState(userRows);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDelete = (id) => {
    const newRowData = rowData.filter((item) => item.id !== id);
    // console.log(newRowData);
    setRowData(newRowData);
  };

  const deleteAllRowsSelected = () => {
    const newData = rowData.filter(item => !selectedRows.includes(item.id));
    setRowData(newData);
  }

  // const rows = [
  //   { id: 1, col1: "Hello", col2: "World" },
  //   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  //   { id: 3, col1: "MUI", col2: "is Amazing" },
  // ];

  // const columns: GridColDef[] = [
  //   { field: 'col1', headerName: 'Column 1', width: 150 },
  //   { field: 'col2', headerName: 'Column 2', width: 150 },
  // ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user  ", 
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },// end field
    {
      field: "email", headerName: "Email", width: 200
    }, // end field
    {
      field: "status", headerName: "Status", width: 120
    }, // end field
    {
      field: "transaction", headerName: "Transaction Volume",
      width: 160,
    }, // end field
    {
      field: "action", headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline 
              className="userListDelete"
              onClick = {() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    }, // end field
    {
      filed:"multipleDelete",
      width:50,
      sortable:false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <Delete 
            className="userListDelete"
            onClick={() => deleteAllRowsSelected()}
          />
        );
      },
    },
  ];

  return (
    <div className="userList" >
      <DataGrid
        rows={rowData}
        columns={columns}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
        onSelectionModelChange={(id) => setSelectedRows(id)}
        // save id to selectedRows (array) when selected
      />
    </div>
  );
};
