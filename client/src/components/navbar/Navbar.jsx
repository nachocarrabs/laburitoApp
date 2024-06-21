import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {

    const [active, setActive] = useState(false)
    
    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
      window.addEventListener("scroll", isActive)
    
      return () => {
        window.removeEventListener("scroll", isActive)
      }
    }, [])
    

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">Laburito</span>
        </div>
        <div className="links">
          <span>Laburito Business</span>
          <span>Explorar</span>
          <span>Español</span>
          <span>Iniciar Sesión</span>
          <span>Ofrecer mis changas</span>
          <button>Unirse</button>
        </div>
      </div>
      {active && (<><hr />
      <div className="menu">
        <span>Test 1</span>
        <span>Test 2</span>
        <span>Test 3</span>
        <span>Test 4</span>
        <span>Test 5</span>
      </div></>)
      }
    </div>
  );
};

export default Navbar;
