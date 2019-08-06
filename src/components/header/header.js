import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {

    render() {
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">StarDB</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">People</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Starships</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Planets</a>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
}