'use client'

import { useEffect, useRef, useState } from 'react'
import { ShieldCheck, FileText, Lock } from 'lucide-react'

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: '100% Source Code Ownership',
    description: 'Complete code handover and full IP rights transferred upon delivery.',
  },
  {
    icon: FileText,
    title: 'NDAs & Data Confidentiality',
    description: 'Strict legally binding non-disclosure agreements signed prior to project kickoff.',
  },
  {
    icon: Lock,
    title: 'Scalable & Secure Architecture',
    description: 'Enterprise-grade security standards, encrypted data pipelines, and high-availability server setups.',
  },
]

export function SecuritySection() {
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
    <section ref={sectionRef} className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-12 sm:py-20 sm:px-8">
      <div className={`map-reveal mx-auto max-w-6xl w-full text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">TRUST & SECURITY</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Security & <span className="text-[#c8e6d9]">Compliance</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          Enterprise-grade security standards and complete transparency for every project we deliver.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/15 bg-[#121414]/80 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/50 hover:bg-[#161c1a]/90"
              >
                <div className="mb-3 sm:mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c8e6d9]/30 bg-[#c8e6d9]/10">
                  <Icon className="h-6 w-6 text-[#c8e6d9]" strokeWidth={2} />
                </div>
                <h3 className="font-brand text-base sm:text-lg font-black text-[#c8e6d9] mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
