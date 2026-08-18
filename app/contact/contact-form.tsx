'use client'

import Link from 'next/link'
import { InfoCard, InfoDl, InfoLink } from '@/components/info-page-shell'
import { SiteFooter } from '@/components/site-footer'
import { useState } from 'react'

const WHATSAPP_NUMBER = '01550193699'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    company: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = encodeURIComponent(
      `Hello, my name is ${formData.name} from ${formData.company}. I'm interested in ${formData.service}. Looking forward to discussing our project.`
    )

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')

    // Reset form after sending
    setFormData({
      name: '',
      service: '',
      company: '',
    })
  }

  return (
    <div id="contact" className="min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        <header className="mt-10">
          <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9]">Zenvora Technologies</p>
          <h1 className="mt-2 font-brand text-3xl font-black tracking-tight text-white md:text-5xl">
            Contact Us
          </h1>
        </header>

        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/85 md:text-base">
      <p>
        Whether you're a startup looking to build your first product, an enterprise needing digital transformation, or a business seeking growth through marketing—we're here to help you succeed.
      </p>

      <div className="mt-8">
        <InfoCard>
          <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9]">Contact Information</p>
          <InfoDl
            rows={[
              { label: 'Name', value: 'Zenvora Technologies' },
              { label: 'Brand', value: 'Zenvora' },
              { label: 'Address', value: 'Alexandria, Egypt' },
              {
                label: 'Email',
                value: <InfoLink href="mailto:zenvoratechnology@gmail.com">zenvoratechnology@gmail.com</InfoLink>,
              },
              {
                label: 'WhatsApp',
                value: <InfoLink href="https://wa.me/201550193699">+20 155 019 3699</InfoLink>,
              },
              {
                label: 'Facebook',
                value: <InfoLink href="https://www.facebook.com/share/1BmvKAEWEW/">Zenvora Technologies</InfoLink>,
              },
              {
                label: 'Instagram',
                value: <InfoLink href="https://www.instagram.com/zenvoratechnology?igsh=MTV3N3RteWFvcnAxcw==">@zenvoratechnology</InfoLink>,
              },
              {
                label: 'TikTok',
                value: <InfoLink href="https://tiktok.com/@zenvora600">@zenvora600</InfoLink>,
              },
            ]}
          />
        </InfoCard>
      </div>

      <div className="mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-[#121414]/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8e6d9] focus:outline-none focus:ring-1 focus:ring-[#c8e6d9]/50"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
              Desired Service *
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-[#121414]/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8e6d9] focus:outline-none focus:ring-1 focus:ring-[#c8e6d9]/50"
            >
              <option value="">Select a service</option>
              <option value="Software & System Engineering">Software & System Engineering</option>
              <option value="AI & Automation Solutions">AI & Automation Solutions</option>
              <option value="Product Design & Visual Identity">Product Design & Visual Identity</option>
              <option value="Digital Growth & Lead Acquisition">Digital Growth & Lead Acquisition</option>
              <option value="SEO & Search Presence">SEO & Search Presence</option>
              <option value="Cloud Infrastructure & 24/7 Support">Cloud Infrastructure & 24/7 Support</option>
            </select>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-[#121414]/50 px-4 py-3 text-white placeholder:text-white/40 focus:border-[#c8e6d9] focus:outline-none focus:ring-1 focus:ring-[#c8e6d9]/50"
              placeholder="Enter your company name"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#c8e6d9] px-8 py-3 text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8]"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>

      <p className="mt-8 text-sm text-white/55">
        Fill out the form above and we'll connect with you via WhatsApp to discuss your project. We typically respond within 1–3 business days.
      </p>
    </div>

      <p className="mt-10 text-xs text-white/40">Last updated: 2026-08-18</p>
    </div>

    <SiteFooter />
  </div>
  )
}
