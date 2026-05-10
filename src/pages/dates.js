import React from 'react';

class Dates extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Event Dates</h2>
                    <p>The following dates have been scheduled for 2026.</p>
                    <p>Please be aware that all dates and times are subject to change. Please check before attending an event. Updates will be sent via email to the mailing list and posted on facebook.</p>
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
                            <tr className="past">
                                <td>Sunday</td>
                                <td>15th February 2026 - CANCELLED</td>
                                <td>10.30am</td>
                                <td>12.00pm</td>
                            </tr>
                            <tr className="past"> 
                                <td>Sunday</td>
                                <td>10th May 2026</td>
                                <td>10.30am</td>
                                <td>12.00pm</td>
                            </tr>
                            <tr className="next">
                                <td>Sunday</td>
                                <td>16th August 2026</td>
                                <td>10.30am</td>
                                <td>12.00pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>1st November 2026</td>
                                <td>10.30am</td>
                                <td>12.00pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>21st February 2027</td>
                                <td>10.30am</td>
                                <td>12.00pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="datesMobile">
                    <div className="textContent">
                        <div className="datesLine past">
                            Sunday 15th February 2026, 10.30am - 12.00pm - CANCELLED<br/>
                        </div>
                        <div className="datesLine past">
                            Sunday 10th May 2026, 10.30am - 12.00pm<br/>
                        </div>
                        <div className="datesLine next">
                            Sunday 16th August 2026, 10.30am - 12.00pm<br/>
                        </div>
                        <div className="datesLine">
                            Sunday 1st November 2026, 10.30am - 12.00pm<br/>
                        </div>
                        <div className="datesLine">
                            Sunday 21st February 2027, 10.30am - 12.00pm<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dates;

