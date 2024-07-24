import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { FiShoppingCart } from "react-icons/fi";
import { RiUserLine, RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../../../assets/images/logo.png";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import React, { Component } from "react";
import { LayoutDashboard, Settings, User } from "lucide-react";
import { useCart } from "../../../context/cartContext";
import axios from "axios";
function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart] = useCart();
  console.log(user?.email);
  const email = user?.email;
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }

    const onScrolled = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScrolled);
    return () => window.removeEventListener("scroll", onScrolled);
  }, [isDarkMode]);

  const getUser = async () => {
    try {
      const userData = await axios.get(
        `${
          process.env.REACT_APP_API
        }/api/v1/user/get-user`,
        {
          params:{
            email:user?.email
          }
        }
      );

      console.log(userData);
      if (userData?.data?.data?.role === "admin") {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.email) {
      getUser();
    }
  }, [user]);

  return (
    <Navbar expand="lg" className={"edu_header scrolled"}>
      <Container className="d-flex justify-content-between">
        <Link to="/home" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" order-2 order-xl-1 popup-mobile"
        >
          <Nav className="">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/faq">
              Faq
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="header-menubar d-flex align-items-center order-1 order-xl-2">
          <div className="switch" id="home">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </div>
          <div className="search-option">
            <Link to="/cart" className="qoute-search qoute-icon">
              <FiShoppingCart />
            </Link>
            <span className="cart-num">{cart.length}</span>
          </div>
          {user?.uid ? (
            <>
              <Dropdown className="d-none d-md-block">
                <Dropdown.Toggle id="dropdown-basic">
                  {user.displayName}
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" className="dash-nav h-auto">
                  {!isAdmin && (
                    <Link
                      to="/user/dashboard"
                      className="dropdown-item"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      DashBoard
                    </Link>
                  )}

                  {isAdmin && (
                    <Link
                      to="/admin/search"
                      className="dropdown-item"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      DashBoard
                    </Link>
                  )}
                  <Link
                    to="/"
                    className="dropdown-item"
                    onClick={logOut}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <RiLogoutBoxLine /> LogOut
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              <div className="qoute-user qoute-icon d-block d-md-none">
                <Link to="#" onClick={logOut}>
                  <RiLogoutBoxLine />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="qoute-user qoute-icon d-none d-md-block">
                <Link to="/login">
                  <RiUserLine />
                  Login/Register
                </Link>
              </div>
              <div className="qoute-user qoute-icon d-block d-md-none">
                <Link to="/login">
                  <RiUserLine />
                </Link>
              </div>
            </>
          )}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-5 qoute-icon"
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
