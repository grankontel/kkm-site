import * as React from 'react'
import { Navbar, Container } from 'react-bulma-components'
import { Link } from 'gatsby'
const classNames = require('classnames')

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 60,
      mobileOpen: false,
    }

    this.openMobileMenu = this.openMobileMenu.bind(this)
  }

  openMobileMenu = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const navMenu = classNames({
      'is-active': this.state.mobileOpen,
    })

    return (
      <Navbar
        fixed="top"
        role="navigation"
        className="topnavbar is-scrolled"
        aria-label="navigation"
      >
        <Container>
          <Navbar.Brand>
            <Link id="brand_name" to="/">
              Korijé Kréyòl Maké
            </Link>
          </Navbar.Brand>
          <Navbar.Burger onClick={this.openMobileMenu} aria-label="menu" />

          <Navbar.Menu renderAs="div" className={navMenu}>
            <Navbar.Container align="right" renderAs="ul">
              <Navbar.Item renderAs="li">
                <Link to="#projects">Pwojé</Link>
              </Navbar.Item>
              <Navbar.Item renderAs="li">
                <Link to="#contact">Kontak</Link>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Container>
      </Navbar>
    )
  }
}

export default Navigation
