import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { Container } from './ui/Container'
import { IconPin, IconPhone, IconMessage, IconInstagram } from './icons'

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'About the practice', to: '/about' },
  { label: 'All services', to: '/services' },
  { label: 'Before & after gallery', to: '/gallery' },
  { label: 'Resources & insights', to: '/resources' },
  { label: 'Meet the team', to: '/about#team' },
  { label: 'Contact & booking', to: '/contact' },
]

const careLinks = ['General dentistry', 'Restorative dentistry', 'Cosmetic dentistry', 'Specialty care']

const hours = [
  'Monday 8am – 7pm',
  'Tuesday 8am – 5pm',
  'Wednesday 8am – 5pm',
  'Thursday 8am – 7pm',
  'Friday 8am – 5pm',
  'Sunday by request',
]

const linkClass = 'text-[15px] leading-[1.5] text-white/62 transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center bg-green-dark px-[22px] pb-6 pt-14 md:px-7 md:pb-[26px] md:pt-16 lg:px-10 lg:pb-[30px] lg:pt-20">
      <Container className="flex flex-col items-start gap-11 md:gap-12 lg:gap-[60px]">
        <div className="flex w-full flex-wrap items-start gap-10 md:gap-12 lg:gap-[72px]">
          <div className="flex min-w-[280px] flex-1 flex-col items-start gap-[22px]">
            <Link to="/">
              <img src={logo} alt="New York General Dentistry" className="w-[102px] rounded-[10px]" />
            </Link>
            <p className="max-w-[360px] text-[15px] leading-[1.6] tracking-[-0.005em] text-white/60">
              A health-first dental practice in Midtown East, where every visit gets an unhurried
              hour and every patient is met without judgment.
            </p>
            <div className="flex w-full flex-col items-start gap-2.5">
              <div className="flex items-start gap-2.5">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <p className="max-w-[300px] text-[15px] leading-[1.5] tracking-[-0.005em] text-white/72">
                  133 East 58th Street, Suite 409, New York, NY 10022
                </p>
              </div>
              <a
                href="tel:+12128380842"
                className="flex items-center gap-2.5 text-[15px] font-medium leading-[1.5] text-white/72 transition-colors hover:text-white"
              >
                <IconPhone className="h-4 w-4 text-white/50" />
                (212) 838-0842
              </a>
              <a
                href="sms:+19292448140"
                className="flex items-center gap-2.5 text-[15px] font-medium leading-[1.5] text-white/72 transition-colors hover:text-white"
              >
                <IconMessage className="h-4 w-4 text-white/50" />
                Text us: (929) 244-8140
              </a>
            </div>
          </div>

          <div className="flex min-w-[150px] flex-col items-start gap-3.5">
            <p className="text-xs font-semibold uppercase leading-none tracking-[0.12em] text-white/42">
              Explore
            </p>
            {exploreLinks.map((link) => (
              <Link key={link.label} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex min-w-[150px] flex-col items-start gap-3.5">
            <p className="text-xs font-semibold uppercase leading-none tracking-[0.12em] text-white/42">
              Care
            </p>
            {careLinks.map((label) => (
              <Link key={label} to="/services" className={linkClass}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex min-w-[190px] flex-col items-start gap-3.5">
            <p className="text-xs font-semibold uppercase leading-none tracking-[0.12em] text-white/42">
              Office hours
            </p>
            <p className="text-[15px] leading-[1.7] text-white/62">
              {hours.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < hours.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-4 border-t border-white/[0.12] pt-[26px] md:justify-between">
          <p className="text-sm leading-[1.5] text-white/45">
            © 2026 New York General Dentistry · Dr. Inna Chern
          </p>
          <a
            href="https://www.instagram.com/newyorkgeneraldentistry/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 text-sm leading-[1.5] text-white/45 transition-colors hover:text-white/70"
          >
            <IconInstagram className="h-[17px] w-[17px]" />
            @newyorkgeneraldentistry
          </a>
        </div>
      </Container>
    </footer>
  )
}
