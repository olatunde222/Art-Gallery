import React, { useState, useEffect } from 'react';

const Header = () => {
//   const [isMenuActive, setIsMenuActive] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuActive(!isMenuActive);
//   };

//   const closeMenu = () => {
//     setIsMenuActive(false);
//   };

  return (
    <div style={headerStyle}>
      <div style={headerContainerStyle}>
        <div style={headerNavbarStyle}>
          <div className="BRND">
            <a href="#hero">
              <h1 className="uppercase text-white text-[3rem]">
                <span className="text-rose-700">R</span>asha{' '}
                <span className="text-rose-700">J</span>azairi
              </h1>
            </a>
          </div>

          <div className="NL">
            {/* Hambuger */}
            <div
              className={`h-[60px] w-[60px] flex border-solid border-white rounded-[50%] relative items-center justify-center z-[100] cursor-pointer transform scale-[0.8] mr-5 after:absolute after:content-[''] after:h-full after:w-full after:rounded-[50%] after:border-4 after:border-solid after:border-white ${
                isMenuActive ? 'animate-hamburgerPuls_1s_ease_infinite' : ''
              }`}
              onClick={toggleMenu}
            >
              {/* Hambuger bar */}
              <div
                className={`h-[2px] w-[30px] relative bg-white z-[-1] after:content-[''] after:absolute after:h-full after:w-full after:left-0 after:bg-white after:transition after:duration-300 after:ease-in-out before:content-[''] before:absolute before:h-full before:w-full before:left-0 before:bg-white before:transition before:duration-300 before:ease-in-out after:top-[8px] before:bottom-[8px] ${
                  isMenuActive ? 'active:before:bottom-0 active:after:top-0' : ''
                }`}
              ></div>
            </div>
            <ul
              className={`list-none absolute bg-[rgb(31,30,30)] w-[100vw] h-[100vh] left-[100%] top-0 flex flex-col justify-center items-center z-[1] overflow-x-hidden transition ease-in-out duration-500 left ${
                isMenuActive ? 'active:left-[0%]' : ''
              }`}
            >
              <li>
                <a
                  href="#hero"
                  data-after="Home"
                  className="text-white uppercase text-lg font-semibold tracking-wider py-5 px-8 block relative active:left-[0%] hover:text-transparent after:content-[attr(data-after)] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:text-rose-500 after:text-[13rem] after:tracking-[50px] after:z-[-1] after:transition after:duration-300 after:ease-in-out hover:after:scale-[1] hover:after:text-rose-500 hover:after:font-bold  hover:after:tracking-[50px] hover:transition hover:duration-300 hover:ease-in-out"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  data-after="Services"
                  className="text-white uppercase text-lg font-semibold tracking-wider py-5 px-8 block relative active:left-[0%] hover:text-transparent after:content-[attr(data-after)] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:text-rose-500 after:text-[13rem] after:tracking-[50px] after:z-[-1] after:transition after:duration-300 after:ease-in-out hover:after:scale-[1] hover:after:text-rose-500 hover:after:font-bold  hover:after:tracking-[50px] hover:transition hover:duration-300 hover:ease-in-out"
                  onClick={closeMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  data-after="Gallery"
                  className="text-white uppercase text-lg font-semibold tracking-wider py-5 px-8 block relative active:left-[0%] hover:text-transparent after:content-[attr(data-after)] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:text-rose-500 after:text-[13rem] after:tracking-[50px] after:z-[-1] after:transition after:duration-300 after:ease-in-out hover:after:scale-[1] hover:after:text-rose-500 hover:after:font-bold  hover:after:tracking-[50px] hover:transition hover:duration-300 hover:ease-in-out"
                  onClick={closeMenu}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  data-after="About"
                  className="text-white uppercase text-lg font-semibold tracking-wider py-5 px-8 block relative active:left-[0%] hover:text-transparent after:content-[attr(data-after)] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:text-rose-500 after:text-[13rem] after:tracking-[50px] after:z-[-1] after:transition after:duration-300 after:ease-in-out hover:after:scale-[1] hover:after:text-rose-500 hover:after:font-bold  hover:after:tracking-[50px] hover:transition hover:duration-300 hover:ease-in-out"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  data-after="Contact"
                  className="text-white uppercase text-lg font-semibold tracking-wider py-5 px-8 block relative active:left-[0%] hover:text-transparent after:content-[attr(data-after)] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-0 after:text-rose-500 after:text-[13rem] after:tracking-[50px] after:z-[-1] after:transition after:duration-300 after:ease-in-out hover:after:scale-[1] hover:after:text-rose-500 hover:after:font-bold  hover:after:tracking-[50px] hover:transition hover:duration-300 hover:ease-in-out"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// Styles for header, header-container, and header-navbar
const headerStyle = {
  position: 'fixed',
  zIndex: 1000,
  left: 0,
  top: 0,
  width: '100vw',
  height: 'auto',
};

const headerContainerStyle = {
  minHeight: '8vh',
  backgroundColor: scrollPosition > 250 ? 'rgba(31, 30, 30, 0.24)' : 'transparent',
  transition: '0.3s ease background-color',
};

const headerNavbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  maxWidth: '1300px',
  padding: '0 10px',
};
