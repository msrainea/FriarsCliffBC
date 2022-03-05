import React from 'react';
import Team1 from '../images/team1.jpeg';
import Team2 from '../images/team2.jpg';
import Team3 from '../images/team3.jpg';

class Team extends React.Component {
    render(){
        return (
            <div className = "pageContent">
                <div className="textContent">
                    <h2>Meet the Team</h2>
                    Finding photos of the team isn't easy - we're a little camera shy!! Well, most of us are, we will let you decide who isn't!
                    <br/><br/>
                    See if you can catch us at an event and we will update this page. Maybe!!
                </div>

                <div className="textContent">
                    <div className="twoCols">
                        <div className="row">
                            <div className="twoCols-Left"><img src={Team1} alt="Amelia litter picking on the beach"/></div>
                            <div className="twoCols-Right">
                                <strong>Amelia</strong>
                                <br/><br/>
                                Amelia is our team lead and can usually be found brandishing far too many clipboards and juggling pens whilst meeting, greeting, chatting and generally trying to make sure that the rest of the team aren’t duelling with the litter pickers, or, worse, trying their jokes out on unsuspecting volunteers.
                                <br/><br/>
                                If you're getting in touch it will be Amelia on the other end of the line. She maintains that managing the group admin herself is much safer than giving the guys access to the online accounts.
                                <br/><br/>
                                Amelia is a keen solo beach cleaner and can often be spotted along the coast from Highcliffe to Mudeford with bags full of litter.
                                <br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="twoCols-Left"><img src={Team2} alt="Jon wearing some glasses found at a beach clean"/></div>
                            <div className="twoCols-Right">
                                <strong>Jon</strong>
                                <br/><br/>
                                Yes, it's a family affair! This brother and sister make a pretty good team, with Jon as second team lead and official chaffeur to the equipment! Here he is showing off some glasses that were found on the beach at a previous event.
                                <br/><br/>
                                Jon will be found handing out equipment, spouting safety information and most likely sharing his wit with you (even if you haven't asked!)
                                <br/><br/>
                                He isn't quite sure how he got roped in to this, but he puts it down to some kind of weird sisterly magic that caused him to agree to something without realising it and now he can't back out (he loves it really).
                            </div>
                        </div>
                        <div className="row">
                            <div className="twoCols-Left"><img src={Team3} alt="Unknown man jumping"/></div>
                            <div className="twoCols-Right">
                                <strong>Steve</strong>
                                <br/><br/>
                                We'll be honest, this isn't a photo of Steve, but if you ever catch him doing this please let us know! We don't have a photo to hand - we're not sure he can be captured on camera but we'll give it a go.
                                <br/><br/>
                                Steve is the team's qualified First Aider - and with Amelia's ability to injure herself whilst standing still it's definitely a good thing that he is with us!
                                <br/><br/>
                                We really hope that we never actually need his First Aid training, but that doesn't mean he stands idly by, staring at the sea. He can be found handing out equipment and dispensing safety advice alongside Jon.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textContent">
                    The team work well together to create what we hope is a fun and friendly beach clean experience – even if we do get temporarily overwhelmed when everyone arrives together!!
                    <br/><br/>
                    Amelia is extremely grateful to the guys for trusting her and following her into this venture.
                </div>
            </div>
        )
    }
}

export default Team;
