import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faCheckCircle, faUserCog, faComment, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const cardStyle = {
    borderRadius: '0',
    marginBottom: '0',
    border: 'none',
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

function Service() {
    return (
        <div className="container py-5">
            <div className="text-center">
                <h4 className="mb-4 service-heading">How it works?</h4>
                <p className="lead">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
  
                <div className="row row-cols-1 row-cols-md-3 g-0 mt-5">
                    <div className="col mb-0">
                        <div className="card bgColor text-dark" style={cardStyle}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faUser} className="display-4 mb-3" size="lg" />
                                <p className="card-title">Select Your Role and Sign Up</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-0">
                        <div className="card bg-white text-dark" style={cardStyle}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faClipboardList} className="display-4 mb-3" size="lg" />
                                <p className="card-title">Buyers Post Your Requirements</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-0">
                        <div className="card bgColor text-dark" style={cardStyle}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faCheckCircle} className="display-4 mb-3" size="lg" />
                                <p className="card-title">Review, Select, and Contact the Best Suppliers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-0">
                        <div className="card bg-white text-dark" style={cardStyle}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faUserCog} className="display-4 mb-3" size="lg" />
                                <p className="card-title">Suppliers Complete your profile and get notified for opportunities</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-0">
                        <div className="card bgColor text-dark" style={cardStyle}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faComment} className="display-4 mb-3" size="lg" />
                                <p className="card-title">Contact to Buyers and Share your Quote for the service</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-0">
                        <div className="card bg-white text-dark" style={cardStyle}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={faHandsHelping} className="display-4 mb-3" size="lg" />
                                <p className="card-title">Both the Parties can Connect and Make Business Leave a Feedback</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
