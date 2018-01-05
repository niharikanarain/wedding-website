import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
    <div id="navbar">

      <NavLink to="/" activeStyle={{ textDecoration: 'none'}}>
        <h2 className="simple">Home</h2>
      </NavLink>

      <NavLink to="/rsvp-events" activeStyle={{ textDecoration: 'none'}}>
        <h2 className="simple">RSVP + Events</h2>
      </NavLink>

      <NavLink to="/proposal">
        <h2 className="simple">Proposal</h2>
      </NavLink>

      <NavLink to="/wedding-party">
        <h2 className="simple">Wedding Party</h2>
      </NavLink>

      <NavLink to="/travel">
        <h2 className="simple">Travel</h2>
      </NavLink>

    </div>
  )
}
