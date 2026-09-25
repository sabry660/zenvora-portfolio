'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What kind of projects does Zenvora build?',
    answer: 'We build modern digital products and technology solutions including websites, web applications, dashboards, digital platforms, and custom software experiences.',
  },
  {
    question: 'How does a project usually start?',
    answer: 'We begin by understanding your goals, requirements, users, and business context. From there, we define the appropriate strategy, scope, and next steps.',
  },
  {
    question: 'Can you work with an existing product or system?',
    answer: 'Yes. We can work with existing products and systems when the project requires improvements, new features, integrations, redesigns, or technical development.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with modern technologies and frameworks based on the requirements of each project. Our technology stack includes frontend, backend, cloud, and cross-platform development technologies.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. Post-launch support can include maintenance, improvements, fixes, monitoring, and continued development depending on the project\'s needs.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines depend on the scope, complexity, requirements, and development stages. After understanding the project, we can define a more accurate timeline.',
  },
  {
    question: 'Can you build a completely custom solution?',
    answer: 'Yes. We can design and develop custom digital solutions around specific business requirements instead of relying on a one-size-fits-all approach.',
  },
  {
    question: 'How can we start a project with Zenvora?',
    answer: 'You can get in touch through the Contact section and share your project idea, requirements, or business goals. We can then determine the appropriate next steps.',
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="relative z-20 flex min-h-svh flex-col items-center justify-start px-4 py-16 sm:py-24 sm:px-8">
      <div className={`map-reveal mx-auto max-w-4xl w-full text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">FAQ</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Frequently Asked <span className="text-[#c8e6d9]">Questions</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          A few answers to common questions about working with Zenvora.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-4xl space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/15 bg-[#121414]/80 backdrop-blur-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left transition-colors hover:bg-white/5 focus:outline-none focus-visible:bg-white/5"
            >
              <span className="text-sm sm:text-base font-semibold text-white/90">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-[#c8e6d9] transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                strokeWidth={2}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 sm:p-5 pt-0">
                <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
