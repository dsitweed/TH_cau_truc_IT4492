import React from "react";
import "./sidebar.css"
import { Link } from "react-router-dom";
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to={"/"} className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to={"/"} className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon"/>
                                Analytics
                            </li>
                        </Link>
                        <Link to={"/"} className ="link">
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon" />
                                Sales
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to={"/users"} className="link">
                            <li className="sidebarListItem">
                                <PermIdentity  className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link className="link" to={"/products"}>
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <Link className="link" to={"/"}>
                            <li className="sidebarListItem">
                               <AttachMoney className="sidebarIcon" />
                               Transactions
                            </li>
                        </Link>
                        <Link className="link" to={"/"}>
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon" />
                                Reports
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <MailOutline className="sidebarIcon" />
                                Mail
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                               <DynamicFeed className="sidebarIcon" />
                               Feedback
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                               <ChatBubbleOutline className="sidebarIcon"/>
                               Messages
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                               <WorkOutline lassName="sidebarIcon" />
                               Manage
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                               <Timeline lassName="sidebarIcon" />
                               Analytics
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                               <Report lassName="sidebarIcon" />
                               Reports
                            </li>
                        </Link>
                    </ul>
                </div>
            </div> {/* end sidebar wrapper*/}
        </div> // end side bar div
    );
}