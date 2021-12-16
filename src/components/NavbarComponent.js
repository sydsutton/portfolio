import React, { useState } from "react"
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem, 
    NavLink, 
    Icon
} from "reactstrap"

const NavbarComponent = () => {
    const [isOpen, setIsOpen ] = useState(false)

    return (
        <div>
            <NavbarToggler className="bg-light d-block d-sm-none position-absolute m-3" onClick={() => setIsOpen(!isOpen)}/>
            <Collapse isOpen={isOpen} className="d-sm-block">
                <Navbar className="navbar navbar-light border border-danger d-flex flex-row h-100">
                    <div className="flex-column h-100">
                        <NavbarBrand className="border border-warning" href="/">Me</NavbarBrand>
                        <Nav className="d-flex flex-column border border-success text-left">
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
                    </div>
                </Navbar>
            </Collapse>
        </div>
    )
}

export default NavbarComponent