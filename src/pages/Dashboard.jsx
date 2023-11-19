import { Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <div className=" w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
