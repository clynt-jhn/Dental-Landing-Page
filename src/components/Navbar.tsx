import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { IconMenu, IconPhone, IconArrowUpRight } from './icons'
import { Button } from './ui/Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const isHome = location.pathname === '/'
  const showBg = !isHome || scrolled || open

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="pointer-events-none absolute inset-0 border-b border-white/[0.14] bg-[#1c2a24]/[0.85] backdrop-blur-xl transition-opacity duration-300"
        style={{ opacity: showBg ? 1 : 0 }}
      />
      <nav className="relative mx-auto flex h-[92px] w-full max-w-[1200px] items-center px-[22px] md:h-[93px] md:px-7 lg:h-[100px] lg:px-10">
        <div className="flex w-full max-w-[1120px] items-center justify-between">
          <Link to="/" className="block w-[102px] shrink-0" aria-label="New York General Dentistry — home">
            <img src={logo} alt="New York General Dentistry" className="w-full" style={{ aspectRatio: 1.2774 }} />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-[15px] font-medium tracking-[-0.01em] transition-colors hover:text-peach ${
                  location.pathname === link.to ? 'text-peach' : 'text-white/[0.92]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-[18px] lg:flex">
            <a
              href="tel:+12128380842"
              className="flex items-center gap-2 text-[15px] font-medium tracking-[-0.01em] text-white/[0.92] transition-colors hover:text-peach"
            >
              <IconPhone className="h-[15px] w-[15px]" />
              (212) 838-0842
            </a>
            <Button to="/contact" variant="primary">
              Book a visit
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          >
            <IconMenu className="h-[19px] w-[19px]" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden border-b border-white/[0.14] bg-[#1c2a24]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-[26px] pt-1.5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 text-[15px] font-medium text-white/90 last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3.5 flex flex-col items-start gap-4">
                <a
                  href="tel:+12128380842"
                  className="flex items-center gap-2 text-[15px] font-medium text-white/90"
                >
                  <IconPhone className="h-4 w-4" />
                  (212) 838-0842
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-3.5 rounded-full bg-apricot py-[7px] pl-6 pr-2 text-[15px] font-medium text-ink"
                >
                  Book a visit
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white">
                    <IconArrowUpRight className="h-4 w-4 text-green" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
