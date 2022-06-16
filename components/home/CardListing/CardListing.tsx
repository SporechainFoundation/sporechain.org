import React, { Component, useState } from "react";
import styles from './CardListing.module.css'
import { Card } from "react-bootstrap";

function CardListing() {
  return (
    <>
      <div className={`${styles.flexContainer} ${styles.main}`}>
        <div className="row align-items-center g-lg-5 py-5">
          <div className={`${styles.flexItem} text-center`}>
            <img className={styles.icon} src="/icons/book.svg" /> 
            <h2>Open Source</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <img className={styles.icon} src="/icons/globe-svgrepo-com.svg" /> 
            <h2 >Unified</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={`${styles.flexItem} text-center`}>
            {/* <h2 className={styles.icon}>🖧</h2> */}
            <img className={styles.icon} src="/icons/network-svgrepo-com.svg" /> 
            <h2>Decentralized </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardListing;