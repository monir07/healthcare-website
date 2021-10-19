import React from 'react';
import transport1 from './../../images/transport/transport-image.png';
const Transport = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <span className="display-3">Emergency Ambulance & Medical Transport</span>
                    <img className="img-fluid my-5" src={transport1} alt="transport"></img>
                </div>
                <div className="col-lg-12">
                    <p className="text-justify">
                        Health-Care Site is supported by Parkway Emergency. It provides both emergency and non-emergency medical transportation for air and land ambulance evacuation needs.

                        While the Singapore Civil Defence Force (995) ambulance services should be activated for medical emergencies to the nearest hospital, Parkway Emergency’s ambulance transport is available 24/7 for all patients seeking medical transportation to a hospital of choice.

                        Parkway Emergency comprises a team of experienced doctors, nurses and ambulance drivers who are willing to go the extra mile for our patients. All our specialists are trained in life-support, first-aid and AED use.

                        Be prepared for any emergency today, save our toll-free hotline 1800-PARKWAY (7275929) in your phone’s address book today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Transport;