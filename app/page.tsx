'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ArrowRight, X, Download, Volume2, VolumeX } from 'lucide-react'
import gsap from 'gsap'
import { ParticleForest } from '../components/particle-forest/particle-forest'
import { SiteFooter } from '../components/site-footer'
import { ServicesSection } from '../components/services-section'
import { PortfolioCarousel } from '../components/portfolio-carousel'
import { TestimonialsSlider } from '../components/testimonials-slider'
import { TeamCarousel } from '../components/team-carousel'
import { TechStackMarquee } from '../components/tech-stack-marquee'
import { HeroCodeAnimation } from '../components/hero-code-animation'
import { IndustriesSection } from '../components/industries-section'
import { ProcessSection } from '../components/process-section'
import { FAQSection } from '../components/faq-section'
import { MetricsSection } from '../components/metrics-section'
import { SecuritySection } from '../components/security-section'
import { usePWAInstall } from '../hooks/use-pwa-install'

const WHATSAPP_NUMBER = '201550193699'

const copy = {
  navHome: 'Home',
  navServices: 'Services',
  navIndustries: 'Industries',
  navPortfolio: 'Portfolio',
  navProcess: 'Process',
  navTestimonials: 'Testimonials',
  navTeam: 'Team',
  navFAQ: 'FAQ',
  navAbout: 'About',
  navContact: 'Contact',
  heroTag: 'Zenvora Technologies',
  heroTitle1: 'Building Smarter',
  heroTitle2: 'Solutions',
  heroDesc1: 'We build smart digital solutions for modern businesses',
  heroDesc2: 'From custom software, websites, and AI-powered systems to design, automation, and digital growth.',
  ctaPrimary: 'View Services',
  ctaSecondary: 'Book a Call',
  clickToEnter: 'Click to enter',
}

export default function Page() {
  const [entered, setEntered] = useState(false)
  const [activeNav, setActiveNav] = useState<'home' | 'services' | 'industries' | 'portfolio' | 'process' | 'testimonials' | 'team' | 'faq' | 'about' | 'contact'>('home')
  const particlesActive = true
  const [hoveredNav, setHoveredNav] = useState<(typeof NAV_KEYS)[number] | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall()
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const NAV_KEYS = ['home', 'services', 'industries', 'portfolio', 'process', 'testimonials', 'team', 'faq', 'about', 'contact'] as const

  const attract = useRef({ value: 0 }) // Constant 0: particles move naturally throughout, no gathering or bursting
  const logoRef = useRef<HTMLSpanElement>(null)
  const hintRef = useRef<HTMLParagraphElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const siteRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const securityRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  // No GSAP displacement needed on mount — centering guaranteed by margin negative values, GSAP only does scale
  useEffect(() => {
    gsap.set(logoRef.current, { transformOrigin: '48.9% 40.4%' })
  }, [])

  // Scroll linkage: readingLine detects current section, activeNav follows
  useEffect(() => {
    let frame = 0
    const updateActiveNav = () => {
      frame = 0
      const readingLine = window.scrollY + window.innerHeight * 0.5
      const sections = [
        { key: 'services' as const, element: servicesRef.current },
        { key: 'industries' as const, element: industriesRef.current },
        { key: 'portfolio' as const, element: portfolioRef.current },
        { key: 'process' as const, element: processRef.current },
        { key: 'testimonials' as const, element: testimonialsRef.current },
        { key: 'team' as const, element: teamRef.current },
        { key: 'faq' as const, element: faqRef.current },
      ]
      let nextActive: 'home' | 'services' | 'industries' | 'portfolio' | 'process' | 'testimonials' | 'team' | 'faq' = 'home'
      for (const section of sections) {
        if (section.element && readingLine >= section.element.offsetTop) {
          nextActive = section.key
        }
      }
      setActiveNav(nextActive)
    }
    const requestActiveNavUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveNav)
    }
    updateActiveNav()
    window.addEventListener('scroll', requestActiveNavUpdate, { passive: true })
    return () => {
      window.removeEventListener('scroll', requestActiveNavUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  // Handle hash routing on mount and hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'services' && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('services')
      } else if (hash === 'industries' && industriesRef.current) {
        industriesRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('industries')
      } else if (hash === 'portfolio' && portfolioRef.current) {
        portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('portfolio')
      } else if (hash === 'process' && processRef.current) {
        processRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('process')
      } else if (hash === 'testimonials' && testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('testimonials')
      } else if (hash === 'team' && teamRef.current) {
        teamRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('team')
      } else if (hash === 'faq' && faqRef.current) {
        faqRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveNav('faq')
      } else if (hash === 'about') {
        window.location.href = '/about'
      } else if (hash === 'contact') {
        window.location.href = '/contact'
      } else if (hash === 'privacy') {
        window.location.href = '/privacy'
      } else if (hash === 'terms') {
        window.location.href = '/terms'
      } else if (hash === '' || hash === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setActiveNav('home')
      }
    }

    // Handle initial hash
    if (window.location.hash === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveNav('home')
    } else {
      handleHash()
    }

    // Handle hash changes
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleEnter = () => {
    if (started.current) return
    started.current = true

    // Play audio
    if (!audioRef.current) {
      audioRef.current = new Audio('/music.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
    }
    
    audioRef.current.play().then(() => {
      setIsPlaying(true)
    }).catch((error) => {
      console.log('Audio play failed:', error)
    })

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

    // Phase 1: Logo expands proportionally from diamond center as axis (no displacement, no drift)
    tl.to(hintRef.current, { opacity: 0, duration: 0.6 }, 0.1)
    tl.to(logoRef.current, {
      scale: 40,
      duration: 3.0,
      ease: 'expo.inOut',
      transformOrigin: '48.9% 40.4%', // Expansion axis = diamond center
    }, 0.2)
    // Early fade out: start becoming transparent during early expansion, complete by 2.0s (logo has touched screen edges)
    tl.to(logoRef.current, { opacity: 0, duration: 1.2, ease: 'power1.inOut' }, 0.8)

    // Dissipation: slight blur to cover large image expansion pixelation (natural integration, not explosion)
    tl.to(logoRef.current, { filter: 'blur(8px)', duration: 0.8, ease: 'power1.inOut' }, 2.3)

    // Phase 2: homepage content emerges — balanced timing: appears when expansion nearly complete, not dragging
    tl.to(siteRef.current, { opacity: 1, duration: 2.0, ease: 'power2.out' }, 1.8)
      .to(siteRef.current, { scale: 1, duration: 2.2, ease: 'power2.out' }, 1.8)
    tl.to(heroRef.current, { pointerEvents: 'none', duration: 0 }, 2.0)
    tl.to(siteRef.current, { pointerEvents: 'auto', duration: 0 }, 3.2)
    // Unlock scrolling after entry animation completes, second screen can then scroll
    tl.call(() => setEntered(true), undefined, 3.4)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false
        setIsMuted(false)
      } else {
        audioRef.current.muted = true
        setIsMuted(true)
      }
    }
  }

  return (
    <main
      className={`relative isolate bg-background text-foreground ${entered ? '' : 'h-svh overflow-hidden'}`}
    >
      {/* Particle space — always present, continuous motion (fixed to viewport, keeps flowing during scroll) */}
      <div className="fixed inset-0">
        <ParticleForest attract={attract} active={particlesActive} />
      </div>

      {/* First screen: entry → homepage (maintain original effect) */}
      <div className="relative h-svh overflow-hidden">
      {/* Entry layer: Logo gradually blends into particles */}
      <section
        ref={heroRef}
        onClick={handleEnter}
        className="absolute inset-0 z-10 cursor-pointer"
      >
        {/* Logo: margin negative values precisely pin element center to viewport center, GSAP only does scale */}
        <span
          ref={logoRef}
          className="zenvora-logo absolute left-1/2 top-1/2 block aspect-square w-[min(56vw,28rem)] text-white"
          style={{
            filter: 'blur(0px)',
            transformOrigin: '48.9% 40.4%',
            marginLeft: 'calc(min(56vw,28rem) / -2)',
            marginTop: 'calc(min(56vw,28rem) / -2)',
          }}
          role="img"
          aria-label="ZENVORA"
        />
        <p
          ref={hintRef}
          className="absolute left-1/2 top-[calc(50%+14rem)] -translate-x-1/2 text-xs font-medium tracking-[0.35em] text-white/80 uppercase"
        >
          {copy.clickToEnter}
        </p>
      </section>

      {/* Homepage layer: emerges from particle space (initially does not intercept clicks) */}
      <section
        ref={siteRef}
        className="pointer-events-none absolute inset-0 z-20 flex flex-col px-8 pt-4 pb-8 opacity-0"
        style={{ scale: '0.965' }}
      >
        {/* Top navigation — large logo + tagline + menu */}
        <nav className="flex w-full items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 pt-0">
          <span className="zenvora-logo h-16 w-16 sm:h-20 sm:w-20 text-white" role="img" aria-label="ZENVORA" />
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Hamburger menu button (mobile only) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 text-white"
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            <div className="hidden items-center gap-3 sm:gap-5 text-white/75 md:flex xl:gap-8">
              {/* Navigation menu: underline indicator (hover follows, active always lit) */}
              <div className="flex items-center gap-5 py-1 xl:gap-8">
                {[copy.navHome, copy.navServices, copy.navIndustries, copy.navPortfolio, copy.navProcess, copy.navTestimonials, copy.navTeam, copy.navFAQ, copy.navAbout, copy.navContact].map((label, i) => {
                  const key = NAV_KEYS[i]
                  const active = activeNav === key
                  const showIndicator = hoveredNav ? hoveredNav === key : active
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-current={active ? 'page' : undefined}
                      onMouseEnter={() => setHoveredNav(key)}
                      onMouseLeave={() => setHoveredNav(null)}
                      onClick={() => {
                        if (key === 'home') {
                          setActiveNav('home')
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                          window.location.hash = ''
                        }
                        if (key === 'services') {
                          setActiveNav('services')
                          servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'services'
                        }
                        if (key === 'industries') {
                          setActiveNav('industries')
                          industriesRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'industries'
                        }
                        if (key === 'portfolio') {
                          setActiveNav('portfolio')
                          portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'portfolio'
                        }
                        if (key === 'process') {
                          setActiveNav('process')
                          processRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'process'
                        }
                        if (key === 'testimonials') {
                          setActiveNav('testimonials')
                          testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'testimonials'
                        }
                        if (key === 'team') {
                          setActiveNav('team')
                          teamRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'team'
                        }
                        if (key === 'faq') {
                          setActiveNav('faq')
                          faqRef.current?.scrollIntoView({ behavior: 'smooth' })
                          window.location.hash = 'faq'
                        }
                        if (key === 'about') {
                          window.location.href = '/#about'
                        }
                        if (key === 'contact') {
                          window.location.href = '/#contact'
                        }
                      }}
                      className={`group relative -mx-1 flex h-8 items-center whitespace-nowrap px-1 text-[11px] sm:text-[13px] font-normal transition-[color,transform] duration-200 focus-visible:text-white focus-visible:outline-none ${
                        active ? 'text-white' : 'text-white/65 hover:-translate-y-px hover:text-white'
                      }`}
                    >
                      {label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-1 bottom-0 h-px origin-left bg-[#c8e6d9] transition-transform duration-300 ease-out ${
                          showIndicator ? 'scale-x-100' : 'scale-x-0 group-focus-visible:scale-x-100'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Install App Button */}
            {isInstallable && !isInstalled && (
              <button
                type="button"
                onClick={install}
                className="hidden md:flex items-center gap-2 rounded-full bg-[#c8e6d9] px-4 py-2 text-xs font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8]"
              >
                <Download className="h-3.5 w-3.5" strokeWidth={2} />
                Install App
              </button>
            )}

            {/* Music Control Button */}
            {isPlaying && (
              <button
                type="button"
                onClick={toggleMute}
                className="hidden md:flex items-center justify-center h-8 w-8 rounded-full border border-white/20 bg-white/5 text-white/60 transition hover:border-[#c8e6d9]/50 hover:bg-white/10 hover:text-[#c8e6d9]"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" strokeWidth={2} />
                ) : (
                  <Volume2 className="h-4 w-4" strokeWidth={2} />
                )}
              </button>
            )}
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white hover:text-[#c8e6d9]"
              aria-label="Close menu"
            >
              <X size={24} className="sm:hidden" />
              <X size={24} className="hidden sm:block" />
            </button>
            <div className="flex flex-col gap-6 sm:gap-8 text-center">
              {NAV_KEYS.map((key) => {
                const label = [copy.navHome, copy.navServices, copy.navIndustries, copy.navPortfolio, copy.navProcess, copy.navTestimonials, copy.navTeam, copy.navFAQ, copy.navAbout, copy.navContact][NAV_KEYS.indexOf(key)]
                const active = activeNav === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      if (key === 'home') {
                        setActiveNav('home')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        window.location.hash = ''
                      }
                      if (key === 'services') {
                        setActiveNav('services')
                        servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'services'
                      }
                      if (key === 'industries') {
                        setActiveNav('industries')
                        industriesRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'industries'
                      }
                      if (key === 'portfolio') {
                        setActiveNav('portfolio')
                        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'portfolio'
                      }
                      if (key === 'process') {
                        setActiveNav('process')
                        processRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'process'
                      }
                      if (key === 'testimonials') {
                        setActiveNav('testimonials')
                        testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'testimonials'
                      }
                      if (key === 'team') {
                        setActiveNav('team')
                        teamRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'team'
                      }
                      if (key === 'faq') {
                        setActiveNav('faq')
                        faqRef.current?.scrollIntoView({ behavior: 'smooth' })
                        window.location.hash = 'faq'
                      }
                      if (key === 'about') {
                        window.location.href = '/#about'
                      }
                      if (key === 'contact') {
                        window.location.href = '/#contact'
                      }
                    }}
                    className={`text-xl sm:text-2xl font-semibold transition-colors ${
                      active ? 'text-[#c8e6d9]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}

              {/* Install App Button for Mobile */}
              {isInstallable && !isInstalled && (
                <button
                  type="button"
                  onClick={install}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#c8e6d9] px-6 py-3 text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8]"
                >
                  <Download className="h-4 w-4" strokeWidth={2} />
                  Install App
                </button>
              )}

              {/* Music Control Button for Mobile */}
              {isPlaying && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/60 transition hover:border-[#c8e6d9]/50 hover:bg-white/10 hover:text-[#c8e6d9]"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" strokeWidth={2} />
                  ) : (
                    <Volume2 className="h-4 w-4" strokeWidth={2} />
                  )}
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>
              )}

              {/* iOS Install Instructions */}
              {isIOS && !isInstalled && (
                <div className="mt-4 px-4 py-3 rounded-lg border border-white/20 bg-white/5">
                  <p className="text-xs text-white/80 text-center">
                    <span className="text-[#c8e6d9] font-semibold">Install ZENVORA</span>
                    <br />
                    Tap Share → Add to Home Screen
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Hero section: left tagline — right code animation */}
        <div className="relative flex flex-1 flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row lg:gap-16">
          {/* Left: brand tagline */}
          <div
            className="w-full max-w-md text-center lg:text-left lg:max-w-lg xl:max-w-xl"
          >
            <p className="text-[0.55rem] sm:text-[0.65rem] tracking-[0.3em] text-white/60 uppercase">{copy.heroTag}</p>
            <h2
              className="mt-2 sm:mt-3 font-black tracking-tight text-white text-[1.5rem] sm:text-[1.85rem] md:text-4xl xl:text-[2.75rem] leading-[1.08]"
            >
              {copy.heroTitle1}
              <br />
              <span className="text-[#c8e6d9]">{copy.heroTitle2}</span>
            </h2>
            <p
              className="mt-3 sm:mt-4 font-medium uppercase tracking-[0.28em] text-[#c8e6d9] text-[0.5rem] sm:text-[0.6rem] leading-relaxed"
            >
              {copy.heroDesc1}
              <br />
              {copy.heroDesc2}
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
              <button
                onClick={() => {
                  servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
                  window.location.hash = 'services'
                }}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#1e1f1f] transition hover:bg-white/90"
              >
                {copy.ctaPrimary}
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.2} />
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hello, I'm interested in your services. Let's discuss how we can work together.")
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
                }}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white/85 transition hover:border-white/60 hover:bg-white/5 hover:text-white"
              >
                {copy.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right: code animation */}
          <div className="hidden md:block">
            <HeroCodeAnimation />
          </div>
        </div>

        {/* Bottom center: scroll down prompt arrow */}
        <button
          onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
          className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-[#c8e6d9]" strokeWidth={2.2} />
        </button>

        {/* Bottom: copyright */}
        <div className="flex items-center justify-end">
          <span className="hidden text-[0.65rem] text-white/40 md:block">
            © 2026 Zenvora Technologies. All rights reserved.
          </span>
        </div>
      </section>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="relative z-20">
        <ServicesSection />
      </div>

      {/* Key Metrics Section */}
      <div ref={metricsRef} className="relative z-20">
        <MetricsSection />
      </div>

      {/* Industries Section */}
      <div ref={industriesRef} className="relative z-20">
        <IndustriesSection />
      </div>

      {/* Portfolio Section */}
      <div ref={portfolioRef} className="relative z-20">
        <PortfolioCarousel />
      </div>

      {/* Our Process Section */}
      <div ref={processRef} className="relative z-20">
        <ProcessSection />
      </div>

      {/* Security & Compliance Section */}
      <div ref={securityRef} className="relative z-20">
        <SecuritySection />
      </div>

      {/* Tech Stack Section */}
      <div className="relative z-20">
        <TechStackMarquee />
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="relative z-20">
        <TestimonialsSlider />
      </div>

      {/* Our Team Section */}
      <div ref={teamRef} className="relative z-20">
        <TeamCarousel />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="relative z-20">
        <FAQSection />
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
