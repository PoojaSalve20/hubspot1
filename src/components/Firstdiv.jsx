import React from 'react';
  // Import the CSS file for custom styles

function Firstdiv() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="p-4">
                        <h3 className="first-heading">
                            Ready to dive into <span className="highlight">HABOT?</span>
                        </h3>
                        <p className="limited-paragraph mb-4 mt-4">
                            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
                        </p>
                        <button className="btn btn-custom mt-4">
                            Sign up Today! <i className="fas fa-long-arrow-alt-right arrow-icon"></i>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="p-4">
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="box">Abu Dhabi</div>
                            <div className="box">Dubai</div>
                            <div className="box">Sharjah & Ajman</div>
                            <div className="box">Fujairah</div>
                            <div className="box">Ras AI Khaimah</div>
                            <div className="box">Umm AI Quwain</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstdiv;
