import React from 'react'

export const Form = () => {
  return (
    <div>
      <div>
    <div class="row">
    <div className="col s12 offset-m2 m8 center">
      <div className="card-panel col s12 grey darken-3 center ">

      <p className="pH green-text">Search Books. Save Books.</p>
        <form>
          <div class="form col s12 offset-m3 m6 center">
            <label ></label>
            <input type="txt" class="bt" placeholder="Book Title (required)"/>
            <input type="submit"class="bt"/>
           </div> 
           <br/>           
           <br/>           
        <div className="col s12 offset-m2 m8 center linkDiv">
          <a className="links green-text center" href="home.html">Home</a>
          <a className="links green-text center" href="home.html">Search</a>
          <a className="links green-text center" href="home.html">Saved</a>
        </div> 
       
        </form>
        <br/>
        <br/>
      </div>
    </div>
  </div>
 </div> 
    </div>
  )
}
