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
                                <td>14/05/2023</td>
                                <td>50 (2)</td>
                                <td>25</td>
                                <td>23.78kg</td>
                            </tr>
                            <tr>
                                <td>05/02/2023</td>
                                <td>62 (10)</td>
                                <td>28</td>
                                <td>35.38kg</td>
                            </tr>
                            <tr>
                                <td>13/11/2022</td>
                                <td>21 (8)</td>
                                <td>19</td>
                                <td>24.37kg</td>
                            </tr>
                            <tr>
                                <td>04/09/2022</td>
                                <td>13 (1)</td>
                                <td>10</td>
                                <td>31.1kg</td>
                            </tr>
                            <tr>
                                <td>15/05/2022</td>
                                <td>23 (4)</td>
                                <td>13</td>
                                <td>24.96kg</td>
                            </tr>
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
