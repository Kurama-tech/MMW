import React, { Component } from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    // const [show, setShow] = useState(false);
    // const showDropdown = (e) => {
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }
    // const [showsec, setShowsec] = useState(false);
    // const showDropdownsec = (e) => {
    //     setShowsec(!show);
    // }
    // const hideDropdownsec = e => {
    //     setShowsec(false);
    // }

    // const toggleMobileMenu = (menu) => {
    //     menu.classList.toggle('open');
    // }
    return (
        <>
            <header id="site-header">
                {/* <Navbar expand="lg" className='navbar-main'>
                    <Container fluid>
                        <Navbar.Brand ><h3>Millat e Mehdavia</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto burger-menu">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <NavDropdown title="About" id="basic-nav-dropdown"
                                    // show={show}
                                    // onMouseEnter={showDropdown}
                                    // onMouseLeave={hideDropdown}
                                >
                                    <NavDropdown.Item href="">About Us</NavDropdown.Item >
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="">
                                        Our Belief
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="">Policies</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">Mehdavia Belief</Nav.Link>

                                <NavDropdown title="Resources" id="basic-nav-dropdown"
                                    // show={showsec}
                                    // onMouseEnter={showDropdownsec}
                                    // onMouseLeave={hideDropdownsec}
                                >
                                    <NavDropdown.Item href="#">Zyarat Directory</NavDropdown.Item >
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">E-Book Library</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Audio Library</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Video Library</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Quran</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Biography</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    <NavDropdown.Item href="#">Other Resource</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#programs">Events</Nav.Link>
                                <Nav.Link href="#blogs">Blogs</Nav.Link>
                                <Nav.Link href="#contactus">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar> */}

                <nav className="navbar navbar-expand-lg navbar-main">
                    <div className="container-fluid">
                        <h3 className="navbar-brand" >Millat e Mehdavia</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav ms-auto burger-menu align-items-center">
                                <li className="nav-item active"> <a className="nav-link" href="#">Home </a> </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> About  </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"> About Us</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#"> Our Belief </a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#"> Policies </a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#"> Mehdavia Belief </a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Resources  </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#"> Zyarat Directory</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#"> E-Book Library </a></li>
                                        <li><a className="dropdown-item" href="#"> Audio Library </a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#"> Video Library </a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#"> Quran </a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#"> Biography </a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#"> Other Resource</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="#"> Events </a></li>
                                <li className="nav-item"><a className="nav-link" href="#"> Blogs </a></li>
                                <li className="nav-item"><a className="nav-link" href="#"> Contact Us </a></li>
                            </ul>
                        </div> 
                    </div> 
                </nav>

            </header>
        </>
    )

}

export default Header;
