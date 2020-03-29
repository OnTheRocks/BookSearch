import React from 'react'
import Google from '../components/img/Google_Books_logo.png';

export const MainCard = () => {
  return (
    <div>
    <div class="row">
    <div className="col s12 offset-m2 m8">
      <div className="card-panel col s12 grey darken-3 center">
        <h1 className="green-text">Book Search Using:</h1> 
        <img className= "width30" src={Google}  alt="Google Books"/> 
        <br/>
        <br/>
      </div>
    </div>
  </div>
 </div> 
  )
}


// <div className="container left">
// <a href="#!" class="brand-logo center">Book Search</a>
// <ul className="left hide-on-med-and-down">
//   <li><a href="home.html">Home</a></li>
//   <li><a href="search.html">Search</a></li>
//   <li><a href="saved.html">Saved</a></li>
// </ul>
// </div>