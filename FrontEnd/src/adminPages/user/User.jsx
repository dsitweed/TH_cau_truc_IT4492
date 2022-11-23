import {
  CalendarToday,
  PermIdentity,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  CloudUpload,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

import "./user.css";

export const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
              height="40px"
              width="40px"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Trịnh Thị Thảo Ngân Nhi</span>
              <span className="userShowTitle">Software Engineer</span>
            </div>
          </div> {/* end user Show top */}
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
          {/* end user Show bottom */}
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" 
                    className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input type="text" 
                    className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" 
                    className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" 
                    className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" 
                    className="userUpdateInput" 
                />
              </div>
            </div>
            {/* Phần update right này thao tác với ảnh và hard code cần sửa nhiều */}
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="imgeUpdate"
                  height="40px" width="40px"
                />
                <label htmlFor="file">
                  <CloudUpload className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* end user Container */}
    </div> // end user div
  );
};
