import React, { Component, useState } from "react";
import styles from '../CardListing/CardListing.module.css'
import { Button } from "react-bootstrap";

function GetInvolved() {
  return (
    <>
      <div className={`${styles.flexContainer} ${styles.main}`}>
        <h2 className={styles.subHeading}>Get Involved</h2>
        <div className="row align-items-center g-lg-5 py-5">
          <div className={`${styles.flexItem} text-center`}>
            <img className={styles.icon} src="/icons/programming-code-svgrepo-com.svg" />
            <h2>Development</h2>
            <h4>Engineer sustainable global solutions</h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <img className={styles.icon} src="/icons/like-heart-svgrepo-com.svg" />
            <h2 >Community</h2>
            <h4>Spread the word and gather support</h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <img className={styles.icon} src="/icons/law-svgrepo-com.svg" />
            <h2>Legal</h2>
            <h4>Protect the protectors</h4>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </div>
          <h4 className={`${styles.para}`}><span className={styles.big}>The Sporechain Foundation</span> is a 501(c)(3) non-profit dedicated to fostering the development, integration and promotion of the Sporechain. Reach out to us if you’d like to get in on the action, and sign up for the mailing list for updates about our first public information session and other upcoming events.</h4>
          <div className={`${styles.flexContainer} ${styles.main} text-center`}>
            <h2>Contact Us<br /><a className={styles.email} href="mailto:connect@sporechain.org">connect@sporechain.org</a></h2>
            {/* <a href=""><h2><u>Donate</u></h2></a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInvolved;