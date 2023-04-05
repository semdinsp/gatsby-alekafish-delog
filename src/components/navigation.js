import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://www.facebook.com/profile.php?id=100089837906138">Facebook</Link>
    <Link to="https://www.instagram.com/al.ekafishworld/">Instagram</Link>
    <Link to="https://marenumdonation.fly.dev">Donate</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)