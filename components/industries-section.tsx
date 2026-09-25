'use client'

import { useEffect, useRef, useState } from 'react'

const industryCategories = [
  {
    name: 'Core Industries',
    industries: [
      'Hotels',
      'Restaurants & Food & Beverage',
      'Healthcare & Clinics',
      'Real Estate',
      'E-Commerce & Retail',
      'Education & EdTech',
      'Logistics & Transportation',
    ],
  },
  {
    name: 'Growth Industries',
    industries: [
      'Gyms & Fitness',
      'Travel & Tourism',
      'Finance & FinTech',
      'Construction & Contracting',
      'Manufacturing',
      'Automotive',
      'Beauty & Wellness',
      'Events & Entertainment',
    ],
  },
  {
    name: 'Business / Enterprise',
    industries: [
      'Corporate & Professional Services',
      'Private Schools & Education Groups',
      'Medical Centers & Hospitals',
      'Pharmacies & Healthcare',
      'SMEs & Startups',
    ],
  },
]

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-20 flex min-h-svh flex-col items-center justify-start px-4 py-16 sm:py-24 sm:px-8">
      <div className={`map-reveal mx-auto max-w-6xl w-full text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">INDUSTRIES</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Technology Built Around <span className="text-[#c8e6d9]">Your Industry</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          We create digital products and technology solutions designed around the unique needs, workflows, and challenges of different industries.
        </p>
      </div>

      {isMounted && (
        <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl space-y-8 sm:space-y-12">
          {industryCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <h3 className="font-brand text-xl sm:text-2xl font-black text-[#c8e6d9] mb-4 sm:mb-6">
                {category.name}
              </h3>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.industries.map((industry) => (
                  <div
                    key={industry}
                    className="group relative rounded-xl border border-white/15 bg-[#121414]/80 backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/50 hover:bg-[#161c1a]/90"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-white/90">
                      {industry}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
