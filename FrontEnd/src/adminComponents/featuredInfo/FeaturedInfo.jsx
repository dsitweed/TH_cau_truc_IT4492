import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";

import "./featuredInfo.css";

export const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    {/* hard code - money of Revenue (income) */}
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4 
                        <ArrowDownward className="featuredIcon negative"/>
                        {/* <ArrowUpward className="featuredIcon positive" /> */}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>{/* end featured Item*/}
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    {/* hard code - money of Revenue (income) */}
                    <span className="featuredMoney">$4,451</span>
                    <span className="featuredMoneyRate">
                        -1.4 
                        <ArrowDownward className="featuredIcon negative" />
                        {/* <ArrowUpward className="featuredIcon positive" /> */}
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>{/* end featured Item*/}
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    {/* hard code - money of Revenue (income) */}
                    <span className="featuredMoney">$2,023</span>
                    <span className="featuredMoneyRate">
                        +2.1 
                        {/* <ArrowDownward className="featuredIcon negative"/> */}
                        <ArrowUpward className="featuredIcon positive" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>{/* end featured Item*/}
        </div>
    );
}