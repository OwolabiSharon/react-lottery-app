import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Terms extends React.Component {

  constructor(props){
    super(props)

    this.hideMenu = this.hideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)

}

hideMenu(){
  var navlinks = document.getElementById("NavLinks")

  navlinks.style.opacity= "0"
  navlinks.style.pointerEvents= "none"

}
showMenu(){
  var navlinks = document.getElementById("NavLinks")

  navlinks.style.opacity= "1"
  navlinks.style.pointerEvents= "all"

}


  render() {
    return (
  <body>
  <div className = "navbar2">
    <h3 className = "header_h1"> lottery </h3>

       <ul className = "header_list2" id="NavLinks">
       <i className="fa fa-times" onClick={this.hideMenu}></i>
          <li className = "header_listitem2">
            <NavLink to="/" activeClassName="is-active" exact={true} className = "header_listitem2">home page</NavLink>
          </li>
          <li className = "header_listitem2">
            <NavLink to="/create" activeClassName="is-active"className = "header_listitem2">  create</NavLink>
          </li>
          <li className = "header_listitem2">
            <NavLink to="/terms" activeClassName="is-active" className = "header_listitem2">terms</NavLink>
          </li>
       </ul>
       <i className="fa fa-bars" onClick={this.showMenu} id="fa-bars"></i>
  </div>
  <div>
     its a scam

     This paragraph
  contains a lot of lines
  in the source code,
  but the browser
  ignores it.
  </div>
  </body>
);
}
}
