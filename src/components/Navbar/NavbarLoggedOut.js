import React, {useState} from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, NavImg, MobileIcon, NavMenu, NavItem, NavLinks, NavButton} from './Navbar.elements';

import logo from '../../Images/logo.svg';


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick =() => setClick(!click)

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavImg src={logo} />
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                 </MobileIcon>
                 <NavMenu onClick={handleClick} click={click}>
                     <NavItem>
                      <NavLinks to='/bmr'>
                          <NavButton>zaloguj</NavButton>
                      </NavLinks>
                     </NavItem>
                     <NavItem>
                      <NavLinks to='/bmr'>
                          <NavButton>rejestracja</NavButton>
                      </NavLinks>
                     </NavItem>
                 </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
