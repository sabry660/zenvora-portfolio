'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgePercent,
  Code2,
  MapPinned,
  Megaphone,
  MessagesSquare,
  Palette,
  PanelsTopLeft,
  QrCode,
  Search,
  X,
} from 'lucide-react'

type ServiceItem = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  price: number
}

const oneTimeServices: ServiceItem[] = [
  {
    id: 'system',
    title: 'Custom System',
    description: 'A business system shaped around your workflows and requirements.',
    icon: Code2,
    price: 40000,
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'A focused page built around your offer, audience, and goals.',
    icon: PanelsTopLeft,
    price: 8000,
  },
  {
    id: 'qr-code',
    title: 'QR Code',
    description: 'A QR destination for your menu or social links.',
    icon: QrCode,
    price: 1000,
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile',
    description: 'Initial setup and profile optimization for your business.',
    icon: MapPinned,
    price: 2000,
  },
]

const monthlyServices: ServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Brand-aligned social media visuals based on your content plan and agreed monthly scope.',
    icon: Palette,
    price: 2000,
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'On-page and technical improvements, keyword-focused guidance, and progress tracking.',
    icon: Search,
    price: 800,
  },
  {
    id: 'social-media-ads',
    title: 'Social Media Ads',
    description: 'Campaign setup, audience targeting, and optimization. Ad spend is separate.',
    icon: Megaphone,
    price: 4000,
  },
  {
    id: 'social-media-moderation',
    title: 'Social Media Moderation',
    description: 'Comment and message moderation on agreed platforms and during agreed hours.',
    icon: MessagesSquare,
    price: 3000,
  },
]

const WHATSAPP_NUMBER = '201201289813'

const quoteLink = (service: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I'd like a quote for ${service}.`)}`

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-EG', { maximumFractionDigits: 0 }).format(price)
const discountedPrice = (price: number) => Math.round(price * 0.85)

const fullOneTimeTotal = oneTimeServices.reduce((total, service) => total + service.price, 0)
const fullMonthlyTotal = monthlyServices.reduce((total, service) => total + service.price, 0)
const FIXED_PACKAGE_ONE_TIME = 43350
const FIXED_PACKAGE_MONTHLY = 8330
const FIXED_PACKAGE_FIRST_PAYMENT = FIXED_PACKAGE_ONE_TIME + FIXED_PACKAGE_MONTHLY

function ServiceGroup({
  title,
  cadence,
  services,
}: {
  title: string
  cadence: string
  services: ServiceItem[]
}) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2 sm:mb-5">
        <h3 className="font-brand text-xl font-black text-white sm:text-2xl">{title}</h3>
        <span className="text-xs font-medium text-[#c8e6d9]">{cadence}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <article
              key={service.title}
              className="flex min-h-44 flex-col rounded-xl border border-white/15 bg-[#121414]/75 p-4 transition-colors hover:border-[#c8e6d9]/40 sm:p-5"
            >
              <Icon className="h-5 w-5 text-[#c8e6d9]" strokeWidth={1.7} />
              <h4 className="mt-4 font-brand text-base font-bold text-white">{service.title}</h4>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-white/65">{service.description}</p>
              <p className="mt-3 text-sm font-semibold text-[#dff3e8]">
                EGP {formatPrice(service.price)}
                <span className="ml-1 text-xs font-normal text-white/50">
                  {cadence.toLowerCase().includes('monthly') ? '/ month' : 'one-time'}
                </span>
              </p>
              <a
                href={quoteLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-10 items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs font-semibold text-[#dff3e8] transition hover:text-white"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export function PackagesSection() {
  const [isPackageFormOpen, setIsPackageFormOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const selectedOneTime = oneTimeServices.filter((service) => selectedServices.includes(service.id))
  const selectedMonthly = monthlyServices.filter((service) => selectedServices.includes(service.id))
  const isFullPackageSelected = selectedServices.length === oneTimeServices.length + monthlyServices.length
  const oneTimeTotal = selectedOneTime.reduce((total, service) => total + service.price, 0)
  const monthlyTotal = selectedMonthly.reduce((total, service) => total + service.price, 0)
  const discountedOneTimeTotal = isFullPackageSelected ? FIXED_PACKAGE_ONE_TIME : discountedPrice(oneTimeTotal)
  const discountedMonthlyTotal = isFullPackageSelected ? FIXED_PACKAGE_MONTHLY : discountedPrice(monthlyTotal)
  const regularFirstPayment = oneTimeTotal + monthlyTotal
  const discountedFirstPayment = isFullPackageSelected
    ? FIXED_PACKAGE_FIRST_PAYMENT
    : discountedOneTimeTotal + discountedMonthlyTotal

  useEffect(() => {
    if (!isPackageFormOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsPackageFormOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isPackageFormOpen])

  const toggleService = (serviceId: string) => {
    setSelectedServices((current) => current.includes(serviceId)
      ? current.filter((id) => id !== serviceId)
      : [...current, serviceId])
  }

  const handlePackageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedServices.length === 0) return

    const message = [
      'Hello, I would like to customize the Complete Digital Growth package.',
      '',
      `One-time services: ${selectedOneTime.map((service) => service.title).join(', ') || 'None'}`,
      `One-time subtotal: EGP ${formatPrice(oneTimeTotal)}`,
      `One-time package price after discount: EGP ${formatPrice(discountedOneTimeTotal)}`,
      `Monthly services: ${selectedMonthly.map((service) => service.title).join(', ') || 'None'}`,
      `Monthly subscription before discount: EGP ${formatPrice(monthlyTotal)}`,
      `Monthly subscription after package discount: EGP ${formatPrice(discountedMonthlyTotal)}`,
      `First payment before discount: EGP ${formatPrice(regularFirstPayment)}`,
      `First payment package price: EGP ${formatPrice(discountedFirstPayment)}`,
      '',
      'Please confirm the final scope. Advertising spend is separate.',
    ].join('\n')

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setIsPackageFormOpen(false)
  }

  return (
    <section className="relative z-20 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase text-[#dff3e8] sm:text-sm">Services & Packages</p>
          <h2 className="mt-2 font-brand text-2xl font-black text-white sm:mt-3 sm:text-3xl md:text-5xl">
            Flexible services. <span className="text-[#c8e6d9]">Clear scope.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Choose a service on its own or build one flexible package around your business. We agree on the scope, deliverables, and timeline before work begins.
          </p>
        </header>

        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-14">
          <ServiceGroup title="Build & Launch" cadence="One-time · Scope can be adjusted" services={oneTimeServices} />
          <ServiceGroup title="Ongoing Growth" cadence="Monthly subscription" services={monthlyServices} />
          <p className="-mt-6 text-xs leading-relaxed text-white/45 sm:-mt-10">
            Monthly deliverables, platforms, and coverage hours are agreed together before the subscription starts.
          </p>
        </div>

        <div className="mt-14 sm:mt-20">
          <div className="mb-5 flex items-center gap-3 sm:mb-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c8e6d9]/30 bg-[#c8e6d9]/10 text-[#c8e6d9]">
              <BadgePercent className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-brand text-xl font-black text-white sm:text-2xl">Bundle & save</h3>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">Ask us about package pricing when combining services.</p>
            </div>
          </div>

          <article className="rounded-xl border border-[#c8e6d9]/40 bg-[#17201c]/90 p-5 sm:p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs font-medium text-[#c8e6d9]">One flexible package</span>
                <h4 className="mt-2 font-brand text-xl font-black text-white sm:text-2xl">Complete Digital Growth</h4>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c8e6d9]/25 px-3 py-1.5 text-xs font-semibold text-[#dff3e8]">
                <BadgePercent className="h-4 w-4" /> Save 15% on the package
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
              Combine the one-time setup with the monthly services your business needs. Add or remove items and get a quote based on your final scope.
            </p>

            <div className="mt-6 grid gap-6 border-t border-white/10 pt-5 md:grid-cols-2 md:gap-8">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h5 className="font-brand text-base font-bold text-white">Build & Launch</h5>
                  <span className="text-xs text-[#c8e6d9]">One-time</span>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {oneTimeServices.map((service) => (
                    <li key={service.title} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8e6d9]" />
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h5 className="font-brand text-base font-bold text-white">Ongoing Growth</h5>
                  <span className="text-xs text-[#c8e6d9]">Monthly subscription</span>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {monthlyServices.map((service) => (
                    <li key={service.title} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8e6d9]" />
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-black/15 p-4">
                <p className="text-xs text-white/55">All one-time services</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-sm text-red-400 line-through">EGP {formatPrice(fullOneTimeTotal)}</span>
                  <strong className="font-brand text-xl text-white">EGP {formatPrice(FIXED_PACKAGE_ONE_TIME)}</strong>
                </div>
                <p className="mt-1 text-[11px] text-[#c8e6d9]">After 15% package discount · one-time</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/15 p-4">
                <p className="text-xs text-white/55">All monthly services</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-sm text-red-400 line-through">EGP {formatPrice(fullMonthlyTotal)} / month</span>
                  <strong className="font-brand text-xl text-white">EGP {formatPrice(FIXED_PACKAGE_MONTHLY)} / month</strong>
                </div>
                <p className="mt-1 text-[11px] text-[#c8e6d9]">After 15% package discount · recurring</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#c8e6d9]/10 px-4 py-3">
              <span className="text-sm text-white/75">First payment: setup + first month</span>
              <span className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm text-red-400 line-through">EGP {formatPrice(fullOneTimeTotal + fullMonthlyTotal)}</span>
                <strong className="font-brand text-lg text-[#dff3e8]">EGP {formatPrice(FIXED_PACKAGE_FIRST_PAYMENT)}</strong>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsPackageFormOpen(true)}
              className="mt-7 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#c8e6d9] px-5 text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8] sm:w-auto sm:min-w-56"
            >
              Customize my package <ArrowRight className="h-4 w-4" />
            </button>
          </article>
          <p className="mt-4 text-center text-xs leading-relaxed text-white/45">
            Social media advertising spend is separate from campaign management fees.
          </p>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
          <div className="mb-4 sm:mb-5">
            <p className="text-xs font-medium uppercase text-[#dff3e8]">Before we begin</p>
            <h3 className="mt-2 font-brand text-xl font-black text-white sm:text-2xl">A few quick details</h3>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2">
            {[
              {
                question: 'How does payment work?',
                answer: 'One-time services are charged once, while selected monthly services renew monthly. We confirm payment timing and the final quote before work begins.',
              },
              {
                question: 'Can I change the package scope?',
                answer: 'Yes. You can add or remove services before approval. Any change after work begins is discussed first and may affect the price or timeline.',
              },
              {
                question: 'Is the social media ad budget included?',
                answer: 'No. The advertising budget is paid to the platform separately from our campaign management fee.',
              },
              {
                question: 'What do we agree on before starting?',
                answer: 'We confirm the scope, deliverables, selected platforms, coverage hours where relevant, timeline, and price before work starts.',
              },
            ].map((item) => (
              <details key={item.question} className="group border-b border-white/10 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white/90 marker:hidden">
                  {item.question}
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#c8e6d9] transition-transform group-open:rotate-90" />
                </summary>
                <p className="max-w-2xl pt-3 text-sm leading-relaxed text-white/60">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {isPackageFormOpen && createPortal(
        <div
          className="fixed inset-0 z-[130] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsPackageFormOpen(false)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-form-title"
            className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/15 bg-[#121414] p-4 shadow-2xl sm:p-6 md:p-8"
          >
            <button
              type="button"
              onClick={() => setIsPackageFormOpen(false)}
              aria-label="Close package form"
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#c8e6d9]/50 hover:text-white sm:right-5 sm:top-5"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-semibold uppercase text-[#c8e6d9]">Complete Digital Growth</p>
            <h3 id="package-form-title" className="mt-2 pr-10 font-brand text-xl font-black text-white sm:text-2xl">
              Choose what you need
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
              Select one or more services. One-time setup and monthly subscriptions are totaled separately.
            </p>

            <form className="mt-6 space-y-6" onSubmit={handlePackageSubmit}>
              {[
                { title: 'Build & Launch', cadence: 'One-time', services: oneTimeServices },
                { title: 'Ongoing Growth', cadence: 'Monthly subscription', services: monthlyServices },
              ].map((group) => (
                <fieldset key={group.title}>
                  <legend className="mb-3 flex w-full flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <span className="font-brand text-base font-bold text-white">{group.title}</span>
                    <span className="text-xs text-[#c8e6d9]">{group.cadence}</span>
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {group.services.map((service) => (
                      <label
                        key={service.id}
                        htmlFor={`package-${service.id}`}
                        className="flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition hover:border-[#c8e6d9]/40 has-[:checked]:border-[#c8e6d9]/60 has-[:checked]:bg-[#c8e6d9]/[0.08]"
                      >
                        <input
                          id={`package-${service.id}`}
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => toggleService(service.id)}
                          className="h-4 w-4 shrink-0 accent-[#c8e6d9]"
                        />
                        <span className="min-w-0 flex-1 text-sm font-medium text-white/90">{service.title}</span>
                        <span className="shrink-0 text-right text-xs text-[#dff3e8]">
                          EGP {formatPrice(service.price)}
                          <span className="block text-[10px] text-white/45">
                            {group.cadence === 'One-time' ? 'one-time' : '/ month'}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}

              <div className="rounded-lg border border-white/10 bg-black/20 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-white/60">One-time total</span>
                  <span className="flex flex-wrap items-baseline justify-end gap-2 text-right">
                    <span className="text-xs text-red-400 line-through">EGP {formatPrice(oneTimeTotal)}</span>
                    <strong className="text-white">EGP {formatPrice(discountedOneTimeTotal)}</strong>
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                  <span className="text-white/60">Monthly subscription</span>
                  <span className="flex flex-wrap items-baseline justify-end gap-2 text-right">
                    <span className="text-xs text-red-400 line-through">EGP {formatPrice(monthlyTotal)}</span>
                    <strong className="text-white">EGP {formatPrice(discountedMonthlyTotal)} / month</strong>
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3 text-sm">
                  <span className="text-[#c8e6d9]">First payment after 15% off</span>
                  <span className="flex flex-wrap items-baseline justify-end gap-2 text-right">
                    <span className="text-xs text-red-400 line-through">EGP {formatPrice(regularFirstPayment)}</span>
                    <strong className="text-[#dff3e8]">EGP {formatPrice(discountedFirstPayment)}</strong>
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-white/45">
                Custom system scope can change its estimate. Social media ad spend is separate. The 15% package discount applies to selected services.
              </p>
              <button
                type="submit"
                disabled={selectedServices.length === 0}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#c8e6d9] px-5 text-sm font-semibold text-[#1e1f1f] transition hover:bg-[#dff3e8] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue to WhatsApp <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </section>
        </div>,
        document.body,
      )}
    </section>
  )
}