import Link from 'next/link'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/site-footer'

type InfoPageShellProps = {
  kicker?: string
  title: string
  updatedAt?: string
  children: ReactNode
}

export function InfoPageShell({
  kicker = 'Zenvora Technologies',
  title,
  updatedAt = '2026-08-18',
  children,
}: InfoPageShellProps) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
        <Link
          href="/#home"
          className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        <header className="mt-10">
          <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9]">{kicker}</p>
          <h1 className="mt-2 font-brand text-3xl font-black tracking-tight text-white md:text-5xl">
            {title}
          </h1>
        </header>

        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-white/85 md:text-base">
          {children}
        </div>

        <p className="mt-10 text-xs text-white/40">Last updated: {updatedAt}</p>
      </div>

      <SiteFooter />
    </div>
  )
}

export function InfoHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="pt-2 font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9]">
      {children}
    </h2>
  )
}

export function InfoLink({ href, children, target, rel }: { href: string; children: ReactNode; target?: string; rel?: string }) {
  const isEmail = href.startsWith('mailto:')
  
  if (isEmail) {
    return (
      <a
        href={href}
        className="text-[#e7f6ee] underline decoration-white/30 underline-offset-4 transition hover:text-white"
      >
        {children}
      </a>
    )
  }
  
  return (
    <a
      href={href}
      target={target || '_blank'}
      rel={rel || 'noopener noreferrer'}
      className="text-[#e7f6ee] underline decoration-white/30 underline-offset-4 transition hover:text-white"
    >
      {children}
    </a>
  )
}

export function InfoCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-black/30 px-5 py-5">
      {children}
    </div>
  )
}

export function InfoDl({ rows }: { rows: Array<{ label: string; value: ReactNode }> }) {
  return (
    <dl className="mt-4 space-y-2.5 text-[15px]">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
          <dt className="w-24 shrink-0 text-white/60">{row.label}</dt>
          <dd className="font-medium text-white">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
