import React, { Component, useState } from "react";
import styles from '../CardListing/CardListing.module.css'
import { Card } from "react-bootstrap";

function GetInvolved() {
  return (
    <>
      <div className={`${styles.flexContainer} ${styles.main}`}>
        <h2 className={styles.subHeading}>Get Involved</h2>
        <div className="row align-items-center g-lg-5 py-5">
          <div className={`${styles.flexItem} text-center`}>
            <h2 className={styles.icon}>🖹</h2>
            <h2>Development</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <h2 className={styles.icon}>❤</h2>
            <h2 >Community</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <h2 className={styles.icon}>§</h2>
            <h2>Legal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInvolved;