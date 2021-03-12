import React from "react"
import logo from "../images/alekalogo.jpg" // Tell webpack this JS file uses this image
console.log(logo) // /logo.84287d09.png
function HeaderLogo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Al Eka Fishworld Logo" placeholder="blurred" width={60} height={60}  />

}
export default HeaderLogo
