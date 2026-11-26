
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setDestinationsOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top contact bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-contact">
            <a href="tel:+8801912317796">
              <span>☎</span>
              +880 1912-317796
            </a>

            <a href="mailto:info@alfahiminternational.com">
              <span>✉</span>
              info@alfahiminternational.com
            </a>

            <span className="top-location">
              <span>⌖</span>
              Gulfesha Plaza (Lift-8), Dhaka-1217
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Brand */}
          <Link href="/" className="brand" onClick={closeMenu}>
                <Image
                    src='/logo2.png'
                    alt="AL Fahim International Logo"
                    width={100}
                    height={70}
                    className="brand-logo"
                    priority
                />

            <div className="brand-text">
              <span className="brand-name">AL Fahim</span>
              <span className="brand-subtitle">International</span>
              <span className="brand-tagline">
                Your Global Career Partner
              </span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Navigation links */}
          <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <Link href="/" className="nav-link active" onClick={closeMenu}>
              Home
            </Link>

            <Link href="/about" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>

            {/* Services dropdown */}
            <div
              className={`nav-dropdown ${
                servicesOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                className="nav-link dropdown-trigger"
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setDestinationsOpen(false);
                }}
                aria-expanded={servicesOpen}
              >
                Our Services
                <span className="dropdown-arrow">⌄</span>
              </button>

              <div className="dropdown-menu">
                <Link href="/services/manpower" onClick={closeMenu}>
                  Overseas Manpower
                </Link>

                <Link href="/services/recruitment" onClick={closeMenu}>
                  Recruitment Services
                </Link>

                <Link href="/services/visa" onClick={closeMenu}>
                  Visa Processing
                </Link>

                <Link href="/services/documentation" onClick={closeMenu}>
                  Documentation Support
                </Link>
              </div>
            </div>

            {/* Job destinations dropdown */}
            <div
              className={`nav-dropdown ${
                destinationsOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                className="nav-link dropdown-trigger"
                onClick={() => {
                  setDestinationsOpen(!destinationsOpen);
                  setServicesOpen(false);
                }}
                aria-expanded={destinationsOpen}
              >
                Job Destinations
                <span className="dropdown-arrow">⌄</span>
              </button>

              <div className="dropdown-menu">
                <Link href="/destinations/uae" onClick={closeMenu}>
                  United Arab Emirates
                </Link>

                <Link href="/destinations/qatar" onClick={closeMenu}>
                  Qatar
                </Link>

                <Link href="/destinations/malaysia" onClick={closeMenu}>
                  Malaysia
                </Link>

                <Link href="/destinations/saudi-arabia" onClick={closeMenu}>
                  Saudi Arabia
                </Link>
              </div>
            </div>

            <Link href="/careers" className="nav-link" onClick={closeMenu}>
              Careers
            </Link>

            <Link href="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>

            <Link href="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>

            {/* Apply button */}
            <Link
              href="/apply"
              className="apply-button"
              onClick={closeMenu}
            >
              Apply Now
              <span>→</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
