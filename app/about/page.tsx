import type { Metadata } from 'next'
import { InfoCard, InfoDl, InfoLink, InfoPageShell } from '@/components/info-page-shell'

export const metadata: Metadata = {
  title: 'About Us | Zenvora Technologies',
  description:
    'Zenvora Technologies builds smart digital solutions for modern businesses — from custom software, websites, and AI-powered systems to design, automation, and digital growth.',
}

export default function AboutPage() {
  return (
    <div id="about">
      <InfoPageShell title="About Us" updatedAt="2026-08-18">
      <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9]">ABOUT ZENVORA</p>
      
      <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9] mt-6">Who We Are</p>
      <p className="font-bold text-white">
        Technology Built Around Your Business.
      </p>
      
      <p>
        ZENVORA is a technology and digital solutions company focused on building, automating, and accelerating modern businesses.
      </p>
      <p>
        We combine software engineering, artificial intelligence, product design, digital growth, SEO, and cloud infrastructure to create technology that solves real business problems and drives measurable growth.
      </p>
      <p>
        From high-performance websites and custom business systems to AI-powered automation, SaaS platforms, digital experiences, and scalable cloud infrastructure — we turn ideas and business challenges into reliable digital products.
      </p>
      <p>
        We don't believe in one-size-fits-all solutions.
      </p>
      <p>
        Every business has different goals, workflows, customers, and challenges. That's why we build technology around the business — not the other way around.
      </p>

      <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9] mt-6 font-bold">OUR MISSION</p>
      <p className="font-bold text-white">
        Make Technology Work For Business.
      </p>
      <p>
        Our mission is to make advanced technology practical, accessible, and valuable for businesses of every stage.
      </p>
      <p>
        We build digital products and intelligent systems that simplify operations, improve customer experiences, automate repetitive work, and create new opportunities for growth.
      </p>
      <p>
        By combining engineering, creativity, and AI, we help businesses move from ideas to real-world solutions faster and with greater confidence.
      </p>

      <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9] mt-6 font-bold">OUR VISION</p>
      <p className="font-bold text-white">
        Build What Comes Next.
      </p>
      <p>
        We envision a future where businesses don't simply use technology — they are built around it.
      </p>
      <p>
        ZENVORA aims to become a technology partner for ambitious companies looking to build smarter products, automate their operations, create better digital experiences, and scale without being limited by outdated systems.
      </p>
      <p>
        Our long-term vision is to build an ecosystem where software, AI, design, automation, and digital growth work together as one intelligent business infrastructure.
      </p>

      <p className="font-mono text-[11px] tracking-[0.24em] text-[#c8e6d9] mt-6 font-bold">OUR STORY</p>
      <p className="font-bold text-white">
        From Building Projects to Building a Technology Company.
      </p>
      <p>
        ZENVORA started with a simple idea:
      </p>
      <p>
        Technology should solve problems, not create more of them.
      </p>
      <p>
        What began with building digital products, websites, and experimental interfaces evolved into a broader vision — creating a technology company capable of helping businesses across the entire digital journey.
      </p>
      <p>
        As projects became more complex, so did the capabilities behind them.
      </p>
      <p>
        Software development expanded into system engineering.
      </p>
      <p>
        Design evolved into complete product experiences.
      </p>
      <p>
        Automation evolved into AI-powered workflows.
      </p>
      <p>
        Digital marketing evolved into measurable growth systems.
      </p>
      <p>
        Infrastructure evolved into scalable, secure technology ecosystems.
      </p>
      <p>
        Today, ZENVORA brings these capabilities together under one company.
      </p>
      <p>
        We are building ZENVORA around a simple principle:
      </p>
      <p>
        Build intelligently. Design intentionally. Automate relentlessly. Grow continuously.
      </p>
      <p>
        And this is only the beginning.
      </p>
    </InfoPageShell>
    </div>
  )
}
