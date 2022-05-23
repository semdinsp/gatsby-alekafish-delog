import React from "react"
//import logo from "../images/alekalogo.png" // Tell webpack this JS file uses this image
import logo from "../images/marenumlogo2.jpg" // Tell webpack this JS file uses this image
function HeaderLogo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Marenum Logo" placeholder="blurred" width={180} height={60}  />

}
export default HeaderLogo
