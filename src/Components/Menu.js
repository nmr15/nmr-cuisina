import { useState, useEffect } from "react";
import { menu } from "../menu"
import MediaQuery from "react-responsive";

const Menu = () => 
{
  const [menuItems, setMenuItems] = useState([]);

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
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Select
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  {filtered.map(category =>
                    <ul>
                      <li id={category} onClick={clickHandler}>{category}</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </section>
      
      <section className="section-menu">
        <div className="container">
          {/* <h2>{menuItems ? menuItems[0].category : "Appetizers"}</h2> */}
          <div className="row menu g-3">
            {menuItems.map((menuItem) => (
              <div className="col-md-4" key={menuItem.key}>
                <div className="menu-card hvr-shrink ptr">
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