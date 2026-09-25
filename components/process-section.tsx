'use client'

import { useEffect, useRef, useState } from 'react'

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your goals, users, requirements, and business challenges before defining the direction of the project.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We turn requirements into a clear technical and product strategy with defined priorities and a practical roadmap.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We create the visual language and user experience while keeping usability, consistency, and scalability in focus.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our development team transforms the approved design into a responsive, maintainable, and production-ready product.',
  },
  {
    number: '05',
    title: 'QA & Testing',
    description: 'We test the product across devices, screen sizes, interactions, and critical user flows to identify and resolve issues.',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'After final validation, we prepare the product for deployment and make sure everything is ready for production.',
  },
  {
    number: '07',
    title: 'Support',
    description: 'After launch, we can continue improving, maintaining, and evolving the product as requirements change.',
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">OUR PROCESS</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          From Idea to <span className="text-[#c8e6d9]">Digital Product</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          A clear and structured process helps us turn ideas into reliable digital experiences while keeping every stage focused, transparent, and purposeful.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl">
        {/* Desktop - Horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-7 md:gap-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-6 left-full w-full h-px bg-gradient-to-r from-[#c8e6d9]/30 to-transparent" />
              )}
              
              <div className="relative pt-6">
                {/* Number badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full border-2 border-[#c8e6d9]/30 bg-[#121414]/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-brand text-sm font-black text-[#c8e6d9]">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="mt-14 text-center">
                  <h3 className="font-brand text-base sm:text-lg font-black text-[#c8e6d9] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet - Vertical timeline */}
        <div className="md:hidden space-y-4 sm:space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Vertical connecting line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-[#c8e6d9]/30 to-transparent" />
              )}
              
              <div className="flex items-start gap-4">
                {/* Number badge */}
                <div className="flex-shrink-0 h-12 w-12 rounded-full border-2 border-[#c8e6d9]/30 bg-[#121414]/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-brand text-sm font-black text-[#c8e6d9]">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-brand text-lg sm:text-xl font-black text-[#c8e6d9] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
