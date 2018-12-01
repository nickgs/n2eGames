import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import { compose } from 'redux';
//import Image from '../components/image'

const IndexPage = (data) => { 
  console.log("Here");
  console.log(data.data.allFile.edges[0]) // very coooolll

  return (
    <Layout>
      <h1>Hello World</h1>
      <p>We are a family team experimenting with games. More about us <Link to="/about">here</Link>. Or check out some of our games below:</p>
      <li>
        <ul>
        { 
        <a href={ data.data.allFile.edges[0].node.publicURL }>Aliens</a>
        }
        </ul>
      </li>
      <li>
        <ul>
        { 
        <a href={ data.data.allFile.edges[1].node.publicURL }>Lord Ship</a>
        }
        </ul>
      </li>
    </Layout>
  )
}

export const query = graphql`{
	allFile(filter: { sourceInstanceName: { eq: "games"}}) {
		edges{
      node {
      	publicURL
      }
    }
  }
}`

export default IndexPage
