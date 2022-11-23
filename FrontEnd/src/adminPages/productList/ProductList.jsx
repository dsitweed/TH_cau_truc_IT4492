import React, { useState } from "react";
import { DataGrid  } from "@mui/x-data-grid";

import {productRows} from "../../dummyData";

import "./productList.css";
import { Link } from "react-router-dom";
import { Delete, DeleteOutline } from "@mui/icons-material";

export const ProductList = () => {
    const [dataRows, setDataRows] = useState(productRows);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleDelete = (id) => {
        const newData = dataRows.filter(item => item.id !== id);
        setDataRows(newData);
    }

    const deleteAllRowsSelected = () => {
        let newData = dataRows.filter(item => !selectedRows.includes(item.id));
        // console.log("something like that: ", selectedRows, newData);
        setDataRows(newData);
        
    }

    const dataColumns = [
        {field:"Id", headerName: "id", width: 50},
        {
            field: "product",
            headerName: "Product",
            width: 350,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="image" />
                        <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{params.row.name}</p>
                    </div>
                );
            },
        },
        {field:"stock", headerName: "Stock", width: 100},
        {field:"status", headerName: "Status", width: 120},
        {field:"price", headerName: "Price", width: 160},
        {field:"action", headerName: "Action", width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/products/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline 
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        /> 
                    </>
                );
            },
        },
        {
            field: "multipleDelete",
            width: 40,
            sortable: false,
            disableColumnMenu: true,
            renderHeader: () => {
                return (
                    <Delete 
                        className="productListDelete"
                        onClick= {() => deleteAllRowsSelected()}
                    />
                );
            },
          }
    ];


    return (
        <div className="productList">
            <DataGrid 
                rows={dataRows}
                disableSelectionOnClick
                columns={dataColumns}
                pageSize={8}
                checkboxSelection
                rowHeight={80}
                sx={{fontSize: "16px"}}
                onSelectionModelChange={(id) => {
                    setSelectedRows(id);
                }}
            />
        </div>
    );
}