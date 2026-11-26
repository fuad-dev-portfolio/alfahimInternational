
import Image from "next/image";
import Link from "next/link";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT: ABOUT IMAGE */}
        <div className="about-visual">
          <div className="about-image-wrapper">
            <Image
              src="/about-section.png"
              alt="AL Fahim International overseas recruitment and global career opportunities"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="about-image"
            />
          </div>

          {/* Licence information */}
          <div className="about-licence-card">
            <div className="licence-icon">
              <span>✓</span>
            </div>

            <div className="licence-details">
              <span>Recruiting Licence</span>
              <strong>No. 2597</strong>
            </div>
          </div>
        </div>

        {/* RIGHT: ABOUT CONTENT */}
        <div className="about-content">
          <div className="section-label">
            <span></span>
            ABOUT OUR COMPANY
          </div>

          <h2>
            Building Global Careers,
            <br />
            <span>Creating Better Futures.</span>
          </h2>

          <p className="about-description">
            AL Fahim International is a Bangladesh-based
            recruitment agency focused on connecting
            job seekers with international employment
            opportunities.
          </p>

          <p className="about-description">
            We aim to make the overseas recruitment
            journey more organized and accessible through
            recruitment assistance, documentation support,
            and guidance throughout the process.
          </p>

          {/* Company highlights */}
          <div className="about-highlights">

            <div className="about-highlight">
              <div className="highlight-icon">01</div>

              <div>
                <h4>Overseas Recruitment</h4>
                <p>
                  Connecting candidates with international
                  employment opportunities.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="highlight-icon">02</div>

              <div>
                <h4>Professional Assistance</h4>
                <p>
                  Supporting candidates with recruitment
                  documentation and related processes.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="highlight-icon">03</div>

              <div>
                <h4>Global Opportunities</h4>
                <p>
                  Helping job seekers explore employment
                  opportunities abroad.
                </p>
              </div>
            </div>

          </div>

          <Link href="/about" className="about-button">
            Discover More About Us
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
