import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import '../styles/style.css'

//import { compose } from 'redux';
//import Image from '../components/image'


const IndexPage = (data) => { 
  // console.log("Here");
  // console.log(data.data.games.edges[0].node.publicURL) // very coooolll

  
  return (
    <Layout>
      <h1>Hello World</h1>
      <p>We are a family team experimenting with games. More about us <Link to="/about">here</Link>. Or check out some of our games below:</p>
      <ul className="game-list">
        <li>
        { 
        <a href={ data.data.games.edges[0].node.publicURL }>
          <img alt = "Aliens" src={data.data.images.edges[0].node.publicURL}></img>
          <div>Aliens</div>
        </a>
        }
        </li>
      <li>
        { 
        <a href={ data.data.games.edges[1].node.publicURL }>
          <img alt = "Lord Ship" src={data.data.images.edges[1].node.publicURL}></img>
          <div>Lord Ship</div>
        </a>
        }
      </li>
      </ul>
    </Layout>
  )
}

export const query = graphql`{
	games: allFile(filter: { sourceInstanceName: { eq: "games"}}) {
		edges{
      node {
      	publicURL
      }
    }
  }
  images: allFile(filter: { sourceInstanceName: { eq: "screenshots"}}) {
		edges{
      node {
              publicURL
      }
    } 
  }
}`

export default IndexPage
