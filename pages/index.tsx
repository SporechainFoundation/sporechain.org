import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SignupForm from '../components/home/SignupForm'
// import { FormControl, FormGroup, Form, Button } from 'react-bootstrap'

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Sporechain</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>

      </Head>

      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Preserving Humanity's Genetics</h1>
            <p className="col-lg-10 fs-4">The Sporechain is a radically decentralized, unified communal gene bank for the collective preservation of Earth's biodiversity.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <SignupForm></SignupForm>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
