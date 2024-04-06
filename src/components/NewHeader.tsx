import React, { CSSProperties } from 'react'

const NewHeader = () => {
  return (
    <div style={headerStyle}>
        <div style={headerContainerStyle}>
            <nav style={headerNavbarStyle}>
                <a href=""><span>R</span>asha <span>J</span>azairi</a>
                <ul className='overflow-hidden'>
                    <li className='inline-block list-none mx-3 my-5'><a href="#hero" className='text-[#fff] no-underline text-[18px] capitalize relative after:content-[""] after:w-0 after:bg-rose-700 after:h-[3px] after:absolute after:left-0 after:bottom-[-6px] after:transition-all after:duration-300 after:hover:w-[100%]'>Home</a></li>
                    <li className='inline-block list-none mx-3 my-5'><a href="#services" className='text-[#fff] no-underline text-[18px] capitalize relative after:content-[""] after:w-0 after:bg-rose-700 after:h-[3px] after:absolute after:left-0 after:bottom-[-6px] after:transition-all after:duration-300 after:hover:w-[100%]'>Services</a></li>
                    <li className='inline-block list-none mx-3 my-5'><a href="#gallery" className='text-[#fff] no-underline text-[18px] capitalize relative after:content-[""] after:w-0 after:bg-rose-700 after:h-[3px] after:absolute after:left-0 after:bottom-[-6px] after:transition-all after:duration-300 after:hover:w-[100%]'>Collections</a></li>
                    <li className='inline-block list-none mx-3 my-5'><a href="#about" className='text-[#fff] no-underline text-[18px] capitalize relative after:content-[""] after:w-0 after:bg-rose-700 after:h-[3px] after:absolute after:left-0 after:bottom-[-6px] after:transition-all after:duration-300 after:hover:w-[100%]'>About Me</a></li>
                    <li className='inline-block list-none mx-3 my-5'><a href="#contact" className='text-[#fff] no-underline text-[18px] capitalize relative after:content-[""] after:w-0 after:bg-rose-700 after:h-[3px] after:absolute after:left-0 after:bottom-[-6px] after:transition-all after:duration-300 after:hover:w-[100%]'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NewHeader


// Styles for header , header-container and header-navbar
const headerStyle = {
    positon: "fixed",
    zIndex: "10",
    left: "0",
    top: "0px",
    width: "100%",
    height: "auto",
  };
  
  const headerContainerStyle: CSSProperties = {
    
    minHeight: "8vh",
    backgroundColor: "rgb(31, 30, 30)",
    transition: "0.3s ease background-color",
  };
  
  const headerNavbarStyle: CSSProperties = {
    
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    maxWidth: "1300px",
    padding: "0 10px",
  };
  

//   const headerUlStyle: CSSProperties = {

//     listStyle: "none",
// 	position: "absolute",
// 	backgroundColor: "rgb(31, 30, 30)",
// 	width: "100vw",
// 	// height: "100vh",
// 	// left: "100%",
// 	// top: "0",
// 	display: "flex",
// 	// flexDirection: "column",
// 	// justifyContent: "center",
// 	// alignItems: "center",
// 	zIndex:"1",
// 	overflowX: "hidden",
// 	transition: "0.5s ease left",
//   };