'use client'

import { useEffect, useRef, useState } from 'react'

export function TechStackMarquee() {
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)

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

  // Duplicate technologies for seamless infinite scroll
  const marqueeItems = [...technologies, ...technologies]

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
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            ref={marqueeRef}
            className={`flex gap-8 sm:gap-10 md:gap-12 ${
              isPaused ? '' : 'animate-marquee'
            }`}
          >
            {marqueeItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 md:gap-3 group transition-transform duration-300 hover:scale-125"
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
