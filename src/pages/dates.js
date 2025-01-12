import React from 'react';

class Dates extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Event Dates</h2>
                    <p>The following dates have been scheduled for 2024.</p>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="next">
                                <td>Sunday</td>
                                <td>16th February 2025</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>22nd June 2025</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>21st September 2025</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>23rd November 2025</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>15th February 2026</td>
                                <td>10.30am</td>
                                <td>12.30pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="datesMobile">
                    <div className="textContent">
                        <div className="datesLine next">
                            Sunday 16th February 2025, 10.30am - 12.30pm<br/>
                        </div>
                        <div className="datesLine">
                            Sunday 22nd June 2025, 10.30am - 12.30pm<br/>
                        </div>
                        <div className="datesLine">
                            Sunday 21st September 2025, 10.30am - 12.30pm<br/>
                        </div>
                        <div className="datesLine">
                            Sunday 23rd November 2025, 10.30am - 12.30pm<br/>
                        </div>
                        <div className="datesLine">
                            Sunday 15th February 2026, 10.30am - 12.30pm<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dates;

