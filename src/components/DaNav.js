import React from "react"
import SideNav, {MenuIcon}  from "react-simple-sidenav"
import { Link } from 'gatsby'
import { Persona } from '../assets/images/index'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import layoutStyles from '../css/layout.module.css'



class DaNav extends React.Component {
    constructor() {
        super();
    
        this.state = {
          showNav: false,
          title: '',
          items: '',
          openFromRight: '',
    
    
          
        }
      }
  render() {
    return (
      <Container fluid style={{justifyContent: 'right', alignContent: 'right', alignItems: 'right', zIndex: '5',}}>
          <Row className={layoutStyles.mobileNavRow}>
              <Col />

              <Col style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                {/*<Link to="/" rel="preload" >
                <img src={Persona} alt='Logo' className=""/>
    </Link>*/}
             </Col>
              <Col>
        {/*<div
          className="navbar-toggle mobileNav"
          onClick={() => this.setState({ showNav: true })}
        >
          {" "}
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />{" "}
        </div>*/}
        <MenuIcon className={layoutStyles.iconBar} onClick={() => this.setState({showNav: true})}/>

        </Col>
        </Row>
        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link>
                <img src={Persona} width="100%" alt="" />
              </Link>
            </div>
          }
          titleStyle={{ background: "inherit", color: "#black" }}
          items={[
            <Link rel="preload" className="nav-link" to="/">
              Home
            </Link>,
            <Link rel="preload" className="nav-link" to="/about">
              About
            </Link>,
            <Link rel="preload" className="nav-link" to="/services">
              Services
            </Link>,
            <Link rel="preload" className="nav-link" to="/contact">
              Contact
            </Link>,
          ]}
          itemStyle={{
            background: "inherit",
            color: "#fff",
            fontSize: "inherit",
            padding: "0.5rem 0",
          }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </Container>
    )
  }
}

export default DaNav
