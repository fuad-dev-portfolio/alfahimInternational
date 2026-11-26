
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61596742589489",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.4v2h-2.8V10h2.8l-.4 3.1h-2.4v8z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18H5.5V9h2.8zM6.9 7.8a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM18.5 18h-2.8v-4.4c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V18H9.6V9h2.7v1.2h.1a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a9.8 9.8 0 0 0-8.4 14.8L2.3 22l5.4-1.4A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-3.2.8.9-3.1-.2-.3A8 8 0 1 1 12 19.8Zm4.4-6c-.2-.1-1.3-.7-1.5-.8-.2-.1-.2-.4-.1-.5.1s-.6.8-.8.9c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5s-.5-1.2-.7-1.6c-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.5c.1.2 1.8 2.8 4.3 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.2-1s-.2-.2-.4-.3Z"
        />
      </svg>
    ),
  },
];

function ContactIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 16,
    height: 16,
    fill: "currentColor",
    "aria-hidden": true,
  };

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A18.5 18.5 0 0 1 2.7 4.6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .6 3.6 1 1 0 0 1-.2 1z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg {...common}>
        <path d="M2 5h20v14H2zm10 7L3 6v12h18V6z" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/footer_logo.png"
                alt="AL Fahim International"
                width={230}
                height={100}
                className="footer-logo"
              />
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column footer-links">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <ul>
              <li>
                <ContactIcon type="phone" />
                <a href="tel:+8801912317796">
                  +880 1912-317796
                </a>
              </li>

              <li>
                <ContactIcon type="email" />
                <a href="mailto:info@alfahiminternational.com">
                  info@alfahiminternational.com
                </a>
              </li>

              <li>
                <ContactIcon type="location" />
                <span>
                  Gulfesha Plaza (Lift-8), Dhaka-1217
                </span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="footer-column footer-social">
            <h3>Follow Us</h3>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
           AL Fahim International. All rights reserved. &copy;
          </p>

          <p className="footer-bottom-tagline">
            Your Global Career Partner
            <span>|</span>
            Trusted. Professional. Reliable.
          </p>

        </div>
      </div>

    </footer>
  );
};
