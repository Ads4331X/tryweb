import { IoSchool } from "react-icons/io5";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RxHamburgerMenu } from "react-icons/rx";
import Headerinfo from "./headerinfo";

function Header(props) {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center p-2 header">
        <div className="small">
          <h1 className="text-primary icon" style={{ cursor: "pointer" }}>
            <IoSchool /> EDUKATE
          </h1>
        </div>

        <div className="line d-none d-md-flex gap-4 m-2 align-items-center">
          <Headerinfo currentPage={props.currentPage} />
        </div>

        <button
          data-bs-toggle="collapse"
          data-bs-target=".headerinfo"
          className="border-0 d-md-none"
        >
          <RxHamburgerMenu className="hamburger" />
        </button>
        <button className="btn btn-primary d-none d-md-flex">Join Us</button>
      </div>
      <div className="d-md-none">
        <div className="headerinfo collapse">
          <div className="border-0">
            <Headerinfo currentPage={props.currentPage} dropend={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
