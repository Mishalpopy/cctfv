import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const setting = {
  fade: true,
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
};

const slider_data = [

  {
    id: 1,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/sl-2.jpg",
    sub_title: "Enhanced Security Solutions",
    title: "Advanced Biometric Services",
    info: (
      <>
   Experience the future of security with our advanced biometric services. Our precision-driven solutions offer unparalleled protection, ensuring secure access and identity verification.      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Excellence</b> <br />Excellence
      </>
    ),
  },
  {
    id: 2,
    col: "col-xxl-6 col-xl-7 col-lg-8",
    cls: "tp-slider-overlay tp-slider-height",
    bg_img: "/assets/img/slider/banner.jpg",
    sub_title: "Safety, Security, and Automation",
    title: "Seamless and Smart Solutions",
    info: (
      <>
Our integrated security solutions encompass safety, security, and automation for a seamless and smart experience. We provide comprehensive services to protect, streamline, and automate your environment.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Security &</b> <br /> Automation
      </>
    ),
  },
  {
    id: 3,
    col: "col-xl-6",
    cls: "tp-slider-height tp-slider-overlay",
    bg_img: "/assets/img/slider/sl-3.jpg",
    sub_title: "Engaging Visual Solutions",
    title: "Transforming Spaces",
    info: (
      <>
Experience the power of dynamic digital signage in transforming spaces. Our engaging visual solutions make your message stand out, whether it's for advertising, wayfinding, or information display.
      </>
    ),
    slider_service_par: "100",
    slider_service_title: (
      <>
        <b>Installation</b> <br /> Free Service
      </>
    ),
  },
];

const SliderArea = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="tp-slider-area">
        <div className="slider-active  slider-arrow-style p-relative">
          <button type="button" onClick={() => sliderRef.current?.slickPrev()} className="slick-prev" >
            <i className="flaticon-left-arrow"></i>
          </button>
          <button type="button" onClick={() => sliderRef.current?.slickNext()} className="slick-next" >
            <i className="flaticon-right-arrow"></i>
          </button>

          <Slider {...setting} ref={sliderRef}>
            {slider_data.map((item, i) => (
              <div key={i}>
                <div className="tp-slider-item tp-slider-overlay tp-slider-height d-flex align-items-center" 
                  style={{ backgroundImage: `url(${item.bg_img})`}} >
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="tp-slider-content">
                          <span className="tp-slider-sub-title"> {item.sub_title} </span>
                          <h2 className="tp-slider-title"> {item.title} </h2>
                          <p> {item.info} </p>
                          <div className="tp-slide-btn-box mt-40">
                            <div className="tp-slide-service mr-30">
                              <h4>{item.slider_service_par}%</h4>
                              <span> {item.slider_service_title} </span>
                            </div>
                            <div className="slider-btn">
                              <Link href="/services-details" className="tp-btn-white" >
                                Know More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
