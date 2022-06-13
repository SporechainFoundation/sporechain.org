import React, { Component, useState } from "react";
import styles from './CardListing.module.css'
import { Card } from "react-bootstrap";

function CardListing() {
  return (
    <>

      {/* <div className="container-fluid">
      <div className={`${styles.flexContainer} ${styles.main}`}>

        <div className="col-md-10 text-center mx-auto col-lg-5">
          <h2 className={styles.icon}>🕮 </h2>
            <h2>Open Source</h2>
        </div>
        <div className="col-md-10 text-center mx-auto col-lg-5">
            <h2 className={styles.icon}>🌐</h2>
          <h2 >Unified</h2>
        </div>
        <div className="col-md-10 text-center mx-auto col-lg-5">
            <h2 className={styles.icon}>🖧</h2>
          <h2>Decentralized </h2>
        </div>
      </div>
      </div> */}
      <div className={`${styles.flexContainer} ${styles.main}`}>
        <div className="row align-items-center g-lg-5 py-5">
          <div className={`${styles.flexItem} text-center`}>
            <h2 className={styles.icon}>🕮 </h2>
            <h2>Open Source</h2>
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <h2 className={styles.icon}>🌐</h2>
            <h2 >Unified</h2>
          </div>
          <div className={`${styles.flexItem} text-center`}>
            <h2 className={styles.icon}>🖧</h2>
            <h2>Decentralized </h2>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
          </div>
        </div>
      </div>
    </>
  )
}

export default CardListing;