import { Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import "./product.css";

export const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    {/* Chart */}
                    Chart sales performance
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        {/* hard code */}
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt="productImg" 
                            className="productInfoImg" 
                        />
                        <span className="productName">
                            Apple Airpods
                        </span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123abc</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            {/* Nghĩa là đang có trong kho và đang hiển thị trên web không */}
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div> {/* end right - top */}
            </div> {/* end product top */}
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <div className="productFormLeftItem">
                            <label>Product Name</label>
                            <input type="text" placeholder="product name"/>
                        </div>
                        <div className="productFormLeftItem">
                            <label>In Stock</label>
                            <select name="inStock" id="idStock">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="productFormLeftItem">
                            <label>Active</label>
                            <select name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                alt="uploadImg" 
                                className="productUploadImg" 
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" name="upImg" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton" type="submit">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}