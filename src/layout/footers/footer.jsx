import SocialLinks, { CopyRight } from '@/src/common/social-links';
import React from 'react';

const footer_content = {
   about: "About Us",
   about_des: <>A traditional CCTV system comprises: One or more cameras (analog digital), each with a lens equipped with an image sensor.</>,
   get_in_touch: "Get In Touch",
   location: <>27 Division St, New York, <br /> NY 10002, USA</>,
   office_time: <>Mon – Fri: 7.00 – 22.00 <br /> St – Sun: 9.00 – 20.00</>,
   phone: <>+1 800 123 456 789 <br /> +1 800 987 654 321</>,
   pages_title: "Main Pages",
   pages: [
      {title: "About Us", link: "/about"},
      {title: "Customer", link: "#"},
      {title: "Service", link: "/service"},
      {title: "Collections", link: "#"},
      {title: "Best Seller", link: "#"},
      {title: "Careers", link: "#"},
      {title: "Privacy", link: "#"},
      {title: "Location", link: "#"},
      {title: "Our Expert", link: "#"}, 
   ]

}
const {about, about_des, get_in_touch, location, office_time, phone, pages_title, pages}  = footer_content

const Footer = ({style_2}) => {
    return (
        <>
     <footer>
      <div className={`footer-widget-area pt-90 pb-50 ${style_2 ? "footer-area-white" : "footer-bg "}`}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-1 mb-50`}>
                     <h3 className="footer-widget-title">{about}</h3>
                     <p>{about_des}</p>
                     {style_2 && <a className="footer-link" href="#">Get Started Now <i className="far fa-long-arrow-alt-right"></i></a>}
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-2 mb-50`}>
                     <h3 className="footer-widget-title">{get_in_touch}</h3>
                     <div className="footer-contact">
                        <div className="footer-contact-item">
                           <p>{location}</p>
                        </div>
                        <div className="footer-contact-item">
                           <p>{office_time}</p>
                        </div>
                        <div className="footer-contact-item">
                           <p>{phone}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className={`footer-widget ${style_2 ? "footer-widget-2" : ""} footer-col-3 mb-50`}>
                     <h3 className="footer-widget-title">{pages_title}</h3>
                     <ul>
                        {pages.map((item , i)  => 
                          <li key={i}><a href={item.link}>{item.title}</a></li>                       
                        )} 
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6"> 
                  <div className={`footer-widget ${style_2 ? "footer-widget-2 footer-col-3" : "footer-col-4"} mb-50`}>
                     <h3 className="footer-widget-title">Get Newsletter</h3>
                     <p>Sign up today for hints, tips & the
                        latest product news</p>
                     <div className="footer-subscribe">
                        <form onSubmit={e => e.preventDefault()}>
                           <input type="email" placeholder="Email address" />
                           <button type="submit"> <i className="far fa-envelope-open"></i></button>
                        </form>
                     </div>
                     <div className="footer-social mt-20">
                        <SocialLinks /> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="copyright-area theme-bg pt-20 pb-20">
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center ">
                  <div className="copyright-text">
                     <p><CopyRight /> </p> 
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center ">
                  <div className="footer-menu">
                     <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
        </>
    );
};

export default Footer;