
import Image from "next/image";
import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background image */}
      <div className="hero-background">
        <Image
          src="/header-hero.png"
          alt="AL Fahim International global recruitment opportunities"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-container">
        <div className="hero-content">

          <div className="hero-badge">
            <span className="badge-line"></span>
            YOUR TRUSTED GLOBAL RECRUITMENT PARTNER
          </div>

          <h1>
            Connecting Talent
            <br />
            With <span>Global Opportunities</span>
          </h1>

          <p className="hero-description">
            Building brighter futures through international
            recruitment. We connect skilled professionals
            with trusted employers across the world.
          </p>

          <div className="hero-buttons">
            <Link href="/careers" className="hero-btn-primary">
              Explore Opportunities
              <span>→</span>
            </Link>

            <Link href="/contact" className="hero-btn-secondary">
              Contact Us
            </Link>
          </div>

          {/* Trust information */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-number">2597</span>
              <span className="trust-label">Recruiting Licence No.</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <span className="trust-number">Global</span>
              <span className="trust-label">Career Opportunities</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom decorative shape */}
      <div className="hero-bottom-shape"></div>
    </section>
  );
};
