import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/">Features</Link>
            <Link className="nav-item nav-link" to="/">Pricing</Link>
            <Link className="nav-item nav-link disabled" to="/">Disabled</Link>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header;

const navbarStyle = {
  backgroundColor: "white",
  height: "100px",
  boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.07)",
}
