import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import HeaderLogo from "../components/logo"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">&nbsp;&nbsp;{data.site.siteMetadata.title}<br/>< HeaderLogo /></Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Al Eka Fishworld Lda &bull; Crafted with <span role="img" aria-label="love">❤️</span> for the environment </p>
      </footer>
    </div>
  )
}
