import { Outlet } from "react-router-dom";
import React from "react";

import { Topbar } from "./topbar/Topbar";
import { Sidebar } from "./sidebar/Sidebar";

import styles from "./adminLayout.module.css";

export const AdminLayout = () => {
    return (
        <>
            <Topbar/>
            <div className={styles.container}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}