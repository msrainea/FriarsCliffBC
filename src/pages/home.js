import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render(){
        return (
            <div className = "homeContent">
                <section title="Main page content">
                    <div className="textContent">
                        <h2>Hello and welcome to Friars Cliff Beach Care!</h2>
                        <p>This group has been established for a long time and has a large local following. We have recently had a change in leadership and our website and social media channels are new, so they may seem a little empty for now, but that will soon change!</p>
                        <p>News and events will be published here, as well as general event information. Events are free and open to everyone, you are very welcome to join us at any time.</p>
                        <p>If you have any questions you can use our <Link to='/contact'>contact form</Link> to send us a message, send us an email to <a href="mailto:friarscliff.beachcare@gmail.com">friarscliff.beachcare@gmail.com</a> or message us through any of our social media channels.</p>
                        <br/>
                        <p>We look forward to seeing you 🙂</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
