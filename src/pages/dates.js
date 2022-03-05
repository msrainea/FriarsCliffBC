import React from 'react';

class Dates extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Event Dates</h2>
                    <p>The following dates have been scheduled for 2022.</p>
                    <p>Please be aware that all dates and times are subject to change, particularly in line with current government guidance surrounding Coronavirus. Please check before attending an event. Updates will be sent via email to the mailing list and posted on social media.</p>
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
                            <tr>
                                <td>Sunday</td>
                                <td>16th January 2022</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/43yfQvg1M" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>15th May 2022</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/4yeqyWlwb" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>7th August 2022</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/khqb0tAmX" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>13th November 2022</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/e1stKg9DN" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>5th February 2023</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                                <td><a href="https://fb.me/e/4bCZPqi4u" target="_blank" rel="noopener noreferrer">Facebook event page</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="datesMobile">
                    <div className="textContent">
                        <div className="datesLine">
                            Sunday 16th January 2022, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/43yfQvg1M" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine">
                            Sunday 15th May 2022, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/4yeqyWlwb" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine">
                            Sunday 7th August 2022, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/khqb0tAmX" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine">
                            Sunday 13th November 2022, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/e1stKg9DN" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                        <div className="datesLine">
                            Sunday 5th February 2023, 10.30am - 12.30pm<br/>
                            <a href="https://fb.me/e/4bCZPqi4u" target="_blank" rel="noopener noreferrer">Facebook event page</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dates;

