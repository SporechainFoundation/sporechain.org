import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { FormControl, FormGroup, Form, Button } from 'react-bootstrap'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sporechain Foundation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>

      </Head>

      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">The Sporechain Foundation</h1>
            <p className="col-lg-10 fs-4">Sporechain is a radically decentralized, unified communal gene bank for the collective preservation of Earth's biodiversity.
</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-light">
              <div>
                <h2>Join the Mailing List</h2>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label >Email address</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
