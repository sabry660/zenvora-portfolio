'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function TechStackMarquee() {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const positionRef = useRef(0)
  const dragStartRef = useRef(0)
  const dragPositionRef = useRef(0)
  const lastTimeRef = useRef(0)
  const totalWidthRef = useRef(0)
  const isVisibleRef = useRef(false)

  // Performance measurement (development only)
  const frameMetricsRef = useRef({
    totalFrames: 0,
    droppedFrames: 0,
    startTime: 0,
    lastFrameTime: 0,
  })

  const measurePerformance = useCallback((timestamp: number) => {
    if (process.env.NODE_ENV !== 'development') return
    
    frameMetricsRef.current.totalFrames++
    const frameInterval = timestamp - frameMetricsRef.current.lastFrameTime
    frameMetricsRef.current.lastFrameTime = timestamp
    
    // Count dropped frames (interval > 33.3ms = missing at least one 60fps frame)
    if (frameInterval > 33.3) {
      frameMetricsRef.current.droppedFrames++
    }

    // Log metrics every 5 seconds
    if (frameMetricsRef.current.totalFrames % 300 === 0) {
      const droppedPercentage = (frameMetricsRef.current.droppedFrames / frameMetricsRef.current.totalFrames) * 100
      const avgInterval = (timestamp - frameMetricsRef.current.startTime) / frameMetricsRef.current.totalFrames
      console.log('Tech Stack Performance:', {
        totalFrames: frameMetricsRef.current.totalFrames,
        droppedFrames: frameMetricsRef.current.droppedFrames,
        droppedPercentage: droppedPercentage.toFixed(2) + '%',
        avgInterval: avgInterval.toFixed(2) + 'ms',
        targetInterval: '16.67ms (60fps)',
      })
    }
  }, [])

  const technologies = [
    { name: 'Angular', icon: '/tech stack/angular.png' },
    { name: 'React', icon: '/tech stack/react.png' },
    { name: 'Next.js', icon: '/tech stack/next.png' },
    { name: 'Node.js', icon: '/tech stack/node.png' },
    { name: 'TypeScript', icon: '/tech stack/ts.png' },
    { name: 'Python', icon: '/tech stack/Python.png' },
    { name: 'AWS', icon: '/tech stack/AWS.png' },
    { name: 'Docker', icon: '/tech stack/Docker.png' },
    { name: 'Kubernetes', icon: '/tech stack/Kubernetes.png' },
    { name: 'MongoDB', icon: '/tech stack/MongoDB.png' },
    { name: 'PostgreSQL', icon: '/tech stack/PostgreSQL.png' },
    { name: 'Redis', icon: '/tech stack/Redis.png' },
    { name: 'GraphQL', icon: '/tech stack/graphql.png' },
    { name: 'Tailwind CSS', icon: '/tech stack/Tailwind CSS.png' },
    { name: 'Firebase', icon: '/tech stack/Firebase.png' },
    { name: 'CSS', icon: '/tech stack/css.png' },
    { name: 'HTML', icon: '/tech stack/html.png' },
    { name: 'JavaScript', icon: '/tech stack/js.png' },
    { name: 'Dart', icon: '/tech stack/dart.png' },
    { name: 'Django', icon: '/tech stack/Django.png' },
    { name: 'FastAPI', icon: '/tech stack/fastAPI.png' },
    { name: 'Express', icon: '/tech stack/express.png' },
    { name: 'Flutter', icon: '/tech stack/flutter.png' },
    { name: 'Java', icon: '/tech stack/java.png' },
    { name: 'NestJS', icon: '/tech stack/nest.png' },
    { name: 'Spring Boot', icon: '/tech stack/springboot.png' },
    { name: 'MySQL', icon: '/tech stack/MySQL.png' },
    { name: 'Nginx', icon: '/tech stack/Nginx.png' },
    { name: 'React Native', icon: '/tech stack/reactnative.png' },
    { name: 'PyTorch', icon: '/tech stack/PyTorch.png' },
    { name: 'TensorFlow', icon: '/tech stack/TensorFlow.png' },
    { name: 'Git', icon: '/tech stack/git.png' },
    { name: 'GitHub', icon: '/tech stack/github.png' },
    { name: 'GitLab', icon: '/tech stack/gitlab.png' },
    { name: 'GitHub Actions', icon: '/tech stack/GitHub Actions.png' },
    { name: 'Vercel', icon: '/tech stack/Vercel.png' },
    { name: 'Cloudflare', icon: '/tech stack/Cloudflare.png' },
    { name: 'Google Cloud', icon: '/tech stack/Google Cloud.png' },
    { name: 'Microsoft Azure', icon: '/tech stack/Microsoft Azure.png' },
    { name: 'Supabase', icon: '/tech stack/Supabase.png' },
    { name: 'Figma', icon: '/tech stack/Figma.png' },
    { name: 'Photoshop', icon: '/tech stack/Photoshop.png' },
    { name: 'Illustrator', icon: '/tech stack/Illustrator.png' },
    { name: 'After Effects', icon: '/tech stack/After Effects.png' },
    { name: 'Premiere Pro', icon: '/tech stack/Premiere Pro.png' },
    { name: 'OpenAI', icon: '/tech stack/OpenAI.png' },
    { name: 'Anthropic Claude', icon: '/tech stack/Anthropic Claude.png' },
    { name: 'Google Gemini', icon: '/tech stack/Google Gemini.png' },
    { name: 'Hugging Face', icon: '/tech stack/Hugging Face.png' },
    { name: 'LangChain', icon: '/tech stack/LangChain.png' },
    { name: 'Meta', icon: '/tech stack/Meta.png' },
    { name: 'TikTok', icon: '/tech stack/tiktok.png' },
    { name: 'Google Analytics', icon: '/tech stack/Google Analytics.png' },
    { name: 'Google Search Console', icon: '/tech stack/Google Search Console.png' },
    { name: 'Google Business Profile', icon: '/tech stack/Google Business Profile.png' },
    { name: 'Zapier', icon: '/tech stack/Zapier.png' },
    { name: 'n8n', icon: '/tech stack/n8n.png' },
    { name: 'Make', icon: '/tech stack/make.png' },
    { name: 'Stripe', icon: '/tech stack/stripe.png' },
    { name: 'PayPal', icon: '/tech stack/PayPal.png' },
    { name: 'CI/CD', icon: '/tech stack/CI,CD.png' },
    { name: '.NET', icon: '/tech stack/dotnet.png' },
    { name: '.NET Core', icon: '/tech stack/dotnetcore.png' },
  ]

  // Duplicate the complete dataset to create seamless infinite loop
  // We need at least 2 full sets to create the illusion of endless scrolling
  // All 63 technologies participate in the sequence
  const marqueeItems = [...technologies, ...technologies]

  const speed = 0.040 // pixels per millisecond (25px/second - slower and more premium) 

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp
      frameMetricsRef.current.startTime = timestamp
      frameMetricsRef.current.lastFrameTime = timestamp
    }

    const deltaTime = timestamp - lastTimeRef.current
    lastTimeRef.current = timestamp

    // Performance measurement (development only)
    measurePerformance(timestamp)

    // Only animate if section is visible
    if (!isVisibleRef.current) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    if (!isPaused && !isDragging) {
      positionRef.current -= speed * deltaTime
    }

    // Calculate total width to determine loop point
    if (marqueeRef.current && containerRef.current) {
      const itemWidth = marqueeRef.current.children[0] as HTMLElement
      if (itemWidth) {
        const gap = 32 // approximate gap (gap-8 = 32px)
        const singleItemWidth = itemWidth.offsetWidth + gap
        const totalWidth = singleItemWidth * technologies.length
        
        // Store total width for reference
        totalWidthRef.current = totalWidth

        // Reset position when we've moved past one complete set of all technologies
        // This ensures all 63 items are shown before looping back to the first
        if (positionRef.current <= -totalWidth) {
          positionRef.current += totalWidth
        }
      }
    }

    if (marqueeRef.current) {
      marqueeRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [isPaused, isDragging, technologies.length, measurePerformance])

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      animationRef.current = requestAnimationFrame(animate)
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [animate])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartRef.current = e.clientX
    dragPositionRef.current = positionRef.current
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = e.clientX - dragStartRef.current
    positionRef.current = dragPositionRef.current + diff
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      setIsPaused(false)
    }
  }, [isDragging])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true)
    setIsPaused(true)
    dragStartRef.current = e.touches[0].clientX
    dragPositionRef.current = positionRef.current
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return
    const diff = e.touches[0].clientX - dragStartRef.current
    positionRef.current = dragPositionRef.current + diff
  }, [isDragging])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
  }, [])

  return (
    <section className="relative z-20 py-16 px-4 sm:px-8 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.16em] text-[#dff3e8]">Technologies We Use</p>
          <h2 className="mt-3 font-brand text-2xl font-black tracking-tight text-white md:text-3xl">
            Our <span className="text-[#c8e6d9]">Tech Stack</span>
          </h2>
        </div>

        {/* Infinite Marquee Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={marqueeRef}
            className="flex gap-8 sm:gap-10 md:gap-12 will-change-transform"
            style={{ transform: `translate3d(${positionRef.current}px, 0, 0)` }}
          >
            {marqueeItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 md:gap-3 group transition-transform duration-300"
                style={{
                  transform: 'scale(1)',
                }}
              >
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border border-white/20 bg-white/5 overflow-hidden">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-full w-full object-cover transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/70 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
