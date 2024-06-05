import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CImage,
  CNavbar,
  CNavbarNav,
  CNavbarBrand,
  CNavbarText,
  CNavbarToggler,
  CNavLink,
  CNavItem,
  CDropdownDivider,
  CDropdown,
  CButton,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Cookies from "js-cookie";



const Header = () => {
  const cookies = Cookies;
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove('isAuthenticated');
    navigate("/");
  }

  return (
    <CNavbar className="bg-body-tertiary">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavLink href="/">Dashboard</CNavLink>
        <CForm className="d-flex">
          {cookies.get('isAuthenticated') === 'true' ? (
            <div>
            <CButton onClick={logOut} color="danger" variant="outline">
              Logout
            </CButton>
          </div>
          ) : (
            <CContainer>
              <CButton onClick={() => navigate("/login")} color="secondary">
                Login
              </CButton>
              <CButton
                onClick={() => navigate("/register")}
                color="primary"
                variant="outline"
              >
                Register
              </CButton>
            </CContainer>
          )}
        </CForm>
      </CContainer>
    </CNavbar>
  );
};

export default Header;
