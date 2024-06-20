import React from 'react'

const Home = () => 
{
  return (
    <>
      <section className="section-banner">
        <div className="banner">
          <div className="banner-text">
            {/* <h1>Lorem ipsum</h1> */}
          </div>
        </div>
      </section>
      <section className="section-advert1">
        <div className="container">
          <div className="advert1 d-md-flex">
            <div className="advert1-img ">
              <img className="" src="/assets/home-plate.jpg" alt="plate of food" />
            </div>
            <div className="advert1-text ">
              <h2>Delicious food all around</h2>
              <p>
                Ut pellentesque vel metus vel pretium. Maecenas dictum id dolor quis
                vulputate. Praesent blandit semper neque eu interdum. Mauris vitae
                quam ac augue maximus suscipit. In sed enim turpis. Curabitur viverra
                ante ac nibh commodo imperdiet. Quisque vel nulla quis felis dictum
                iaculis sed sit amet tortor. Vivamus ultrices, lectus ac ultricies
                elementum, orci ipsum iaculis lorem, nec commodo nisl erat in nisl.
              </p>
              <button className="btn-red">View Menu</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-favorites">
        <div className="container">
          <h1 className="heading text-center">Customer Favorites</h1>
          <div className="row favorites">
            <div className="col-md-4">
              <div className="menu-card">
                <img className="card-img-top" src="/assets/menu-burger-2.jpg" alt="" />
                <h3 className="menu-card-heading mt-3 px-4">Cheeseburger</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="menu-card">
                <img className="card-img-top" src="/assets/menu-ribs.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="menu-card">
                <img className="card-img-top" src="assets/menu-sandwich-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home