import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>About us</h1>
    <p>We are a family living on beautiful Long Island New York. Nicholas is 8 years old and is our primary pixel artist and programmer. Ellie is 5 years old and is our primary sound engineer and creative director. Nick is the Daddy and secondary programmer.</p>
    <p>How our name is derived:</p>
    <p>Nick * Nick + Ellie = N squared + E = N^2 + E</p>
    <Link to="/">Go back to our games</Link>
  </Layout>
)

export default AboutPage
