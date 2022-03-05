import React from 'react';

class Beach extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Beach Information</h2>
                    <p>Friars Cliff is a large beach, mostly sandy but often with stony patches and, at certain times of year, quite a lot of seaweed!</p>
                    <br/>
                    <h3>Location</h3>
                    <p><span className="strong">Address:</span> Penny Way, Friars Cliff, Christchurch, Dorset, BH23 4EP</p>
                    <p>We meet at the end of the wave wall.</p>
                    <p><span className="strong">What3Words:</span> frozen.lecturing.episodes</p>
                    <p><span className="strong">Car Park information:</span> <a href="https://www.bcpcouncil.gov.uk/Parking/Find-a-car-park/car-park-single.aspx?carpark=Steamer%20Point%20car%20park" target="_blank" rel="noopener noreferrer" title="Information about Steamer Point car park (new window)">Steamer Point car park</a></p>
                    <br/>
                    <p>You can find out more about travel and location at the Visit Dorset website:</p>
                    <p><a href="https://www.visit-dorset.com/things-to-do/friars-cliff-beach-p1158843" target="_blank" rel="noopener noreferrer" title="Visit Dorset (new window)">https://www.visit-dorset.com/things-to-do/friars-cliff-beach-p1158843</a></p>
                </div>
                <br/>
                <div className="textContent">
                    <p>There are toilets at the beach, accessible by steps or a slope.</p>
                    <p>There is also the wonderful <a href="http://beachhutcafe.uk/" target="_blank" rel="noopener noreferrer" title="Beach Hut Cafe (new window)">Beach Hut Cafe</a>, who serve lovely food and drink. Please pay them a visit whilst you're with us!</p>
                    <p>There are some dog restrictions on this beach. Dogs are not allowed on the beach from 1st May to 30th September and must be kept on a lead on the prom areas.</p>
                    <br/>
                    <p>The event takes place on the beach, but many people also like to go around the beach huts and up to the green spaces opposite the car park. This event does not include the Steamer Point Nature Reserve.</p>
                </div>
                
            </div>
        )
    }
}

export default Beach;

