import React, { useState } from "react";

import "./FilterBar.css";

export default function FilterBar({ setFilter }) {
    const [filter_bar, setFilterBar] = useState("all");
    const filterHandler = (val) => {
        setFilter(val);
        setFilterBar(val);
    };
    return (
        <div className="filter-bar">
            <div className="bar-items">
                <div
                    className="bar-item"
                    onClick={() => {
                        filterHandler("all");
                    }}
                >
                    All
                </div>
                <div
                    className="bar-item"
                    onClick={() => {
                        filterHandler("active");
                    }}
                >
                    Active
                </div>
                <div
                    className="bar-item"
                    onClick={() => {
                        filterHandler("completed");
                    }}
                >
                    Completed
                </div>
            </div>
            <div className="active-line">
                <div className={"active-bar " + filter_bar}></div>
                <div className="line"></div>
            </div>
        </div>
    );
}
