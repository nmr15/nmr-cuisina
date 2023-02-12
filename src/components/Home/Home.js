import React from 'react'
import { Grid } from '@mui/material';
import './home.scss';
import mainImg1 from '../assets/main-1.jpg';
import mainImg2 from '../assets/main-2.jpg';
import cardImg1 from '../assets/menu-fries.jpg';

const banner = "https://drive.google.com/uc?id=1ooJ3vUBxxdKc1AaqstKHJYV3Ei7XyXaY"

const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="section__banner">
          <div className="banner">
            <img src="" alt="" />
          </div>
        </section>
        <section className="section__mainContent">
          <div className="mainContent">
            <Grid container spacing={0}>
              <Grid item lg={6}>
                <div className="mainContent__block mainContent__block-1">
                  <h1 className="mainContent__block-heading">Fusce ut placerat orci</h1>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className="mainConent__block mainContent__block-2">
                  <img src={mainImg1} alt="mainImg1" className="mainContent__image" />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className="mainConent__block mainContent__block-3">
                  <img src={mainImg2} alt="mainImg2" className="mainContent__image" />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className="mainContent__block mainContent__block-4">
                  <h1 className="mainContent__block-heading">Aliquam sit amet turpis id purus semper</h1>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section className="section__cards">
          <div className="cards">
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <div className="card card-1">
                  <div className="card__title">
                    <h3>Appetizers</h3>
                  </div>
                  
                  
                </div>
              </Grid>
              <Grid item lg={3}>
                <div className="card card-2">
                  <h3 className="card__title">Steaks & Chickens</h3>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div className="card card-3">
                  <h3 className="card__title">Burgers & Sandwiches</h3>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div className="card card-4">
                  <h3 className="card__title">Drinks</h3>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
      
    </main>
  )
}

export default Home