import React from "react";
import { NavLink } from "react-router-dom";

const Tools = () => {
    return (
        <>
            <h1>Tools page</h1>
            <NavLink className="btn btn-sm mx-2 btn-primary" to={"/news"}>News</NavLink>
            <NavLink className="btn btn-sm mx-2 btn-primary" to={"/weather"}>Weather</NavLink>
        </>
    )
}
export default Tools;