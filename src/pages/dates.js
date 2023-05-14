import React from 'react';

class Dates extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Event Dates</h2>
                    <p>The following dates have been scheduled for 2023.</p>
                    <p>Please be aware that all dates and times are subject to change. Please check before attending an event. Updates will be sent via email to the mailing list and posted on social media.</p>
                    <br/>
                </div>
                <div id="datesDesktop" className="textContent">
                    <table id="tblDates">
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="past">
                                <td>Sunday</td>
                                <td>5th February 2023</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/4bCZPqi4u" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr className="past">
                                <td>Sunday</td>
                                <td>14th May 2023</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/3QRgRHWiZ" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr className="next">
                                <td>Sunday</td>
                                <td>27th August 2023 (to be rescheduled)</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/3dFLnsEPN" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>5th November 2023</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/3RLhuWNVT" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>4th February 2024</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/29MTHNUfy" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="datesMobile">
                    <div className="textContent">
                        <div className="datesLine past">
                            Sunday 5th February 2023, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/4bCZPqi4u" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine past">
                            Sunday 14th May 2023, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/3QRgRHWiZ" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine next">
                            <strong>Note: this date is being rescheduled, please check back later</strong><br/>
                            Sunday 27th August 2023, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/3dFLnsEPN" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine">
                            Sunday 5th November 2023, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/3RLhuWNVT" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine">
                            Sunday 4th February 2024, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/29MTHNUfy" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dates;

