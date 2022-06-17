import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cardStyles from '../components/home/CardListing/CardListing.module.css'
import SignupForm from '../components/home/SignupForm/SignupForm'
import NavBar from '../components/NavBar/NavBar'
import CardListing from '../components/home/CardListing/CardListing'
import GetInvolved from '../components/home/GetInvolved/GetInvolved'

const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Sporechain</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
      </Head>

      <NavBar></NavBar>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <div className={styles.heroText}>
                <h1 className="display-3 lh-1 mb-3">Preserving the World's Genetics</h1>
                <p className="col-lg-10 fs-3">The Sporechain is a radically decentralized, unified communal gene bank for the collective preservation of Earth's biodiversity.</p>
              </div>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <SignupForm></SignupForm>
            </div>
            <div className={`${cardStyles.flexItem} text-center`}>
              <a href='#section2'>
                <svg className={styles.arrows}>
                  <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="section2" className={styles.container}>
        <CardListing></CardListing>
      </div>
      <div id="section3" className={styles.container}>
        <GetInvolved></GetInvolved>
      </div>
    </div>
  )
}

export default Home
