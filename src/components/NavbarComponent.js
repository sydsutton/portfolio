import React, { useState } from "react"
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem, 
    NavLink
} from "reactstrap"

const NavbarComponent = () => {
    const [isOpen, setIsOpen ] = useState(false)

    return (
        <div className="float-left">
            <Navbar className="navbar navbar-expand-md navbar-light">
                <NavbarBrand href="/">Me</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="flex-column d-md-block">
                        <NavItem>
                            <NavLink href="/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent