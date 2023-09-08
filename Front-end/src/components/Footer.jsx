import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-img text-secondary" style={{ marginTop: '90px' }}>
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6 mb-lg-n5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                                <a href="index.html" className="navbar-brand">
                                    <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>CakeZone</h1>
                                </a>
                                <p className="mt-3">With a shared passion for the art of baking and Our mission is to satisfy your sweet cravings while connecting talented bakers with dessert enthusiasts. Welcome to Cake Zone, where every bite is a piece of happiness. Join us in celebrating life's sweet moments!

                                .</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
    <div className="row gx-5">
        <div className="col-lg-4 col-md-12 pt-5 mb-5">
            <h4 className="text-primary text-uppercase mb-4">Get In Touch</h4>
            <div className="d-flex mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>
                <p className="mb-0">Kef , Tunisia</p>
            </div>
            <div className="d-flex mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>
                <p className="mb-0">CakeZone@gmail.com</p>
            </div>
            <div className="d-flex mb-2">
                <i className="bi bi-telephone text-primary me-2"></i>
                <p className="mb-0">07775000</p>
            </div>
            <div className="d-flex mt-4">
                        <a className="btn-lg custom-btn  btn-lg-square border-inner rounded-0 me-2" href="#">
                            <FontAwesomeIcon icon={faTwitter} className="fw-normal" />
                        </a>
                        <a className="btn-lg custom-btn  btn-lg-square border-inner rounded-0 me-2" href="#">
                            <FontAwesomeIcon icon={faFacebookF} className="fw-normal" />
                        </a>
                        <a className="btn-lg custom-btn  btn-lg-square border-inner rounded-0 me-2" href="#">
                            <FontAwesomeIcon icon={faLinkedinIn} className="fw-normal" />
                        </a>
                    </div>
        </div>
        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 className="text-primary text-uppercase mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
                <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                <a className="text-secondary" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
            </div>
        </div>
        <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 className="text-primary text-uppercase mb-4">Newsletter</h4>
            <p>Stay informed and up-to-date with our newsletter, delivering the latest news and insights directly to your inbox.
            </p>
            <form action="">
                <div className="input-group">
                    <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                    <button className="custom-btn ">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</div>

                    </div>
                </div>
            </div>
            <div className="container-fluid text-secondary py-4" style={{ background: '#111111' }}>
                <div className="container text-center">
                    <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">CakeZone</a>. All Rights Reserved.</p>
                    <p>
                        Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
