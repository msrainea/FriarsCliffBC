import React, { Component } from 'react';
import BannerImage from '../images/banner1920.png';
import BannerImage320 from '../images/banner320.png';
import BannerImage568 from '../images/banner568.png';
import BannerImage768 from '../images/banner768.png';
import BannerImage1024 from '../images/banner1024.png';
import BannerImage1280 from '../images/banner1280.png';
import BannerImage1366 from '../images/banner1366.png';
import BannerImage1680 from '../images/banner1680.png';
import BannerImage1920 from '../images/banner1920.png';
 
class Banner extends Component {
  render() {
    return (
        <section>
            <div className="bannerImage">
                <img 
                  src={BannerImage} alt="Litter on Highcliffe Beach with a view out to sea" width="1536px" height="747px"
                  srcSet={`
                  ${BannerImage320} 320w,
                  ${BannerImage568} 568w,
                    ${BannerImage768} 768w,
                    ${BannerImage1024} 1024w,
                    ${BannerImage1280} 1280w,
                    ${BannerImage1366} 1366w,
                    ${BannerImage1680} 1680w,
                    ${BannerImage1920} 1920w
                  `}
                  sizes="100vw"
                />
            </div>
        </section>
    );
  }
}
 
export default Banner;