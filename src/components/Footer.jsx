import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-stack-lg px-container-padding-mobile md:px-container-padding-desktop flex flex-col md:flex-row justify-between items-center border-t border-outline-variant mt-12">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <span className="font-headline-md text-headline-md font-bold text-primary block mb-2">
          FarmDirect
        </span>
        <span className="font-body-md text-body-md text-on-surface-variant">
          © 2026 FarmDirect. Empowering local growers.
        </span>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
          Terms of Service
        </a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">
          Farmer FAQ
        </a>
        <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/about">
          About
        </Link>
      </div>
    </footer>
  )
}