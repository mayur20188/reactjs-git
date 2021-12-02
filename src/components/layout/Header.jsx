import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className="header-wrapper">
                <Container>
                    <div className="menu-part">
                        <ul className="d-flex">
                            <li><Link exact="true" to="/reactjs-git/">Home</Link></li>
                            <li><Link to="/reactjs-git/about-us">About Us</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header;