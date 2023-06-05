import React from 'react'
import DashboardContent from "./Content/DashboardContent";
import ExpenseContent from "./Content/ExpenseContent";
import ReportContent from "./Content/ReportContent";

const Content = ({activeTab}) => {
    const selectedTab = () => {
        switch (activeTab) {
            case "Dashboard":
                return DashboardContent;
            case "Expenses":
                return ExpenseContent;
            case "Reports":
                return ReportContent;
        }
    }
    return (
        <div className="sb-nav-fixed">
            <div id="layoutSidenav">
                <div id="layoutSidenav_content">
                    {activeTab}
                </div>
            </div>
        </div>
    )
}

export default Content