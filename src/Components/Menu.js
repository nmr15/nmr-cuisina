import { useState, useEffect } from "react";
import { menu } from "../menu"
import MediaQuery from "react-responsive";

const Menu = () => 
{
  const [menuItems, setMenuItems] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() =>
  {
    setMenuItems(menu.filter(menu => menu.category === "Appetizers"));
  }, []);

  const filtered = [...new Set(menu.map(item => item.category))];

  let clickHandler = (e) =>
  {
    let cat = e.target.id;
    setMenuItems(menu.filter(menu => menu.category === cat));
  }

  let toggleDropdown = () => 
  {
    setDropDown(!dropDown);
  }

  return (
    <>
      <section className="section-categories bg-red py-2">
        <MediaQuery minWidth={992}>
          <div className="menu-categories text-white d-flex justify-content-center">
            
            {filtered.map(category =>
              <h5 className="menu-categories-list mx-3 ptr" id={category} onClick={clickHandler}>{category}</h5>
            )}
            
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <div className="menu-dropdown">
            <h5 className="menu-dropdown-btn text-center" onClick={toggleDropdown}>Menu Select <i class="bi bi-caret-down-fill"></i></h5>
            <ul className={dropDown ? "menu-dropdown-list-active" : "menu-dropdown-list"} >
              {filtered.map(category =>
                <ul>
                  <li className="dropdown-item text-center" id={category} onClick={clickHandler}>{category}</li>
                </ul>
              )}
            </ul> 
          </div>
        </MediaQuery>
      </section>
      
      <section className="section-menu">
        <div className="container">
          {/* <h2>{menuItems ? menuItems[0].category : "Appetizers"}</h2> */}
          <div className="row menu g-3">
            {menuItems.map((menuItem) => (
              <div className="col-md-4" key={menuItem.key}>
                <div className="menu-card ptr">
                  <img className="card-img-top" src={menuItem.image} alt="" />
                  <div className="menu-card-body">
                    <h5 className="menu-card-heading-2">{menuItem.name}</h5>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Menu