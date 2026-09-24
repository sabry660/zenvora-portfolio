'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Full-Stack Developer',
    image: 'AM',
    bio: 'Full-stack developer with 8+ years of experience building scalable web applications. Expert in React, Node.js, TypeScript, and cloud architecture. Led development of enterprise-level systems serving millions of users. Passionate about clean code, performance optimization, and delivering exceptional user experiences.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'GraphQL', 'Docker', 'CI/CD'],
    experience: '8+ years',
    location: 'San Francisco, CA',
    email: 'alex@zenvora.com',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    image: 'SC',
    bio: 'Creative UI/UX designer specializing in user-centered design and brand identity systems. 6+ years of experience creating intuitive interfaces that delight users and drive engagement. Expert in design systems, prototyping, and user research. Worked with Fortune 500 companies to transform their digital presence.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Motion Design', 'Usability Testing'],
    experience: '6+ years',
    location: 'New York, NY',
    email: 'sarah@zenvora.com',
  },
  {
    name: 'Omar Hassan',
    role: 'Frontend Developer',
    image: 'OH',
    bio: 'Frontend specialist with 7+ years of experience in modern JavaScript frameworks and performance optimization. Expert in React, Vue.js, and advanced CSS techniques. Committed to building fast, accessible, and responsive web applications. Led frontend architecture for multiple award-winning projects.',
    skills: ['JavaScript', 'React', 'Vue.js', 'CSS/SASS', 'Performance', 'Accessibility', 'Next.js', 'TypeScript'],
    experience: '7+ years',
    location: 'London, UK',
    email: 'omar@zenvora.com',
  },
]

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[number] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure we're on the client before rendering portal
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Lock body scroll when modal opens
  useEffect(() => {
    if (selectedMember) {
      // Store current scroll position
      const scrollY = window.scrollY
      const scrollX = window.scrollX
      
      // Lock body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = `-${scrollX}px`
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      
      return () => {
        // Restore scroll position
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.width = ''
        document.body.style.height = ''
        window.scrollTo(scrollX, scrollY)
      }
    }
  }, [selectedMember])

  // Intersection observer for animation
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

  const changePosition = (direction: number) => {
    // Simple circular navigation through 3 members
    setCurrentIndex((prev) => {
      const newIndex = prev + direction
      if (newIndex >= teamMembers.length) return 0
      if (newIndex < 0) return teamMembers.length - 1
      return newIndex
    })
  }

  const currentMember = teamMembers[currentIndex]

  return (
    <section ref={sectionRef} className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-16 sm:py-24 sm:px-8">
      <div className={`map-reveal mx-auto max-w-6xl w-full text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">Our Team</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Meet The <span className="text-[#c8e6d9]">Experts</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          Talented professionals dedicated to delivering exceptional digital solutions.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl">
        <div className="relative">
          {/* Single Card Display - Responsive */}
          <div className="relative min-h-[380px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center">
            <div
              className="w-[330px] sm:w-[360px] md:w-[400px] lg:w-[420px] xl:w-[430px] rounded-2xl border border-white/15 bg-[#121414]/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/50 hover:bg-[#161c1a]/90 cursor-pointer"
              onClick={() => setSelectedMember(currentMember)}
            >
              {/* Avatar placeholder */}
              <div className="relative mx-auto h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full border-2 border-[#c8e6d9]/30 bg-gradient-to-br from-[#c8e6d9]/20 to-[#dff3e8]/10 flex items-center justify-center overflow-hidden">
                <span className="font-brand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#c8e6d9]">
                  {currentMember.image}
                </span>
              </div>

              <h3 className="mt-3 sm:mt-4 md:mt-5 font-brand text-base sm:text-lg md:text-xl lg:text-2xl font-black text-[#c8e6d9]">
                {currentMember.name}
              </h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/70">
                {currentMember.role}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            <button
              type="button"
              onClick={() => changePosition(-1)}
              aria-label="Previous team member"
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-[#c8e6d9] hover:bg-[#c8e6d9]/10 hover:text-[#c8e6d9]"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </button>

            {/* Navigation Dots */}
            <div className="flex items-center gap-2 sm:gap-3">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View team member ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-[#c8e6d9] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => changePosition(1)}
              aria-label="Next team member"
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-[#c8e6d9] hover:bg-[#c8e6d9]/10 hover:text-[#c8e6d9]"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Team Member Modal - Rendered via Portal to document.body */}
      {isMounted && selectedMember && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black p-3 sm:p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#121414]/95 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/60 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
            </button>

            <div className="mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs tracking-[0.16em] text-[#e7f6ee]">{selectedMember.role}</span>
            </div>

            <h3 className="font-brand text-xl sm:text-2xl font-black text-[#c8e6d9] mb-2">{selectedMember.name}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-white/90 mb-4 sm:mb-6">{selectedMember.bio}</p>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-[10px] sm:text-xs tracking-[0.12em] text-white/50 uppercase">Skills & Expertise</p>
              <div className="grid gap-1.5 sm:gap-2 sm:grid-cols-2">
                {selectedMember.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 transition hover:border-[#c8e6d9]/30 hover:bg-white/10"
                  >
                    <span className="text-xs sm:text-sm text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] sm:text-xs text-white/50">Experience</p>
                  <p className="text-xs sm:text-sm text-white/70">{selectedMember.experience}</p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-white/50">Location</p>
                  <p className="text-xs sm:text-sm text-white/70">{selectedMember.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
