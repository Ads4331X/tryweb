import { IoSchool } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

import Headerinfo from "./headerinfo";

import "./header.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen((currentState) => !currentState);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

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
          type="button"
          className="border-0 d-md-none bg-transparent header-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMobileMenu}
        >
          <RxHamburgerMenu className="hamburger" />
        </button>
        <button className="btn btn-primary d-none d-md-flex">Join Us</button>
      </div>
      <div className="d-md-none">
        <div className={`headerinfo ${isOpen ? "show" : ""}`}>
          <div className="border-0">
            <Headerinfo
              currentPage={props.currentPage}
              dropend={true}
              onItemClick={closeMobileMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
