import { Link } from "react-router-dom"

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
      <section className="section-aboutus">
        <div className="container">
          <div className="aboutus d-md-flex">
            <div className="aboutus-img ">
              <img className="" src="/assets/home-plate.jpg" alt="plate of food" />
            </div>
            <div className="aboutus-text ">
              <h2 className="heading">Delicious food all around</h2>
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
      <section className="section-promo">
        <div className="bg-red">
          {/* <div className="container"> */}
            <div className="promo d-md-flex justify-content-between">
              <div className="promo-text align-self-center">
                <h1 className="promo-text-heading">Become a member</h1>
                <h4>Get up to 20% discounts when you join!</h4>
                <h4>Earn points and rewards</h4>
                <h4>Receive news about upcoming events</h4>
                <button className="btn-white">Join now</button>
              </div>
              <div className="promo-img ">
                <img src="/assets/promo.jpg" className="" alt="" />
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>
      <section className="section-favorites">
        <div className="container">
          <h1 className="heading text-center">Customer Favorites</h1>
          <div className="row favorites g-3">
            <div className="col-md">
              <div className="menu-card">
                <img className="card-img-top" src="/assets/menu-burger-2.jpg" alt="" />
                <div className="menu-card-body">
                  <h5 className="menu-card-heading">Cheeseburger</h5>
                  <p className="menu-card-desc">In hac habitasse platea dictumst. Maecenas vehicula purus sit amet.</p>
                  <h4 className="menu-card-price">$11.99</h4>
                  <Link to="/order" className="btn-red-pill hvr-fade">Order Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="menu-card">
                <img className="card-img-top" src="/assets/menu-ribs.jpg" alt="" />
                <div className="menu-card-body">
                  <h5 className="menu-card-heading">Rack of Ribs</h5>
                  <p className="menu-card-desc">In hac habitasse platea dictumst. Maecenas vehicula purus sit amet.</p>
                  <h4 className="menu-card-price">$25.99</h4>
                  <Link to="/order" className="btn-red-pill hvr-fade">Order Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="menu-card">
                <img className="card-img-top" src="assets/menu-sandwich-2.jpg" alt="" />
                <div className="menu-card-body">
                  <h5 className="menu-card-heading">Ham Sandwich</h5>
                  <p className="menu-card-desc">In hac habitasse platea dictumst. Maecenas vehicula purus sit amet.</p>
                  <h4 className="menu-card-price">$12.99</h4>
                  <Link to="/order" className="btn-red-pill hvr-fade">Order Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home