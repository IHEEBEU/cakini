import React from 'react';
import  image from "../img/team-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const MasterChefs = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: '600px' }}>
          <h2 className="text-primary font-secondary">Team Members</h2>
          <h1 className="display-4 text-uppercase">Our Master Chefs</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={image} alt="" />
                <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center justify-content-start">

 <a className="btn btn-lg custom-btn  btn-lg-square border-inner rounded-0 mx-1" href="#">
        <FontAwesomeIcon icon={faTwitter} className="fw-normal" />
      </a>                    
      <a className="btn btn-lg custom-btn  btn-lg-square border-inner rounded-0 mx-1" href="#">
      <FontAwesomeIcon icon={faFacebookF} className="fw-normal" />
    </a>
    <a className="btn btn-lg custom-btn  btn-lg-square border-inner rounded-0 mx-1" href="#">
      <FontAwesomeIcon icon={faLinkedinIn} className="fw-normal" />
    </a>

                  </div>
                </div>
              </div>
              <div className="bg-dark border-inner text-center p-4">
                <h4 className="text-uppercase text-primary">Mones</h4>
                <p className="text-white m-0">Chef-Owner</p>
              </div>
            </div>
          </div>
          {/* Repeat the same structure for other team members */}
        </div>
      </div>
    </div>
  );
};

export default MasterChefs;