import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icon1 from '../../../../public/assets/img/future-tech.svg'
import Icon2 from '../../../../public/assets/img/future-tech2.svg'

const about_content = {
    images: [
        {id: 1, cls_1: "ab-1st-img",  cls_2: "ab-main-img", img: "/assets/img/about/about-main-2.jpg"},
        {id: 2, cls_1: "",  cls_2: "ab-sec-img", img: "/assets/img/about/about-main-img.jpg"},
        {id: 3, cls_1: "",  cls_2: "ab-third-img d-none d-md-block", img: "/assets/img/about/ab-main-small.jpg"},
    ],
    subtitle: "About Future Connect",
    title: "Your Trusted Technology Partner",
    description: <>At Future Connect, we're your technology partner for a secure and connected future. We specialize in cutting-edge solutions for security, communication, and automation, all delivered with a commitment to excellence. Trust us to drive success for your business.</>,

    title_1: "Cutting-Edge Solutions",
    title_2: "Dedicated Support",
    des_1: "Stay at the forefront of technology with our innovative security, communication, and automation solutions",
    des_2: " Our team of experts is here to support you at every step, ensuring your technology needs are met with the highest level of service.",
    avata: "/assets/img/about/ab-small3.png",
    name: "Salim Rana",
    job_title: "Head Of Idea",

}
const {images, subtitle, title, description, title_1, title_2, des_1, des_2, avata, name, job_title}  = about_content


const AboutArea = () => {
  return (
    <>
      <div className="tp-about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-about-wapper3 mb-30">
                {images.map((item, i) => 
                    <div key={i} className={item.cls_2}>
                        <img
                        className={item.cls_1}
                        src={item.img}
                        alt="theme-pure"
                        />
                    </div>                
                )} 
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30">
                <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
                  <span className="tp-section-subtitle right d-inline-block">
                    {subtitle}
                  </span>
                  <h2 className="tp-section-title mb-20">
                    {title}
                  </h2>
                  <p className="p-text">{description}</p>
                </div>
                <div className="tp-ab-fe-box mb-40">
                  <div className="about-feature-list d-flex align-items-center mb-20">
                    <div className="about-icon mr-25">
                    <Image
                    src={Icon1}
                    width={60}
                    height={60}
                     />
                    </div>
                    <div className="about-feature-text">
                      <h5 className="m-0 mb-5">{title_1}</h5>
                      <p className="m-0">{des_1}</p>
                    </div>
                  </div>
                  <div className="about-feature-list d-flex align-items-center">
                  <div className="about-icon mr-25">
                    <Image
                    src={Icon2}
                    width={60}
                    height={60}
                     />
                    </div>
                    <div className="about-feature-text">
                      <h5 className="m-0 mb-5">{title_2}</h5>
                      <p className="m-0">{des_2}</p>
                    </div>
                  </div>
                </div>
                <div className="tp-about-fea-signature d-flex align-items-center">
                  <div className="mr-30 mb-10">
                    <Link className="tp-btn-border" href="/about"> Learn More <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
