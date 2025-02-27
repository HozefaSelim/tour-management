import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // Corrected from slideToShow to slidesToShow
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Corrected here too
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "This travel service was a game-changer for our vacation! From
          seamless bookings to unforgettable experiences, everything was
          tailored perfectly. Highly recommended!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "A flawless experience! The team was incredibly responsive and ensured
          every detail of our trip was perfect. It made our holiday stress-free
          and full of joy."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="Lia Franklin" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "I can't thank this service enough! Every aspect of my trip was
          organized with precision and care, and it exceeded all my
          expectations. I'll definitely book again!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="John Doe" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "Absolutely wonderful service! The booking was smooth, the tours were
          well-organized, and I felt completely taken care of from start to
          finish. Can't wait for my next adventure!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="Lia Franklin" />
          <div>
            <h5 className="mb-0 mt-3">Reem ahmed</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
