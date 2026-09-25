'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  skills: string[]
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Morgan',
    role: 'Full-Stack Developer',
    image: 'AM',
    bio: 'Full-stack developer with 8+ years of experience building scalable web applications. Expert in React, Node.js, TypeScript, and cloud architecture. Led development of enterprise-level systems serving millions of users.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'GraphQL', 'Docker', 'CI/CD'],
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    image: 'SC',
    bio: 'Creative UI/UX designer specializing in user-centered design and brand identity systems. 6+ years of experience creating intuitive interfaces that delight users and drive engagement.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Motion Design'],
  },
  {
    name: 'Omar Hassan',
    role: 'Frontend Developer',
    image: 'OH',
    bio: 'Frontend specialist with 7+ years of experience in modern JavaScript frameworks and performance optimization. Expert in React, Vue.js, and advanced CSS techniques.',
    skills: ['JavaScript', 'React', 'Vue.js', 'CSS/SASS', 'Performance', 'Accessibility', 'Next.js'],
  },
  {
    name: 'Elena Rostova',
    role: 'DevOps Engineer',
    image: 'ER',
    bio: 'DevOps specialist focused on cloud infrastructure automation, Kubernetes orchestration, and continuous deployment pipelines for highly available microservices.',
    skills: ['Kubernetes', 'Terraform', 'AWS', 'Docker', 'CI/CD', 'Linux', 'Python'],
  },
]

// --- Simplified Modal Component ---
function TeamMemberModal({
  member,
  onClose,
}: {
  member: TeamMember
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    modalRef.current?.focus()
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-[#121414] p-5 sm:p-6 shadow-2xl max-h-[85vh] overflow-y-auto outline-none transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/70 transition hover:border-white/50 hover:bg-white/20 hover:text-white"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="mb-2">
          <span className="text-[10px] sm:text-xs tracking-[0.16em] text-[#e7f6ee] uppercase font-semibold">
            {member.role}
          </span>
        </div>

        <h3 className="font-brand text-xl sm:text-2xl font-black text-[#c8e6d9] mb-3">
          {member.name}
        </h3>

        {/* Bio */}
        <p className="text-xs sm:text-sm leading-relaxed text-white/80 mb-6">
          {member.bio}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <p className="text-[10px] sm:text-xs tracking-[0.12em] text-white/50 uppercase font-medium">
            Tech Stack & Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#c8e6d9] transition hover:border-[#c8e6d9]/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

// --- Main Carousel Component ---
export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (selectedMember) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [selectedMember])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const changePosition = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction
      if (newIndex >= teamMembers.length) return 0
      if (newIndex < 0) return teamMembers.length - 1
      return newIndex
    })
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMember) return
      if (e.key === 'ArrowRight') changePosition(1)
      if (e.key === 'ArrowLeft') changePosition(-1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMember, changePosition])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 50) changePosition(1)
    if (diff < -50) changePosition(-1)
    setTouchStart(null)
  }

  // Helper function to get relative visible cards for Desktop
  const getVisibleCards = () => {
    const total = teamMembers.length
    const prev = (currentIndex - 1 + total) % total
    const next = (currentIndex + 1) % total
    return [
      { member: teamMembers[prev], position: 'left', index: prev },
      { member: teamMembers[currentIndex], position: 'center', index: currentIndex },
      { member: teamMembers[next], position: 'right', index: next },
    ]
  }

  return (
    <section ref={sectionRef} className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 py-16 sm:py-24 sm:px-8">
      <div className={`mx-auto max-w-6xl w-full text-center transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">Our Team</p>
        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Meet The <span className="text-[#c8e6d9]">Experts</span>
        </h2>
        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white/80">
          Talented professionals dedicated to delivering exceptional digital solutions.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl">
        {/* MOBILE VIEW: Stacked Cards Effect */}
        <div
          className="md:hidden relative h-[360px] w-full flex items-center justify-center select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {teamMembers.map((member, index) => {
            const offset = (index - currentIndex + teamMembers.length) % teamMembers.length
            if (offset > 2) return null // Render top 3 stacked cards

            return (
              <div
                key={member.name + index}
                onClick={() => offset === 0 && setSelectedMember(member)}
                className="absolute w-[290px] rounded-2xl border border-white/15 bg-[#121414] p-6 text-center shadow-2xl transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.06})`,
                  opacity: 1 - offset * 0.25,
                  zIndex: 30 - offset,
                }}
              >
                <div className="relative mx-auto h-20 w-20 rounded-full border-2 border-[#c8e6d9]/30 bg-gradient-to-br from-[#c8e6d9]/20 to-[#dff3e8]/10 flex items-center justify-center overflow-hidden">
                  <span className="font-brand text-2xl font-black text-[#c8e6d9]">
                    {member.image}
                  </span>
                </div>
                <h3 className="mt-4 font-brand text-lg font-black text-[#c8e6d9]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-white/70">{member.role}</p>
              </div>
            )
          })}
        </div>

        {/* DESKTOP VIEW: 3D Perspective Multi-Card Carousel */}
        <div className="hidden md:flex relative h-[420px] w-full items-center justify-center">
          {getVisibleCards().map(({ member, position, index }) => {
            const isCenter = position === 'center'
            return (
              <div
                key={member.name + index}
                onClick={() => {
                  if (isCenter) setSelectedMember(member)
                  else setCurrentIndex(index)
                }}
                className={`absolute w-[320px] lg:w-[360px] rounded-2xl border bg-[#121414]/90 backdrop-blur-md p-6 text-center shadow-2xl transition-all duration-500 ease-in-out cursor-pointer ${
                  isCenter
                    ? 'z-30 border-[#c8e6d9]/50 scale-105 opacity-100 translate-x-0 shadow-[#c8e6d9]/10'
                    : position === 'left'
                    ? 'z-10 border-white/10 scale-90 opacity-40 -translate-x-[260px] lg:-translate-x-[320px] hover:opacity-70'
                    : 'z-10 border-white/10 scale-90 opacity-40 translate-x-[260px] lg:translate-x-[320px] hover:opacity-70'
                }`}
              >
                <div className="relative mx-auto h-24 w-24 lg:h-28 lg:w-28 rounded-full border-2 border-[#c8e6d9]/30 bg-gradient-to-br from-[#c8e6d9]/20 to-[#dff3e8]/10 flex items-center justify-center overflow-hidden">
                  <span className="font-brand text-3xl lg:text-4xl font-black text-[#c8e6d9]">
                    {member.image}
                  </span>
                </div>
                <h3 className="mt-4 font-brand text-lg lg:text-xl font-black text-[#c8e6d9]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">{member.role}</p>
              </div>
            )
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6 sm:mt-8">
          <button
            type="button"
            onClick={() => changePosition(-1)}
            aria-label="Previous team member"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-[#c8e6d9] hover:bg-[#c8e6d9]/10 hover:text-[#c8e6d9]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

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
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition hover:border-[#c8e6d9] hover:bg-[#c8e6d9]/10 hover:text-[#c8e6d9]"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Render Portal Modal */}
      {isMounted && selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  )
}