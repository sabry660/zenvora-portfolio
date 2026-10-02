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
    name: 'Mohamed Sabry',
    role: 'CEO · Founder · CTO',
    image: '/team/sabry.jpg',
    bio: 'Founder and technical lead focused on turning ideas into scalable digital products. Works across frontend, backend, mobile development, system architecture, DevOps, and technical project direction.',
    skills: [
      'Frontend Development',
      'Backend Development',
      'React',
      'Angular',
      'Next.js',
      'Spring Boot',
      'TypeScript',
      'REST APIs',
      'Mobile Development',
      'Flutter',
      'System Design',
      'Software Architecture',
      'DevOps',
      'Docker',
      'CI/CD',
      'Git',
      'Linux',
      'Cloud',
      'Database Design',
      'Product Development',
      'Technical Leadership',
    ],
  },
  {
    name: 'Ibrahim Wael',
    role: 'Partner',
    image: '/team/ibrahim.jpg',
    bio: 'Focused on management, research, ideas, and understanding markets and opportunities. Contributes to business direction through market analysis, customer insights, strategic thinking, and product research.',
    skills: [
      'Management',
      'Market Research',
      'Business Research',
      'Market Analysis',
      'Competitive Analysis',
      'Product Research',
      'Business Strategy',
      'Trend Analysis',
      'Customer Insights',
      'Strategic Thinking',
      'Idea Development',
      'Opportunity Analysis',
    ],
  },
  {
    name: 'Omar Yaser',
    role: 'Partner',
    image: '/team/omar.jpg',
    bio: 'Focused on management, sales, business development, and turning ideas into practical opportunities. Works closely with clients and the market to understand needs, build relationships, and identify new opportunities.',
    skills: [
      'Management',
      'Sales',
      'Business Development',
      'Client Relations',
      'Customer Discovery',
      'Lead Generation',
      'Negotiation',
      'Communication',
      'Market Research',
      'Opportunity Identification',
      'Idea Development',
      'Relationship Management',
    ],
  },
  {
    name: 'Mohamed Bakr',
    role: 'Full-Stack Angular & .NET Developer',
    image: '/team/bakr.jpg',
    bio: 'Full-stack developer focused on building modern web applications using Angular and .NET technologies, with experience across frontend interfaces, backend services, APIs, and database-driven systems.',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      '.NET',
      'ASP.NET Core',
      'C#',
      'REST APIs',
      'Entity Framework',
      'SQL Server',
      'Frontend Development',
      'Backend Development',
      'Full-Stack Development',
      'Git',
      'Software Architecture',
    ],
  },
  {
    name: 'Hossam Ibrahim',
    role: 'Frontend React Developer',
    image: '/team/hossam.jpg',
    bio: 'Frontend developer focused on building responsive and modern web interfaces with React. Works on reusable components, user-facing experiences, API integration, and frontend performance.',
    skills: [
      'React',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Responsive Design',
      'UI Implementation',
      'REST APIs',
      'Git',
      'Frontend Performance',
    ],
  },
  {
    name: 'Shahd Ahmed',
    role: 'UI/UX Designer',
    image: '/team/shahd.jpg',
    bio: 'UI/UX designer focused on creating clear, intuitive, and visually consistent digital experiences. Works across user research, interface design, user flows, wireframes, prototypes, and design systems.',
    skills: [
      'Figma',
      'UI Design',
      'UX Design',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'User Flows',
      'Usability',
      'Interaction Design',
      'Visual Design',
      'Responsive Design',
    ],
  },
  {
    name: 'Souhaila Abd El Salam',
    role: 'UI/UX Designer',
    image: '/team/souhaila.jpg',
    bio: 'UI/UX designer focused on user-centered product design and translating ideas into intuitive interfaces. Works across visual design, interaction patterns, prototypes, user flows, and responsive experiences.',
    skills: [
      'Figma',
      'UI Design',
      'UX Design',
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Design Systems',
      'Interaction Design',
      'Visual Design',
      'Usability',
      'Responsive Design',
      'User Research',
    ],
  },
  {
    name: 'Manar Salah',
    role: 'Flutter Developer',
    image: 'MS',
    bio: 'Flutter developer focused on cross-platform mobile applications for iOS and Android, with experience in clean architecture, state management, APIs, backend services, maps, payments, offline-first experiences, and on-device AI.',
    skills: [
      'Flutter',
      'Dart',
      'iOS & Android',
      'Cross-Platform Development',
      'Clean Architecture',
      'BLoC',
      'REST APIs',
      'Firebase',
      'Supabase',
      'PostgreSQL',
      'TensorFlow Lite',
      'MediaPipe',
      'On-Device AI & ML',
      'Paymob',
      'Payment Integration',
      'Google Maps',
      'Geofencing',
      'Hive',
      'Offline-First',
      'Caching',
      'CI/CD',
      'Git',
    ],
  },
  {
    name: 'Fares Ayman',
    role: 'AI / ML Engineer',
    image: '/team/fares.jpg',
    bio: 'AI/ML engineer focused on building intelligent applications and data-driven systems using machine learning, generative AI, RAG, and AI agents. Works with data processing, web scraping, LLM applications, and multi-agent systems.',
    skills: [
      'Python',
      'Pandas',
      'BeautifulSoup',
      'Scikit-learn',
      'LangChain',
      'AI Agents',
      'RAG',
      'Multi-Agent Systems',
      'Generative AI',
      'Machine Learning',
      'Data Processing',
      'Web Scraping',
      'LLM Applications',
      'AI Automation',
    ],
  },

  // New Team Member
  {
    name: 'Demiana Saeed',
    role: 'AI / ML Engineer',
    image: '/team/demiana.jpg',
    bio: 'AI/ML engineer focused on building intelligent applications and data-driven systems using machine learning, generative AI, RAG, and AI agents. Works with data processing, web scraping, LLM applications, and multi-agent systems.',
    skills: [
      'Python',
      'Pandas',
      'BeautifulSoup',
      'Scikit-learn',
      'LangChain',
      'AI Agents',
      'RAG',
      'Multi-Agent Systems',
      'Generative AI',
      'Machine Learning',
      'Data Processing',
      'Web Scraping',
      'LLM Applications',
      'AI Automation',
    ],
  },
]

// --- Team Member Modal ---
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
      aria-label={`${member.name} details`}
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

        <p className="text-xs sm:text-sm leading-relaxed text-white/80 mb-6">
          {member.bio}
        </p>

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

  // Client-only mount state prevents hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Lock body scroll while modal is open
  useEffect(() => {
    if (selectedMember) {
      const originalStyle = window.getComputedStyle(document.body).overflow

      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [selectedMember])

  // Section reveal animation
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

  const changePosition = useCallback((direction: number) => {
    setCurrentIndex((prev) => {
      const newIndex = prev + direction

      if (newIndex >= teamMembers.length) return 0
      if (newIndex < 0) return teamMembers.length - 1

      return newIndex
    })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedMember) return

      if (e.key === 'ArrowRight') {
        changePosition(1)
      }

      if (e.key === 'ArrowLeft') {
        changePosition(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMember, changePosition])

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 50) {
      changePosition(1)
    }

    if (diff < -50) {
      changePosition(-1)
    }

    setTouchStart(null)
  }

  // Helper function for desktop cards
  const getVisibleCards = () => {
    const total = teamMembers.length

    const prev = (currentIndex - 1 + total) % total
    const next = (currentIndex + 1) % total

    return [
      {
        member: teamMembers[prev],
        position: 'left',
        index: prev,
      },
      {
        member: teamMembers[currentIndex],
        position: 'center',
        index: currentIndex,
      },
      {
        member: teamMembers[next],
        position: 'right',
        index: next,
      },
    ]
  }

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 py-16 sm:py-24 sm:px-8"
    >
      <div
        className={`mx-auto max-w-6xl w-full text-center transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">
          Our Team
        </p>

        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Meet The <span className="text-[#c8e6d9]">Experts</span>
        </h2>

        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white/80">
          Talented professionals dedicated to delivering exceptional digital
          solutions.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl">
        {/* MOBILE VIEW */}
        <div
          className="md:hidden relative h-[360px] w-full flex items-center justify-center select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {teamMembers.map((member, index) => {
            const offset =
              (index - currentIndex + teamMembers.length) %
              teamMembers.length

            if (offset > 2) return null

            return (
              <div
                key={member.name + index}
                onClick={() =>
                  offset === 0 && setSelectedMember(member)
                }
                className="absolute w-[290px] rounded-2xl border border-white/15 bg-[#121414] p-6 text-center shadow-2xl transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateY(${offset * 14}px) scale(${
                    1 - offset * 0.06
                  })`,
                  opacity: 1 - offset * 0.25,
                  zIndex: 30 - offset,
                }}
              >
                <div className="relative mx-auto h-20 w-20 rounded-full border-2 border-[#c8e6d9]/30 bg-gradient-to-br from-[#c8e6d9]/20 to-[#dff3e8]/10 flex items-center justify-center overflow-hidden">
                  {member.image.startsWith('/') ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-brand text-2xl font-black text-[#c8e6d9]">
                      {member.image}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-brand text-lg font-black text-[#c8e6d9]">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs text-white/70">
                  {member.role}
                </p>

                {/* Click tip */}
                {offset === 0 && (
                  <p className="mt-4 text-[10px] tracking-[0.08em] uppercase text-white/40">
                    Tap the card to view details
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex relative h-[420px] w-full items-center justify-center">
          {getVisibleCards().map(({ member, position, index }) => {
            const isCenter = position === 'center'

            return (
              <div
                key={member.name + index}
                onClick={() => {
                  if (isCenter) {
                    setSelectedMember(member)
                  } else {
                    setCurrentIndex(index)
                  }
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
                  {member.image.startsWith('/') ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-brand text-3xl lg:text-4xl font-black text-[#c8e6d9]">
                      {member.image}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-brand text-lg lg:text-xl font-black text-[#c8e6d9]">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  {member.role}
                </p>

                {/* Click tip */}
                {isCenter && (
                  <p className="mt-4 text-[10px] tracking-[0.08em] uppercase text-white/40">
                    Click the card to view details
                  </p>
                )}
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
            <ChevronLeft
              className="h-5 w-5"
              strokeWidth={2}
            />
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
            <ChevronRight
              className="h-5 w-5"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* Render Portal Modal only after client mount */}
      {isMounted && selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  )
}
