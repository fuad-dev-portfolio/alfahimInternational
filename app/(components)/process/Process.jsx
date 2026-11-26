
import Link from "next/link";
import "./Process.css";

const processSteps = [
  {
    number: "1.",
    title: "Apply Online",
    description: (
      <>
        Submit your application
        <br />
        with ease.
      </>
    ),
    icon: "application",
  },
  {
    number: "2.",
    title: "Verification",
    description: (
      <>
        We verify your documents
        <br />
        and profile.
      </>
    ),
    icon: "verification",
  },
  {
    number: "3.",
    title: "Get Your Visa",
    description: (
      <>
        We handle the rest for
        <br />
        your smooth travel.
      </>
    ),
    icon: "travel",
  },
  {
    number: "4.",
    title: "Start Your Career",
    description: (
      <>
        Begin your new journey
        <br />
        abroad.
      </>
    ),
    icon: "career",
  },
];

function ProcessIcon({ type }) {
  const commonProps = {
    width: 34,
    height: 34,
    viewBox: "0 0 40 40",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "application":
      return (
        <svg {...commonProps}>
          <path d="M10 5h14l7 7v17H10z" />
          <path d="M24 5v7h7" />
          <path d="M15 17h11" />
          <path d="M15 22h7" />
          <path d="M15 27h5" />
          <circle cx="29" cy="29" r="6" fill="white" />
          <path d="m27 29 1.5 1.5 3-3" />
        </svg>
      );

    case "verification":
      return (
        <svg {...commonProps}>
          <circle cx="20" cy="20" r="16" />
          <path d="m12 20 5.5 5.5L29 14" />
        </svg>
      );

    case "travel":
      return (
        <svg {...commonProps}>
          <path
            d="M36 5c-1-1-3-1-5 1L21 16 8 11 4 15l13 6-7 8-5-1-3 3 9 4 4-3-1-5 8-7 6 13 4-4-5-13 10-10c2-2 2-4 1-5z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "career":
      return (
        <svg {...commonProps}>
          <rect x="5" y="13" width="30" height="21" rx="3" />
          <path d="M14 13V8h12v5" />
          <path d="M5 21h30" />
          <path d="M17 21v4h6v-4" />
        </svg>
      );

    default:
      return null;
  }
}

function ProcessArrow() {
  return (
    <div className="process-arrow" aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12h15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m13 5 7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">

        {/* LEFT CONTENT */}
        <div className="process-intro">

          <div className="process-label">
            <span>OUR PROCESS</span>
            <span className="process-label-line" />
          </div>

          <h2>
            Simple &amp; Transparent
            <br />
            Recruitment Process
          </h2>

          <p>
            We make the job application process easy
            and transparent from start to finish.
          </p>

          <Link href="/apply" className="process-button">
            Get Started
            <span>→</span>
          </Link>

        </div>

        {/* RIGHT PROCESS STEPS */}
        <div className="process-steps">

          {processSteps.map((step, index) => (
            <div className="process-step-group" key={step.number}>

              <div className="process-step">

                <div className="process-icon-circle">
                  <ProcessIcon type={step.icon} />
                </div>

                <h3>
                  {step.number} {step.title}
                </h3>

                <p>{step.description}</p>

              </div>

              {index !== processSteps.length - 1 && (
                <ProcessArrow />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
