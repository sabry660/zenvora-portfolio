'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

export function PortfolioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      name: 'Word of mouth',
      image: '/Projects/w.w.png',
      liveDemo: 'https://wordofmoutheg.com/',
      technologies: 'Angular',
      description: "A modern digital platform designed to create a seamless online experience for its audience. The project combines a structured user journey with a polished interface, helping transform the brand's digital presence into a more engaging and effective experience.",
    },
    {
      id: 2,
      name: 'Fluency Sprint',
      image: '/Projects/f.s.png',
      liveDemo: 'https://www.fluencysprint.online/',
      technologies: 'React, Nestjs, Stripe',
      description: 'Fluency Sprint is a modern language-learning platform designed around an engaging and focused digital experience. The interface combines intuitive navigation, interactive learning flows, and a clean visual system to make language practice more accessible and enjoyable.',
    },
    {
      id: 3,
      name: 'Palestinian Stories',
      image: '/Projects/palestine.png',
      liveDemo: 'https://palestinianstories.com/',
      technologies: 'Angular, Python, Django, AWS',
      description: 'A digital storytelling platform created to bring stories, experiences, and cultural narratives into an immersive online environment. The experience places content and storytelling at the center while maintaining a simple, accessible, and visually engaging interface.',
    },
    {
      id: 4,
      name: 'Catch Recruitment',
      image: '/Projects/catch.png',
      liveDemo: 'https://catchrecruitment.com/',
      technologies: 'React, Next.js, Docker, Spring Boot',
      description: 'A professional recruitment platform designed to connect talent and opportunities through a streamlined digital experience. The project focuses on clear information architecture, intuitive navigation, and a modern interface built around the needs of both candidates and recruiters.',
    },
    {
      id: 5,
      name: 'CHUWI',
      image: '/Projects/chuwi.png',
      liveDemo: 'https://www.chuwi.com/',
      technologies: 'Angular, AWS, Node.js, Express.js',
      description: 'A high-scale digital experience for a global technology brand, combining product discovery, structured content, and e-commerce functionality within a polished technology-focused interface. The project demonstrates how complex product catalogs and commercial experiences can be presented through a fast, organized, and conversion-oriented digital platform.',
    },
    {
      id: 6,
      name: 'Dashboard',
      image: '/Projects/dash.png',
      liveDemo: 'https://dash1-mauve.vercel.app/',
      technologies: 'Angular, Spring Boot, AI',
      description: 'A powerful management dashboard built to give hotel teams a centralized view of daily operations, guest activity, requests, and essential property data. The platform brings operational workflows into one structured and efficient digital environment.',
    },
    {
      id: 7,
      name: 'Guest Portal',
      image: '/Projects/g.p.png',
      liveDemo: 'https://luxury-hotel-guest-portal.vercel.app/',
      technologies: 'Angular, Node.js, Nest.js, Tailwind CSS',
      description: 'A premium digital guest portal designed to transform the hotel stay into a seamless, connected experience. Guests can access hotel services, explore available amenities, submit requests, and interact with the property through a modern and intuitive interface.',
    },
    {
      id: 8,
      name: 'Villa Misk Hotels',
      image: '/Projects/villa.png',
      liveDemo: 'https://villamiskhotels.com/',
      technologies: 'React, TypeScript, Tailwind CSS, Responsive Web Design',
      description: "A refined digital experience created for Villa Misk Hotels, bringing the brand's hospitality offering into a modern and elegant online environment. The experience presents the property's accommodation and services through a polished, intuitive interface designed to strengthen the hotel's digital presence.",
    },
    {
      id: 9,
      name: 'Cafe Website',
      image: '/Projects/cafe.png',
      liveDemo: 'https://cafe-virid-eight.vercel.app/',
      technologies: 'HTML, CSS, JavaScript, Responsive Web Design',
      description: 'A modern and visually engaging website created for a café brand, designed to showcase the menu, atmosphere, and overall brand experience through a clean and responsive digital interface.',
    },
    {
      id: 10,
      name: 'Clothes Shop',
      image: '/Projects/clothes.png',
      liveDemo: 'https://clothes-shop-flax.vercel.app/',
      technologies: 'HTML, CSS, JavaScript, E-Commerce, Responsive Web Design',
      description: 'A stylish online shopping experience designed for a fashion brand, combining product presentation, intuitive navigation, and a clean shopping interface to create a seamless digital storefront.',
    },
    {
      id: 11,
      name: 'The Daily Drip',
      image: '/Projects/daily.png',
      liveDemo: 'https://the-daily-drip-caf-website.vercel.app/',
      technologies: 'Angular, TypeScript, Responsive Web Design',
      description: 'A polished digital experience designed for a modern café brand, combining strong visual presentation with intuitive navigation and responsive layouts to create an engaging online presence.',
    },
    {
      id: 12,
      name: 'Voya Travel',
      image: '/Projects/voya.png',
      liveDemo: 'https://voya-travel-website.vercel.app/',
      technologies: 'HTML, CSS, JavaScript, Responsive Web Design, GSAP',
      description: 'A modern travel platform concept designed around flight discovery and travel experiences. The interface focuses on clear information architecture, immersive visuals, and a smooth user journey across the platform.',
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

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible, projects.length])

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
            {projects.map((project) => (
              <div
                key={project.id}
                className="min-w-full p-4 sm:p-6 md:p-8"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl border border-white/10 bg-[#1a1b1b] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1b] via-transparent to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6">
                    <h3 className="font-brand text-lg sm:text-xl md:text-2xl font-black text-white mb-1 sm:mb-2">{project.name}</h3>
                    <p className="text-xs sm:text-sm text-white/70 mb-1 sm:mb-2">{project.technologies}</p>
                    <p className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#c8e6d9] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8]"
                    >
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 z-40">
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
