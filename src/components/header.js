import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="headerContent">
      <h1>LAG DITT EGET TESTAMENT</h1>
      <p>Opprett testamentet enkelt og gi vider til de du ønsker</p>
      <button className="button-bg"><label className="buttonText">LAG TESTAMENT</label></button>
  </div>
)

export default Header
