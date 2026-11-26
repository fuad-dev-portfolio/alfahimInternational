
import Image from "next/image";
import Link from "next/link";
import "./Destination.css";

const destinations = [
  {
    name: "UAE",
    image: "/UAE.png",
    href: "/destinations/uae",
  },
  {
    name: "Qatar",
    image: "/QATAR.png",
    href: "/destinations/qatar",
  },
  {
    name: "Malaysia",
    image: "/MALAYSIA.png",
    href: "/destinations/malaysia",
  },
  {
    name: "Saudi Arabia",
    image: "/SAUDI.png",
    href: "/destinations/saudi-arabia",
  },
];

export default function Destination() {
  return (
    <section
      className="destinations-section"
      id="destinations"
    >
      <div className="destinations-container">

        {/* LEFT CONTENT */}
        <div className="destinations-content">

          <div className="destinations-label">
            <span>JOB DESTINATIONS</span>
            <div className="destinations-label-line" />
          </div>

          <h2>
            Explore Job Opportunities
            <br />
            in <span>Top Destinations</span>
          </h2>

          <p>
            Get the chance to work in some of the most
            sought-after countries with trusted employers
            and excellent career prospects.
          </p>

          <Link
            href="/destinations"
            className="destinations-button"
          >
            View All Countries
            <span>→</span>
          </Link>

        </div>

        {/* RIGHT: IMAGE CARDS */}
        <div className="destinations-cards">

          {destinations.map((destination) => (
            <Link
              href={destination.href}
              className="destination-card"
              key={destination.name}
              aria-label={`Explore job opportunities in ${destination.name}`}
            >
              <Image
                src={destination.image}
                alt={`${destination.name} job destination`}
                fill
                sizes="(max-width: 480px) 42vw, (max-width: 760px) 21vw, 110px"
                className="destination-image"
              />
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};
