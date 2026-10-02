'use client'

import { useEffect, useRef, useState } from 'react'

const metrics = [
  {
    value: 99.5,
    suffix: '%',
    label: 'Uptime & System Reliability',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Active Users Served',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Enterprise Systems Delivered',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client Retention & Support',
  },
]

export function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [counters, setCounters] = useState<number[]>(
    () => metrics.map(() => 0)
  )

  // Client-only mount.
  // This guarantees that the first server render and the first
  // client render contain exactly the same values.
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Observe section visibility
  useEffect(() => {
    if (!isMounted) return

    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [isMounted])

  // Counter animation
  useEffect(() => {
    if (!isMounted || !isVisible) return

    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCounters(
        metrics.map((metric) => metric.value * easedProgress)
      )

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setCounters(metrics.map((metric) => metric.value))
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [isMounted, isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative z-20 flex min-h-svh flex-col items-center justify-center px-4 py-12 sm:py-20 sm:px-8"
    >
      <div
        className={`map-reveal mx-auto max-w-6xl w-full text-center ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-xs sm:text-sm tracking-[0.16em] text-[#dff3e8]">
          IMPACT
        </p>

        <h2 className="mt-2 sm:mt-3 font-brand text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white">
          Key <span className="text-[#c8e6d9]">Metrics</span>
        </h2>

        <p className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[13px] sm:text-[15px] leading-relaxed text-white">
          Measurable results that demonstrate our commitment to excellence and reliability.
        </p>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full max-w-6xl">
        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group relative rounded-2xl border border-white/15 bg-[#121414]/80 backdrop-blur-sm p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#c8e6d9]/50 hover:bg-[#161c1a]/90"
            >
              <div className="font-brand text-3xl sm:text-4xl md:text-5xl font-black text-[#c8e6d9] mb-2">
                {Math.floor(counters[index])}
                {metric.suffix}
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
