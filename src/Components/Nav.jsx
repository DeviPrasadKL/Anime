import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  const [search, setsearch] = useState("");

  return (
    <nav className="NavBar">
      <a href="/Anime/"><i className="menubtn material-icons show" > menu </i></a>
      <a href="/Anime/" className="logo"> Anime </a>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
      <div className="menu">
        <ul className="list">
          <Link to="/Anime/"><li>Home</li></Link>
          <li>About</li>
          <li>Contact Us</li>
          <li><Link to="/addanime"><button id="Addbtn">Add Anime &nbsp; +</button></Link></li>
          <li><input type="search" placeholder="🔎 Search Anime" id="search" value={search} onChange={(e) => { setsearch(e.target.value) }} /></li>
          <li><Link to={`/search${search}`}><button id="searchbtn">Search</button></Link></li>
        </ul>
      </div>
    </nav>
  );
}

