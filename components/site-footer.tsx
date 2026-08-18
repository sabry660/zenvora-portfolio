export function SiteFooter() {
  return (
    <footer className="relative z-20 border-t border-white/10 px-8 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 text-sm text-white/75">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <span>© 2026 Zenvora Technologies</span>
          <span className="tracking-wide">Building Smarter Solutions</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4">
          <a href="/#about" className="text-white/60 transition hover:text-white">
            About Us
          </a>
          <a href="/#contact" className="text-white/60 transition hover:text-white">
            Contact Us
          </a>
          <a href="https://www.facebook.com/share/1BmvKAEWEW/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white">
            Facebook
          </a>
          <a href="https://www.instagram.com/zenvoratechnology?igsh=MTV3N3RteWFvcnAxcw==" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white">
            Instagram
          </a>
          <a href="https://tiktok.com/@zenvora600" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white">
            TikTok
          </a>
          <span className="ml-auto text-xs text-white/40">Last updated: 2026-08-18</span>
        </div>
      </div>
    </footer>
  )
}
