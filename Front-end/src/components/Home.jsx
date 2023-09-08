import React from 'react'
import { FaHeartbeat , FaAward } from 'react-icons/fa';
import { FaStar, FaUsers, FaCheck, FaMugHot } from 'react-icons/fa';
import about from "../img/about.jpg";
import AddPost from "./AddPost.jsx"
import DisplayAbout from './DisplayAbout.jsx';

function Home({user}) {
console.log("inhome",user);
  return (
    <div>
    
    	<div class="container-fluid bg-primary py-5 mb-5 hero-header">
				<div class="container py-5">
					<div class="row justify-content-start">
						<div class="col-lg-8 text-center text-lg-start">
							<h1 class="font-secondary text-primary mb-4">Super Crispy</h1>
							<h1 class="display-1 text-white font-secondary">CakeZone</h1>
							<h1 class="text-math text-white font-secondary">The Best Cake In Tunisia</h1>
							<div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
								<a href="" class=" custom-btn  border-inner py-3 px-5 me-5">
									Read More
								</a>
								<a href="https://www.youtube.com/watch?v=nI2tfHUAN1s"><button
									type="button"
									class="btn-play"
									// data-bs-toggle="modal"
									data-src="https://www.youtube.com/watch?v=nI2tfHUAN1s"
									data-bs-target="#videoModal">
									<span></span>
								</button>
                </a>
								<h5 class="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
									Play Video
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
   <div className="container-fluid pt-5">
      <div className="container">
        <div
          className="section-title position-relative text-center mx-auto mb-5 pb-3"
          style={{ maxWidth: '600px' }}
        >
          <h2 className="text-primary font-secondary">About Us</h2>
          <h1 className="display-4 text-math">Welcome To CakeZone</h1>
        </div>
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '400px' ,  }}>
            <div className="position-relative h-100" id='about-pics'>
              <DisplayAbout about={about}/>
            </div>
          </div>
          <div className="col-lg-6 pb-5">
            <h4 className="mb-4">
            Cake Zone, born from the creative minds of Bouguerra Med Amine and Iheb Machraoui, is your ultimate destination for all things sweet and delightful </h4>
            <p className="mb-5">
            With a shared passion for the art of baking and a commitment to making celebrations even more special             we embarked on this journey to bring you a platform where you can buy and sell cakes and desserts like never before. Our mission is to satisfy your sweet cravings while connecting talented bakers with dessert enthusiasts. Welcome to Cake Zone, where every bite is a piece of happiness, and every creation tells a story. Join us in celebrating life's sweet moments!            </p>
            <div className="row g-5">
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                  style={{ width: '90px', height: '90px' , "border-radius": "25px" }}
                >
                 <FaHeartbeat className="text-white" size="2rem" />
                </div>
                <h4 className="text-uppercase">100% Healthy</h4>
                <p className="mb-0">
                a delicious and nutritious option that guarantees 100% healthiness in every bite. Packed with natural, wholesome ingredients                </p>
              </div>
              <div className="col-sm-6">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4 rounded-25"
                  style={{ width: '90px', height: '90px' , "border-radius": "25px" }}
                >
                  <FaAward className="text-white" size="2rem" />
                </div>
                <h4 className="text-uppercase">Award Winning</h4>
                <p className="mb-0">
                healthy product has received the prestigious "Health and Wellness Innovation Award.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<div className="container-fluid bg-img py-5 mb-5" style={{"margin-top":"30px"}}>
    <div className="container py-5" >
        <div className="row gx-5 gy-4" style={{ flexDirection: 'column' }}>
             <AddPost  />
        </div>
    </div>
</div>
 
    </div>

  )
}

export default Home