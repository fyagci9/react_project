import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import CartSummary from "../cart/CartSummary";

function Navi() {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <Link to="/">KingSlayer</Link>
        </NavbarBrand>

        <Nav className="d-flex justify-content-end" navbar>
          <div className="d-flex">
            <NavItem style={{ marginRight: '10px' }}>
              <NavLink>
                <Link to="/saveProduct">Ürün Ekle</Link>
              </NavLink>
            </NavItem>
            <CartSummary></CartSummary>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
