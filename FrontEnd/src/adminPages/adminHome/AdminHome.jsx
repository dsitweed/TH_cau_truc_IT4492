import React from "react";
import { FeaturedInfo } from "../../adminComponents/featuredInfo/FeaturedInfo";
import { LineChart } from "../../components/chart/Chart";
import { WidgetSm } from "../../adminComponents/widgetSm/WidgetSm";
import { WidgetLg } from "../../adminComponents/widgetLg/WidgetLg";

import "./adminHome.css";

export const AdminHome = () => {
    return (
        <div className="home">
            {/* HOME */}
            <FeaturedInfo />
            <LineChart />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}