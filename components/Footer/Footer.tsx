import React, { FC } from 'react';
import styles from './Footer.module.css';
import { ModalFooter } from 'react-bootstrap';

function Footer() {
  return (
    <footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 ${styles.main}`}>
      <p className="col-md-4 mb-0 "></p>

      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img
          alt=""
          src="/logo-wht.png"
          width="50"
          height="60"
          className={styles.navText}
        />
      </a>
    </footer>
  )
}

export default Footer;
