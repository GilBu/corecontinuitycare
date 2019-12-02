import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: true,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}

resize() {
    if (window.innerWidth <= 1125) {
        this.setState({ showMenu: false });
    }
    else {
      this.setState({ showMenu: true });
    }
}

  render() {
    return (
      <header className='header'>
        <h1 className='title'>Core Continuity of Care</h1>
        <button className='compact' onClick={this.showMenu}>
         <div class="bar1"></div>
         <div class="bar2"></div>
         <div class="bar3"></div>
        </button>

        {
          this.state.showMenu
            ? (
                <ul className='links-list'>
                  <Link className='link-style' to="/">Home</Link>
                  <Link className='link-style' to="/about">About Us</Link>
                  {/* <Link className='link-style' to="/services">Services</Link> */}
                  <Link className='link-style' to="/locations">Locations</Link>
                  <Link className='link-style' to="/contactUs">Contact</Link>
                </ul>
        )
        : (
          null
        )
      }
      </header>
    );
  }
}

export default Header;
