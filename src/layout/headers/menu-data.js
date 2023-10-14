const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "About",
    link: "/about",
    sub_menus: [
      { link: "/about", title: "Our Story" }, 
      { link: "/about", title: "Our Core Values" },
      { link: "/about", title: "How We Work" }, 
      { link: "/about", title: "Why Choose Us" }, 

    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Service",
    link: "/service",
    sub_menus: [
      { link: "/service", title: "Service" }, 
      { link: "/service-details", title: "Service Details" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "/team",
    sub_menus: [ 
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/faq", title: "FAQ Page" },
      { link: "/shop", title: "Shop" },
      { link: "/shop-details", title: "Shop Details" },
      { link: "/cart", title: "cart" },
      { link: "/checkout", title: "Checkout" },
      { link: "/404", title: "404" },
    ],
  }, 
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  
];
export default menu_data;
