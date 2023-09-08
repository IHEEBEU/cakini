import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wqyk6p6',
        'template_rz1v51s',
        form.current,
        'BbgNTUyMnHtKZF8gX'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid contact position-relative px-5" style={{ marginTop: '90px' }}>
      <div className="container">
        <div className="row g-5 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary border-inner text-center text-white p-5 " style={{height:"252.69px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
</svg>

              <h3 className="display-4 text-uppercase">Places</h3>
              <span style={{
                fontSize: '21px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '3px',
                width: "-webkit-fill-available",

              }}> New York, USA</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="bg-primary border-inner text-center text-white p-5" >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>

              <h3 className="display-4 text-uppercase">Email Us</h3>
              <span style={{
                fontSize: '21px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                letterSpacing: '5px'
              }}>Cakini@gmail.com
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
          <div className="bg-primary border-inner text-center text-white p-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone-vibrate" viewBox="0 0 16 16">
          <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
          <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
        </svg>
                    <h3 className="display-4 text-uppercase">Call Us</h3>
                    <span style={{
                      fontSize: '21px',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      letterSpacing: '5px'
                    }}>07775000</span>
                              </div>
        </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="form-contact" ref={form} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Your Name"
                    style={{ "height": '55px' , "fontFamily" : "monospace" }}
                    name="user_name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Your Email"
                    style={{ height: '55px', "fontFamily" : "monospace"  }}
                    name="user_email"
                  />
                </div>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0 px-4"
                    placeholder="Subject"
                    style={{ height: '55px', "fontFamily" : "monospace"  }}
                    name="subject"
                  />
                </div>
                <div className="col-sm-12">
                  <textarea
                    className="form-control bg-light border-0 px-4 py-3"
                    rows="4"
                    placeholder="Message"
                    style={{  "fontFamily" : "monospace"  }}
                    name="message"
                  ></textarea>
                </div>
                <div className="col-sm-12">
                  <button className="custom-btn  border-inner w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;