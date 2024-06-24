import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false)


  const { pathname } = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    isSeller: true,
    username: "Jhon Dae",
  };

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo" >
          <Link to="/" className="link">
          <img src="/assets/images/763396.png" />
          <span className="text">Laburito</span>
          </Link>
        </div>
        <div className="links">
          <span>Laburito Business</span>
          <span>Explorar</span>
          <span>Español</span>
          {!currentUser && <span>Iniciar Sesión</span>}
          {!currentUser?.isSeller && <span>Ofrecer mis changas</span>}
          {!currentUser && <button>Unirse</button>}
          {currentUser && (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src="https://w7.pngwing.com/pngs/315/234/png-transparent-graphy-young-blond-man-men-s-health-male-man-thumbnail.png" alt="" />
              <span>{currentUser.username}</span>
              {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link className="link" to="/changas">Changas</Link>
                    <Link className="link" to="/add">Agregar una nueva changa</Link>
                    <Link className="link" to="/orders">Ordenes</Link>
                  </>
                )}
              <Link className="link" to="/messages">Mensajes</Link>
              <Link className="link">Cerrar sesión</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">Albañileria</Link>
            <Link className="link" to="/">Plomeria</Link>
            <Link className="link" to="/">Gasista</Link>
            <Link className="link" to="/">Jardineria</Link>
            <Link className="link" to="/">Mantenimiento</Link>
            <Link className="link" to="/">Reparaciones</Link>
            <Link className="link" to="/">Mantenimiento</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
