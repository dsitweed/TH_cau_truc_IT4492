import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";

// tại sao khi http://localhost:3000/users/1 thì image có link src="./logo_bear.png" lại không đọc được
// sửa lại src="./../logo_bear.png" thì lại được 
export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    {/* Image Logo of Web */}
                    <img className="imgLogo" src="logo_bear.png" alt="ImgLogo" width={"50px"} height={"50px"}/>
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        {/* number of notification */}
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    {/* avatar of Admin - hard code*/}
                    <img src="./../logo_bear.png" alt="avatar" className="topAvatar" width="40px" height="40px"/>
                </div>
            </div> {/*end topbar wrapper*/}
        </div> // end topbar
    );
}

