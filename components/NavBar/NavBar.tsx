import React, { Component, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import styles from './Navbar.module.css';
import Image from "next/image";

function NavBar() {
    return (
        <Navbar className={styles.navBar}>
            <Container className={styles.navBarContents}>
                <Navbar.Brand className={styles.navText}>
                    <img
                        alt=""
                        src="/logo-wht.png"
                        width="50"
                        height="60"
                        //   className="d-inline-block align-top"
                        className={styles.navText}
                    />{' '}
                    sporechain.org
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;