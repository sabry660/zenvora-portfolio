'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Code, Bot, Palette, TrendingUp, Search, Cloud, X } from 'lucide-react'

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  // Lock body scroll when modal opens
  useEffect(() => {
    if (selectedService) {
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
  }, [selectedService])

  const services = [
    {
      id: 'software',
      icon: Code,
      title: 'Software & System Engineering',
      subtitle: 'Custom digital solutions',
      description: 'Business Websites, Web Applications, E-Commerce Solutions, Custom Business Systems, Interactive Dashboards, CRM Systems, ERP Platforms, Booking & Scheduling Systems, Mobile Applications, SaaS Platforms, API Development & Integration',
      subServices: ['Business Websites', 'Web Applications', 'E-Commerce Solutions', 'Custom Business Systems', 'Interactive Dashboards', 'CRM Systems', 'ERP Platforms', 'Booking & Scheduling Systems', 'Mobile Applications', 'SaaS Platforms', 'API Development & Integration'],
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'AI & Automation Solutions',
      subtitle: 'Intelligent automation',
      description: 'AI Solutions Architecture, Custom AI Assistants, Autonomous AI Agents, Intelligent Chatbots, WhatsApp Business Automation, Business Process Automation, Workflow Automation, API & Webhook Integrations, Intelligent Document & Data Systems',
      subServices: ['AI Solutions Architecture', 'Custom AI Assistants', 'Autonomous AI Agents', 'Intelligent Chatbots', 'WhatsApp Business Automation', 'Business Process Automation', 'Workflow Automation', 'API & Webhook Integrations', 'Intelligent Document & Data Systems'],
    },
    {
      id: 'uiux',
      icon: Palette,
      title: 'Product Design & Visual Identity',
      subtitle: 'Design & branding',
      description: 'UI/UX Product Design, Product Strategy & Prototyping, Brand Identity & Systems, Creative Campaign Design, High-Converting Landing Pages, Motion Design & Web Interactions, Video Editing & Post-Production',
      subServices: ['UI/UX Product Design', 'Product Strategy & Prototyping', 'Brand Identity & Systems', 'Creative Campaign Design', 'High-Converting Landing Pages', 'Motion Design & Web Interactions', 'Video Editing & Post-Production'],
    },
    {
      id: 'marketing',
      icon: TrendingUp,
      title: 'Digital Growth & Lead Acquisition',
      subtitle: 'Digital growth strategies',
      description: 'Digital Marketing Strategy, Social Media Management & Moderation, DM & Community Management, Content Strategy & Copywriting, Media Buying & Paid Advertising, B2B & B2C Lead Generation',
      subServices: ['Digital Marketing Strategy', 'Social Media Management & Moderation', 'DM & Community Management', 'Content Strategy & Copywriting', 'Media Buying & Paid Advertising', 'B2B & B2C Lead Generation'],
    },
    {
      id: 'seo',
      icon: Search,
      title: 'SEO & Search Presence',
      subtitle: 'Search optimization',
      description: 'Search Engine Optimization, Technical SEO & Speed Optimization, Local SEO & Google Map Pack, Google Business Profile Optimization, Reputation & Review Automation, Conversion Rate Optimization',
      subServices: ['Search Engine Optimization', 'Technical SEO & Speed Optimization', 'Local SEO & Google Map Pack', 'Google Business Profile Optimization', 'Reputation & Review Automation', 'Conversion Rate Optimization'],
    },
    {
      id: 'devops',
      icon: Cloud,
      title: 'Cloud Infrastructure & 24/7 Support',
      subtitle: 'Infrastructure & support',
      description: 'High-Performance Cloud Hosting, CI/CD Deployment Pipelines, Website & App Maintenance, Cybersecurity & SSL Hardening, Automated Backup Solutions, 24/7 Uptime Monitoring & SLA Support',
      subServices: ['High-Performance Cloud Hosting', 'CI/CD Deployment Pipelines', 'Website & App Maintenance', 'Cybersecurity & SSL Hardening', 'Automated Backup Solutions', '24/7 Uptime Monitoring & SLA Support'],
    },
  ]

  return (
    <section className="relative z-20 flex min-h-svh flex-col items-center justify-start px-4 pt-16 pb-14 sm:px-8">
      <div className="map-reveal mx-auto max-w-3xl text-center">
        <p className="text-sm tracking-[0.16em] text-[#dff3e8]">Our Services</p>
        <h2 className="mt-3 font-brand text-3xl font-black tracking-tight text-white md:text-5xl">
          Comprehensive <span className="text-[#c8e6d9]">Digital Solutions</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white">
          From concept to deployment, we deliver end-to-end solutions tailored to your business needs.
        </p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative cursor-pointer rounded-2xl border border-white/15 bg-[#121414]/80 p-4 sm:p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/50 hover:bg-[#161c1a]/90"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] sm:text-xs tracking-[0.16em] text-[#e7f6ee]">{service.subtitle}</span>
                <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#c8e6d9] transition group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h3 className="mt-2 sm:mt-3 font-brand text-lg sm:text-xl font-black text-[#c8e6d9]">{service.title}</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-relaxed text-white/90">{service.description}</p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {service.subServices.slice(0, 4).map((sub) => (
                  <span
                    key={sub}
                    className="text-[9px] sm:text-[10px] tracking-[0.1em] text-white/60 border border-white/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                  >
                    {sub}
                  </span>
                ))}
                {service.subServices.length > 4 && (
                  <span className="text-[9px] sm:text-[10px] tracking-[0.1em] text-[#c8e6d9]">
                    +{service.subServices.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#121414]/95 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/60 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
            </button>

            <div className="mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs tracking-[0.16em] text-[#e7f6ee]">{selectedService.subtitle}</span>
            </div>

            <h3 className="font-brand text-xl sm:text-2xl font-black text-[#c8e6d9] mb-2">{selectedService.title}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-white/90 mb-4 sm:mb-6">{selectedService.description}</p>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-[10px] sm:text-xs tracking-[0.12em] text-white/50 uppercase">All Services</p>
              <div className="grid gap-1.5 sm:gap-2 sm:grid-cols-2">
                {selectedService.subServices.map((sub) => (
                  <div
                    key={sub}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 transition hover:border-[#c8e6d9]/30 hover:bg-white/10"
                  >
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#c8e6d9]" strokeWidth={2} />
                    <span className="text-xs sm:text-sm text-white/90">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
