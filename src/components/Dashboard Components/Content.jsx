import React from 'react'
import DashboardContent from "./Content/DashboardContent";
import ExpenseContent from "./Content/ExpenseContent";
import ReportContent from "./Content/ReportContent";

const Content = ({activeTab}) => {
    const selectedTab = () => {
        switch (activeTab) {
            case "Dashboard":
                return <DashboardContent/>;
            case "Expenses":
                return <ExpenseContent/>;
            case "Reports":
                return <ReportContent/>;
        }
    }
    return (
        <div id="layoutSidenav_content">
            {selectedTab()}
        </div>
    )
}

export default Content