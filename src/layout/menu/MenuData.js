const menu = [
  {
    heading: "Quick Links",
  },
  {
    icon: "account-setting",
    text: "My Account",
    link: "/clientarea",
    dashboard: true,
  },
  {
    icon: "dashboard",
    text: "My Applications",
    link: "/",
    dashboard: true,
  },
  {
    icon: "template",
    text: "Browse Marketplace",
    link: "/sales",
    dashboard: true,
  },
  {
    icon: "cc-new",
    text: "How it Works",
    link: "/invest",
    dashboard: true,
  },
  {
    heading: "Application Marketplace ",
  },
  {
    icon: "reports-alt",
    text: "Featured Applications",
    link: "/invest",
    badge: "New",
    dashboard: true,
  },
  {
    icon: "growth",
    text: "Business Websites",
    active: false,
    subMenu: [
      {
        text: "E-commerce",
        link: "/project-card",
      },
      {
        text: "Corporate Websites",
        link: "/project-list",
      },
      {
        text: "Blogs and Personal Sites",
        link: "/project-list",
      },
      {
        text: "Landing Pages",
        link: "/project-list",
      },
      {
        text: "Website Templates",
        link: "/project-list",
      },
    ],
  },
  {
    icon: "color-palette",
    text: "Design and Graphics",
    active: false,
    subMenu: [
      {
        text: "Graphic Design Tools",
        link: "/user-list-regular",
      },
      {
        text: "Photo Editing Software",
        link: "/user-list-compact",
      },
      {
        text: "Infographic Creators",
        link: "/user-details-regular/1",
      },
      {
        text: "Illustration Tools",
        link: "/user-profile-regular",
      },
      {
        text: "Graphics Templates",
        link: "/user-contact-card",
      },
    ],
  },
  {
    icon: "play-circle",
    text: "Video & Animation",
    active: false,
    subMenu: [
      {
        text: "Video Editing Software",
        link: "/kyc-list-regular",
      },
      {
        text: "Animation Software",
        link: "/kyc-list-regular",
      },
      {
        text: "Motion Graphics",
        link: "/kyc-list-regular",
      },
      {
        text: "Video Templates",
        link: "/kyc-details-regular/UD01544",
      },
    ],
  },
  {
    icon: "mic",
    text: "Music and Audio",
    active: false,
    subMenu: [
      {
        text: "Music Production Software",
        link: "/transaction-basic",
      },
      {
        text: "Audio Editing Tools",
        link: "/transaction-basic",
      },
      {
        text: "Podcast Tools",
        link: "/transaction-basic",
      },
      {
        text: "Nosubsidebar",
        link: "/Nosubsidebar",
      },

  
    ],
  },
  {
    icon: "grid-alt",
    text: "Applications",
    active: false,
    subMenu: [
      {
        text: "Account Dashboard",
        link: "/clientarea",
        icon: "user-alt",
        theme: "bg-purple-dim",
      },
      {
        text: "Manage Billing",
        link: "/app-chat",
        icon: "wallet-saving",
        theme: "bg-orange-dim",
      },
      {
        text: "Manage Orders",
        link: "/app-inbox",
        icon: "invest",
        theme: "bg-primary-dim",
      },
      {
        text: "Affiliate Partners",
        link: "/app-calender",
        icon: "briefcase",
        theme: "bg-success-dim",
      },
      {
        text: "Contacts and Users", 
        link: "/app-kanban",
        icon: "user-list-fill",
        theme: "bg-info-dim",
      },
   
    ],
  },
  {
    icon: "code",
    text: "Development and IT",
    active: false,
    subMenu: [
      {
        text: "Web Development Tools",
        link: "/product-list",
      },
      {
        text: "Database Management",
        link: "/product-card",
      },
      {
        text: "DevOps Tools",
        link: "/product-details/0",
      },
      {
        text: "Mobile App Development",
        link: "/product-details/0",
      },
      {
        text: "Cybersecurity Tools",
        link: "/product-details/0",
      },
    ],
  },
  {
    icon: "clock",
    text: "Business Productivity",
    active: false,
    subMenu: [
      {
        text: "Project Management",
        link: "/invoice-list",
      },
      {
        text: "Collaboration Tools",
        link: "/invoice-list",
      },
      {
        text: "Time Tracking Software",
        link: "/invoice-list",
      },
      {
        text: "CRM Software",
        link: "/invoice-list",
      },
      {
        text: "Accounting and Finance",
        link: "/invoice-details/1",
      },
    ],
  },
  {
    icon: "link-group",
    text: "Digital Marketing",
    link: "/pricing-table",
  },
  {
    icon: "cpu",
    text: "AI and Automation",
    link: "/image-gallery",
    badge: "Trending",
  },
  {
    heading: "Manage Account",
  },
  {
    icon: "user-alt",
    text: "Account Dashboard",
    link: "/email-template",
    active: false,
    
  },
  {
    icon: "wallet-saving",
    text: "Manage Billing",
    active: false,
    subMenu: [
      {
        text: "My Invoices",
        link: "/auth-login",
        
      },
      {
        text: "My Orders",
        link: "/auth-register",
        
      },
      {
        text: "My Quotes",
        link: "/auth-reset",
        
      },
      {
        text: "Mass Payment",
        link: "/auth-success",
        
      },
      {
        text: "Add Funds",
        link: "/auth-success",
        
      },
    ],
  },
  {
    icon: "invest",
    text: "Manage Orders",
    active: false,
    
  },
  {
    icon: "briefcase",
    text: "Affiliate Partners",
    active: false,
    subMenu: [
      {
        text: "Partner Dashboard",
        link: "/_blank",
      },
      {
        text: "My Commissions",
        link: "/pages/faq",
      },
      {
        text: "My Payouts",
        link: "/pages/terms-policy",
      },
      {
        text: "Link Generator",
        link: "/pages/regular-v1",
      },
      {
        text: "How it Works",
        link: "/pages/regular-v2?pagelink=appstore/product/borderlands-3/",
      },
      {
        text: "Client Area",
        link: "/clientarea?pagelink=appstore/product/everdream-valley/",
      },

    ],
  },
  {
    icon: "user-list-fill",
    text: "Contacts and Users",
    active: false,
    subMenu: [
      {
        text: "Manage Users",
        link: "/svg-icons",
      },
      {
        text: "Manage Contacts",
        link: "/nioicon",
      },
      
    ],
  },
  {
    heading: "Help & Information",
  },
  {
    icon: "question",
    text: "Open Support Ticket",
    active: false,
    
  },
  {
    icon: "inbox-in",
    text: "My Support Tickets",
    link: "/email-template",
    active: false,
    
  },
  
  {
    icon: "play-circle",
    text: "Video Tutorials",
    link: "/email-template",
    active: false,
    
  },
  {
    icon: "info",
    text: "Knowledgebase",
    link: "/email-template",
    active: false,
    
  },
  {
    icon: "calendar-alt",
    text: "Announcements",
    link: "/email-template",
    active: false,
    
  },
  {
    icon: "live",
    text: "Network Status",
    link: "/email-template",
    active: false,
    
  },
  {
    icon: "file-docs",
    text: "Terms of Service",
    link: "/email-template",
    
  },
  {
    icon: "eye",
    text: "Privacy Policy",
    link: "/email-template",
    
  },
  {
    icon: "focus",
    text: "Cookie Policy",
    link: "/email-template",
    active: "false",
  },
  
];
export default menu;
