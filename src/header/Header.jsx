import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;