import React from "react";

import "./newUser.css";
export const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="full name" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="tex" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Ha Noi, Viet Nam" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <div className="newUserGenderItem">
                            <label htmlFor="male">Male</label>
                            <input className="radioSelect" type="radio" name="gender" id="male" value="male"/>
                        </div>
                        <div className="newUserGenderItem">
                            <label htmlFor="female">Female</label>
                            <input className="radioSelect" type="radio" name="gender" id="female" value="female"/>
                        </div>
                        <div className="newUserGenderItem">
                            <label htmlFor="other">Other</label>
                            <input className="radioSelect" type="radio" name="gender" id="other" value="other"/>
                        </div>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="NewUserSubmitButton" type="submit">Create</button>
        </div>
    );
}