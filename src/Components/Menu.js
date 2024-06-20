import { useState, useEffect } from "react";
import { menu } from "../menu"

const Menu = () => 
{
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() =>
  {
    setMenuItems(menu);
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
        <div className="menu-categories text-white d-flex justify-content-center">
          {filtered.map(category =>
            <h4 className="mx-3" id={category} onClick={clickHandler}>{category}</h4>
          )}
        </div>
      </section>
      <section className="section-menu">
        <div className="container">
          <div className="row menu">
            {menuItems.map((menuItem) => (
              <div className="col-md-4" key={menuItem.key}>
                <div className="card">
                  <img className="card-img-top" src={menuItem.image} alt="" />
                  <div className="card-body">
                    <h3 className="card-title">{menuItem.name}</h3>
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