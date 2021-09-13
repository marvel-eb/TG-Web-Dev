import React, { useState, useEffect, useRef } from "react";
import HeaderNav from "../Contents/HeaderNav";

const Navigation = (props) => {

  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" 
     style={{ transition: '1s ease',backgroundColor: navBackground ? 'black' : 'transparent'}}>
        <div className="container">
          <HeaderNav />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
