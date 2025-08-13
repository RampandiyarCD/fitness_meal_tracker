import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-main">
        <div className="layout-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
