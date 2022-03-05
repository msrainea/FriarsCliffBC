import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import logo320 from '../images/logo320.png';
import logo568 from '../images/logo568.png';
import logo768 from '../images/logo768.png';
import logo1024 from '../images/logo1024.png';
import logo1280 from '../images/logo1280.png';
import logo1366 from '../images/logo1366.png';
import logo1680 from '../images/logo1680.png';
import logo1920 from '../images/logo1920.png';

class Header extends Component {
  constructor(){
    super();
    this.state={
        mobilemenu: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(varname){
    switch (varname)
    {
        case "mobilemenu":
            this.setState({mobilemenu: !this.state.mobilemenu});
            break;
        default: return;
    }
    }

    render() {
      const {mobilemenu} = this.state;

      return (
        <header>
            <div className="header">
                <div className="headerLogo">
                    <Link to='/' title="Home">
                    <img 
                        src={logo} alt="Friars Cliff Beach Care logo" width="625px" height="450px"
                        srcSet={`
                        ${logo320} 320w,
                        ${logo568} 568w,
                        ${logo768} 768w,
                        ${logo1024} 1024w,
                        ${logo1280} 1280w,
                        ${logo1366} 1366w,
                        ${logo1680} 1680w,
                        ${logo1920} 1920w
                        `}
                    />
                    <h1 className="visuallyhidden">Friars Cliff Beach Care</h1>
                    </Link>
                </div>
            </div>
            <div className="headerNav">
                <nav id="siteMenu" aria-label="Main site navigation">
                  <ul aria-label="Main site navigation">
                    <li id="home"><Link to='/'>Home</Link></li>
                    <li id="team"><Link to='/dates'>Dates</Link></li>
                    <li id="beach"><Link to='/beach'>About the Beach</Link></li>
                    <li id="dates"><Link to='/info'>Event Information</Link></li>
                    <li id="stats"><Link to='/stats'>Stats</Link></li>
                    <li id="stats"><Link to='/team'>Meet the Team</Link></li>
                    <li id="info"><Link to='/contact'>Contact Us</Link></li>
                  </ul>
                </nav>
                {!mobilemenu && <div id="menuClick" onClick={() => this.hideComponent("mobilemenu")}><span id="siteMenuMobile"></span></div>}
                {mobilemenu && <div id="menuClick" onClick={() => this.hideComponent("mobilemenu")}><span id="siteMenuMobile" className="active" onClick={() => this.hideComponent("mobilemenu")}></span></div>}
            </div>
            {mobilemenu && <nav id="mobileMenu">
                <ul>
                    <li id="home"><Link to='/'>Home</Link></li>
                    <li id="team"><Link to='/dates'>Dates</Link></li>
                    <li id="beach"><Link to='/beach'>About the Beach</Link></li>
                    <li id="dates"><Link to='/info'>Event Information</Link></li>
                    <li id="stats"><Link to='/stats'>Stats</Link></li>
                    <li id="stats"><Link to='/team'>Meet the Team</Link></li>
                    <li id="info"><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>
            }
        </header>
      );
    }
  }
export default Header;