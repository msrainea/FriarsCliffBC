import React from 'react';

class Stats extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Beach Clean Statistics</h2>
                    <p>At the end of each beach clean, we will count and weigh the bags that have been collected and post the results here. Please check back after the next event!</p>
                </div>
                <div className="textContent">
                    <table id="tblStats">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Volunteers (new)</th>
                                <th>No. Bags</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>16/01/2022</td>
                                <td>54 (9)</td>
                                <td>31</td>
                                <td>50.65kg</td>
                            </tr>
                            <tr>
                                <td>17/10/2021</td>
                                <td>22</td>
                                <td></td>
                                <td>41.32kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Stats;
