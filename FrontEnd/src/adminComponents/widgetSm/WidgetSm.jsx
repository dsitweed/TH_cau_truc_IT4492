import { Visibility } from "@mui/icons-material";
import React from "react";

import "./widgetSm.css";

export const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="avatar" 
                        className="widgetSmImg"
                        width="40px"
                        height="40px"
                    />
                    {/* User information - hard code */}
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                            Ky
                        </span>
                        <span className="widgetSmUserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="avatar" 
                        className="widgetSmImg"
                        width="40px"
                        height="40px"
                    />
                    {/* User information - hard code */}
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">
                            Ky
                        </span>
                        <span className="widgetSmUserTitle">
                            Software Engineer
                        </span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}