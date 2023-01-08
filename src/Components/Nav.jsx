import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  const [search, setsearch] = useState("");

  return (
    <div className="NavBar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Link to="/addanime"><button id="Addbtn">Add Movie &nbsp; +</button></Link>
      <div className="searchContent">
        <input type="search" placeholder="🔎 Search Anime" id="search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
        <Link to={`/search${search}`}><button id="searchbtn">Search</button></Link>
      </div>
    </div>
  );
}
