import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <Link to='/contact' className="button -primary">Get in touch&rarr;</Link>
        <Link to='https://donation.marenum.com' className="button -primary">Sponsor a coral table&rarr;</Link>
        <Link to='https://donation.marenum.com/tour' className="button -primary">Tour our coral farm&rarr;</Link>
        <Link to='https://donation.marenum.com/products' className="button -primary">Coral and fish products&rarr;</Link>
      </div>
    )}
  />
)