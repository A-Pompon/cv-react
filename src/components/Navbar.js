import React from "react";
import "../../src/styles/navBar.css";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  home,
  about,
  experiences,
  portfolio,
  contact,
} from "../redux/changeActive";

const Navbar = () => {
  // const [activeNav, setActiveNav] = useState("");

  const change = useSelector((state) => state.change.value);
  const dispatch = useDispatch();

  return (
    <nav className="navBar__container">
      <Link
        to="/cv-react/"
        onClick={() => {
          dispatch(home());
        }}
        className={change === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/about"
        onClick={() => {
          dispatch(about());
        }}
        className={change === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/experiences"
        onClick={() => {
          dispatch(experiences());
        }}
        className={change === "experiences" ? "active" : ""}
      >
        <MdWorkOutline />
      </Link>
      <Link
        to="/portfolio"
        onClick={() => {
          dispatch(portfolio());
        }}
        className={change === "portfolio" ? "active" : ""}
      >
        <VscFolderLibrary />
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          dispatch(contact());
        }}
        className={change === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Navbar;
