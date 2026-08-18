# Zenvora Technologies Official Website

A modern, interactive company website built with Next.js, featuring particle forest animations, dynamic services sections, portfolio showcases, and responsive design across all devices.

## Technologies

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber
- GSAP (Animations)
- Lucide React (Icons)

## Getting Started

### Prerequisites

- Node.js 20.9 or higher
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page with WhatsApp integration
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage with hero and sections
│   ├── privacy/           # Privacy policy page
│   └── terms/             # Terms of service page
├── components/            # React components
│   ├── particle-forest/   # 3D particle system with GLSL shaders
│   ├── hero-code-animation.tsx  # Dynamic code typing animation
│   ├── services-section.tsx     # Services with modal popup
│   ├── portfolio-carousel.tsx    # Project showcase with navigation
│   ├── testimonials-slider.tsx  # Client testimonials
│   ├── tech-stack-marquee.tsx   # Technology icons marquee
│   └── site-footer.tsx         # Footer component
└── public/                # Static assets
    ├── tech stack/        # Technology icons (60+ images)
    └── zenvora.png        # Company logo
```

## Features

### Homepage
- Interactive particle forest entry animation
- Dynamic code typing demonstration
- Services section with detailed sub-services
- Portfolio carousel with project descriptions
- Client testimonials slider
- Technology stack marquee (60+ technologies)
- Responsive navigation with mobile hamburger menu

### Pages
- About: Company information and services overview
- Contact: WhatsApp integration with Arabic messages
- Privacy Policy: Data handling and privacy practices
- Terms of Service: Legal terms and conditions

### Technical Features
- Hash routing for smooth navigation
- Responsive design (mobile, tablet, desktop)
- SEO-optimized metadata
- Fast performance with Next.js optimizations
- Accessibility considerations

## Services

The website showcases 6 main service verticals with 45 total services:

1. Software & System Engineering (11 services)
2. AI & Automation Solutions (9 services)
3. Product Design & Visual Identity (7 services)
4. Digital Growth & Lead Acquisition (6 services)
5. SEO & Search Presence (6 services)
6. Cloud Infrastructure & 24/7 Support (6 services)

## Contact Integration

The contact form integrates with WhatsApp:
- Sends messages in Arabic
- Includes user name, company, and selected service
- Auto-resets form after submission
- Direct link to WhatsApp with pre-filled message

## Verification

```bash
npm run lint          # Run ESLint
npm run typecheck     # Run TypeScript type checking
npm run build         # Production build
```

## Deployment

This project is designed for deployment on Vercel, but can be deployed to any Next.js-compatible platform.

### Environment Variables

No environment variables are required for basic functionality. For production deployment, you may want to add:

- `NEXT_PUBLIC_SITE_URL`: Your production domain
- Analytics IDs (Google Analytics, Vercel Analytics, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images and assets
- Code splitting and lazy loading
- CSS optimization with Tailwind
- Fast initial page load
- Smooth animations with GSAP

## License

Copyright 2026 Zenvora Technologies. All rights reserved.
