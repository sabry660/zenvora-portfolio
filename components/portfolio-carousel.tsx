'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    // =========================================================
    // EXISTING PROJECTS — SAME PROJECTS, ONLY REORDERED
    // =========================================================

    {
      title: "CHUWI",
      image: "/Projects/chuwi.png",
      liveDemo: "https://www.chuwi.com/",
      technologies: ["Angular", "AWS", "Node.js", "Express.js"],
      description:
        "A modern technology-focused platform designed to present products, information, and digital experiences through a responsive web interface.",
    },

    {
      title: "School Management System",
      image: "/Projects/school.mp4",
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
      title: "Analytics Dashboard",
      image: "/Projects/analytics.jpg",
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
      title: "Logistics Management System",
      image: "/Projects/logistics.mp4",
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
      image: "/Projects/gym.jpg",
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
      image: "/Projects/posr.mp4",
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
      title: "Tabibi Clinic Management",
      image: "/Projects/clinic.mp4",
      technologies: ["Flutter"],
      description:
        "A mobile clinic management solution designed to simplify healthcare operations, patient management, and everyday clinic workflows.",
    },

    {
      title: "Arabic Accounting System",
      image: "/Projects/accounting.jpg",
      technologies: ["Python", "Flask", "SQLite"],
      description:
        "An Arabic accounting management system designed to organize financial records, transactions, and essential business accounting workflows.",
    },

    {
      title: "Catch Recruitment",
      image: "/Projects/catch.png",
      liveDemo: "https://catchrecruitment.com/",
      technologies: [
        "React",
        "Next.js",
        "Docker",
        "Spring Boot",
      ],
      description:
        "A recruitment platform focused on connecting talent and opportunities through a modern, responsive digital experience.",
    },

    {
      title: "Palestinian Stories",
      image: "/Projects/palestine.png",
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
      title: "Word of mouth",
      image: "/Projects/w.w.png",
      liveDemo: "https://wordofmoutheg.com/",
      technologies: ["Angular"],
      description:
        "A modern digital platform designed to present services and content through a clean, responsive user experience.",
    },

    // =========================================================
    // NEW LANDING PAGES
    // =========================================================

    {
      title: "Coach Gym",
      image: "/Projects/coach-gym.jpg",
      liveDemo: "https://gym-theta-green.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A personal fitness coaching landing page featuring training programs, fitness goals, pricing, gallery, blog content, and contact information.",
    },

    {
      title: "Mercelys Ice Cream",
      image: "/Projects/mercelys-ice-cream.jpg",
      liveDemo: "https://mercelys-ice-cream.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A premium ice cream brand experience presenting the brand story, products, qualities, community, media, and distributor opportunities.",
    },

    {
      title: "HIBIS Hotels & Resorts",
      image: "/Projects/hibis-hotel.jpg",
      liveDemo: "https://landing-pages-rwsb.vercel.app/",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A luxury hotel landing experience featuring destination information, room categories, amenities, availability, rates, and booking-focused interactions.",
    },

    {
      title: "Aurelia Restaurant",
      image: "/Projects/aurelia-restaurant.jpg",
      liveDemo: "https://landing-pages-aezo.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A premium restaurant experience built around storytelling, signature dishes, curated dining experiences, gallery content, and reservations.",
    },

    {
      title: "SAS Solutions",
      image: "/Projects/sas-solutions.jpg",
      liveDemo: "https://landing-pages-s76p.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A professional digital solutions website presenting services across digital presence, product experience, commerce, custom development, and integrations.",
    },

    {
      title: "DesignCafe",
      image: "/Projects/designcafe-interior.jpg",
      liveDemo: "https://landing-pages-ptqd.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An interior design platform presenting design projects, services, consultations, cost information, reviews, guides, and home design solutions.",
    },

    {
      title: "Humble Rose",
      image: "/Projects/humble-rose.jpg",
      liveDemo: "https://landing-pages-1avj.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "An elegant Mediterranean dining experience centered around botanical cuisine, seasonal ingredients, curated menus, and reservations.",
    },

    {
      title: "Drip & Garlic",
      image: "/Projects/drip-garlic.jpg",
      liveDemo: "https://res-landing-rust.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern food landing page presenting wraps, loaded platters, sides, sauces, best sellers, and a late-night restaurant experience.",
    },

    {
      title: "Dawid Gym",
      image: "/Projects/dawid-gym.jpg",
      liveDemo: "https://landing-ii.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A fitness center landing page featuring gym services, classes, membership calls to action, location information, and an introduction to the brand.",
    },

    {
      title: "Visit Norway",
      image: "/Projects/visit-norway.jpg",
      liveDemo: "https://landing-kmkp.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A travel agency experience presenting tours, special offers, destinations, travel articles, and curated travel content.",
    },

    {
      title: "DietBowl",
      image: "/Projects/dietbowl.jpg",
      liveDemo: "https://landing-bi6v.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A healthy food platform focused on nutrition-based meal choices, recommendations, nutrition tracking, and personalized food experiences.",
    },

    {
      title: "Interior Studio",
      image: "/Projects/interior-studio.jpg",
      liveDemo: "https://interior-beige-omega.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A refined interior design website showcasing creative spaces, company services, projects, news, and contact information.",
    },

    {
      title: "Car Hub",
      image: "/Projects/car-hub.jpg",
      liveDemo: "https://car-show-case-one.vercel.app/",
      technologies: ["Nextjs", "Responsive Web Design"],
      description:
        "A modern automotive platform presenting vehicle discovery, car categories, filtering options, rental-focused calls to action, and vehicle information.",
    },

    {
      title: "Car Dealership",
      image: "/Projects/car-dealership.jpg",
      liveDemo: "https://cardealership-sigma.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A car dealership experience featuring vehicle inventory, filtering, specifications, pricing, and detailed automotive presentation.",
    },

    {
      title: "Furniture Store",
      image: "/Projects/furniture-store.jpg",
      liveDemo: "https://furniture-rust-eight.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A modern furniture e-commerce experience featuring product categories, featured collections, product cards, pricing, and shopping interactions.",
    },

    {
      title: "Buzz World",
      image: "/Projects/buzz-world.jpg",
      liveDemo: "https://landing-pages-vs2g.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A visually focused brand landing experience designed around strong presentation, engaging visual content, and responsive interactions.",
    },

    {
      title: "Wedding Agency",
      image: "/Projects/wedding-agency.jpg",
      liveDemo: "https://landing-ovtg.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A wedding agency website presenting creative services, event experiences, gallery content, testimonials, and discovery-call conversion.",
    },

    {
      title: "Grandma's Bakery",
      image: "/Projects/grandmas-bakery.jpg",
      liveDemo: "https://grand-phi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A bakery shopping experience featuring cakes, cupcakes, sweets, doughnuts, product browsing, search, cart, and checkout interactions.",
    },

    {
      title: "Noir Cafe",
      image: "/Projects/noir-cafe.jpg",
      liveDemo: "https://lan-sigma-three.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A specialty coffee landing page built around premium coffee presentation, origin storytelling, product information, and ordering.",
    },

    {
      title: "Amber Coffee",
      image: "/Projects/amber-coffee.jpg",
      liveDemo: "https://landing-pages-ayul.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A specialty coffee brand landing experience designed to showcase the cafe identity, products, atmosphere, and customer experience.",
    },

    {
      title: "Sushiman",
      image: "/Projects/sushiman.jpg",
      liveDemo: "https://landing-indol-two-20.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A Japanese food experience presenting menu items, popular dishes, services, ordering actions, customer testimonials, and brand story.",
    },

    {
      title: "Fast Food Restaurant",
      image: "/Projects/fast-food-restaurant.jpg",
      liveDemo: "https://landing-pages-2fxu.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A modern fast-food landing page designed to showcase the restaurant brand, food offerings, and conversion-focused customer experience.",
    },

    {
      title: "Barber Shop",
      image: "/Projects/barber-shop.jpg",
      liveDemo: "https://landing-pages-8m5w.vercel.app/",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A modern barber shop landing page designed to present the brand, services, visual identity, and customer booking experience.",
    },

    {
      title: "Brainwave",
      image: "/Projects/brainwave.jpg",
      liveDemo: "https://landing-pages-99oy.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A modern technology-focused landing page built around a bold visual identity and responsive digital presentation.",
    },

    {
      title: "Burger House",
      image: "/Projects/burger-house.jpg",
      liveDemo: "https://landing-pages-dczm.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A bold restaurant landing experience focused on burger presentation, food discovery, brand identity, and customer conversion.",
    },

    {
      title: "Cinematic Cafe",
      image: "/Projects/cinematic-cafe.jpg",
      liveDemo: "https://landing-pages-3al9.vercel.app/#",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A cinematic cafe landing experience combining strong visual presentation with a premium hospitality-focused digital identity.",
    },

    {
      title: "Cocktail",
      image: "/Projects/cocktail.jpg",
      liveDemo: "https://landing-pages-skfp.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A visually driven beverage landing page designed around product presentation, atmosphere, and a modern responsive experience.",
    },

    {
      title: "Digital Studio",
      image: "/Projects/digital-studio.jpg",
      liveDemo: "https://landing-pages-gh8o.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A creative digital studio landing page designed to present a modern visual identity and digital-focused services.",
    },

    {
      title: "MediCare Pro",
      image: "/Projects/medicare-pro.jpg",
      liveDemo: "https://landing-pages-vcky.vercel.app/",
      technologies: ["Native", "Responsive Web Design"],
      description:
        "A professional healthcare landing page designed to present medical services and create a clear patient-focused digital experience.",
    },

    {
      title: "Juicy",
      image: "/Projects/juicy.jpg",
      liveDemo: "https://landing-pages-vtj1.vercel.app/",
      technologies: ["Angular", "Responsive Web Design"],
      description:
        "A vibrant product-focused landing experience designed around strong visual presentation and modern responsive interactions.",
    },

    {
      title: "MacBook",
      image: "/Projects/macbook.jpg",
      liveDemo: "https://landing-pages-1wex.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A premium technology product landing page focused on visual product presentation, modern layout, and responsive interaction.",
    },

    {
      title: "Nike",
      image: "/Projects/nike.jpg",
      liveDemo: "https://landing-pages-5e4d.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A bold sportswear landing experience focused on product presentation, visual storytelling, and modern responsive design.",
    },

    {
      title: "Royal Burger",
      image: "/Projects/royal-burger.jpg",
      liveDemo: "https://royal-biryani-psi.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A restaurant landing experience built around food presentation, brand identity, and a visually engaging customer journey.",
    },

    {
      title: "Seafood",
      image: "/Projects/seafood.jpg",
      liveDemo: "https://seafood-zeta.vercel.app/",
      technologies: ["React", "Responsive Web Design"],
      description:
        "A seafood restaurant landing page designed to showcase food offerings through a visually rich and responsive experience.",
    },

    {
      title: "Volt Energy Drink",
      image: "/Projects/volt-energy-drink.jpg",
      liveDemo: "https://volt-drink-olive.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A high-energy beverage landing page focused on strong product visuals, branding, and an engaging modern presentation.",
    },

    {
      title: "Perfume",
      image: "/Projects/perfume.jpg",
      liveDemo: "https://seafood-landing-page.vercel.app/",
      technologies: ["Next", "Responsive Web Design"],
      description:
        "A premium product landing experience designed around luxury visual presentation, product identity, and responsive storytelling.",
    },
  ]

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

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
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

      <div className="mx-auto mt-12 w-full max-w-6xl">
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
            {projects.map((project, index) => {
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
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
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
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#c8e6d9] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8]"
                        >
                          Live Demo
                          <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 hidden md:flex items-center justify-center gap-3 z-40">
            {projects.map((_, index) => (
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
    </section>
  )
}
