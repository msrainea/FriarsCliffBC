import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fb from '../images/icon-facebook-32.png';
import tw from '../images/icon-twitter-32.png';
import ig from '../images/icon-instagram-32.png';
 
class Footer extends Component {
  render() {
    return (
        <footer>
          <div className="footer">
            <div className="footerLeft">&copy; <a className="footerLink" href="https://www.ameliaraine.me.uk" target="_blank" rel="noopener noreferrer">msrainea</a> 2022</div>
            <div className="footerMid">
              <ul className="footerLinks" aria-label="Quick links">
                <li><Link to='/privacy'>Privacy Policy</Link></li>
                <li><Link to='/cookies'>Cookie Notice</Link></li>
              </ul>
            </div>
            <div className="footerRight">
              <div className="footerSocial">
                  <nav id="siteSocial" title="Social media links">
                    <ul>
                      <li className="navsocial">
                        <a href="https://www.facebook.com/friarscliffbc" target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" width="32px" height="32px" /></a>
                      </li>
                      <li className="navsocial">
                        <a href="https://www.twitter.com/friarscliffbc" target="_blank" rel="noopener noreferrer"><img src={tw} alt="Twitter" width="32px" height="32px" /></a>
                      </li>
                      <li className="navsocial">
                        <a href="https://www.instagram.com/friarscliffbc" target="_blank" rel="noopener noreferrer"><img src={ig} alt="Instagram" width="32px" height="32px" /></a>
                      </li>
                    </ul>
                  </nav>
                </div>
            </div>
          </div>
        </footer>
    );
  }
}
 
export default Footer;