import { NavbarComponent } from "../component/Navbar";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
}
