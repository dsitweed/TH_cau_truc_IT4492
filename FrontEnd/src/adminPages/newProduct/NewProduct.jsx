import React from "react";

import "./newProduct.css";

export const NewProduct = () => {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label htmlFor="file">Image</label>
                    {/* Need more fix */}
                    {/* add seleted image in this, hide input file box */}
                    <input type="file" id="file"/>
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="name of product"/>
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="stock of product"/>
                </div>
                <div className="addProductItem">
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="addProductButton">Create</button>
        </div>
    );
}