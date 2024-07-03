import React, { useState } from 'react';
import Video from '../img/video.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCheck } from '@fortawesome/free-solid-svg-icons';
// import './Videodiv.css'; // Import the custom CSS file

function Videodiv() {
    const [activeTab, setActiveTab] = useState('buyer');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="container videobg py-5">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center position-relative mb-4 mb-md-0">
                        <div className="video-wrapper">
                            <img src={Video} alt="Video Thumbnail" className="video-div img-fluid" />
                            <div className="play-button">
                                <FontAwesomeIcon icon={faPlay} className="play-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="tabs">
                            <div
                                className={`tab ${activeTab === 'buyer' ? 'active' : ''}`}
                                onClick={() => handleTabChange('buyer')}
                            >
                                Buyer
                            </div>
                            <div
                                className={`tab ${activeTab === 'supplier' ? 'active' : ''}`}
                                onClick={() => handleTabChange('supplier')}
                            >
                                Supplier
                            </div>
                        </div>

                        <div className="tab-content mt-3">
                            {activeTab === 'buyer' && (
                                <div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Post your requirements.</span>
                                    </div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Sit back for multiple suppliers to contact you.</span>
                                    </div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Choose among the suppliers based on the ratings and reviews.</span>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'supplier' && (
                                <div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Explanation 1 for Supplier</span>
                                    </div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Explanation 2 for Supplier</span>
                                    </div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Explanation 3 for Supplier</span>
                                    </div>
                                    <div className="list-item">
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                        </div>
                                        <span>Explanation 4 for Supplier</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid simple-bg mt-5'>
                <div className="container p-3 p-md-5">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center position-relative mb-3 mb-md-0">
                            <h3 className='supplier-heading text-center text-md-left'>Let Suppliers <span className="find-you">Find You</span></h3>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center position-relative">
                            <button className='btn verify-btn'>Get Verified</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Videodiv;
