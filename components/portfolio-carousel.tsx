'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

const LANDING_CATEGORIES: { id: string; title: string; subtitle: string; titles: string[] }[] = [
  {
    id: 'restaurants',
    title: 'Restaurants',
    subtitle: 'Food brands, menus & dining experiences',
    titles: [
      'Aurelia Restaurant',
      'Humble Rose',
      'Drip & Garlic',
      'Sushiman',
      'Fast Food Restaurant',
      'Burger House',
      'Royal Burger',
      'Seafood',
      'Juicy',
      'Slice Town',
    ],
  },
  {
    id: 'cafes-desserts',
    title: 'Cafes & Desserts',
    subtitle: 'Coffee shops, bakeries & sweet brands',
    titles: [
      'Mercelys Ice Cream',
      'Grandma\'s Bakery',
      'Noir Cafe',
      'Amber Coffee',
      'Cinematic Cafe',
      'Cake Shop',
      'Daily Drip Cafe',
      'Cocktail',
      'Volt Energy Drink',
    ],
  },
  {
    id: 'fashion-apparel',
    title: 'Fashion & Apparel',
    subtitle: 'Clothing brands, stores & tailoring',
    titles: [
      'FERROVA',
      'Nike',
      'Sneakers Store',
      'Clothes Shop',
      'Tailoring Studio',
      'Savant EyeWear',
    ],
  },
  {
    id: 'retail-lifestyle',
    title: 'Retail & Lifestyle',
    subtitle: 'Shopping, home goods & personal brands',
    titles: [
      'Perfume',
      'Furniture Store',
      'Barber Shop',
      'Super Market',
    ],
  },
  {
    id: 'gyms-fitness',
    title: 'Gyms & Fitness',
    subtitle: 'Training centers & fitness brands',
    titles: [
      'Coach Gym',
      'Dawid Gym',
      '3D Gym',
    ],
  },
  {
    id: 'health-medical',
    title: 'Health & Medical',
    subtitle: 'Wellness, nutrition & lab services',
    titles: [
      'MediCare Pro',
      'DietBowl',
      'Medical Lab',
      'Spa',
    ],
  },
  {
    id: 'travel-hospitality',
    title: 'Travel & Hospitality',
    subtitle: 'Hotels, destinations & travel services',
    titles: [
      'HIBIS Hotels & Resorts',
      'Visit Norway',
      'Flight Company',
      'Safari',
    ],
  },
  {
    id: 'events-celebrations',
    title: 'Events & Celebrations',
    subtitle: 'Weddings, photography & gifting',
    titles: [
      'Wedding Agency',
      'Photography Studio',
      'Flower Boutique',
    ],
  },
  {
    id: 'automotive',
    title: 'Automotive',
    subtitle: 'Vehicles, rentals & car services',
    titles: [
      'Car Hub',
      'Car Dealership',
      'Car Wash',
    ],
  },
  {
    id: 'home-improvement',
    title: 'Home Improvement',
    subtitle: 'Construction, renovation & home design',
    titles: [
      'Pool',
      'Construction',
      'Aluminum & Glass',
      'Kitchen Studio',
      'Water Purification',
    ],
  },
  {
    id: 'cleaning-repairs',
    title: 'Cleaning & Repairs',
    subtitle: 'Maintenance, pest control & appliance care',
    titles: [
      'Pro Cleaning',
      'Pest Control',
      'Dry Clean',
      'Appliance Repair',
      'Cleaning',
      'Plumbing',
    ],
  },
  {
    id: 'tech-digital',
    title: 'Tech & Digital',
    subtitle: 'Products, platforms & digital companies',
    titles: [
      'CHUWI',
      'MacBook',
      'Brainwave',
      'Affinity Labs',
    ],
  },
  {
    id: 'business-professional',
    title: 'Business & Professional',
    subtitle: 'Consulting, logistics & corporate services',
    titles: [
      'Logistics',
      'Engineering',
      'Accounting AccuLedger',
      'Insurance',
      'Solar Energy',
      'Printing House',
      'Printing Shop',
    ],
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'Schools, courses & language learning',
    titles: [
      'Language School',
      'School',
      'Fluency Sprint',
    ],
  },
  {
    id: 'creative-business',
    title: 'Creative & Business',
    subtitle: 'Agencies, studios & creative platforms',
    titles: [
      'Palestinian Stories',
      'Word of mouth',
      'SAS Solutions',
      'DesignCafe',
      'Interior Studio',
      'Buzz World',
      'Digital Studio',
    ],
  },
]

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<{ image: string; title: string } | null>(null)
  const [activeCategory, setActiveCategory] = useState<'systems' | 'landingPages' | null>(null)
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null)
  const [isPreparingMedia, setIsPreparingMedia] = useState(false)
  const [preparedMediaCount, setPreparedMediaCount] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = useMemo(() => [
    // =========================================================
    // Systems
    // =========================================================

      {
      title: "Clinic Management",
      image: "/Projects/systems/clinic.jpg",
      technologies: ["Flutter"],
      CaseStudy: "https://case-study-chi-tan.vercel.app/",
      description:
        "A mobile clinic management solution designed to simplify healthcare operations, patient management, and everyday clinic workflows.",
    },
    {
      title: "School Management System",
      image: "/Projects/systems/school.jpg",
      CaseStudy: "https://schoolcasestudy.vercel.app/",
      technologies: [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "Kubernetes",
      ],
      description:
        "A comprehensive school management platform designed to organize academic operations, users, administration, and educational workflows.",
    },
     {
      title: "Ones ERP",
      image: "/Projects/systems/erp.jpg",
      CaseStudy: "https://erpcasestudy.vercel.app/",
      technologies: [
        "Django 6 ",
        "React 19",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      description:
        "Ones ERP: a full-stack internal ERP that replaces paper ledgers with one system for customers, orders, inventory and expenses. Dispatching an order automatically updates stock through a movement ledger, and a live dashboard shows pending orders, sales and stock by variant.",
    },
    {
      title: "Patient Management",
      image: "/Projects/systems/patient.jpg",
      CaseStudy: "https://cliniccasestudy.vercel.app/",
      technologies: [
        "Django 5.2 ",
        "Gunicorn",
        "SQLite",
        "Python",
      ],
      description:
        "A full-featured, customizable patient management system for small and medium clinics. It covers reception, appointments, triage, consultations, prescriptions, laboratory, radiology services and billing, with 8 role-based staff accounts. Runs on the clinic's own network, so it keeps working during internet outages.",
    },
     {
      title: "Case Box",
      image: "/Projects/systems/lawyer.jpg",
      CaseStudy: "https://lawyercasestudy.vercel.app/",
      technologies: [
        "Django 5.2 ",
        "PostgreSQL",
        "React",
        "Python",
      ],
      description:
        "An integrated cloud-based web platform for managing law firms and legal cases, designed for independent lawyers and legal practices to organize court hearings, record real-time court proceedings, and manage documents—all while enforcing strict access controls at the database query level (ORM-level Query Scoping.",
    },
      {
      title: "CRM",
      image: "/Projects/systems/crm.jpg",
      CaseStudy: "https://crmcasestudy.vercel.app/",
      technologies: [
        "Uvicorn",
        "PostgreSQL",
        "React",
        "Python",
      ],
      description:
        "A full-featured customer relationship management (CRM) platform designed to help businesses manage customer interactions, track leads, and streamline sales processes.",
    },
     {
      title: "Gym Management System",
      image: "/Projects/systems/en-gym.jpg",
      CaseStudy: "https://gymcasestudy1.vercel.app/",
      technologies: [
        "java",
        "MySQL",
        "React",
        "spring boot",
      ],
      description:
        "An integrated platform for managing gyms and fitness centers, built using a technology stack comprising Spring Boot 3.5 and React 18. The system encompasses member subscription management, trainer assignment and specialization, real-time daily floor attendance tracking, and financial collection and payment monitoring.",
    },
      {
      title: "Drive X Car Rental",
      image: "/Projects/systems/drive-x.jpg",
      CaseStudy: "https://carrentalcasestudy.vercel.app/",
      technologies: [
        "Node",
        "MongoDB",
        "React",
        "Express",
      ],
      description:
        "DriveX delivers an enterprise-grade car rental and fleet management ecosystem built on modern JavaScript foundations. With its robust conflict-free reservation engine, multi-branch showroom logistics, comprehensive driver verification, and dual-theme presentation, DriveX sets a benchmark for modern automotive digital platforms.",
    },
    {
      title: "Inventory Pro",
      image: "/Projects/systems/inventory.jpg",
      CaseStudy: "https://inventorycasestudy.vercel.app/",
      technologies: [
        "Node.js",
        "React 19",
        "MySQL",
        "Express",
      ],
      description:
        "InventoryPro: a full-stack inventory and sales management system. Sales invoices automatically decrease stock and purchases increase it, using MySQL transactions. Includes a printable invoice, low-stock alerts, revenue and top-customer reports, an inventory audit log and role-based access for Admin, Inventory Manager and Cashier.",
    },
      {
      title: " SalonFlow",
      image: "/Projects/systems/salonflow.jpg",
      CaseStudy: "https://salonflowcasestudy.vercel.app/",
      technologies: [
        "MERN Stack",
        "React 19",
        "MongoDB",
        "Tailwind CSS",
      ],
      description:
        "SalonFlow: a full-stack salon management platform with a 5-step online booking wizard, Razorpay payments, real-time notifications, an AI assistant and role-based dashboards for customers, staff and owners. Features inventory with low-stock alerts, analytics, an installable PWA and more.",
    },
    
     {
      title: "Pharmacy Management",
      image: "/Projects/systems/pharmacy.jpg",
      CaseStudy: "https://pharmacymanagmentcasestudy.vercel.app/",
      technologies: [
        "React",
        "FastAPI (Python)",
        "SQLAlchemy",
        "Docker",
        "JWT",
      ],
      description:
        "A complete pharmacy platform covering prescriptions, medication inventory, employee accounts, audit logs and a point-of-sale. Four role-based dashboards (Manager, Pharmacist, Technician, Cashier), expiry and low-stock alerts, JWT security with account lockout, and cash or card checkout.",
    },

    {
      title: "Analytics Dashboard",
      image: "/Projects/systems/analytics.jpg",
      CaseStudy: "https://analyticsdashboardcasestudy.vercel.app/",
      technologies: [
        "React",
        "Flask",
        "PostgreSQL",
        "Machine Learning",
      ],
      description:
        "An interactive analytics dashboard for transforming business data into meaningful insights through visual reports and intelligent analysis.",
    },

    {
      title: "Logistics System",
      image: "/Projects/systems/logistics.jpg",
      CaseStudy: "https://logisticscasestudy.vercel.app/",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
      ],
      description:
        "A logistics management platform designed to organize operations, transportation workflows, deliveries, and business data.",
    },

    {
      title: "Arabic Gym System",
      image: "/Projects/systems/gym.jpg",
      CaseStudy: "https://arabicgymcasestudy.vercel.app/",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "WhatsApp API",
      ],
      description:
        "An Arabic-first gym management system designed to manage memberships, customers, subscriptions, and daily fitness operations.",
    },

    {
      title: "POSR Restaurant",
      image: "/Projects/systems/posr.jpg",
      CaseStudy: "https://restaurantposcasestudy.vercel.app/",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Bun",
        "SurrealDB",
      ],
      description:
        "A restaurant point-of-sale platform designed to simplify ordering, restaurant operations, products, and transaction management.",
    },

  

    {
      title: "Arabic Accounting System",
      image: "/Projects/systems/accounting.jpg",
      CaseStudy: "https://arabicaccountingcasestudy.vercel.app/",
      technologies: ["Python", "Flask", "SQLite"],
      description:
        "An Arabic accounting management system designed to organize financial records, transactions, and essential business accounting workflows.",
    },
    
        {
      title: "HRMS System",
      image: "/Projects/systems/hr.jpg",
      CaseStudy: "https://hrms-case-study.vercel.app/            ",
      technologies: ["React", "MongoDB", "Express ", "Tailwind, Zod"],
      description:
        "HRMS: a full-stack Human Resource Management System that manages employees, attendance, leave and payroll. Role-based access (Admin, HR, Employee) with JWT authentication, automatic leave balances, attendance-based salary calculation and downloadable PDF payslips. Built with React, TypeScript, Node.js, Express and MongoDB.",
    },
    
     {
      title: "Digital Menu",
      image: "/Projects/systems/menu.png",
      CaseStudy: "https://digital-eight-iota.vercel.app/",
      technologies: ["HTML", "CSS", "JS ", "Supabase, PostgreSQL, Android (payment notification integration)"],
      description:
        "A modern digital restaurant menu and management system that allows customers to browse products, place orders, and make payments online. It features a powerful admin dashboard for managing products, categories, orders, and promotions, with multi-language support, QR code integration, and automated payment verification.",
    },

    {
      title: "Super Market",
      image: "/Projects/systems/market.jpg",
      CaseStudy: "https://supermarketcasestudy.vercel.app/",
      technologies: ["python", "Django", "PostgreSQL", "Bootstrap"],
      description:
        "A supermarket e-commerce experience for browsing products and managing everyday shopping.",
    },
    
    {
      title: "Hospital Managment",
      image: "/Projects/systems/hospital.jpg",
      CaseStudy: "https://hospitalcasestudy.vercel.app/",
      technologies: ["PHP", "Laravel", "MySQL", "Native FrontEnd"],
      description:
        "A digital healthcare platform for booking appointments, managing medical services, and streamlining patient care.",
    },
    
        {
      title: "SPA Booking System",
      image: "/Projects/systems/spa.jpg",
      CaseStudy: "https://spacasestudy.vercel.app/",
      technologies: ["Angular", "Spring Boot", "PostgreSQL ", "AWS"],
      description:
        "A complete appointment-booking system for Lena Beauty Spa. Customers register, verify their email, choose a service and pick a free time slot, then receive an automated confirmation and reminders. They can update, reschedule or cancel from their account. An admin dashboard covers bookings, customers, services, time slots and business analytics. The platform supports English and Vietnamese, is fully responsive, and runs on AWS with auto-scaling servers, a Multi-AZ database, a CDN and CloudWatch monitoring.",
    },
    
      {
      title: "Recruitment Agency System",
      image: "/Projects/systems/catch.png",
      CaseStudy: "https://recruitmentcasestudy.vercel.app/",
      technologies: [
        "React",
        "Next.js",
        "Docker",
        "Spring Boot",
      ],
      description:
        "A recruitment platform focused on connecting talent and opportunities through a modern, responsive digital experience.",
    },
    
    //-----------------------------------
    // LANDING PAGES
    //---------------------------------------

    {
      title: "FERROVA",
      image: "/Projects/landingPages/ferrova.png",
      liveDemo: "https://ferrova.vercel.app//",
      technologies: ["React", "GSAP, Three.js"],
      description:
        "A modern fashion and apparel brand featuring a sleek e-commerce storefront, minimalist aesthetic, and seamless online shopping experience.",
    },
    
      {
      title: "Coach Gym",
      image: "/Projects/landingPages/coach-gym.jpg",
      liveDemo: "https://gym-theta-green.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A personal fitness coaching landing page featuring training programs, fitness goals, pricing, gallery, blog content, and contact information.",
    },

      {
      title: "Savant EyeWear",
      image: "/Projects/landingPages/savant.png",
      liveDemo: "https://eyewearstore-alpha.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern eyewear brand landing page designed to showcase products, collections, and brand identity through a visually engaging digital experience.",
    },
    
       {
      title: "CHUWI",
      image: "/Projects/landingPages/chuwi.png",
      liveDemo: "https://www.chuwi.com/",
      technologies: ["Angular", "AWS", "Node.js", "Express.js"],
      description:
        "A modern technology-focused platform designed to present products, information, and digital experiences through a responsive web interface.",
    },
    
    {
      title: "Palestinian Stories",
      image: "/Projects/landingPages/palestine.png",
      liveDemo: "https://palestinianstories.com/",
      technologies: [
        "Angular",
        "Python",
        "Django",
        "AWS",
      ],
      description:
        "A digital storytelling platform built to present Palestinian stories and cultural content through an immersive web experience.",
    },
    
     {
      title: "Affinity Labs",
      image: "/Projects/landingPages/labs.png",
      liveDemo: "https://affinitylabs.ai/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "Affinity Labs empowers category-defining creators to build and scale software-led companies. Instead of traditional brand deals, we partner with creators to own equity in tech products tailored to their communities. From concept to launch, we handle the engine so creators can build with their audience.",
    },
    
     {
      title: "Word of mouth",
      image: "/Projects/landingPages/w.w.png",
      liveDemo: "https://wordofmoutheg.com/",
      technologies: ["Angular"],
      description:
        "A modern digital platform designed to present services and content through a clean, responsive user experience.",
    },
    
       {
      title: "Fluency Sprint",
      image: "/Projects/landingPages/f.s.png",
      liveDemo: "https://www.fluencysprint.online/",
      technologies: ["React", "Responsive Design",  "Tailwind"],
      description:
        "A modern, technology-driven platform designed to present interactive English language courses, learning resources, and immersive digital experiences through a responsive web interface.",
    },

    {
      title: "Mercelys Ice Cream",
      image: "/Projects/landingPages/mercelys-ice-cream.jpg",
      liveDemo: "https://mercelys-ice-cream.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A premium ice cream brand experience presenting the brand story, products, qualities, community, media, and distributor opportunities.",
    },

    {
      title: "HIBIS Hotels & Resorts",
      image: "/Projects/landingPages/hibis-hotel.jpg",
      liveDemo: "https://landing-pages-rwsb.vercel.app/",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A luxury hotel landing experience featuring destination information, room categories, amenities, availability, rates, and booking-focused interactions.",
    },

    {
      title: "Aurelia Restaurant",
      image: "/Projects/landingPages/aurelia-restaurant.jpg",
      liveDemo: "https://landing-pages-aezo.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A premium restaurant experience built around storytelling, signature dishes, curated dining experiences, gallery content, and reservations.",
    },

    {
      title: "SAS Solutions",
      image: "/Projects/landingPages/sas-solutions.jpg",
      liveDemo: "https://landing-pages-s76p.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A professional digital solutions website presenting services across digital presence, product experience, commerce, custom development, and integrations.",
    },

    {
      title: "DesignCafe",
      image: "/Projects/landingPages/designcafe-interior.jpg",
      liveDemo: "https://landing-pages-ptqd.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An interior design platform presenting design projects, services, consultations, cost information, reviews, guides, and home design solutions.",
    },

    {
      title: "Humble Rose",
      image: "/Projects/landingPages/humble-rose.jpg",
      liveDemo: "https://landing-pages-1avj.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An elegant Mediterranean dining experience centered around botanical cuisine, seasonal ingredients, curated menus, and reservations.",
    },

    {
      title: "Drip & Garlic",
      image: "/Projects/landingPages/drip-garlic.jpg",
      liveDemo: "https://res-landing-rust.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern food landing page presenting wraps, loaded platters, sides, sauces, best sellers, and a late-night restaurant experience.",
    },

    {
      title: "Dawid Gym",
      image: "/Projects/landingPages/dawid-gym.jpg",
      liveDemo: "https://landing-ii.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A fitness center landing page featuring gym services, classes, membership calls to action, location information, and an introduction to the brand.",
    },

    {
      title: "Visit Norway",
      image: "/Projects/landingPages/visit-norway.jpg",
      liveDemo: "https://landing-kmkp.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A travel agency experience presenting tours, special offers, destinations, travel articles, and curated travel content.",
    },

    {
      title: "DietBowl",
      image: "/Projects/landingPages/dietbowl.jpg",
      liveDemo: "https://landing-bi6v.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A healthy food platform focused on nutrition-based meal choices, recommendations, nutrition tracking, and personalized food experiences.",
    },

    {
      title: "Interior Studio",
      image: "/Projects/landingPages/interior-studio.jpg",
      liveDemo: "https://interior-beige-omega.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A refined interior design website showcasing creative spaces, company services, projects, news, and contact information.",
    },

    {
      title: "Car Hub",
      image: "/Projects/landingPages/car-hub.jpg",
      liveDemo: "https://car-show-case-one.vercel.app/",
      technologies: ["Nextjs", "Responsive Web Design"],
      description:
        "A modern automotive platform presenting vehicle discovery, car categories, filtering options, rental-focused calls to action, and vehicle information.",
    },

    {
      title: "Car Dealership",
      image: "/Projects/landingPages/car-dealership.jpg",
      liveDemo: "https://cardealership-sigma.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A car dealership experience featuring vehicle inventory, filtering, specifications, pricing, and detailed automotive presentation.",
    },

    {
      title: "Furniture Store",
      image: "/Projects/landingPages/furniture-store.jpg",
      liveDemo: "https://furniture-rust-eight.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern furniture e-commerce experience featuring product categories, featured collections, product cards, pricing, and shopping interactions.",
    },

    {
      title: "Buzz World",
      image: "/Projects/landingPages/buzz-world.jpg",
      liveDemo: "https://landing-pages-vs2g.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A visually focused brand landing experience designed around strong presentation, engaging visual content, and responsive interactions.",
    },

    {
      title: "Wedding Agency",
      image: "/Projects/landingPages/wedding-agency.jpg",
      liveDemo: "https://landing-ovtg.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A wedding agency website presenting creative services, event experiences, gallery content, testimonials, and discovery-call conversion.",
    },

    {
      title: "Grandma's Bakery",
      image: "/Projects/landingPages/grandmas-bakery.jpg",
      liveDemo: "https://grand-phi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A bakery shopping experience featuring cakes, cupcakes, sweets, doughnuts, product browsing, search, cart, and checkout interactions.",
    },

    {
      title: "Noir Cafe",
      image: "/Projects/landingPages/noir-cafe.jpg",
      liveDemo: "https://lan-sigma-three.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A specialty coffee landing page built around premium coffee presentation, origin storytelling, product information, and ordering.",
    },

    {
      title: "Amber Coffee",
      image: "/Projects/landingPages/amber-coffee.jpg",
      liveDemo: "https://landing-pages-ayul.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A specialty coffee brand landing experience designed to showcase the cafe identity, products, atmosphere, and customer experience.",
    },

    {
      title: "Sushiman",
      image: "/Projects/landingPages/sushiman.jpg",
      liveDemo: "https://landing-indol-two-20.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A Japanese food experience presenting menu items, popular dishes, services, ordering actions, customer testimonials, and brand story.",
    },

    {
      title: "Fast Food Restaurant",
      image: "/Projects/landingPages/fast-food-restaurant.jpg",
      liveDemo: "https://landing-pages-2fxu.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A modern fast-food landing page designed to showcase the restaurant brand, food offerings, and conversion-focused customer experience.",
    },

    {
      title: "Barber Shop",
      image: "/Projects/landingPages/barber-shop.jpg",
      liveDemo: "https://landing-pages-8m5w.vercel.app/",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A modern barber shop landing page designed to present the brand, services, visual identity, and customer booking experience.",
    },

    {
      title: "Brainwave",
      image: "/Projects/landingPages/brainwave.jpg",
      liveDemo: "https://landing-pages-99oy.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A modern technology-focused landing page built around a bold visual identity and responsive digital presentation.",
    },

    {
      title: "Burger House",
      image: "/Projects/landingPages/burger-house.jpg",
      liveDemo: "https://landing-pages-dczm.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A bold restaurant landing experience focused on burger presentation, food discovery, brand identity, and customer conversion.",
    },

    {
      title: "Cinematic Cafe",
      image: "/Projects/landingPages/cinematic-cafe.jpg",
      liveDemo: "https://landing-pages-3al9.vercel.app/#",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A cinematic cafe landing experience combining strong visual presentation with a premium hospitality-focused digital identity.",
    },

    {
      title: "Cocktail",
      image: "/Projects/landingPages/cocktail.jpg",
      liveDemo: "https://landing-pages-skfp.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A visually driven beverage landing page designed around product presentation, atmosphere, and a modern responsive experience.",
    },

    {
      title: "Digital Studio",
      image: "/Projects/landingPages/digital-studio.jpg",
      liveDemo: "https://landing-pages-gh8o.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A creative digital studio landing page designed to present a modern visual identity and digital-focused services.",
    },

    {
      title: "MediCare Pro",
      image: "/Projects/landingPages/medicare-pro.jpg",
      liveDemo: "https://landing-pages-vcky.vercel.app/",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A professional healthcare landing page designed to present medical services and create a clear patient-focused digital experience.",
    },

    {
      title: "Juicy",
      image: "/Projects/landingPages/juicy.jpg",
      liveDemo: "https://landing-pages-vtj1.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A vibrant product-focused landing experience designed around strong visual presentation and modern responsive interactions.",
    },

    {
      title: "MacBook",
      image: "/Projects/landingPages/macbook.jpg",
      liveDemo: "https://landing-pages-1wex.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A premium technology product landing page focused on visual product presentation, modern layout, and responsive interaction.",
    },

    {
      title: "Nike",
      image: "/Projects/landingPages/nike.jpg",
      liveDemo: "https://landing-pages-5e4d.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A bold sportswear landing experience focused on product presentation, visual storytelling, and modern responsive design.",
    },

    {
      title: "Royal Burger",
      image: "/Projects/landingPages/royal-burger.jpg",
      liveDemo: "https://royal-biryani-psi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A restaurant landing experience built around food presentation, brand identity, and a visually engaging customer journey.",
    },

    {
      title: "Seafood",
      image: "/Projects/landingPages/seafood.jpg",
      liveDemo: "https://seafood-zeta.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A seafood restaurant landing page designed to showcase food offerings through a visually rich and responsive experience.",
    },

    {
      title: "Volt Energy Drink",
      image: "/Projects/landingPages/volt-energy-drink.jpg",
      liveDemo: "https://volt-drink-olive.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A high-energy beverage landing page focused on strong product visuals, branding, and an engaging modern presentation.",
    },

    {
      title: "Perfume",
      image: "/Projects/landingPages/perfume.jpg",
      liveDemo: "https://seafood-landing-page.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A premium product landing experience designed around luxury visual presentation, product identity, and responsive storytelling.",
    },

    {
      title: "Pool",
      image: "/Projects/landingPages/swimming-pool.png",
      liveDemo: "https://swimmingpools-pi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A swimming pool company landing page showcasing pool designs, installation services, gallery projects, and inquiry-focused calls to action.",
    },

    {
      title: "Super Market",
      image: "/Projects/landingPages/super-market.png",
      liveDemo: "https://supermarket-sepia-theta.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern supermarket landing experience presenting fresh products, weekly offers, store information, and online shopping calls to action.",
    },

    {
      title: "Solar Energy",
      image: "/Projects/landingPages/solar-energy.png",
      liveDemo: "https://solarenergy-ashy.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A renewable energy landing page highlighting solar solutions, system benefits, installation process, and consultation requests.",
    },

    {
      title: "Sneakers Store",
      image: "/Projects/landingPages/sneakers-store.png",
      liveDemo: "https://sneakerstore-jet.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A sneaker store landing page built around product drops, featured collections, sizing information, and purchase calls to action.",
    },

    {
      title: "Pro Cleaning",
      image: "/Projects/landingPages/pro-cleaning.png",
      liveDemo: "https://procleaning-ten.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A professional cleaning service landing page presenting service packages, before-and-after results, pricing, and instant booking.",
    },

    {
      title: "Pest Control",
      image: "/Projects/landingPages/pest-control.png",
      liveDemo: "https://pestcontrol-chi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A pest control landing page focused on treatment services, safety information, service areas, and emergency contact calls to action.",
    },

    {
      title: "Logistics",
      image: "/Projects/landingPages/logistics-lp.png",
      liveDemo: "https://logistics-rouge-six.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A logistics and shipping landing page showcasing freight services, tracking capabilities, coverage areas, and quote requests.",
    },

    {
      title: "Engineering",
      image: "/Projects/landingPages/engineering.png",
      liveDemo: "https://engineering-orpin.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An engineering firm landing page presenting disciplines, completed projects, certifications, and consultation inquiries.",
    },

    {
      title: "Tailoring Studio",
      image: "/Projects/landingPages/tailoring-studio.png",
      liveDemo: "https://tailoringstudio.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A bespoke tailoring studio landing page featuring custom garment services, fabric collections, craftsmanship, and appointment booking.",
    },

    {
      title: "Printing House",
      image: "/Projects/landingPages/printing-house.png",
      liveDemo: "https://printinghouse-brown.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A commercial printing landing page showcasing print products, paper stocks, finishing options, instant quotes, and bulk ordering.",
    },

    {
      title: "Photography Studio",
      image: "/Projects/landingPages/photography-studio.png",
      liveDemo: "https://landing2-orpin-three.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A photography studio landing page presenting portfolios, packages, event coverage, and session booking calls to action.",
    },

    {
      title: "Medical Lab",
      image: "/Projects/landingPages/medical-lab.png",
      liveDemo: "https://landin3-gold.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A medical laboratory landing page highlighting tests, fast results, home collection services, and online appointment scheduling.",
    },

    {
      title: "Flower Boutique",
      image: "/Projects/landingPages/flower-boutique.png",
      liveDemo: "https://flowerboutique-black.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A flower boutique landing page showcasing arrangements, seasonal collections, same-day delivery, and occasion-based gifting.",
    },

    {
      title: "Dry Clean",
      image: "/Projects/landingPages/dry-clean.jpg",
      liveDemo: "https://dryclean-tau.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A dry cleaning service landing page presenting garment care services, turnaround times, pricing, and pickup scheduling.",
    },

    {
      title: "Construction",
      image: "/Projects/landingPages/construction.png",
      liveDemo: "https://landing2-47iv.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A construction company landing page showcasing building services, completed projects, materials expertise, and quote requests.",
    },

    {
      title: "Car Wash",
      image: "/Projects/landingPages/car-wash.png",
      liveDemo: "https://carwash-virid-sigma.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A car wash landing page presenting wash packages, detailing services, membership plans, and location information.",
    },

    {
      title: "3D Gym",
      image: "/Projects/landingPages/3d-gym.png",
      liveDemo: "https://gym3-rose.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern gym landing page featuring immersive visuals, training programs, class schedules, trainer profiles, and membership sign-up.",
    },

    {
      title: "Accounting AccuLedger",
      image: "/Projects/landingPages/acculedger.png",
      liveDemo: "https://landing1-virid.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An accounting services landing page presenting bookkeeping, tax preparation, financial consulting, and client onboarding.",
    },

    {
      title: "Aluminum & Glass",
      image: "/Projects/landingPages/aluminum-glass.png",
      liveDemo: "https://aluminumglass.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An aluminum and glass solutions landing page showcasing facades, windows, shop fronts, projects, and measurement requests.",
    },

    {
      title: "Appliance Repair",
      image: "/Projects/landingPages/appliance-repair.png",
      liveDemo: "https://appliancerepair-xi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An appliance repair landing page covering supported devices, same-day service, certified technicians, and repair booking.",
    },

    {
      title: "Cake Shop",
      image: "/Projects/landingPages/cake-shop.png",
      liveDemo: "https://cakeshop-gamma-roan.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A bakery landing page showcasing custom cakes, dessert menus, celebration packages, and online ordering.",
    },

    {
      title: "Insurance",
      image: "/Projects/landingPages/insurance.png",
      liveDemo: "https://landing1-insurance.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An insurance landing page presenting coverage plans, claims support, policy comparison, and instant quote requests.",
    },

    {
      title: "Kitchen Studio",
      image: "/Projects/landingPages/kitchen-studio.png",
      liveDemo: "https://kitchenstudio-beta.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A kitchen design studio landing page featuring design packages, 3D visualizations, material selections, and consultation booking.",
    },

    {
      title: "Language School",
      image: "/Projects/landingPages/language-school.png",
      liveDemo: "https://languageschool-red.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A language school landing page showcasing courses, certified instructors, learning levels, free trial classes, and enrollment.",
    },

    {
      title: "Printing Shop",
      image: "/Projects/landingPages/printing-shop.png",
      liveDemo: "https://printingshop.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A printing shop landing page presenting quick-print products, design templates, pricing calculator, and same-day pickup.",
    },

    {
      title: "School",
      image: "/Projects/landingPages/school.png",
      liveDemo: "https://landing1-school.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A school landing page highlighting academic programs, facilities, admissions process, tuition information, and enrollment calls to action.",
    },

    {
      title: "Clothes Shop",
      image: "/Projects/landingPages/clothes-shop.png",
      liveDemo: "https://clothes-shop-flax.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A clothing store landing page showcasing collections, size guides, lookbooks, and seasonal shopping experiences.",
    },

    {
      title: "Daily Drip Cafe",
      image: "/Projects/landingPages/daily-drip-cafe.png",
      liveDemo: "https://the-daily-drip-caf-website.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A specialty coffee cafe landing page featuring the menu, brewing story, loyalty program, locations, and online ordering.",
    },

    {
      title: "Flight Company",
      image: "/Projects/landingPages/flight-company.png",
      liveDemo: "https://voya-travel-website.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A travel and flights landing page showcasing destinations, fare search, travel packages, and booking calls to action.",
    },

    {
      title: "Cleaning",
      image: "/Projects/landingPages/cleaning.png",
      liveDemo: "https://landing4-lyart.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A professional cleaning service landing page presenting service packages, residential and commercial options, pricing, and booking.",
    },

    {
      title: "Slice Town",
      image: "/Projects/landingPages/slice-town.png",
      liveDemo: "https://landing4slicetown.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A pizzeria landing page showcasing signature pizzas, combo deals, catering options, location information, and online ordering.",
    },

    {
      title: "Spa",
      image: "/Projects/landingPages/spa.png",
      liveDemo: "https://landing4-7kri.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A luxury spa landing page presenting wellness treatments, therapy packages, ambience, therapist profiles, and reservation booking.",
    },

    {
      title: "Plumbing",
      image: "/Projects/landingPages/plumbing.png",
      liveDemo: "https://landing4plumbingservices.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A plumbing services landing page covering repairs, installations, emergency service, service areas, and instant quote requests.",
    },

    {
      title: "Water Purification",
      image: "/Projects/landingPages/water-purification.png",
      liveDemo: "https://landing4waterpurification.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A water purification landing page highlighting filtration systems, health benefits, product packages, installation, and consultation.",
    },

    {
      title: "Safari",
      image: "/Projects/landingPages/safari.png",
      liveDemo: "https://ssafari-yxtq.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A safari tours landing page showcasing destinations, wildlife experiences, tour packages, itineraries, and booking inquiries.",
    },
  ], [])

  const landingPageStartIndex = projects.findIndex((project) => project.title === 'FERROVA')

  const systemsProjects = useMemo(() => projects.slice(0, landingPageStartIndex), [projects, landingPageStartIndex])
  const landingProjects = useMemo(() => projects.slice(landingPageStartIndex), [projects, landingPageStartIndex])

  const activeCategoryData = LANDING_CATEGORIES.find((c) => c.id === activeSubcategory)

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'systems') return systemsProjects
    if (activeCategory === 'landingPages' && activeSubcategory) {
      return landingProjects.filter((project) => activeCategoryData?.titles.includes(project.title))
    }
    return []
  }, [activeCategory, activeSubcategory, activeCategoryData, systemsProjects, landingProjects])

  const categoryCards = useMemo(() => {
    if (activeCategory !== 'landingPages' || activeSubcategory) return []
    return LANDING_CATEGORIES.map((category) => {
      const categoryProjects = landingProjects.filter((project) => category.titles.includes(project.title))
      return {
        ...category,
        image: categoryProjects[0]?.image ?? '',
        count: categoryProjects.length,
      }
    })
  }, [activeCategory, activeSubcategory, landingProjects])

  useEffect(() => {
    if (!activeCategory || (activeCategory === 'landingPages' && !activeSubcategory)) return

    let cancelled = false
    const categoryProjects = visibleProjects
    const totalMedia = categoryProjects.length
    let nextIndex = 0
    let completedCount = 0

    const prepareMedia = (source: string) => new Promise<void>((resolve) => {
      if (source.endsWith('.mp4')) {
        const video = document.createElement('video')
        video.preload = 'auto'
        video.muted = true
        video.onloadeddata = () => resolve()
        video.onerror = () => resolve()
        video.src = source
        video.load()
        return
      }

      const image = new Image()
      image.onload = async () => {
        try {
          await image.decode()
        } catch {
          // A loaded image remains usable if decode() is unsupported.
        }
        resolve()
      }
      image.onerror = () => resolve()
      image.src = source
    })

    const worker = async () => {
      while (!cancelled) {
        const index = nextIndex++
        const project = categoryProjects[index]
        if (!project) return

        await prepareMedia(project.image)
        if (cancelled) return
        completedCount += 1
        setPreparedMediaCount(completedCount)
      }
    }

    Promise.all(Array.from({ length: Math.min(3, totalMedia) }, worker)).then(() => {
      if (!cancelled) setIsPreparingMedia(false)
    })

    return () => {
      cancelled = true
    }
  }, [activeCategory, activeSubcategory, visibleProjects])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedMedia) return

    const scrollY = window.scrollY
    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    }

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMedia(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.position = previousBodyStyles.position
      document.body.style.top = previousBodyStyles.top
      document.body.style.width = previousBodyStyles.width
      document.body.style.overflow = previousBodyStyles.overflow
      window.scrollTo(0, scrollY)
    }
  }, [selectedMedia])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + visibleProjects.length) % visibleProjects.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % visibleProjects.length)
  }

  return (
    <section ref={carouselRef} className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-24 sm:px-8">
      <div className="map-reveal mx-auto max-w-6xl w-full text-center">
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">Our Portfolio</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Recent <span className="text-[#c8e6d9]">Projects</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          Explore our latest work and see how we help businesses grow.
        </p>
      </div>

      {activeCategory === null ? (
        <div className="mx-auto mt-8 sm:mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {[
            {
              id: 'systems' as const,
              title: 'Systems',
              subtitle: 'Platforms, dashboards & custom software',
              image: '/systems.jpg',
              count: systemsProjects.length,
            },
            {
              id: 'landingPages' as const,
              title: 'Landing Pages',
              subtitle: 'Brand-led digital experiences',
              image: '/landing-pages.jpg',
              count: landingProjects.length,
            },
          ].map((category, index) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveIndex(0)
                setPreparedMediaCount(0)
                setActiveSubcategory(null)
                if (category.id === 'systems') setIsPreparingMedia(true)
                setActiveCategory(category.id)
              }}
              className="group relative isolate flex aspect-square min-h-0 flex-col justify-end overflow-hidden rounded-xl border border-white/15 bg-[#121414] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8e6d9] sm:p-7"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/10" />
              <span className="mb-3 text-xs font-medium uppercase text-[#dff3e8]">
                {String(category.count).padStart(2, '0')} projects
              </span>
              <span className="font-brand text-2xl font-black text-white sm:text-3xl">
                {category.title}
              </span>
              <span className="mt-1 text-sm text-white/75">{category.subtitle}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c8e6d9]">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>
      ) : activeCategory === 'landingPages' && !activeSubcategory ? (
        <div className="mx-auto mt-8 w-full max-w-6xl sm:mt-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
            <p className="font-brand text-lg font-bold text-white sm:text-xl">
              Landing Pages
              <span className="ml-2 text-sm font-normal text-white/50">{landingProjects.length} projects</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory(null)
                setActiveIndex(0)
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white/75 transition hover:border-[#c8e6d9]/60 hover:text-white sm:px-4 sm:text-sm"
            >
              Change category
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {categoryCards.map((category, index) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveIndex(0)
                  setPreparedMediaCount(0)
                  setIsPreparingMedia(true)
                  setActiveSubcategory(category.id)
                }}
                className="group relative isolate flex aspect-[4/3] min-h-0 flex-col justify-end overflow-hidden rounded-xl border border-white/15 bg-[#121414] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c8e6d9] sm:p-6"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/10" />
                <span className="mb-3 text-xs font-medium uppercase text-[#dff3e8]">
                  {String(category.count).padStart(2, '0')} projects
                </span>
                <span className="font-brand text-xl font-black text-white sm:text-2xl">
                  {category.title}
                </span>
                <span className="mt-1 text-sm text-white/75">{category.subtitle}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#c8e6d9]">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : isPreparingMedia ? (
        <div className="mx-auto mt-8 flex min-h-72 w-full max-w-6xl flex-col items-center justify-center rounded-xl border border-white/10 bg-[#121414]/75 px-6 py-10 text-center sm:mt-12 sm:min-h-96">
          <div className="relative mb-7 flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 animate-spin rounded-full border-2 border-[#c8e6d9]/15 border-t-[#c8e6d9]" />
            <span className="h-2 w-2 rounded-full bg-[#dff3e8] shadow-[0_0_18px_4px_rgba(200,230,217,0.4)]" />
          </div>
          <p className="text-xs font-semibold uppercase text-[#c8e6d9]">
            Preparing {activeCategory === 'systems' ? 'systems' : activeCategoryData?.title.toLowerCase() ?? 'landing pages'}
          </p>
          <p className="mt-2 font-brand text-2xl font-black text-white sm:text-3xl">Loading the work</p>
          <div className="mt-6 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#c8e6d9] transition-[width] duration-300"
              style={{ width: `${visibleProjects.length ? (preparedMediaCount / visibleProjects.length) * 100 : 0}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-white/55" aria-live="polite">
            {preparedMediaCount} / {visibleProjects.length} visuals ready
          </p>
        </div>
      ) : (
      <div className="mx-auto mt-8 w-full max-w-6xl sm:mt-12">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
          <p className="font-brand text-lg font-bold text-white sm:text-xl">
            {activeCategory === 'systems' ? 'Systems' : activeCategoryData?.title ?? 'Landing Pages'}
            <span className="ml-2 text-sm font-normal text-white/50">{visibleProjects.length} projects</span>
          </p>
          <button
            type="button"
            onClick={() => {
              if (activeCategory === 'landingPages' && activeSubcategory) {
                setActiveSubcategory(null)
                setIsPreparingMedia(false)
              } else {
                setActiveCategory(null)
                setActiveSubcategory(null)
              }
              setActiveIndex(0)
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold text-white/75 transition hover:border-[#c8e6d9]/60 hover:text-white sm:px-4 sm:text-sm"
          >
            Change category
          </button>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#121414]/50 backdrop-blur-sm">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-white/60 transition hover:border-[#c8e6d9]/50 hover:bg-black/70 hover:text-[#c8e6d9] md:left-4 md:h-12 md:w-12"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-white/60 transition hover:border-[#c8e6d9]/50 hover:bg-black/70 hover:text-[#c8e6d9] md:right-4 md:h-12 md:w-12"
            aria-label="Next project"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
          </button>

          {/* Project Cards */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {visibleProjects.map((project, index) => {
              const isVideo = project.image.endsWith('.mp4')

              return (
                <div
                  key={project.title || index}
                  className="min-w-full p-4 sm:p-6 md:p-8"
                >
                  <div className="relative h-[350px] sm:h-[400px] md:h-[450px] rounded-xl border border-white/10 bg-[#1a1b1b] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1b] via-transparent to-transparent z-10" />
                    
                    {isVideo ? (
                      <video
                        src={project.image}
                        autoPlay={activeIndex === index}
                        loop
                        muted
                        playsInline
                        preload={activeIndex === index ? 'metadata' : 'none'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={activeIndex === index ? 'eager' : 'lazy'}
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6">
                      <h3 className="font-brand text-lg sm:text-xl md:text-2xl font-black text-white mb-1 sm:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">
                        {project.technologies.join(', ')}
                      </p>
                      <p className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-nowrap gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedMedia({ image: project.image, title: project.title })}
                          aria-label={`Expand ${project.title} media`}
                          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/30 bg-black/50 px-2.5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-white transition hover:border-[#c8e6d9] hover:text-[#dff3e8] sm:gap-2"
                        >
                          <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                          Expand
                        </button>
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#c8e6d9] px-2.5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8] sm:gap-2"
                          >
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                          </a>
                        )}
                        {'CaseStudy' in project && (
                          <a
                            href={project.CaseStudy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#c8e6d9]/60 bg-black/40 px-2.5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-[#dff3e8] transition hover:bg-[#c8e6d9]/15 sm:gap-2"
                          >
                            Case Study
                            <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                          </a>
                        )}
                        <a
                          href={`https://wa.me/201201289813?text=${encodeURIComponent(`Hello, I'm interested in ordering ${project.title}.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#c8e6d9]/60 bg-[#c8e6d9]/15 px-2.5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-semibold text-[#dff3e8] transition hover:bg-[#c8e6d9]/25 sm:gap-2"
                        >
                          Order
                          <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 hidden md:flex items-center justify-center gap-3 z-40">
            {visibleProjects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`View project ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#c8e6d9] scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      )}

      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-black p-0"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMedia.title} media preview`}
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            aria-label="Close media preview"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition hover:border-[#c8e6d9] hover:text-[#dff3e8]"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedMedia.image.endsWith('.mp4') ? (
            <video
              src={selectedMedia.image}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia.image}
              alt={selectedMedia.title}
              className="h-full w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  )
}
