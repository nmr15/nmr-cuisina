import { Link, NavLink } from "react-router-dom"

const Navbar = ({bagItems}) => 
{
  return (
    <>
      {/* <div className="navbar-top text-center py-3">
        <img className="navbar-logo" src="/assets/logo-1.jpg" alt="logo" />
      </div> */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="navbar-logo d-inline-block" src="/assets/logo-1.jpg" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <NavLink to="/" className={({ isActive}) => (isActive ? `nav-link nav-link-active` : "nav-link")}>Home</NavLink>
              </li> */}
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">Menu</Link>
              </li>
              {
                bagItems.length === 0 ? 
                (
                  <li className="nav-item">
                    <Link to="/order" className="nav-link">Order</Link>
                  </li>
                )

                :

                (
                  <li className="nav-item">
                    <Link to="/order/menu" className="nav-link">Order</Link>
                  </li>
                )
              }
              
              <li className="nav-item">
                <Link to="/reservation" className="nav-link">Reservations</Link>
              </li>
            </ul>
          </div>
          <span className={bagItems.length === 0 ? "navbar-text me-5 d-none" : "navbar-text "}>
            <Link to="/order/bag"><i class="bi bi-bag-fill" style={{ fontSize: "2rem" }}></i></Link>
          </span>
        </div>
      </nav>
    </>
  )
}

export default Navbar