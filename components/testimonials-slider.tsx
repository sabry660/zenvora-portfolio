'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Ali El Beshbeshy',
      company: 'Fluency Sprint',
      position: 'Founder',
      review: "ZENVORA transformed our language learning platform into a truly engaging digital experience. Their attention to detail and technical expertise exceeded our expectations. The result is a platform that our users love to use.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Mahmoud',
      company: 'Word of Mouth',
      position: 'Marketing Director',
      review: "Working with ZENVORA was a game-changer for our brand. They understood our vision from day one and delivered a digital presence that perfectly represents who we are. Professional, responsive, and incredibly talented.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Chen Wei',
      company: 'CHUWI',
      position: 'Product Manager',
      review: "The scale and complexity of our e-commerce platform required a team that could handle high-volume traffic while maintaining performance. ZENVORA delivered beyond expectations with a robust, scalable solution.",
      rating: 5,
    },
    {
      id: 4,
      name: 'Ahmed Ali',
      company: 'Catch Recruitment',
      position: 'CEO',
      review: "ZENVORA built a recruitment platform that streamlines our entire hiring process. The intuitive interface for both candidates and recruiters has significantly improved our efficiency. A true partner in our digital transformation.",
      rating: 5,
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

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible, testimonials.length])

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-[#c8e6d9] text-[#c8e6d9]' : 'fill-white/20 text-white/20'}`}
        strokeWidth={1.5}
      />
    ))
  }

  return (
    <section ref={sliderRef} className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-16 sm:py-24 sm:px-8">
      <div className="map-reveal mx-auto max-w-6xl w-full text-center">
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">Client Testimonials</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          What Our <span className="text-[#c8e6d9]">Clients Say</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          Trusted by businesses worldwide to deliver exceptional results.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-4xl">
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#121414]/50 backdrop-blur-sm">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full p-6 sm:p-8 md:p-12"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 mb-4 sm:mb-6 italic">
                      "{testimonial.review}"
                    </p>
                    <div className="mt-3 sm:mt-4">
                      <p className="font-brand text-lg sm:text-xl font-bold text-white">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-[#c8e6d9] mt-1">{testimonial.position}</p>
                      <p className="text-[10px] sm:text-xs text-white/60 mt-0.5">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-[#c8e6d9] hover:bg-[#c8e6d9]/10 hover:text-[#c8e6d9]"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </button>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-[#c8e6d9] scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-[#c8e6d9] hover:bg-[#c8e6d9]/10 hover:text-[#c8e6d9]"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
