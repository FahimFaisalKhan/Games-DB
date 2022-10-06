import React from "react";
import { useEffect, useState } from "react";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";
import { Toggle } from "react-daisyui";
import { Link } from "react-router-dom";
import apexLogo from "../../Static/apexLogo.svg";
const NavBar = () => {
  const [mode, setmode] = useState(true);

  const changeMode = (e) => {
    console.log(e.target);

    setmode(!mode);
  };

  useEffect(() => {
    if (mode === false) {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "black");
    } else {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "light");
    }
    // if (mode === true) {
    //   document.getElementById("toggle-btn").setAttribute("checked", "");
    // } else {
    //   document.getElementById("toggle-btn").removeAttribute("checked");
    // }

    console.log(mode);
  }, [mode]);
  return (
    <div className="pb-10 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className={mode === true ? "bg-success" : "bg-warning-content"}>
        <Navbar.Start>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <Dropdown.Item>
                {" "}
                <Link to={"/"}>Home</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                {" "}
                <Link to={"/profile"}>Profile</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img src={apexLogo} alt="" className="w-8 h-10" />
            Warrior Hub
          </Link>
        </Navbar.Start>
        <Navbar.End className="hidden lg:flex">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item tabIndex={0}>
              <Link to={"/profile"}>Profile</Link>
            </Menu.Item>

            <Menu.Item className="ml-24">
              <a href="/">
                Dark mode:
                <Toggle id="toggle-btn" value={mode} onClick={changeMode} />
              </a>
            </Menu.Item>
          </Menu>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default NavBar;
