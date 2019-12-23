import React from "react"
import { StaticQuery, graphql } from "gatsby"

const GetData = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulThemeColor {
          edges {
            node {
              colorName
            }
          }
        }
      }
    `}
    render={data => data.allContentfulThemeColor.edges[0]["node"]["colorName"]}
  ></StaticQuery>
)

export default GetData

