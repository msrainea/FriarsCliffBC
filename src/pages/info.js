import React from 'react';
import Risk from '../documents/riskassessment.pdf';
import Letter from '../documents/letterofagreement.pdf';
import Letter23 from '../documents/letterofagreement2023.pdf';
import Liability from '../documents/insurance.pdf';

class Info extends React.Component {
    constructor(){
        super();
        this.state={
            section1: false,
            section2: false,
            section3: false,
            section4: false,
            section5: false,
            section6: false,
            section7: false,
            section8: false,
            section9: false,
            section10: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(varname){
        switch (varname)
        {
            case "section1":
                this.setState({section1: !this.state.section1});
                break;
            case "section2":
                this.setState({section2: !this.state.section2});
                break;
            case "section3":
                this.setState({section3: !this.state.section3});
                break;
            case "section4":
                this.setState({section4: !this.state.section4});
                break;
            case "section5":
                this.setState({section5: !this.state.section5});
                break;
            case "section6":
                this.setState({section6: !this.state.section6});
                break;
            case "section7":
                this.setState({section7: !this.state.section7});
                break;
            case "section8":
                this.setState({section8: !this.state.section8});
                break;
            case "section9":
                this.setState({section9: !this.state.section9});
                break;
            case "section10":
                this.setState({section10: !this.state.section10});
                break;
            default: return;
        }
    }


    render(){
        const {section1, section2, section3, section4, section5, section6, section7, section8, section9, section10} = this.state;
        return (
            <div className = "pageContent">
                <div className='textContent'>
                    <h2>Event Information</h2>
                    <p>The team are supported by BCP Council and Litter Free Dorset. We operate according to their guidance and are covered by their insurance. BCP Council provide the equipment that is used at our events.</p>
                    <p>We don't gather at the beginning of events to do a big talk, we prefer that people can come along whenever they like during the two hour period. We are always happy to answer questions and provide advice at events, but we have answered some frequently asked questions below for you.</p>
                    <hr />
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section1")}><h3>What should I bring?</h3>{!section1 && <span className="toggleDown">+</span>}{section1 && <span className="toggleUp">-</span>}</div>
                        {section1 && 
                            <div className="toggleContent">
                                Just yourself usually! We will provide litter pickers, hi-vis vests, bags, hoops and gloves. If you have your own equipment you are welcome to bring it, you don't have to borrow ours.
                                <br/><br/>
                                Please make sure you are dressed appropriately and wearing sensible footwear. Remember the sun cream (or rain coat!) as needed.
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section1")}><h3>What should I bring?</h3>{!section1 && <span className="toggleDown">+</span>}{section1 && <span className="toggleUp">-</span>}</div>
                        {section1 && 
                            <div className="toggleContent">
                                Just yourself usually! We will provide litter pickers, hi-vis vests, bags, hoops and gloves. If you have your own equipment you are welcome to bring it, you don't have to borrow ours.
                                <br/><br/>
                                Please make sure you are dressed appropriately and wearing sensible footwear. Remember the sun cream (or rain coat!) as needed.
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section2")}><h3>Can I bring my dog?</h3>{!section2 && <span className="toggleDown">+</span>}{section2 && <span className="toggleUp">-</span>}</div>
                        {section2 && 
                            <div className="toggleContent">
                                It depends on the time of year. Dogs are not allowed on all parts of this beach between 1st May and 1st September. If you wish to bring a dog and head to one of the unrestricted areas, please ensure it is on a leash whilst you sign in and collect your equipment.
                                <br/><br/>
                                We have had a problem in the past with dogs using the kit bags as a toilet stop - we would be very grateful if you please try and keep your furry friend away from the kit, because this isn't pleasant for anyone!
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section3")}><h3>Is the event child friendly?</h3>{!section3 && <span className="toggleDown">+</span>}{section3 && <span className="toggleUp">-</span>}</div>
                        {section3 && 
                            <div className="toggleContent">Yes! absolutely. We even have some child-sized litter pickers!</div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section4")}><h3>Where can I park?</h3>{!section4 && <span className="toggleDown">+</span>}{section4 && <span className="toggleUp">-</span>}</div>
                        {section4 && 
                            <div className="toggleContent">There is parking available at <a href="https://www.bcpcouncil.gov.uk/Parking/Find-a-car-park/car-park-single.aspx?carpark=Steamer%20Point%20car%20park" target="_blank" rel="noopener noreferrer" title="Steamer Point car park (new window)">Steamer Point car park</a> - have a look at this link to <a href="https://en.parkopedia.co.uk/parking/carpark/steamer_point/bh23/christchurch/?arriving=202104241800&leaving=202104242000" target="_blank" rel="noopener noreferrer" title="Parkopedia (new window)">Parkopedia</a> for info and other nearby parking locations.</div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section5")}><h3>What happens when I arrive?</h3>{!section5 && <span className="toggleDown">+</span>}{section5 && <span className="toggleUp">-</span>}</div>
                        {section5 && 
                            <div className="toggleContent">
                                Look for Amelia - she will be the one hiding under a pile of clipboards ready to sign you in!
                                <br/><br/>
                                If you are on the mailing list already, just give her your name and she will tick you in. If not, you will be asked to register.
                                <br/><br/>
                                Once that is done, the guys will sort you out with kit and get you underway.
                                <br/><br/>
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section6")}><h3>What about Covid-19?</h3>{!section6 && <span className="toggleDown">+</span>}{section6 && <span className="toggleUp">-</span>}</div>
                        {section6 && 
                            <div className="toggleContent">
                                As this is an outdoor event, it is a low risk environment. We will keep our distance as far as possible. We will be monitoring the Government guidance and will restrict numbers if required.
                                <br/><br/>
                                It can get busy if everyone turns up at once, there is plenty of space on the beach so please spread out and come forward to check in when there is space! We will get through everyone as quickly as we possibly can.
                                <br/><br/>
                                We will have cleansing sprays available to wipe down equipment and we always have hand sanitiser available if you would like to use it.
                                <br/><br/>
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section7")}><h3>Health and Safety Information</h3>{!section7 && <span className="toggleDown">+</span>}{section7 && <span className="toggleUp">-</span>}</div>
                        {section7 && 
                            <div className="toggleContent">
                                Every group has it's own version of the pre-event health and safety talk - essentially it is common sense.
                                <br/><br/>
                                At these events, the cleaning area is to the left and to the end of the wave wall or to the right and along Friars Cliff beach until you reach Avon Beach. Please do not climb on rock groynes, or anywhere else! You may be on the beach or on one of the two green areas at the top of the beach - we do have disclaimer forms available for anyone wishing to wander off anywhere else. The Steamer Point nature reserve is not included at these events.
                                <br/><br/>
                                Don't pick up anything that you do not feel comfortable removing. If something is a cause for concern, please report back to the team and someone will take the appropriate action.
                                <br/><br/>
                                We always have sharps boxes on site, so if you find needles at a location please let us know and we will dispose of them.
                                <br/><br/>
                                Don't feel obliged to pick up dog poo, bagged or otherwise (or human poo, yes, it has happened!)
                                <br/><br/>
                                We have a qualified first aider on site at all times and a first aid kit available so please ask for help if you need it.
                                <br/><br/>
                                During all events, we will be in a fixed place at Groyne H5 and not cleaning along with you. This is so you can always find us for help and advice if required and it means we have visibility of all attendees at all times.
                                <br/><br/>
                            </div>
                        }           
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section8")}><h3>What will I find or what should I look for?</h3>{!section8 && <span className="toggleDown">+</span>}{section8 && <span className="toggleUp">-</span>}</div>
                        {section8 && 
                            <div className="toggleContent">
                                The usual litter found is bottles, cans, food packaging, rope and all sorts of other things in between! You won't always find big things, often it's microplastics or sweet wrappers so you will need to tune your eyes in, particularly among the stones and seaweed.
                                <br/><br/>
                                We don't usually find anything too objectionable here - needles are extremely rare - but please always be on guard. There is often broken glass around, metal BBQ grills can be a problem and during the winter cleans a lot of odd things can get washed up on the stormy tides.
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section9")}><h3>What happens to the litter?</h3>{!section9 && <span className="toggleDown">+</span>}{section9 && <span className="toggleUp">-</span>}</div>
                        {section9 && 
                            <div className="toggleContent">
                                At these events there is too much returned for us to sort through, so it is consolidated into as few bags as possible and left by the bins ready for collection by the relevant waste management teams.
                            </div>
                        }
                    </div>
                    <div className="toggleSection">
                        <div className="toggleTitle" onClick={() => this.hideComponent("section10")}><h3>Documentation</h3>{!section10 && <span className="toggleDown">+</span>}{section10 && <span className="toggleUp">-</span>}</div>
                        {section10 && 
                            <div className="toggleContent">
                                <ul className="docsList">
                                    <li><a href={Risk} target="_blank" rel="noopener noreferrer" className="clearLink">View our Risk Assessment</a></li>
                                    <li><a href={Letter} target="_blank" rel="noopener noreferrer" className="clearLink">Letter of Agreement 22/23</a> - this is a document we sign for BCP Council to show that we have permission to be on the beach for these events.</li>
                                    <li><a href={Letter23} target="_blank" rel="noopener noreferrer" className="clearLink">Letter of Agreement 23/24</a> - this is a document we sign for BCP Council to show that we have permission to be on the beach for these events.</li>
                                    <li><a href={Liability} target="_blank" rel="noopener noreferrer" className="clearLink">Public Liability Insurance</a> - provided by Litter Free Dorset</li>
                                </ul>
                            </div>
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default Info;

