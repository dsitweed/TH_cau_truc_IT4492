import React from "react";
import "./widgetLg.css";

export const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }; 

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Lastest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                    {/*3 Status : Approved, Declined, Pending (have to same upcase)*/}
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="./logo_bear.png" alt="avatar" 
                            className="widgetLgImg"
                            width="40px" height="40px"
                        />
                        <span className="widgetLgName">Customer 1</span>
                    </td>
                    {/* Date - hard code */}
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>{/* end row */}
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="./logo_bear.png" alt="avatar" 
                            className="widgetLgImg"
                            width="40px" height="40px"
                        />
                        <span className="widgetLgName">Customer 1</span>
                    </td>
                    {/* Date - hard code */}
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>{/* end row */}
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="./logo_bear.png" alt="avatar" 
                            className="widgetLgImg"
                            width="40px" height="40px"
                        />
                        <span className="widgetLgName">Customer 1</span>
                    </td>
                    {/* Date - hard code */}
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>{/* end row */}
            </table>
        </div>
    );
}